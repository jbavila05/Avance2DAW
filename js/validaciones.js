function nombre(e){
	key = e.keyCode || e.which; //almacenamos en la variable
			teclado = String.fromCharCode(key).toLowerCase();
			letras = "abcdefghijklmnñopqrstuvwxyz";
			especiales = "8-37-38-46-146";
			teclado_especial = false;
				for (var i in especiales){
					if(key == especiales[i]){
						teclado_especial = true; break;
					}
				}
				if(letras.indexOf(teclado) == -1 && !teclado_especial){
					return false;
				}
}

function nombre1(e){
	key = e.keyCode || e.which; //almacenamos en la variable
			teclado = String.fromCharCode(key).toLowerCase();
			letras = "abcdefghijklmnñopqrstuvwxyz@0123456789.";
			especiales = "8-37-38-46-146";
			teclado_especial = false;
				for (var i in especiales){
					if(key == especiales[i]){
						teclado_especial = true; break;
					}
				}
				if(letras.indexOf(teclado) == -1 && !teclado_especial){
					return false;
				}
}