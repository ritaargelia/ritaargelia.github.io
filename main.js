//console.log("Hola Mundo! desde la consola");
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Licenciada en Informática | Desarrolladora Frontend Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Si se puede imaginar,...')
    .pauseFor(2500)
    .deleteChars(3)
    .typeString('<strong> se puede programar!</strong>')
    .pauseFor(2500)
    .start();