# project-api-rest-jwt-mongodb

This is a project to learn more about **jwt**, **mongodb** and **nodeJS**

# used comands
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
    "build": "babel src --out-dir build", -> this is to convert the code into compatible versions of javascript
    "dev": "nodemon src/index.js --exec babel-node", -> This is for development environment
    "start": "node build/index.js" -> this is for production environment
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

## Another interesting libraries or technologies
* [Express validator](https://express-validator.github.io/docs/)
* [Joi](https://joi.dev/api/?v=17.4.0)
* [Heroku](https://www.heroku.com/)
* [Docker](https://www.docker.com/)
* [MondoDB Atlas](https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_footprint_row_search_core_brand_atlas_desktop&utm_term=mongodb%20atlas&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624584&gclid=CjwKCAjwmv-DBhAMEiwA7xYrdy4gWaP_BWHcASpr-zjAkNYOioOxw24IBxcIp48GJENAtk7Z4psxrxoCa1EQAvD_BwE)
