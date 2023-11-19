let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #f90068;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #f90068;">Estudiante de Ingeniería Mecatrónica</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
