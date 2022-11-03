/* ================================================== Menu Show Y hidden  ======================================================== */
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')


/* ================================================== Menu--Show  ======================================================== */

/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}




/* ================================================== Menu--Hidden  ======================================================== */

/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')
    })
}




/* ================================================== Skills  ======================================================== */

const skillsContent = document.getElementsByClassName('skills_content'),
      skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills(){
    let itemClasss = this.parentNode.className
    for(i=0; i < skillsContent.length; i++ ){
        skillsContent[i].className = 'skills_content skills_close'
    }
    if(itemClasss === 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open'
    }
}
skillsHeader.forEach((el) => {
    el.addEventListener('click',toggleSkills)
})


/* ================================================== Qualification Tabs  ======================================================== */

const tabs = document.querySelectorAll('[data-target'),
      tabContents = document.querySelectorAll('[data-content')
tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.CDATA_SECTION_NODE.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_Active')

        tab.forEach(tab =>{
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
})



/* ================================================== Service Modal  ======================================================== */
const modalViews = document.querySelectorAll('.services_modal'),
      modalBtns = document.querySelectorAll('.services_button'),
      modalCloses = document.querySelectorAll('.services_modal-close')

let modal= function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn,i) =>{
    modalBtn.addEventListener('click', ()=>{
        modal(i)
    })
})
modalCloses.forEach((modalClose) =>{
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})

/* ================================================== Menu--Hidden  ======================================================== */




/* ================================================== Menu--Hidden  ======================================================== */



/* ================================================== Menu--Hidden  ======================================================== */


/* ================================================== Menu--Hidden  ======================================================== */


/* ================================================== Menu--Hidden  ======================================================== */