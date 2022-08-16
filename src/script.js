let menu = document.querySelector("#menu");
let hamburger = document.querySelector("#hamburger");

hamburger.addEventListener('click',()=>{
    console.log('hello');
    if(menu.classList.contains('hidden')){
        menu.classList.add('flex');
        menu.classList.remove('hidden');
    }
    else{
        menu.classList.add('hidden');
    }
})