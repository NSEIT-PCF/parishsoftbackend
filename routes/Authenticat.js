const express = require('express');
const app = express();
const axios = require('axios');
const authenticateRouter = express.Router();
let PostBody

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
    axios.post(extServerOptionsPost.host, {
        ApiKey: PostBody.ApiKey
    }).then(function (response) {
        res.send(response.data);
    }).catch(function (error) {
        res.send(error);
    });
})

module.exports = authenticateRouter;
