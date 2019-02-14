const express = require('express');
const axios = require('axios');
const app = express();
var extServerOptionsPost;
const organizationRouter = express.Router();

organizationRouter.route('/').get(function (req, res) {
    axios({
        method: 'get',
        url: 'http://parishsoftcustomerapi.azurewebsites.net/api/Organizations',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': req.headers.authorization
        },
        responseType: 'application/json'
    }).then(function (response) {
        res.send(response.data);
    }).catch(function (error) {
        res.send(error);
    });
})
module.exports = organizationRouter;

