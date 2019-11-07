const express = require('express');
const app = express();
const axios = require('axios');
const authenticateRouter = express.Router();
let PostBody;
var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');

let extServerOptionsPost;
authenticateRouter.route('/').post(function (req, res) {
    PostBody = {
        ApiKey: req.body.apiKey
    };
    extServerOptionsPost = {
        host: 'http://parishsoftcustomerapi.azurewebsites.net/api/Token/Authenticate',
        path: '/api/Token/Authenticate',
        method: 'POST',
        body: PostBody,
        headers: {
            'Content-Type': 'application/json'
        },
    };
    localStorage.setItem('ApiKey', PostBody.ApiKey);
    axios.post(extServerOptionsPost.host, {
        ApiKey: PostBody.ApiKey
    }).then(function (response) {
        res.send(response.data);
        localStorage.setItem('bearer', response.data);
        console.log(localStorage.getItem('ApiKey'), localStorage.getItem('bearer'));

    }).catch(function (error) {
        res.send(error);
    });
})

module.exports = authenticateRouter;
