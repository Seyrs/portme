
//Typewriter Effect Quote
var i = 0;
var txt = "I've got a theory that if you give 100 percent all of the time, somehow things will work out in the end. -Larry Bird";
var speed = 40; 
id = document.getElementById("type").addEventListener("load", typeWriter);
;

let typeWriter = function() {
  if (i < txt.length) {
    id.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


