export function initQuoteForm(){


const form = document.querySelector('#quoteForm');


if(!form) return;



const messageBox = document.querySelector('.form-message');

const button = form.querySelector('button');



form.addEventListener('submit',(e)=>{


e.preventDefault();



const data = new FormData(form);



const nombre = data.get('nombre');
const correo = data.get('correo');
const telefono = data.get('telefono');
const servicio = data.get('servicio');
const mensaje = data.get('mensaje');



if(
!nombre ||
!correo ||
!telefono ||
!servicio ||
!mensaje
){

messageBox.textContent =
"⚠ Completa todos los campos antes de enviar.";

return;

}



const correoValido =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;



if(!correoValido.test(correo)){


messageBox.textContent =
"Ingresa un correo electrónico válido.";


return;

}



button.textContent = "Preparando cotización...";

button.disabled = true;



const numeroWhatsApp = "529671628806";



const texto = `

 Nueva solicitud de cotización - Vertex Lab


 Cliente:
${nombre}


 Correo:
${correo}


Teléfono:
${telefono}


Servicio:
${servicio}


 Proyecto:
${mensaje}


Gracias por contactar a Vertex Lab.

`;



const url =
`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;



messageBox.textContent =
"✓ Abriendo WhatsApp...";


setTimeout(()=>{


window.open(url,"_blank");


form.reset();


button.textContent =
"Solicitar cotización";


button.disabled = false;


messageBox.textContent =
"";


},800);



});

}