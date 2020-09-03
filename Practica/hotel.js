// b)Para la gestión de un hotel,
// ingresar los siguientes datos validados de una reserva
// nombre del huésped
// cantidad de personas 
// cantidad de dia de estadia 
// forma de pago(efectivo , tarjeta o QR)

// informar el huésped que trajo más personas en
// una sola reserva.

// la cantidad de personas que se quedaron más días
// la forma de pago más utilizada.
// el promedio de cantidad de días por reserva


function hotel()
{
	var nombreHuesped;
	var cantidadPersonas;
	var duracionEstadia;
	var formaDePago;
	var respuesta;
	var personasReservaMaximo;
	var huespedMaximo;
	var estadiaMaximo;
	var personasDiasMaximo;
	var formaDePagoMaxima;
	var contadorEfectivo= 0;
	var contadorTarjeta= 0;
	var contadorQR= 0;
	var cantidadDias= 0;
	var cantidadReservas= 0;
	var noHayMaximos= true;
	var promedio;

	do{

		nombreHuesped = prompt("Ingrese Nombre del Huesped: ");

		cantidadPersonas = parseInt(prompt("Ingrese cantidad de Personas en la Reserva"));

			while(isNaN(cantidadPersonas) || cantidadPersonas <= 0){
		 		cantidadPersonas= parseInt(prompt("ERROR. Vuelva a Ingresar una Cantidad de Persona/s valida/s: "));
			}

		duracionEstadia = parseInt(prompt("Ingrese la Cantidad de Dia/s de Estadia: "));

			while(isNaN(duracionEstadia) || duracionEstadia <= 0){
		 		duracionEstadia= parseInt(prompt("ERROR. Vuelva a Ingresar una Cantidad de Dia/s Valido/s: "));
			}

		formaDePago = prompt("Ingrese la Forma de Pago: _Efectivo _Tarjeta _QR").toUpperCase();

			while(!(isNaN(formaDePago)) && formaDePago != "EFECTIVO" && formaDePago != "TARJETA" && formaDePago != "QR" ){
		 		formaDePago= prompt("ERROR. Vuelva a Ingresar una Forma de Pago valida: _Efectivo _Tarjeta _QR");
			}


		if (noHayMaximos== true) {
			personasReservaMaximo= cantidadPersonas;
			huespedMaximo= nombreHuesped;

			estadiaMaximo= duracionEstadia;
			personasDiasMaximo= cantidadPersonas;

			noHayMaximos= false;
		}

		if (cantidadPersonas > personasReservaMaximo) {
			personasReservaMaximo= cantidadPersonas;
			huespedMaximo= nombreHuesped;
		}

		if (duracionEstadia > estadiaMaximo) {
			estadiaMaximo= duracionEstadia;
			personasDiasMaximo= cantidadPersonas;
		}

		switch(formaDePago.toUpperCase()){
			case "EFECTIVO":
				contadorEfectivo++;
			;break;
			case "TARJETA":
				contadorTarjeta++;
			;break;
			case "QR":
				contadorQR++;
			;break;
		}

		cantidadDias+=duracionEstadia;
		cantidadReservas++;

		console.log(nombreHuesped);
		console.log(cantidadPersonas);
		console.log(duracionEstadia);
		console.log(formaDePago);
		console.log(cantidadReservas);

		respuesta = prompt("Desea seguir ingresando otro Huesped? S/N");
	}while(respuesta.toUpperCase() == "S");


	if (contadorEfectivo > contadorTarjeta) {
		if (contadorEfectivo > contadorQR) {
			formaDePagoMaxima="Efectivo";
		}
	}
	else if (contadorTarjeta > contadorQR) {
			formaDePagoMaxima="Tarjeta";	
	}
	else{
		formaDePagoMaxima="QR";
	}

	promedio= cantidadDias / cantidadReservas;

	

}