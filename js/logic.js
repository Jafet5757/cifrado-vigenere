const abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z']
let key = "";

$(document).ready(function(){
	$('#ci').click(function(){
		//y = (x+z) mod 27
		key = document.getElementById('llave').value
		key = key.replace(/ /g,'');
		let mess = document.getElementById('mess').value;
		mess = mess.replace(/ /g,'');
		let newMess = "";
		let keyComplete = '';
		if(revision(mess, key)){
			for(var i=0; i<mess.length; i++){
				keyComplete += key.charAt((i%Number(key.length)));
			}
			alert(keyComplete);
			for (var i=0; i<mess.length; i++) {
				//obtenemos la posicione letra por letra del mensaje
				let charr = mess.charAt(i);
				let posm = getPosition(charr);
				charr = keyComplete.charAt(i);
				let posk = getPosition(charr);
				//ejecutamos el algoritmo
				let newVal = change(posm, posk);
				newMess += abc[newVal];
			}
			document.getElementById('rs').value=newMess;
		}else{
			//esto si no se cumple la revision
		}
	});
	$('#de').click(function(){
		key = document.getElementById('llave').value
		key.replace(/ /g,'');
		let mess = document.getElementById('mess').value;
		mess.replace(/ /g,'');
		let newMess = "";
		let keyComplete = '';
		if(revision(mess, key)){
			for(var i=0; i<mess.length; i++){
				keyComplete += key.charAt((i%Number(key.length)));
			}
			alert(keyComplete);
			for (var i=0; i<mess.length; i++) {
				//obtenemos la posicione letra por letra del mensaje
				let charr = mess.charAt(i);
				let posm = getPosition(charr);
				charr = keyComplete.charAt(i);
				let posk = getPosition(charr);
				//ejecutamos el algoritmo
				let newVal = reChange(posm, posk);
				newMess += abc[newVal];
			}
			document.getElementById('rs').value=newMess;
		}else{
			//esto si no se cumple la revision
		}
	});
});
function change(posm, posk){
	let y = (posm+posk)%27
	return y;
}
function reChange(posm, posk){
	let val=0;
	if((posm-posk)>=0){
		val = (posm-posk)%27;
	}else{
		val = (posm-posk+27) % 27;
	}
	return val
}
function getPosition(letra){
	let position = abc.indexOf(letra);
	return position;
}
function revision(mess, desp){
	const re = /^([a-zñ?]+([ ]*[a-zñ?]?['-]?[a-zñ?]+)*)$/
	var acc = true;
	if(!re.test(mess)){
		sd();
		acc = false
	}
	if(!re.test(desp)){
		sdd();
		acc = false
	}
	if(desp.length>mess.length){
		sz();
	}
	return acc
}
function sd(){
	Swal.fire({
		title:"Error",
		text:"El texto ingresado no ha sido aceptado, ingrese todo en minusculas y evite los numeros y simbolos",
		icon: 'error'//puede ser success,error,info, warning y question
	});
}
function sdd(){
	Swal.fire({
		title:"Error",
		text:"La clave ingresada es incorrecta, no cumple las normas de revision, evite los numeros y simbolos",
		icon: 'error'//puede ser success,error,info, warning y question
	});
}
function sz(){
	Swal.fire({
		title:"Error",
		text:"La llave no puede ser mayor al mensaje",
		icon: 'error'//puede ser success,error,info, warning y question
	});
}