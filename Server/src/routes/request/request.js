const express = require('express');
const router = express.Router();
const {
    getAllRequests,
    getRequestById,
    createRequest,
    updateRequest,
    deleteRequest
} = require('../../actions/request/request');

router.get('/', (req, res) => {
    try {
        const requests = getAllRequests();
        res.json(requests);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve requests.' });
    }
});

router.get('/:id', (req, res) => {
    try {
        const request = getRequestById(parseInt(req.params.id, 10));
        if (request) {
            res.json(request);
        } else {
            res.status(404).json({ error: 'Request not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve request.' });
    }
});

router.post('/', (req, res) => {
    try {
        const newRequest = createRequest(req.body);
        res.status(201).json(newRequest);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create request.' });
    }
});

router.put('/:id', (req, res) => {
    try {
        const updatedRequest = updateRequest(parseInt(req.params.id, 10), req.body);
        if (updatedRequest) {
            res.json(updatedRequest);
        } else {
            res.status(404).json({ error: 'Request not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update request.' });
    }
});

router.delete('/:id', (req, res) => {
    try {
        const success = deleteRequest(parseInt(req.params.id, 10));
        if (success) {
            res.status(204).end();
        } else {
            res.status(404).json({ error: 'Request not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete request.' });
    }
});

module.exports = router;
