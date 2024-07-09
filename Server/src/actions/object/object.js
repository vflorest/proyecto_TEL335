const fs = require('fs');
const path = require('path');


const dataFilePath = path.join(__dirname, '../../data/objects.json');



function readData() {
    const data = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(data);
}

function writeData(data) {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
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
  // Find the maximum ID and add 1 for the new ID
  const newId = objects.length ? Math.max(...objects.map(obj => obj.id)) + 1 : 1;
  // Create the new object with the id first
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
    deleteObject
};
