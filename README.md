# json-api-filtering-poc
This is a simple PoC demonstrates how to use NodeJs on Restify framework to support json-api-compliant filtering.


## Running the project
```console
$ cd json-api-filtering-poc/
$ npm install
$ npm start
```


## Usage
Navigate to http://localhost:3000/variables and see all the variables data (fake, taken from a json file)  
Then filter the results by any key;  
The filtering format is:  
?filter[key1]=val1&filter[key2]=val2,val3 etc...  
e.g:  
http://localhost:3000/variables?filter[editable]=0&filter[displaylog]=0&filter[displaymeter]=0&filter[groupid]=8&filter[deviceid]=1&filter[key]=872415365,872415370