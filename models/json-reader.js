const fs = require('fs');
const path = require('path');

// Read the variables data from a json file
exports.getVariablesJson = function(callback) {
    fs.readFile(path.join(__dirname, 'variables.json'), 'utf8', (err, data) => {
        if (err) throw err;
        callback(JSON.parse(data).variables);
    });
};