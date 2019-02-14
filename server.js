const express = require('express');
const bodyParser = require('body-parser');
const organizationRouter  = require('./routes/OrganizationRoutes');
const familiesRouter  = require('./routes/Families');
const membersRouter  = require('./routes/Members');
const ministrySchedulerRouter  = require('./routes/MinistryScheduler');
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
app.use('/Members', membersRouter);
app.use('/MinistryScheduler', ministrySchedulerRouter);

