var intentos=3;
var a;
var registro=[]; //OBTENDAR CADENAS DE TIPO JASON PARA VALIDAR CONTRASEÑA
var valor = new Array(2); 


if (window["localStorage"]) { 

//FUNCION DE ACCESO PARA OBTENER CREDENCIALES Y VALIDARLAS
function acceso(){
	var usuario=document.getElementById("usuario").value; //Obtenemos el valor del campo input del usuario del formulario Login
	var password=document.getElementById("contra").value; //Obtenemos el valor del campo input del password del formulario login

	
		var datos=JSON.parse(localStorage.getItem('registro'));  //Ahora aqui, convierte una cadena de texto a un objeto JSON Javascript lo que obtumos del arreglo de todos los paramaetros 
											//Con localStorage.getItem('registro') obtenemos clave acompañada con el valor de la clave previamente enviados
													// por localStorage.setItem('registro',JSON.stringify(registro))
			
			sessionStorage.setItem('registro', JSON.stringify(datos)); // Almacenamos la informacion en sessionStorage, le pasamos una clave y el valor de la clave
																		//para este caso le vamos a pasar el objeto javascript obtenido convirtiendolo a texto json

				
				var sesion=JSON.parse(sessionStorage.getItem('registro')); //En la variable sesion guardamos el resultaod de obtener los datos guardados en un sessionStogare
																			//utilizando la clave, además conviertiendo el objeto de texto JSON a un objeto JSON JavaScript
				
				var len=sesion.length //Recorreemos o mejor dicho obtenemos el numero de informacion guardad en la variable sesion, posteriorment guardarlo en una variable len


	for (var i = 0; i < len; i++) {   //Recorremos la variable leng,  
		if (usuario==sesion[i].user && password==sesion[i].pssw){ //Con esta condicion comparamos los valores recorridos con el usuario y contraseña que anteriormente 
																	//Recibimos por parte de la funcion regis(), (utilizamos el .user y .pssw) se encuentrane n la matri
		a=i; 
		valor[0]=sesion[i].user; //llengamos la matris con los valores de usuario y password
		valor[1]=sesion[i].pssw;
			}
		}

			

	//VALIDAR USUARIO Y CONTRASEÑA
	if (valor[0]==usuario && valor[1]==password) { //Comparamos si los valores son iguales a los obtenidos por parte del formualrio Login, que anteriormente capturamos con el 
														//document.getElementById();
		alert("Datos correctos");
			window.location="http://www.realmadrid.com/"; 
			return false;
		}
		else
			{

		alert("Contraseña o usuario incorrecto: vuelve a ingresar los datos");
				intentos-=1;
					if( intentos == 0){
						document.getElementById("usuario").disabled = true;
						document.getElementById("usuario").disabled = true;
					alert("Debe recargar la pagina, ya no cuenta con mas intentos");
			
			return false;
		}
	}




} //FIN DE FUNCIÓN ACCESO



function regis(){  
	var nombre=document.getElementById("name").value;  //Obtenemos el valor del input nombre
	var apelildoo=document.getElementById("lastname").value; //Obtenemos el valor del input apellido
	var email=document.getElementById("email").value;//Obtenemos el valor del input email
	var usernamee=document.getElementById("username").value; //Obtenemos el valor del input  usuario
	var contrasenia=document.getElementById("pass").value; //Obtenemos el valor del input password

	//Declaramos un arreglo en el cual guardaremos las variables con datos recargados
	var datos={
		"nombre":nombre,
		"apellido":apelildoo,
		"correo": email,
		"user":usernamee,
		"pssw":contrasenia
	}


	//CONVIERNTO LOS OBJETOS JAVASCRIPT  A TEXTO JASON PARA VALIDAR CONTRASEÑA
	registro.push(datos);  //En la matris antes declarado, con el metodo .push() agregamos el arreglo que capturamos con los datos anteriores
							//nombre, apellido, etc... y de esa forma los a un nuevo arreglo llamado registro[]
	localStorage.setItem('registro', JSON.stringify(registro));   //registro es un array que obtendra la cadena o el arreglo  
			 // keyname, keyvalue   (mandamos un clave y un valor)
	//FIN CONVIERNTO LOS OBJETOS JAVASCRIPT  A TEXTO JASON PARA VALIDAR CONTRASEÑA
		var nombrecito = document.getElementById('name').value;
		var apellido = document.getElementById('lastname').value;
		var emailsito = document.getElementById('email').value;
		var usernamesito = document.getElementById('username').value;
		var passito = document.getElementById('pass').value;

/*		function onBlur(){
			this.style.borderColor="#9ecaed";
			this.style.borderWidth="3px";
		}
			function onFocus() {  
			this.style.borderColor="#9ecaed";
			this.style.borderWidth="3px";
		}	
		emailsito.onFocus = onFocus;
		emailsito.onBlur = onBlurSoloParaEmail;

		function onBlurSoloParaEmail(){
			var contenidoEnControlEmail =  this.value;
			var estaCorrecto = false;
			var expresionRegularParaValidarEmail = /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
				if(contenidoEnControlEmail != ""){
					estaCorrecto = expresionRegularParaValidarEmail.test(contenidoEnControlEmail);
					if(estaCorrecto == false){
						alert("Algo anda mal con tu email...");
						document.getElementById('email').select();
						document.getElementById('email').focus();
					}
				}
				this.style.borderColor ="#E5E5E5";
				this.style.borderWidth = "1px";
		}*/



		if( nombrecito == '' || apellido == '' || emailsito == '' || usernamesito == '' || passito == ''){
			alert('Existen Campos Vacios, Intente de Nuevo');
		}else{
				alert("Se registro correctamente!!");
			location.href='formulario.html';
		}
			
				}
	
	}else{

	alert("Tu Navegador no es compatible");

		}






		//Nivel1/1/elements - copia.html