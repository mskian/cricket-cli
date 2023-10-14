# Cricket CLI 🏏

![Score Test](https://github.com/mskian/cricket-cli/workflows/Score%20Test/badge.svg)  

Get Live Cricket Score Update on Terminal and CMD.  

<p>
<img alt="Cricket Score" src="https://raw.githubusercontent.com/mskian/cricket-cli/main/screeshot.gif">
</p>

## Requirements

- Node.js 16X LTS or 18x LTS 📦

## Installation

- Install via GIT or Download the Repo

```sh
git clone https://github.com/mskian/cricket-cli.git
```

```sh
cd cricket-cli
npm install
```

- Create NPM Link for CLI

```sh
sudo npm link
```

- unlink CLI

```sh
npm rm --global cricket-cli
```

(OR)

- Insall via `NPM`

```sh
npm install -g cricket-cli
```

- install via `npx`

```sh
npx cricket-cli
npx cricket-cli -l
```

- Test it

```sh
$ livescore -h

Usage: livescore [options]

Options:
  -V, --version            output the version number
  -l, --live               Get Current Live Cricket Match Score
  -m, --match <Match ID>   Enter Cricbuzz Live Match ID and Fetch the Live Score data from Cricbuzz Live Score Data
  -h, --help               display help for command
 ```

- Get Current Live Match Score

```sh
livescore -l
```

- Get Other Live Match Details

```sh
livescore -m <Live Match ID from Cricbuzz>
```

## API Library 🗃

- Free Cricket API - <https://github.com/sanwebinfo/cricket-api-nodejs>

## Disclaimer 🗃

- This is not an Offical CLI tool from Cricbuzz - it's an Unofficial CLI tool and API
- This is for Education Purpose only - use at your own risk on Production Site

All Credits Goes to <https://www.cricbuzz.com/>  

## LICENSE 📕

MIT
