const express = require('express');
const axios = require('axios');
const app = express();
var extServerOptionsPost;
const rdRouter = express.Router();
rdRouter.route('/:OrganizationID').get(function (req, res) {
    console.log(req.params.OrganizationID);
    console.log("==============================");
    axios({
        method: 'get',
        url: 'http://parishsoftcustomerapi.azurewebsites.net/api/ReligiousEducation/Classes/' + req.params.OrganizationID,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': req.headers.authorization
        }
    }).then(function (response) {
        res.send(response.data);
    }).catch(function (error) {
        console.log(error);
        res.send(error);
    });
});
rdRouter.route('/:MemberDUID').get(function (req, res) {
    console.log(req.params.MemberDUID);
    console.log("====================req.params.MemberDUID==========");
    axios({
        method: 'get',
        url: 'http://parishsoftcustomerapi.azurewebsites.net/api/ReligiousEducation/MemberAttendanceSummary/' + req.params.MemberDUID,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': req.headers.authorization
        }
    }).then(function (response) {
        res.send(response.data);
    }).catch(function (error) {
        console.log(error);
        res.send(error);
    });
});
module.exports = rdRouter;
