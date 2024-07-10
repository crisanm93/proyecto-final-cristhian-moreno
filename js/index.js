/* deslizamiento menu */
const btnSection1 = document.querySelector('#btn-section1');
const btnSection2 = document.querySelector('#btn-section2');
const btnSection3 = document.querySelector('#btn-section3');
const btnSection4 = document.querySelector('#btn-section4');

const section1 = document.querySelector('#section1')
const section2 = document.querySelector('#section2')
const section3 = document.querySelector('#section3')
const section4 = document.querySelector('#section4')

btnSection1.addEventListener('click', ()=>{
    section1.scrollIntoView({
        behavior:'smooth'
    })
});

btnSection2.addEventListener('click', ()=>{
    section2.scrollIntoView({
        behavior:'smooth'
    })
});

btnSection3.addEventListener('click', ()=>{
    section3.scrollIntoView({
        behavior:'smooth'
    })
});

btnSection4.addEventListener('click', ()=>{
    section4.scrollIntoView({
        behavior:'smooth'
    })
});

