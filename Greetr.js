(function(global, $){

	var Greetr = function(firstName, lastName, language){
		return new Greetr.init(firstName, lastName, language);
	}

/* unexposed values start*/
	var supportedLang = ["en", "es"];

	var greetings = {
		en: "Hello",
		es: "Holla"
	};

	var formalGreetings = {
		en: "Greetings",
		es: "Saludos"
	};

	var logMessages = {
		en: "Logged in",
		es: "Inicio sesion"
	}
/* unexposed values end*/

	//object to create methods for Greetr, is set as the prototype of all objects create from init method
	Greetr.prototype = {
		fullName(){
			return `${this.firstName} ${this.lastName}`; 
		},

		validate(){
			if(supportedLang.indexOf(this.language) === -1){
				throw "Invalid language.";
			};// is the value entered for language within the array
		},

		greeting(){
			return `${greetings[this.language]} ${this.firstName}!`;  
		},

		formalGreeting(){
			return `${formalGreetings[this.language]} ${this.fullName()}.`;  
		},

		greet(formal){
			var msg;

			if(formal){
				msg = this.formalGreeting();
			} else {
				msg = this.greeting();
			}

			if(console){
				console.log(msg);
			}

			//returing this makes the method chainable
			return this;
		},

		log(){
			if(console){
				console.log(`${logMessages[this.language]} : ${this.fullName()}`);
			}
			//chainable method with return this 
			return this;
		},

		//allows option to swtich language
		setLang(lang){
			this.language = lang;
			this.validate();
			return this;
		}
	};

	Greetr.init = function(firstName, lastName, language){
		let self = this;
		self.firstName = firstName || "";
		self.lastName = lastName || "";
		self.language = language || "en";
	};

	 Greetr.init.prototype = Greetr.prototype;

	global.Greetr = global.G$ = Greetr ;

})(window, jQuery);

 
 /*
//Notes:
 by the time that Greetr is called, the Greetr.init method will have run so we can use the new keyword to create the method.

*/
