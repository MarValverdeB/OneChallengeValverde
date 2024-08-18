const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector (".mensaje");
const copyText = document.querySelector (".mensaje");



//'La letra "e" es convertida para "enter"'
//'La letra "i" es convertida para "imes"'
//'La letra "a" es convertida para "ai"'
//'La letra "o" es convertida para "ober"'
//'La letra "u" es convertida para "ufat"'


function btnEncriptar(){
    if(textArea.value == ""){
        alert("No se encontró mensaje a Encriptar");
    } else {
        const textoEncriptado = encriptar(textArea.value)
        mensaje.value =  textoEncriptado
        textArea.value = "";
        mensaje.style.backgroundImage= "none";
    }
}

function encriptar(stringEncriptada){
   let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
   stringEncriptada = stringEncriptada.toLowerCase()

   for(let i  = 0; i <matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
             stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

       }

   }
   return stringEncriptada
}


function btnDesencriptar(){
    if(textArea.value == ""){
        alert("Ingresar mensaje a Encriptar");
    } else {
        const textoEncriptado = desencriptar(textArea.value)
        mensaje.value =  textoEncriptado
        textArea.value = "";
        mensaje.style.backgroundImage= "none";
    }
}


function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()
 
    for(let i  = 0; i <matrizCodigo.length; i++){
         if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
 
        }
 
    }
    return stringDesencriptada
 }

 function btnLimpiar(){
    textArea.value = "";
    mensaje.value = "";
    mensaje.style.backgroundImage= "URL('../image/mujer-pelo-blanco.png')";
}

function btnTextToClipboard(){
    if(mensaje.value == ""){
        alert("No se encontró mensaje a copiar");
    } else {
        copyText.select();
        copyText.setSelectionRange(0, 99999); //For mobile devices

        //Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
        mensaje.value = "";
        mensaje.style.backgroundImage= "url('/image/futurista-mujer.png')";
        //Alert the copied text
        alert("Texto copiado: " +copyText.value);
    }

}

function inicial() {
    textArea.value = "";
}
