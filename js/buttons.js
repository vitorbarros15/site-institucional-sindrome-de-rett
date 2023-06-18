import { Router } from "./router.js"
const router = new Router()


const buttonVoltarOque = document.getElementById("btnOqueRett");
console.log(buttonVoltarOque);
const buttonDiagnostico = document.querySelector('.btnDiagnostico');
const buttonManifestacoes = document.querySelector('.btnManifestacoes');


buttonVoltarOque.addEventListener("click", function(){
    alert("O botão foi clicado!");
});


