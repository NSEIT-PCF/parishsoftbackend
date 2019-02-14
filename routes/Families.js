const express = require('express');
const axios = require('axios');
const app = express();
var extServerOptionsPost;
const familyRouter = express.Router();

familyRouter.route('/').get(function (req, res) {
    console.log()
    axios({
        method: 'get',
        url: 'http://parishsoftcustomerapi.azurewebsites.net/api/Families',
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
module.exports = familyRouter;

