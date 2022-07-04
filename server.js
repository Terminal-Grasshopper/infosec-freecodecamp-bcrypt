'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';
const bcrypt = require('bcrypt');

//START_ASYNC -do not remove notes, place code between correct pair of notes.

bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  /*Store hash in your db*/
  console.log(hash) //$2b$12$Vm8yHu5PoJyMszOJCSwEj.YnezpuicQtll4wzv.jop4NRMYkbBpai
  bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
  /*res == true or false*/
  console.log(res)//true
});
});


//END_ASYNC

//START_SYNC

let hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log(hash);

let result = bcrypt.compareSync(myPlaintextPassword, hash);
console.log(result);

//END_SYNC






























app.listen(process.env.PORT || 3000, () => {});
