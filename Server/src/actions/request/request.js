const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '../../data/requests.json');

function readData() {
    const data = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(data);
}

function writeData(data) {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
}

function getAllRequests() {
    return readData();
}

function getRequestById(id) {
    const requests = readData();
    return requests.find(req => req.id === id);
}

function createRequest(newRequest) {
    const requests = readData();
    const newId = requests.length ? Math.max(...requests.map(req => req.id)) + 1 : 1;
    const createdRequest = { id: newId, ...newRequest };
    requests.push(createdRequest);
    writeData(requests);
    return createdRequest;
}

function updateRequest(id, updatedRequest) {
    const requests = readData();
    const index = requests.findIndex(req => req.id === id);
    if (index !== -1) {
        requests[index] = { id, ...updatedRequest };
        writeData(requests);
        return requests[index];
    }
    return null;
}

function deleteRequest(id) {
    const requests = readData();
    const newRequests = requests.filter(req => req.id !== id);
    if (newRequests.length !== requests.length) {
        writeData(newRequests);
        return true;
    }
    return false;
}

module.exports = {
    getAllRequests,
    getRequestById,
    createRequest,
    updateRequest,
    deleteRequest
};
