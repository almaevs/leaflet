const express= require ('express');
const engine=require('ejs-mate');
const path=require('path');
const socketIO=require('socket.io');
const http=require('http');



const app=express();
const server=http.createServer(app);
const io=socketIO(server);



app.use(require('./routes/index'));

//archivos estaticos

app.use(express.static(path.join(__dirname,'public')));

//motor de plantillas
//settings
app.engine('ejs,',engine);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
console.log(__dirname+ '/views')

//sockets
require('./sockets')(io);

// Inicializar el servidor
server.listen(4000,()=>{
	console.log("hola mundo");
	
});