const fs = require('fs-extra');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ silent: true }); // Load process.env with contents of .env file.
const BABEL_RC = JSON.parse(
    fs.readFileSync(path.resolve(process.cwd(), '.babelrc'), 'utf-8')
);

const babel = require('babel-register')(BABEL_RC);
const config = require(path.resolve(process.cwd(), 'config'));
const Express = require('express');
const http = require('http');
const Index = require('./templates/Index').default;
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Sequelize = require('sequelize');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');

const express = new Express();
const server = new http.Server(express);
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

const sequelize = new Sequelize('uber', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorsAliases: false
});

const User = sequelize.define('user', {
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  email: Sequelize.STRING,
});
    

try {
    fs.emptyDirSync(config.DIRECTORIES.DIST);
    const webpackCompiler = webpack(webpackConfig);
    webpackCompiler.run((error, stats) => {
        if (error) {
            console.error(error);
            throw error;
        } else {
            console.info(stats.toString({
                chunks: false,
                colors: true,
                children: false,
            }));
            runServer();
        }
    });
} catch (error) {
    console.error(error);
    throw error;
}

express.use('/dist', Express.static(config.DIRECTORIES.DIST));

express.get("/api", function (req, res){
    res.json({ status: true});
});

express.post("/api/user/add", jsonParser, function (req, res){
    console.log(req.body);
    sequelize.sync()
      .then(() => User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
      }))
      .then(newuser => {
        console.log(newuser.toJSON());
      });
    res.json({ status: true});
});

express.get('*', (req, res, next) => {
    const props = {};
    const index = React.createElement(Index, props);
    const html = ReactDOMServer.renderToString(index).replace("HEADER_PROPERTY","<meta property='og:type'   content='website' /><title>Sign up</title>");
    res.send(`<!doctype html>${ html }`);
});

function runServer() {
    server.listen(process.env.PORT, (error) => {
        if (error) console.error(error);
        console.info(`SERVER LISTENING ON http://localhost:${process.env.PORT}`);
    });
}