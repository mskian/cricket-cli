# Cricket CLI 🏏

![Score Test](https://github.com/mskian/cricketscore/workflows/Score%20Test/badge.svg)  

Get Live Cricket Score Update on Terminal and CMD.  

<p>
<img alt="Cricket Score" src="https://raw.githubusercontent.com/mskian/cricketscore/main/screeshot.gif">
</p>

## Requirements

- Node.js 12X LTS or 14X LTS 📦

## Installation

- Install via GIT or Download the Repo

```sh
git clone https://github.com/mskian/cricketscore.git
```

```sh
cd cricketscore
npm install
```

- Create NPM Link for CLI

```sh
npm link
```

(OR)

- Insall via `NPM`

```sh
npm install -g cricket-cli
```

```sh
$ livescore -h

Usage: livescore [options]

Options:
  -V, --version            output the version number
  -l, --live               Get Current Live Cricket Match Score
  -m, --match <Match URL>  Enter Cricbuzz Live Match URL and Fetch the Live Score data from Cricbuzz
  -h, --help               display help for command
 ```

- Get Live Match Score

```sh
livescore -l
```

- Get Other Live Match Details

```sh
livescore -m <Live Match URL from Cricbuzz>
```

## API Library 🗃

- Free Cricket API - <https://github.com/mskian/cricket-api>

## Disclaimer 🗃

- This is not an Offical CLI tool from Cricbuzz - it's an Unofficial CLI tool and API
- This is for Education Purpose only - use at your own risk on Production Site

All Credits Goes to <https://www.cricbuzz.com/>

## My other Projects 🤓

| # | Project Name | Description |
|---|:------|-------------|
| 01 | [Live Cricket Score Static Site](https://github.com/mskian/livescore) | A Simple Scrape Method - Fetch the Live Cricket Score from `espncricinfo.com` using Nodejs and Cheerio.js |
| 02 | [IPL Special](https://github.com/mskian/iplscore) | Cricket API for Get the Live IPL Cricket Score |
| 03 | [Live IPL Score Update on Telegram](https://github.com/mskian/score-update) | Get Live IPL cricket Score on Telegram  |
| 04 | [Live Cricket Score Wordpress Plugin (JS Version)](https://github.com/mskian/hello-cricket) | Get Live Cricket Score on Wordpress site call API using Javascript Fetch API |
| 05 | [Live Cricket Score Wordpress Plugin (Wp Remote URL)](https://github.com/mskian/san-cricket) | Get Live Cricket Score on Wordpress site call API using Wordpress HTTP Remote URL |  
| 06 | [PWA Web App](https://github.com/mskian/vue-cricket) | Real-time Live Cricket Score Web app + PWA Built using Nuxt.js |  

## LICENSE 📕

MIT
