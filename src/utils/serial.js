const path = require('path')
const {spawn} = require('child_process')

function runScript(){
    return spawn('python3', [
        "-u", 
        path.join(__dirname, 'serial_port.py'),
    ]);
}
  
const subprocess = runScript()

const serial = (callback) => {
    
    subprocess.stdout.on('data', (data) => {
        callback(undefined,data)
    });
    subprocess.stderr.on('data', (data) => {
        callback('Error',undefined)
    });
    subprocess.on('close', () => {
        callback('Closed',undefined)
    });
}

// module.exports = runScript;
module.exports = serial;
