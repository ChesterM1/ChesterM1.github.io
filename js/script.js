window.addEventListener('DOMContentLoaded', ()=>{

    const hamburgerBtn = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const menuLink = document.querySelectorAll('.menu_link');


    hamburgerBtn.addEventListener('click', (e) =>{
        hamburgerBtn.classList.toggle('hamburger_active')
        menu.classList.toggle('menu_active');

        menuLink.forEach(item=>{
            item.addEventListener('click', ()=>{

                hamburgerBtn.classList.toggle('hamburger_active')
                menu.classList.toggle('menu_active');
            })
        });
        
    })
})
