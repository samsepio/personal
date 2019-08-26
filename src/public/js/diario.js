const socket=io();

let leer=document.getElementById('leer');
let correo=document.getElementById('correo');
let error=document.getElementById('error');

leer.addEventListener('click',(evento)=>{
	if(correo.vlalue==""){
		error.innerHTML+=`campo hobligatorio`;
		error.style.color="red";
		error.style.fontFamily="sans-serif";
		evento.preventDefault();
	t
	}
	socket.emit('diario',{
		leer: leer.value,
		correo: correo.value
	});
});
