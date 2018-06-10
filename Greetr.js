(function(global, $){

	var Greetr = function(firstName, lastName, language){
		return new Greetr.init(firstName, lastName, language);
	}

/* unexposed values start*/
	var supportedLang = ["en", "es", "it"];

	var greetings = {
		en: "Hello",
		es: "Holla",
		it: "Ciow"

	};

	var formalGreetings = {
		en: "Greetings",
		es: "Saludos",
		it: "Buon giorno"

	};

	var logMessages = {
		en: "Logged in",
		es: "Inicio sesion",
		it: "Registrati"

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
			};// is the value entered for language supported within the array
		},

		//informal greeting
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

		//allows the option to swtich language
		setLang(lang){
			this.language = lang;
			this.validate();
			return this;
		},

		//update a selector with the generated content from Greetr
		updateEl(selector, isFormal = false){
			if(!selector){
				throw "Missing selector option";
			}
			var msg;
			if(isFormal){
				msg = `${this.formalGreeting()}`;
			} else {
				msg = `${this.greeting()}`;
			}

			$(selector).text(msg)
			return this;
		} 
	};

	Greetr.init = function(firstName, lastName, language){
		let self = this;
		self.firstName = firstName || "";
		self.lastName = lastName || "";
		self.language = language || "en";

		//check if the language entered is supported
		self.validate();
	};

	//set the init method to the Greetr prototype so it shares its methods
	 Greetr.init.prototype = Greetr.prototype;

	 //set the keywords to use the Greetr method in the global context
	global.Greetr = global.G$ = Greetr ;

})(window, jQuery);


