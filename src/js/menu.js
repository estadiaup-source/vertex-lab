export function initMenu(){

    const menuButton = document.querySelector('#menuToggle');

    const nav = document.querySelector('.nav-links');


    if(!menuButton || !nav) return;



    menuButton.addEventListener('click',()=>{


        nav.classList.toggle('active');


        menuButton.classList.toggle('open');


    });



    const links = document.querySelectorAll('.nav-links a');


    links.forEach(link=>{


        link.addEventListener('click',()=>{


            nav.classList.remove('active');


            menuButton.classList.remove('open');


        });


    });


}