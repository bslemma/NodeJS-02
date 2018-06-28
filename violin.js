const EventEmitter =require('events');
class Violin extends EventEmitter{
    constructor(){
    	super();
    	let self=this;
    	setInterval(function(){self.emit("note")},1000);
    }
   
}
var vio = new Violin();
vio.on('note',function(){ console.log("Violin is playing music")});

