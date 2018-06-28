class Violin {
    constructor(){
        this.event={}
    }
}
Violin.prototype.on = function (typer,listener){
    this.event.typer = listener;
}
Violin.prototype.emit = function(typer){
      setInterval(this.event.typer,1000)
}
var vio = new Violin();
vio.on('myNote',function(){
    console.log("note!")
})
vio.emit('myNote');

module.exports = Violin