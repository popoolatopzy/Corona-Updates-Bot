var Twit = require('twit');
var config = require('./config');
var randCountry = require('./rand_country');
var getter = require('./fetch_result');
const express = require('express');

var T = new Twit(config.config);
var countryToGet = randCountry.randCountry();

const app = express();
const port = 3000;

// For random country
app.get('/rand_country', (req, res) => {
    var get = getter.getDetails(randCountry.randCountry(), function (data) {
    if (data == "Country not found") {
        console.log(countryToGet + ' not found');
    } else {
        var country = data.country;
        var cases = data.cases;
        var todayCase = data.todayCases;
        var todayDeath = data.todayDeaths;
        var totalDeaths = data.deaths;
        var active = data.active;
        var recovered = data.recovered;
        var critical = data.critical;
        var template = `Corona Virus Stats For ${country} \n Today Cases: ${todayCase} \n Total Recovered: ${recovered} \n Critical Case: ${critical} \n ======= \n Total Deaths: ${totalDeaths} \n Total Active: ${active} \n Total Reported Cases: ${cases}`

        console.log('country exist, loading...');
        T.post('statuses/update', { status: template }, function (err, data, response) {
            if (err) {
                res.send('Error occured');
            }else{
                res.send('Tweeted Successfully');
            }
        });
    }
});
});
// For Nigeria
app.get('/nigeria', (req, res) => {
    var get = getter.getDetails('Nigeria', function (data) {
    if (data == "Country not found") {
        console.log('Country not found');
    } else {
        var country = data.country;
        var cases = data.cases;
        var todayCase = data.todayCases;
        var todayDeath = data.todayDeaths;
        var totalDeaths = data.deaths;
        var active = data.active;
        var recovered = data.recovered;
        var critical = data.critical;
        var template = `Corona Virus Stats For ${country} \n Today Cases: ${todayCase} \n Total Recovered: ${recovered} \n Critical Case: ${critical} \n ======= \n Total Deaths: ${totalDeaths} \n Total Active: ${active} \n Total Reported Cases: ${cases}`

        console.log('country exist, loading...');
        T.post('statuses/update', { status: template }, function (err, data, response) {
            if (err) {
                res.send('Error occured');
            }else{
                res.send('Tweeted Successfully');
            }
        });
    }
});
});

app.listen(port, () => console.log(`App listening on port ${port}!`));