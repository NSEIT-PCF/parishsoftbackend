const express = require('express');
const axios = require('axios');
const app = express();
var extServerOptionsPost;
const ministrySchedulerRouter = express.Router();

ministrySchedulerRouter.route('/MinistryScheduler/MinistryRecords').get(function (req, res) {
    console.log('http://parishsoftcustomerapi.azurewebsites.net/api/Members=------======================');
    axios({
        method: 'get',
        url: 'http://parishsoftcustomerapi.azurewebsites.net/api/MinistryScheduler/MinistryRecords/897637',

        headers: {
            'Content-Type': 'application/json',
            'Authorization': req.headers.authorization
        },
        responseType: 'application/json'
    }).then(function (response) {
        res.send(response.data);
    }).catch(function (error) {
        //console.log('error-------------', error);
        res.send(error);
    });
})
module.exports = ministrySchedulerRouter;
