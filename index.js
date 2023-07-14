const { StringSession } = require('telegram/sessions');
const { TelegramClient, Api } = require('telegram');
const cron = require('node-cron');
const emoji = require('./emoji');

const apiId = Number(process.env.apiId);
const apiHash = process.env.apiHash;
const stringSession = new StringSession(process.env.stringSession);

(async () => {
  const client = new TelegramClient(stringSession, apiId, apiHash, {
    connectionRetries: 5,
  });
  await client.start({
    onError: (err) => console.log(err),
  });
  
  const setStatus = () => {
    client.invoke(
      new Api.account.UpdateEmojiStatus({
        emojiStatus: new Api.EmojiStatus({ documentId: emoji[
          Math.floor(Math.random() * emoji.length)
        ]})
      })
    );
  };

  setStatus();

  cron.schedule(process.env.cron, setStatus);
})();