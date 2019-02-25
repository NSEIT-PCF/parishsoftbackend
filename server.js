const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const organizationRouter  = require('./routes/OrganizationRoutes');
const familiesRouter  = require('./routes/Families');
const membersRouter  = require('./routes/Members');
const ministrySchedulerRouter  = require('./routes/MinistryScheduler');
const rdRouter  = require('./routes/ReligiousEducation');
const authenticateToken  = require('./routes/Authenticat');
const cors = require('cors');
const app = express();
app.use(bodyParser.urlencoded({ extend: false }));
app.use(bodyParser.json());

// For include the css and js files in the express, first,
// we will create a static directory called public, and in that,
// we will put our CSS and JS files
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.options('*', cors());
app.use(cors());
app.listen(3000, () => {
    console.log('App Successful listening on port 3000');
});
app.get('/', function (req, res) {
    res.sendFile(path.join('public', 'index.html'));
});

app.use('/Token/Authenticate', authenticateToken);
app.use('/Organizations', organizationRouter);
app.use('/Families', familiesRouter);
app.get('/Families/:familyDUID', (req, res) => {
    console.log(' req.params.memberDUID------------------', req.params.familyDUID);
    axios({
        method: 'get',
        url: 'http://parishsoftcustomerapi.azurewebsites.net/api/Families/' + req.params.familyDUID,
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

app.get('/Families/:familyDUID/members', (req, res) => {
    console.log(' req.params.memberDUID------------------/Families/:familyDUID/members ', req.params.familyDUID);
    axios({
        method: 'get',
        url: ' http://parishsoftcustomerapi.azurewebsites.net/api/Families/'+ req.params.familyDUID + '/members',
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

app.get('/Families/groups', (req, res) => {
    axios({
        method: 'get',
        url: ' http://parishsoftcustomerapi.azurewebsites.net/api/Families/groups',
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
app.get('/Families/workgroups', (req, res) => {
    axios({
        method: 'get',
        url: ' http://parishsoftcustomerapi.azurewebsites.net/api/Families/groups',
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
app.use('/Members', membersRouter);
app.get('/Members/:memberDUID', (req, res) => {
    console.log(' req.params.memberDUID------------------', req.params.memberDUID);
    axios({
        method: 'get',
        url: 'http://parishsoftcustomerapi.azurewebsites.net/api/Members/' + req.params.memberDUID,
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

app.get('/Members/:memberDUID/workgroups', (req, res) => {
    console.log(' req.params.memberDUID------------------', req.params.memberDUID);
    axios({
        method: 'get',
        url: 'http://parishsoftcustomerapi.azurewebsites.net/api/Members/' + req.params.memberDUID + '/workgroups',
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
app.use('/MinistryScheduler', ministrySchedulerRouter);
app.use('/ReligiousEducation/Classes', rdRouter);
app.use('ReligiousEducation/MemberAttendanceSummary', rdRouter);


