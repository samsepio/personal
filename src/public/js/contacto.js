const socket=io();

let correo=document.getElementById('correo');
let asunto=document.getElementById('asunto');
let ingresar=document.getElementById('ingresar');
let enviado=document.getElementById('enviado');
let error=document.getElementById('error');
let errorA=document.getElementById('errorA');
let enviar=document.getElementById('enviar');

ingresar.addEventListener('click',(evento)=>{
	if(correo.value==""){
		error.innerHTML+=`campo hobligatorio`;
		error.style.color="red";
		error.style.fontFamily="Helvetica";
		evento.preventDefault();
	};
	if(asunto.value==""){
		errorA.innerHTML+=`campo hobligatorio`;
		errorA.style.color="red";
		errorA.style.fontFamily="Helvetica";
		evento.preventDefault();
	};
	socket.emit('contacto',{
		correo: correo.value,
		asunto asunto.value,
		mensaje: mensaje.value
	});
	enviar.innerHTML+=`correo enviado correctamente`;
	enviar.style.color="green";
	enviar.fontFamily="sans-serif";
});
