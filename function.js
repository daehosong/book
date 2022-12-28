const user = {
    name : "daeho",
    callname :function(personName){
        console.log("Hi "+ personName +" how old are you?");
    },
    age : "22",
    callage : function(personAge){
        console.log("My age is "+ personAge);
    }
};


user.callname("daeho");

user.callage("22");