const jsonapiserializer = require('jsonapi-serializer').Serializer;

exports.serialize = function(type, json) {
    let attributes = [];
    // Choose which json object to use to extract the attributes
    let attributesJson = json;
    if (json.length > 1) {
        attributesJson = json[0];
    }
    // Extract all attributes to include
    for(let key in attributesJson) attributes.push(key);    
    return new jsonapiserializer(type, { attributes }).serialize(json);
};