const express = require('express')
const path = require('path')
const http = require('http')
const socketio = require('socket.io')
const serialFunction = require('./utils/serial')
require('./db/mongoose')
const Data = require('./models/data')


const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = 4001
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))


io.on('connection',(socket)=>{
  console.log('Socket Connected');

  const subprocess = serialFunction((error,result)=>{
    if (error){
      console.log('Error')
    }
    const value = result.toString();
    const data = new Data({value})
    data.save()
      .then(()=>{
        console.log('Saved to Database');
      })
      .catch((error)=>{
        console.log('Unable to Save');
      }) 
    socket.emit('data',result.toString())
  })

})
  
server.listen(port, () => {
  console.log(`Server is up on port ${port}!`)
})