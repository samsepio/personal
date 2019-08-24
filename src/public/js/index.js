const socket=io();

let correo=document.getElementById('correo');
let verificacion=document.getElementById('verificacion');
let ingresar=document.getElementById('ingresar');
let errorA=document.getElementById('errorA');
let errorB=document.getElementById('errorB');
let errorC=document.getElementById('errorC');
let ip=document.getElementById('ip');

ingresar.addEventListener('click',(evento)=>{
	const caracteres=(verificacion.value.length);
	if(caracteres > 10){
		errorB.innerHTML+=`el codigo no puede ser mayor a 32 caracteres`;
		errorB.style.color="red";
		errorB.style.fontFamily="cursive";
		evento.preventDefault();
	};
	if(correo.value==""){
		errorA.innerHTML+=`campo hobligatorio`;
		errorA.style.color="red";
		errorA.style.fontFamily="cursive";
		evento.preventDefault();
	};
	if(verificacion.value==""){
		errorB.innerHTML+=`campo hobligatorio`;
		errorB.style.color="red";
		errorB.style.fontFamily="cursive";
		evento.preventDefault();
	};
	socket.emit('registro',{
		correo: correo.value,
		verificacion: verificacion.value,
		ip: ip.valu
	});
	socket.on('verificado',(data)=>{
		errorC.innerHTML+=`codigo de verificacion erroneo`;
		errorC.style.color="red";
		errorC.style.fontFamily="Helvetiva";
		return false();
	});
});
