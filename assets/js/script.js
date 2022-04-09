/*TOOLTIP*/
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


/*ALERT CON JQUERY*/
$(function(){
	//Genera una alerta cuando se presiona el botón de correo
	$( "#boton" ).click(function() {
		alert( "El correo fue enviado correctamente" );
	});
});