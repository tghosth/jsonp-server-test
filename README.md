# jsonp-server-test

Originally based on [this example](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/) but it has got a lot more complex since then.

## Express V4 version.

The root folder contains a version based on Express version 4 and includes 3 APIs supporting JSONP. To receive a JSONP response, you need to provide a special URL parameter to API call whose name will need to be "cb" and the value will be the name of the function which is returned.

There are 3 APIs
- `/dee` - This API will return data if a cookie called "blah" with any value has been set and a cb parameter has been passed. If the cookie has not been set, it will return an error message and helpfully set the cookie for next time :)
- `/foo` - This API will always return data regardless of what is sent to it.
- `/bar` - This API will return data if the basic authentication check has passed. Otherwise it will return a 401 error.

From inside this folder (assuming you have a node.js environment set up) you can just run the following commands to start the API server running locally on port 3000:

`npm install`

`node server.js`

## Express V2 version.

Inside the ExpressV2 folder is a version based on Express version 2 where it was easier to accidentally allow JSONP. To receive a JSONP response, you need to provide a special URL parameter to API call whose name will need to be "callback" and the value will be the name of the function which is returned.

There is only one API `/foo` which will return a JSONP response without further authentication as long as the "callback" parameter is passed.

From inside this folder (assuming you have a node.js environment set up) you can just run the following commands to start the API server running locally on port 3000:

`npm install`

`node server.2x.js`
