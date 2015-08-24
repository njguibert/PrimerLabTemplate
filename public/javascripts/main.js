$(document).ready(function() {
var socket = io("http://localhost:3000");
var estadoLED=false;
$("#btn").click(function(){
  if (estadoLED){
	socket.emit("enviarDatos","ApagarLED");
	estadoLED=false;
        $("#btn").val("Encender");
}
  else {
socket.emit("enviarDatos","PrenderLED");
estadoLED=true;
        $("#btn").val("Apagar");
}

});

});

