const socket = io()
$data = document.querySelector('#data')

socket.on('data',(data)=>{
    console.log(data);
    $data.innerHTML=data
})