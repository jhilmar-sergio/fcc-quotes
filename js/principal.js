$(document).ready(function(){
	var quotes = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8" , "q9", "q10"];

	$('#input').on('change', function(){
		// var val, span;
		// val = $('#input').val();
		// span = $('.box').children('span');
		// span.text(val);
		$("#contenido").text($('#input').val());
	});

    $( "#cambiar" ).click(function( event ) {
    	var indice = Math.floor(Math.random() * 10);
   		$( "#contenido" ).html("\"" + quotes[indice] + "\"");
    });

});