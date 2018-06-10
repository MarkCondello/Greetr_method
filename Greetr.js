(function(global, $){

	
	var Greetr = function(firstName, lastName, language){
		return new Greetr.init(firstName, lastName, language);
	}

	//object to create methods for Greetr, is set as the prototype of all objects create from init method
	Greetr.prototype = {
		foo(){
			console.log("eat a dick")
		}
	};

	Greetr.init = function(firstName, lastName, language){
		let self = this;
		self.firstName = firstName || "";
		self.lastName = lastName || "";
		self.language = language || "eng";
	};

	 Greetr.init.prototype = Greetr.prototype;

	global.Greetr = global.G$ = Greetr ;

})(window, jQuery);

G$("Foo", "Barr", "Italiano");

/*
//Notes:
 by the time that Greetr is called, the Greetr.init method will have run so we can use the new keyword to create the method.

*/
