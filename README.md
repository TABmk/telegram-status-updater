# telegram-status-updater

[<img src="https://img.shields.io/github/license/TABmk/telegram-status-updater">](https://github.com/TABmk/chatgpt-wrapper/blob/master/LICENSE)
[<img src="https://img.shields.io/github/issues/TABmk/telegram-status-updater">](https://github.com/TABmk/telegram-status-updater/issues?q=is%3Aopen+is%3Aissue)

<img src="https://img.shields.io/badge/made_with-NodeJS-green">
<img src="https://img.shields.io/badge/made_with-GramJS-yellow">
<img src="https://img.shields.io/badge/made_with-Docker-blue">


The status changes automatically every 15 minutes by default, from a [predefined list](https://github.com/TABmk/telegram-status-updater/blob/master/emoji.js).

You can get emoji IDs `entities[].custom_emoji_id` list of telegram message.

Call `getUpdates` for your bot or simply send emoji to `@JsonDumpBot`.

Emoji can be edited in [emoji.js](https://github.com/TABmk/telegram-status-updater/blob/master/emoji.js).

### Session

First you need to get session string:

- Open `session.js`
- If you don't have app, create it [here](https://my.telegram.org/apps)
- fill `apiId` and `apiHash` (stringSession must be empty)
- Run `node session.js`
- log in your account
- copy output

### Configure

Now you can fill variables in `docker-compose.yml`

|variable|description|
|---|---|
|apiId|Create new app [here](https://my.telegram.org/apps) or get an already created|
|apiHash|Same as apiId|
|stringSession|Read [#Session](#session)|
|cron|[node-cron](https://www.npmjs.com/package/node-cron#Cron-Syntax) cron Syntax, by default every 15 minutes|

### Run

`docker compose up -d --build`
