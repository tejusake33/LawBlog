const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click',()=>{
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    } else{
        menu.classList.add('hidden');
    }
})


const btn = document.querySelector('#btn');
const dropdown = document.querySelector('#dropdown');

btn.addEventListener('click',()=>{
    if(dropdown.classList.contains('hidden')){
        dropdown.classList.remove('hidden');
    } else{
        dropdown.classList.add('hidden');
    }
})

const ibtn = document.querySelector('#ibtn');
const imenu = document.querySelector('#imenu');

ibtn.addEventListener('click',()=>{
    if(imenu.classList.contains('hidden')){
        imenu.classList.remove('hidden');
    } else{
        imenu.classList.add('hidden');
    }
})

const cbtn = document.querySelector('#cbtn');
const cmenu = document.querySelector('#cmenu');

cbtn.addEventListener('click',()=>{
    if(cmenu.classList.contains('hidden')){
        cmenu.classList.remove('hidden');
    } else{
        cmenu.classList.add('hidden');
    }
})

const tbtn = document.querySelector('#tbtn');
const tmenu = document.querySelector('#tmenu');

tbtn.addEventListener('click',()=>{
    if(tmenu.classList.contains('hidden')){
        tmenu.classList.remove('hidden');
    } else{
        tmenu.classList.add('hidden');
    }
})