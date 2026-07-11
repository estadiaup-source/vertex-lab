import './style.css';

import { Navbar } from './components/Navbar';

import { Services } from './components/Services';

import { Projects } from './components/Projects';

import { Features } from './components/Features';

import { Quote } from './components/Quote';

import { Footer } from './components/Footer';

import { Solutions } from './components/Solutions';

import { initQuoteForm } from './js/quote';

import { initMenu } from './js/menu';

import AOS from 'aos';

import 'aos/dist/aos.css';

import { Stats } from './components/Stats';

AOS.init({

duration:700,

once:true,

offset:100

});

document.querySelector('#app').innerHTML = `


${Navbar()}


<main>


<section class="hero" data-aos="fade-up">


<div class="container hero-grid">


<div class="hero-content">


<span class="hero-tag">

FABRICACIÓN DIGITAL

</span>


<h1>

Creamos piezas.
<br>
Creamos soluciones.

</h1>


<p>

Transformamos ideas digitales en objetos reales
mediante fabricación aditiva y diseño especializado.

</p>



<div class="hero-buttons">


<a href="#cotizar" class="btn-primary">

Cotizar proyecto

</a>


<a class="btn-secondary">

Ver trabajos

</a>


</div>


</div>



<div class="hero-image">

<img src="/images/printer.png"> 


</div>

</div>

<div class="scroll-indicator">

    <span></span>

    <p>Explorar</p>

</div>

</section>

${Services()}

${Stats()}

${Projects()}

${Solutions()}

${Features()}


${Quote()}

</main>


${Footer()}



<a
href="https://wa.me/529671628806?text=Hola%20Vertex%20Lab,%20me%20interesa%20cotizar%20un%20proyecto."
class="whatsapp"
target="_blank"
aria-label="Contactar por WhatsApp"
>

<span class="whatsapp-text">
Cotiza por WhatsApp
</span>


<svg viewBox="0 0 32 32">

<path fill="currentColor"
d="M19.11 17.38c-.29-.14-1.72-.85-1.99-.94-.27-.1-.47-.14-.67.14-.2.29-.77.94-.94 1.13-.17.2-.35.22-.64.08-.29-.14-1.22-.45-2.33-1.43-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.35.43-.52.14-.17.19-.29.29-.49.1-.2.05-.37-.02-.52-.08-.14-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.08-.79.37-.27.29-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.14.2 2.09 3.19 5.06 4.47.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.08 1.72-.7 1.97-1.38.24-.68.24-1.26.17-1.38-.08-.12-.27-.2-.57-.35z"/>


<path fill="currentColor"
d="M16.01 3C8.84 3 3 8.84 3 16c0 2.53.74 4.99 2.13 7.1L3 29l6.08-2.08A12.9 12.9 0 0016.01 29C23.17 29 29 23.17 29 16S23.17 3 16.01 3zm0 23.7c-2.14 0-4.23-.58-6.05-1.69l-.43-.25-3.61 1.24 1.18-3.52-.28-.46A10.67 10.67 0 015.3 16c0-5.91 4.8-10.71 10.71-10.71S26.72 10.09 26.72 16 21.92 26.7 16.01 26.7z"/>

</svg>


</a>

`;

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {

    if (window.scrollY > 50) {

        header.classList.add('scrolled');

    } else {

        header.classList.remove('scrolled');

    }

});
const projectImages = document.querySelectorAll('.project-image img');

projectImages.forEach(img => {

    img.addEventListener('click', () => {

        const overlay = document.createElement('div');

        overlay.className = 'lightbox';

        overlay.innerHTML = `

            <div class="lightbox-content">

                <button class="lightbox-close">&times;</button>

                <img src="${img.src}" alt="${img.alt}">

            </div>

        `;

        document.body.appendChild(overlay);

        overlay.addEventListener('click', (e)=>{

            if(
                e.target.classList.contains('lightbox') ||
                e.target.classList.contains('lightbox-close')
            ){
                overlay.remove();
            }

        });

    });

});

initQuoteForm();

initMenu();