//console.log("Hola Mundo! desde la consola");
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Licenciada en Informática | Desarrolladora Frontend Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Si lo puedes imaginar,...')
    .pauseFor(2500)
    .deleteChars(3)
    .typeString('<strong> lo puedes programar!</strong>')
    .pauseFor(2500)
    .start();