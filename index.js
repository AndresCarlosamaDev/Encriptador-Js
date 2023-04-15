var valor = document.querySelector('input');
var boton_encriptar = document.querySelector('#btn1');
var boton_desencriptar = document.querySelector('#btn2');
var res_parrafo = document.querySelector('#res_parrafo');
var imagen = document.querySelector('#imagen');
var boton_copiar = document.querySelector('#btn3');


var valor_ingresado = valor;

function copiado(text) {
  // Crea un elemento de entrada de texto temporal
  var tempInput = document.createElement("input");
  // Asigna el texto al elemento de entrada temporal
  tempInput.value = text;
  // Agrega el elemento de entrada temporal al DOM
  document.body.appendChild(tempInput);
  // Selecciona el contenido del elemento de entrada
  tempInput.select();
  // Ejecuta el comando de copiar en el portapapeles
  document.execCommand("copy");
  // Elimina el elemento de entrada temporal del DOM
  document.body.removeChild(tempInput);
}

function charEspecial() {

  var caracteres = ["Ä", "á", "é", "í", "ó", "ú", "/", "#", "@", "&", "+", "-", "*", ".", ",", "$", "!", "%", "(", ")", "?", "¡", "¿", "°", "|", "<", ">", "ñ"];
  var espaciales = false;

  for (var i = 0; i < caracteres.length; i++) {
    for (var j = 0; j < valor_ingresado.value.length; j++) {
      if (caracteres[i] == valor_ingresado.value[j]) {
        espaciales = true;
        break;
      }
    }
  }
  return espaciales;
}

function noMayus() {

  var letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Ñ"];
  var mayus = false;

  for (var i = 0; i < letras.length; i++) {
    for (var j = 0; j < valor_ingresado.value.length; j++) {
      if (letras[i] == valor_ingresado.value[j]) {
        mayus = true;
        break;
      }
    }
  }
  return mayus;
}

function encritar() {

  var resultado = charEspecial();
  var mayusResultado = noMayus();

  if (resultado === true) {
    alert("El valor ingresado tiene caracteres espaciales");
  } else if (mayusResultado === true){
    alert("El valor ingresado tiene caracteres en mayusculas");
  } else {

    var valor_nuevo = "";
    for (var i = 0; i < valor_ingresado.value.length; i++) {

      if (valor_ingresado.value[i] == "e") {
        valor_nuevo += "enter";

      } else if (valor_ingresado.value[i] == "i") {
        valor_nuevo += "imes";

      } else if (valor_ingresado.value[i] == "a") {
        valor_nuevo += "ai";

      } else if (valor_ingresado.value[i] == "o") {
        valor_nuevo += "ober";

      } else if (valor_ingresado.value[i] == "u") {
        valor_nuevo += "ufat";

      } else if (valor_ingresado.value[i] != "e" && valor_ingresado.value[i] != "i" && valor_ingresado.value[i] != "a" && valor_ingresado.value[i] != "o" && valor_ingresado.value[i] != "u") {
        valor_nuevo += valor_ingresado.value[i];
      }
    }
  }
  if (res_parrafo) {
    imagen.setAttribute('class', 'no_img')
    var txt_copiar = res_parrafo.innerHTML = valor_nuevo.toLowerCase();
    boton_copiar.onclick = copiado(txt_copiar);
  } else {
    imagen.setAttribute('class', '')
  }
}

function desencritar() {

  var resultado = charEspecial();
  var mayusResultado = noMayus();

  if (resultado === true) {
    alert("El valor ingresado tiene caracteres espaciales");
  } else if (mayusResultado === true) {
    alert("El valor ingresado tiene caracteres en mayusculas");
  } else if (resultado === false) {

    var valor_nuevo = "";
    for (var i = 0; i < valor_ingresado.value.length; i++) {

      if (valor_ingresado.value[i] == "e") {
        i++;
        if (valor_ingresado.value[i] == "n") {
          i++;
          if (valor_ingresado.value[i] == "t") {
            i++;
            if (valor_ingresado.value[i] == "e") {
              i++;
              if (valor_ingresado.value[i] == "r") {
                valor_nuevo += "e";
              }
            }
          }
        }
      } else if (valor_ingresado.value[i] == "i") {
        i++;
        if (valor_ingresado.value[i] == "m") {
          i++;
          if (valor_ingresado.value[i] == "e") {
            i++;
            if (valor_ingresado.value[i] == "s") {
              valor_nuevo += "i";
            }
          }
        }
      } else if (valor_ingresado.value[i] == "a") {
        i++;
        if (valor_ingresado.value[i] == "i") {
          valor_nuevo += "a";
        }
      } else if (valor_ingresado.value[i] == "o") {
        i++;
        if (valor_ingresado.value[i] == "b") {
          i++;
          if (valor_ingresado.value[i] == "e") {
            i++;
            if (valor_ingresado.value[i] == "r") {
              valor_nuevo += "o";
            }
          }
        }
      } else if (valor_ingresado.value[i] == "u") {
        i++;
        if (valor_ingresado.value[i] == "f") {
          i++;
          if (valor_ingresado.value[i] == "a") {
            i++;
            if (valor_ingresado.value[i] == "t") {
              valor_nuevo += "u"
            }
          }
        }
      } else {
        valor_nuevo += valor_ingresado.value[i];
      }
    }
  }
  if (valor_nuevo != undefined) {
    //alert(valor_nuevo);
    if (res_parrafo) {
      imagen.setAttribute('class', 'no_img')
      res_parrafo.innerHTML = valor_nuevo.toLowerCase();
    } else {
      imagen.setAttribute('class', '')
    }
  }
}

boton_encriptar.onclick = encritar;
boton_desencriptar.onclick = desencritar;
//boton_copiar.onclick = copiado(txt_copiar);