const express = require('express');
const router = express.Router();
const {
    getAllObjects,
    getObjectById,
    createObject,
    updateObject,
    deleteObject
} = require('../../actions/object/object');

router.get('/', (req, res) => {
    try {
        const objects = getAllObjects();
        res.json(objects);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve objects.' });
    }
});

router.get('/:id', (req, res) => {
    try {
        const object = getObjectById(parseInt(req.params.id, 10));
        if (object) {
            res.json(object);
        } else {
            res.status(404).json({ error: 'Object not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve object.' });
    }
});

router.post('/', (req, res) => {
    try {
        const newObject = createObject(req.body);
        res.status(201).json(newObject);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create object.' });
    }
});

router.put('/:id', (req, res) => {
    try {
        const updatedObject = updateObject(parseInt(req.params.id, 10), req.body);
        if (updatedObject) {
            res.json(updatedObject);
        } else {
            res.status(404).json({ error: 'Object not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update object.' });
    }
});

router.delete('/:id', (req, res) => {
    try {
        const success = deleteObject(parseInt(req.params.id, 10));
        if (success) {
            res.status(204).end();
        } else {
            res.status(404).json({ error: 'Object not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete object.' });
    }
});

module.exports = router;
