# proyect-api-rest-jwt-mongodb

This is a proyect to learn more about **jwt**, **mongodb** and **nodeJS**

# used comand
npm init -i
I installed the all dependence to the project
- **express** is a backend web application framework for node js. -> [Express Framework](https://expressjs.com/)
- **bcryptjs** is a password-hashing function for passwords from users. -> [bcrypts package](https://www.npmjs.com/package/bcryptjs)
- **cors** is a node s package for providing connect/express middleware that can be used to enable CORS with various options. -> [Cors package](https://expressjs.com/en/resources/middleware/cors.html)
- **dotenv** is a module that loads environment variables from a .env file into process.env. -> [Doteng package](https://www.npmjs.com/package/dotenv)
- **jsonwebtoken** is a module that can be used to authorization users  [Jsonwebtoken package](https://www.npmjs.com/package/jsonwebtoken), [Doc jasonwebtoken](https://jwt.io/)
- **mongoose** Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.
 -> [Mongoose package](https://www.npmjs.com/package/mongoose)
 - **morgan** Mongoose is a http request logger middleware for node.js
 -> [Morgan package](https://www.npmjs.com/package/morgan)
- **helmet** Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
 -> [Helmet package](https://www.npmjs.com/package/helmet)

```sh
 npm i express bcryptjs cors dotenv jsonwebtoken mongoose morgan helmet
 ```

 In my package json, i can add in the line where says scripts, where i can start the project
 
```sh
"scripts": {
    "dev" :"node src/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }, 
 
```

**Babel** is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.
 -> [Babel JS](https://babeljs.io/)
- **Nodemon** node application when file changes in the directory are detected.
 -> [Nodemon package](https://www.npmjs.com/package/nodemon)

 **-D** is to add the packages to my development packages because I don't need them in production

 ```sh
  npm i @babel/core @babel/cli @babel/node @babel/preset-env nodemon -D
   
```