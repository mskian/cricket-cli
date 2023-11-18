import axios from 'axios';
import chalk  from 'chalk';
import dns  from 'dns';
import logUpdate from 'log-update';
import { program } from 'commander';
import ora from 'ora';
import updateNotifier from 'update-notifier';
import { readFileSync } from "fs";
const packageJSON = JSON.parse(readFileSync(new URL("./package.json", import.meta.url)));

updateNotifier({pkg: packageJSON}).notify();

const LIVE_MATCH = "https://cricket-api.vercel.app/live";

program.version(packageJSON.version)
    .option('-l, --live', 'Get Current Live Cricket Match Score')
    .option('-m, --match <Match ID>', 'Enter Cricbuzz Live Match ID and Fetch the Live Score data from Cricbuzz Live Score Data')
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
                if (response.data.current !== 'Data Not Found') {
                    spinner.stop();
                    console.log(`\n${pre}`, response.data.title);
                    console.log(`\n${pre}`, response.data.update);
                    console.log(`\n${pre}`, 'Live Score:', response.data.current);
                    console.log(`\n${pre}`, 'Run Rate:', response.data.runrate);
                    console.log(`\n${pre}`, 'Current Batsman:', response.data.batsman, 'Runs', response.data.batsmanrun, response.data.ballsfaced, 'balls');
                    console.log(`\n${pre}`, 'Current Bowler:', response.data.bowler, response.data.bowlerover, 'over', response.data.bowlerruns, 'run and', response.data.bowlerwickets, 'wicket');
                    console.log('\n');
                } else {
                    spinner.stop();
                    console.log(`\n${pre}`, response.data.title);
                    console.log(`\n${pre}`, response.data.update);
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
                url: 'https://cricket-api.vercel.app/score?url=https://m.cricbuzz.com/live-cricket-scores/' + url
            })
            .then(function(response) {
                if (response.data.current !== 'Data Not Found') {
                    spinner.stop();
                    console.log(`\n${pre}`, response.data.title);
                    console.log(`\n${pre}`, response.data.update);
                    console.log(`\n${pre}`, 'Live Score:', response.data.current);
                    console.log(`\n${pre}`, 'Run Rate:', response.data.runrate);
                    console.log(`\n${pre}`, 'Current Batsman:', response.data.batsman, 'Runs', response.data.batsmanrun, response.data.ballsfaced, 'balls');
                    console.log(`\n${pre}`, 'Current Bowler:', response.data.bowler, response.data.bowlerover, 'over', response.data.bowlerruns, 'run and', response.data.bowlerwickets, 'wicket');
                    console.log('\n');
                } else {
                    spinner.stop();
                    console.log(`\n${pre}`, response.data.title);
                    console.log(`\n${pre}`, response.data.update);
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