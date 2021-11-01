require('dotenv').config()
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
console.log(process.env.TWILIO_ACCOUNT_SID)
const client = require('twilio')('AC141e2b0a928732f89dee3cb677f86358','9ec42eb938eb176cf64b91345da9d28f');

client.messages
  .create({
     body: 'Hola Herby2',
     to: '+12513123126', //qa
     from: '+13234176890' //prod
   })
  .then(message => console.log(call.sid));
