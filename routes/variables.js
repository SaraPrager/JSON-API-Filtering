const _ = require('underscore');
const jsonreader = require('../models/json-reader');
const serializer = require('../utils/json-api-serializer');

module.exports = (server) => {
  // Handle /variables GET request
  server.get('/variables', (req, res, next) => {
    const filters = req.query.filter;
    jsonreader.getVariablesJson((data) => {
      if (filters) {
        data = this.filter(data, filters);
      }     
      res.json(serializer.serialize('variable', data));
      return next();
    });
  });
};

// Filter the given data
exports.filter = function(data, filters) {
  for(let filter in filters) {
    const filterValues = filters[filter].split(',');
    data = _.filter(data, (dataObj) => { return this.filterByValues(dataObj[filter], filterValues); });
  }
  return data;
};

// Check wether the actual value is one of the filter values
exports.filterByValues = function(actualValue, filterValues) {
  for (let i = 0; i < filterValues.length; i++) {
    if (actualValue == filterValues[i].trim()) {
      return true;
    }
  }
  return false;
}

// The filtering format:
// ?filter[key1]=val1&filter[key2]=val2,val3
// e.g:
// /variables?filter[editable]=0&filter[displaylog]=0&filter[displaymeter]=0&filter[groupid]=8&filter[deviceid]=1&filter[key]=872415365,872415370