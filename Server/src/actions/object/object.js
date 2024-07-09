const fs = require('fs');
const path = require('path');
const multer = require('multer');

const dataFilePath = path.join(__dirname, '../../data/objects.json');
const uploadDirectory = path.join(__dirname, '../../data/objectImages');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, uploadDirectory);
    },
    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage }).single('image');

async function uploadImage(req, res) {
    upload(req, res, function(err) {
        if (err instanceof multer.MulterError) {
            res.status(500).json({ error: err   .message });
        } else if (err) {
            res.status(500).json({ error: 'Unknown.' });
        } else if (!req.file) {
            res.status(400).json({ error: 'No archivo' });
        } else {
            res.status(200).json({ message: 'Se subio', filename: req.file.filename });
        }
    });
}

function readData() {
    try {
        const data = fs.readFileSync(dataFilePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error("Failed to read data:", error);
        throw new Error('Failed to read data');
    }
}

function writeData(data) {
    try {
        fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
        console.error("Failed to write data:", error);
        throw new Error('Failed to write data');
    }
}

function getAllObjects() {
    return readData();
}

function getObjectById(id) {
    const objects = readData();
    return objects.find(obj => obj.id === id);
}

function createObject(newObject) {
    const objects = readData();
    const newId = objects.length ? Math.max(...objects.map(obj => obj.id)) + 1 : 1;
    const createdObject = { id: newId, ...newObject };
    objects.push(createdObject);
    writeData(objects);
    return createdObject;
  }

function updateObject(id, updatedObject) {
    const objects = readData();
    const index = objects.findIndex(obj => obj.id === id);
    if (index !== -1) {
        objects[index] = { id, ...updatedObject };
        writeData(objects);
        return objects[index];
    }
    return null;
}

function deleteObject(id) {
    const objects = readData();
    const newObjects = objects.filter(obj => obj.id !== id);
    if (newObjects.length !== objects.length) {
        writeData(newObjects);
        return true;
    }
    return false;
}



module.exports = {
    getAllObjects,
    getObjectById,
    createObject, 
    updateObject,
    deleteObject,
    uploadImage
};
