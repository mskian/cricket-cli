#!/usr/bin/env node

const axios = require('axios');
const chalk = require('chalk');
const dns = require('dns');
const logUpdate = require('log-update');
const program = require('commander');
const ora = require('ora');
const updateNotifier = require('update-notifier');

const pkg = require('./package.json');
updateNotifier({
    pkg
}).notify();
const LIVE_MATCH = "https://cricket-api.vercel.app/live.php";

program.version(pkg.version)
    .option('-l, --live', 'Get Current Live Cricket Match Score')
    .option('-m, --match <Match URL>', 'Enter Cricbuzz Live Match URL and Fetch the Live Score data from Cricbuzz')
program.parse(process.argv);

const pre = chalk.cyan.bold('›');
const pos = chalk.red.bold('›');
const spinner = ora();

const checkConnection = () => {
    dns.lookup('cricket-api.vercel.app', err => {
        if (err) {
            logUpdate(`\n${pos} Please check your internet connection!\n`);
            process.exit(1);
        } else {
            logUpdate();
            spinner.text = 'Fetching Score Data...';
            spinner.start();
        }
    });
};

function GetScore() {
    const MATCH_URL = LIVE_MATCH;
    if (MATCH_URL) {
        checkConnection();
        var url = MATCH_URL;
        axios({
                method: 'GET',
                url: url
            })
            .then(function(response) {
                if (response.data.livescore.current !== 'Data Not Found') {
                    spinner.stop();
                    console.log(`\n${pre}`, response.data.livescore.title);
                    console.log(`\n${pre}`, response.data.livescore.update);
                    console.log(`\n${pre}`, 'Live Score:', response.data.livescore.current);
                    console.log(`\n${pre}`, 'Run Rate:', response.data.livescore.runrate);
                    console.log(`\n${pre}`, 'Current Batsman:', response.data.livescore.batsman, 'Runs', response.data.livescore.batsmanrun, response.data.livescore.ballsfaced, 'balls');
                    console.log(`\n${pre}`, 'Current Bowler:', response.data.livescore.bowler, response.data.livescore.bowlerover, 'over', response.data.livescore.bowlerruns, 'run and', response.data.livescore.bowlerwickets, 'wicket');
                    console.log('\n');
                } else {
                    spinner.stop();
                    console.log(`\n${pos}`, 'Sorry Currently No Live Match');
                    console.log('\n');
                }
            })
            .catch(function(error) {
                spinner.stop();
                if (!error.response) {
                    console.log('API URL Error or No Data');
                } else {
                    spinner.stop();
                    console.log('Something Went Wrong - Enter the Correct API URL');
                }
            });
    } else {
        spinner.stop();
        console.log('Config Error: API URL is Missing');
    }
}

function ScoreData(currentmatch) {
    const MATCH_URL = currentmatch;
    if (MATCH_URL) {
        checkConnection();
        var url = MATCH_URL;
        axios({
                method: 'GET',
                url: 'https://cricket-api.vercel.app/cri.php?url=' + url
            })
            .then(function(response) {
                if (response.data.livescore.current !== 'Data Not Found') {
                    spinner.stop();
                    console.log(`\n${pre}`, response.data.livescore.title);
                    console.log(`\n${pre}`, response.data.livescore.update);
                    console.log(`\n${pre}`, 'Live Score:', response.data.livescore.current);
                    console.log(`\n${pre}`, 'Run Rate:', response.data.livescore.runrate);
                    console.log(`\n${pre}`, 'Current Batsman:', response.data.livescore.batsman, 'Runs', response.data.livescore.batsmanrun, response.data.livescore.ballsfaced, 'balls');
                    console.log(`\n${pre}`, 'Current Bowler:', response.data.livescore.bowler, response.data.livescore.bowlerover, 'over', response.data.livescore.bowlerruns, 'run and', response.data.livescore.bowlerwickets, 'wicket');
                    console.log('\n');
                } else {
                    spinner.stop();
                    console.log(`\n${pos}`, 'Sorry Currently No Live Match');
                    console.log('\n');
                }
            })
            .catch(function(error) {
                if (!error.response) {
                    spinner.stop();
                    console.log('API URL Error or No Data');
                } else {
                    spinner.stop();
                    console.log('Something Went Wrong - Enter the Correct API URL');
                }
            });
    } else {
        spinner.stop();
        console.log('Config Error: API URL is Missing');
    }
}

const options = program.opts();

if (options.live) {
    GetScore();
} else if (options.match) {
    const live_data = options.match;
    ScoreData(live_data);
} else {
    console.log('Please Enter a Valid Option For More Info Run: livescore -h');
}