const express = require('express');
const axios = require('axios');
const app = express();
var extServerOptionsPost;
const membersRouter = express.Router();
membersRouter.route('/').get(function (req, res) {
    console.log('req.headers.authorization------------------', req.headers.authorization, req.params.memberDUID);
    let url =  'http://parishsoftcustomerapi.azurewebsites.net/api/Members/';
    if(req.query.limit) {
        url = url  + '?limit='+ req.query.limit + '&offset=' + req.query.offset;
    }
    if (req.query.firstname) {
        url = url + '&firstname=' + req.query.firstname;
    } else {
        url = url;
    }
    if (req.query.lastname) {
        url = url + '&lastname=' + req.query.lastname;
    } else {
        url = url;
    }
    if (req.query.email) {
        url = url + '&email=' + req.query.email;
    } else {
        url = url;
    }
    if (req.query.homephone) {
        url = url + '&homephone=' + req.query.homephone;
    } else {
        url = url;
    }
    if (req.query.cellphone) {
        url = url + '&cellphone=' + req.query.cellphone;
    } else {
        url = url;
    }
    if (req.query.workphone) {
        url = url + '&workphone=' + req.query.workphone;
    } else {
        url = url;
    }
    if (req.query.quicksearch) {
        url = url + '&quicksearch=' + req.query.quicksearch;
    } else {
        url = url;
    }
    console.log('url--------------------', url);
    axios({
        method: 'get',
        url: url,
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
});
module.exports = membersRouter;
