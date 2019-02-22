const express = require('express');
const url = require('url');
const querystring = require('querystring');
const axios = require('axios');
const app = express();
var extServerOptionsPost;
const familyRouter = express.Router();

familyRouter.route('/').get(function (req, res) {
    let url =  'http://parishsoftcustomerapi.azurewebsites.net/api/Families/' + '?limit='+ req.query.limit + '&offset=' + req.query.offset;
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
    if (req.query.quicksearch) {
      url = url + '&quicksearch=' + req.query.quicksearch;
    } else {
      url = url;
    }
    if (req.query.familyduid) {
      url = url + '&familyduid=' + req.query.familyduid;
    } else {
      url = url;
    }
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
})
module.exports = familyRouter;

