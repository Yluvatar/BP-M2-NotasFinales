
var HTML1 = document.getElementById("html1");
var HTML2 = document.getElementById("html2");
var HTML3 = document.getElementById("html3");
var HTMLpromedio = document.getElementById("htmlPromedio");

var nota1html = +prompt(" Nota 1 de HTML", 1);
var nota2html = +prompt(" Nota 2 de HTML", 1);
var nota3html = +prompt(" Nota 3 de HTML", 1);

HTML1.innerHTML = nota1html.toFixed(1);
HTML2.innerHTML = nota2html.toFixed(1);
HTML3.innerHTML = nota3html.toFixed(1);
HTMLpromedio.innerHTML = ((nota1html + nota2html + nota3html) / 3).toFixed(1);

nota1html = nota2html = nota3html = null;

var CSS1 = document.getElementById("css1");
var CSS2 = document.getElementById("css2");
var CSS3 = document.getElementById("css3");
var CSSpromedio = document.getElementById("cssPromedio");

var nota1css = +prompt(" Nota 1 de CSS", 1);
var nota2css = +prompt(" Nota 2 de CSS", 1);
var nota3css = +prompt(" Nota 3 de CSS", 1);

CSS1.innerHTML = nota1css.toFixed(1);
CSS2.innerHTML = nota2css.toFixed(1);
CSS3.innerHTML = nota3css.toFixed(1);
CSSpromedio.innerHTML = ((nota1css + nota2css + nota3css) / 3).toFixed(1);

nota1css = nota2css = nota3css = null;

var JS1 = document.getElementById("js1");
var JS2 = document.getElementById("js2");
var JS3 = document.getElementById("js3");
var JSpromedio = document.getElementById("jsPromedio");

var nota1js = +prompt(" Nota 1 de JS", 1);
var nota2js = +prompt(" Nota 2 de JS", 1);
var nota3js = +prompt(" Nota 3 de JS", 1);

JS1.innerHTML = nota1js.toFixed(1);
JS2.innerHTML = nota2js.toFixed(1);
JS3.innerHTML = nota3js.toFixed(1);
JSpromedio.innerHTML = ((nota1js + nota2js + nota3js) / 3).toFixed(1);

nota1js = nota2js = nota3js = null;