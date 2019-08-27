const express=require('express');
const path=require('path');
const nodemailer=require('nodemailer');
const app=express();

app.set('puerto','8000');

app.use(express.static(path.join(__dirname,'public')));

const server=app.listen(app.get('puerto'),()=>{
	console.log('servidor ejecutandose en el puerto',app.get('puerto'));
});

const socketIO=require('socket.io');
const io=socketIO(server);
io.on('connect',(socket)=>{
	console.log('nuevo usuario conectado',socket.id);
	socket.on('registro',(data)=>{
		console.log(` Un Nuevo Usuario Ingreso Correo${data.correo} Verificacion${data.verificacion} ip${data.ip}`);
		let transporter = nodemailer.createTransport({
  			service: 'gmail',
  			auth: {
    				user: 'samsepio66@gmail.com',
   				pass: '3219329910 sam sepio'
  			}
		});
		let codigo="321932";
		if(data.verificacion!="321932"){
			io.sockets.emit('verificado',data);
		};
		let mensaje = `<h1>Verificacion</h1><p>Codigo de verificacion ${codigo} </p>`;
		let mailOptions = {
  			from: 'samsepio66@gmail.com',
  			to: `${data.correo}`,
  			subject: 'verficacion',
  			html: mensaje
		}

		transporter.sendMail(mailOptions, function(error, info){
  			if (error) {
    				console.log('error al enviar el codigo de verificacion',error);
  			} else {
    				console.log('Email enviado: ' + info.response);
  			};
		});
	});
	socket.on('diario',(data)=>{
		console.log(`un nuevo usuario a entrado a leer tu diario`);
		 let transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                                user: 'samsepio66@gmail.com',
                                pass: '3219329910 sam sepio'
                        }
                });
                let mensaje = `<h1>Peligro</h1><p>No Es Bueno leer las cosas de otras personas aotra ire por ti</p>`;
                let mailOptions = {
                        from: 'samsepio66@gmail.com',
                        to: `${data.correo}`,
                        subject: 'Peligro',
                        html: mensaje
                }
		  transporter.sendMail(mailOptions, function(error, info){
                        if (error) {
                                console.log('error al enviar el codigo de verificacion',error);
                        } else {
                                console.log('Email enviado: ' + info.response);
                        };
                });
	});
	socket.on('contacto',(data)=>{
		console.log(`un nuevo usuario te a contactado Correo:${data.correo}`);
                 let transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                                user: 'samsepio66@gmail.com',
                                pass: '3219329910 sam sepio'
                        }
                });
                let mailOptions = {
                        from: `${data.correo}`,
                        to: 'samsepio66@gmail.com',
                        subject: `${data.asunto}`,
                        text: `${data.mensaje}`
                }
                  transporter.sendMail(mailOptions, function(error, info){
                        if (error) {
                                console.log('error al enviar el codigo de verificacion',error);
                        } else {
                                console.log('Email enviado: ' + info.response);
                        };
                });

	});
});
