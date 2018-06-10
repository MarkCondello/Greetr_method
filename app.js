/* Using the options from the select element, update the page using the Greet method*/
var me = G$("Markamus", "Condellos"  );

$("#login").on("click", function(ev){
	//$("#logindiv").hide();
	var usersLang = $("#lang").val();
	me.setLang(usersLang).greet(true).updateEl("#greeting", true).log();

});


