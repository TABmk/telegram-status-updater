import { TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions";
import input from "input";

const apiId = 123;
const apiHash = '123';
const stringSession = new StringSession('');

(async () => {
  const client = new TelegramClient(stringSession, apiId, apiHash, {
    connectionRetries: 5,
  });

  await client.start({
    phoneNumber: async () => await input.text("Please enter your number: "),
    password: async () => await input.text("Please enter your password: "),
    phoneCode: async () =>
      await input.text("Please enter the code you received: "),
    onError: (err) => console.log(err),
  });
  
  console.log(client.session.save());
})();