
javascript: var t;
t = {
PT: [
"Apresentação",
"A ligação poderá ser gravada para fins de treinamento e qualidade e melhoria nos serviços do Google, de acordo com a nossa política de privacidade",
"Tempo da Ligação",
"Confirmações: Task, site, AM",
"Confirmação: Pedir que o Anunciante Confirme os 10 dígitos do CID",
"Confirmação: Backup e acessos ADM",
"Fechar Conteúdo Sensível",
"Resumo da chamada",
"Ajuda adicional",
"Fechar compartilhamento de tela",
"Próximos passos (quanto tempo vai acompanhar o caso)",
"Pesquisa de Satisfação"
],
ES: [
"Presentación ",
"La llamada puede ser grabada con fines de entrenamiento, calidad y mejoria en los serviciós de Google de acuerdo con nuestra politica de privacidad, y tiene una duración de 30 a 40 min",
"Confirmar CID email e Telefono",
"Confirmaciones: Task, sitio web, nombre del AM",
"Terminos y condiciones",
"Confirmación: Copia de seguridad y acceso de ADM",
"Cerrar contenido sensible antes de compartir la pantalla",
"implementar",
"Resumen de la llamada",
"Ayuda adicional",
"Finalizar el uso de la pantalla compartida",
"Próximos pasos (cuántos días le darás seguimiento)",
"Durante los proximos dias, nuestro equipo de calidad podria realizar algunas pruebas en la conversión para verificar que la implementación esta correcta. Estas de acuerdo con estas pruebas para garantizar que que fue implementado correctamente?\", \"Encuesta de satisfacción\""
],
EN: [
"Introduction (Name and Team)",
"Call Duration: Record the duration of the call.",
"Confirmations: Task, Website URL, AM's name",
"Confirmation: Ask the advertiser to confirm the 10 digits CID.",
"Confirmation: Inform about recording the call.",
"Confirmation: advertiser agrees to the terms and conditions.",
"Confirmation: Website Backup and Admin/FTP panel",
"Close Sensitive Content",
"Call Summary",
"Additional Assistance.",
"Close Screen Share: End screen sharing.",
"Next Steps(follow up nº of days)",
"Satisfaction Survey"
]
},
escapeHTMLPolicy = trustedTypes.createPolicy("default", {
createHTML: e => e,
createScriptURL: e => e,
createScript: e => e
}),
console.log("bookmark start"),
(window.location.href.includes("meet.google.com") || window.location.href.includes("127.0.0.1")) && (window.location.href.includes("meet.google.com") || window.location.href.includes("127.0.0.1")) && function e(a) {
let o = document.createElement("checklist"),
n = document.createElement("menuqa");
n.className = "blue-bg", document.body.appendChild(o), o.appendChild(n), (i = document.createElement("i")).setAttribute("class", "fa-headset"), i.innerHTML = '<svg xmlns="//www.w3.org/2000/svg" viewBox="0 0 512 512" ><path d="M256 48C141.1 48 48 141.1 48 256l0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40C0 114.6 114.6 0 256 0S512 114.6 512 256l0 144.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24l-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40L464 256c0-114.9-93.1-208-208-208zM144 208l16 0c17.7 0 32 14.3 32 32l0 112c0 17.7-14.3 32-32 32l-16 0c-35.3 0-64-28.7-64-64l0-48c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64l0 48c0 35.3-28.7 64-64 64l-16 0c-17.7 0-32-14.3-32-32l0-112c0-17.7 14.3-32 32-32l16 0z"/></svg>', n.appendChild(i);
let s = document.createElement("passos");
o.appendChild(s);
let l = document.createElement("select");
for (language_text in l.id = "language-selector", l.className = "blue-bg", localStorage.language = localStorage.language || "PT", a) {
let c = document.createElement("option");
c.value = language_text, c.textContent = language_text, c.selected = localStorage.language == language_text, l.appendChild(c);
var r = document.createElement("ol");
r.id = language_text, r.className = localStorage.language == language_text ? "active" : "", a[language_text].forEach((e, a) => {
let o = document.createElement("li");
o.innerText = e, r.appendChild(o)
}), s.appendChild(r)
}
s.prepend(l);
let d = document.createElement("style");
d.textContent = "menuqa i {font-size:25pt} passos ol{ display:none; max-width:320px;} passos ol.active{display:block;} passos select{margin: 12px 20px 0; width: 80px;} passos .blue-bg, menuqa.blue-bg{background: rgb(26, 115, 232); color: #fff; } .fa-headset svg {width: 40px;height: 40px;fill: white;} checklist { z-index: 10;position: fixed;top: 0px;left: 48px;} checklist menuqa{display: flex; justify-content: center; align-items: center; color: rgb(255, 255, 255); border-radius: 0px 0px 5px 5px; width: 48px; height: 48px; cursor: pointer;} passos {display: block;z-index: 1000000;background: rgb(255, 255, 255);position: fixed;top: 48px;border: 1px solid gray;left: 0px;} passos li {cursor: pointer; padding: 5px; transition: opacity .5s; opacity: 1;} passos li:hover {transition: opacity .5s; opacity: 0.5;}", document.head.appendChild(d), n.addEventListener("click", function() {
"none" === s.style.display ? s.style.display = "block" : s.style.display = "none"
}), document.querySelectorAll("passos li").forEach(function(e) {
e.addEventListener("click", function(a) {
"line-through" == e.style.textDecoration ? (e.style.color = "#000", e.style.textDecoration = "none") : (e.style.color = "#ff0000", e.style.textDecoration = "line-through")
})
}), document.querySelector("#language-selector").addEventListener("change", e => {
localStorage.language = e.target.value, document.querySelectorAll("passos .active").forEach((e, a) => {
e.classList.remove("active")
}), document.querySelector(`passos #${localStorage.language}`).classList.add("active")
})
}(t);
