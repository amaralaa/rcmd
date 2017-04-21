const firebase = require("firebase");
const readline = require('readline');
const exec = require('child_process').exec;
const config = require('./config/fireBase.js'); ///////firebase config object take it from console take care of the data base role you must allow unAUTH read and write
firebase.initializeApp(config);
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (cmd) {
    firebase.database().ref('userID/cmd/').push({
        cmd : cmd,
        done : false
    });  
});

firebase.database().ref('userID/cmd/').on('child_changed',(snap)=>{
    snap.forEach((val)=>{
            console.log(val.val())
    })
})