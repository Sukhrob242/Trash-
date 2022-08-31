window.addEventListener ( 'DOMContentLoaded', function(){
    let products = document.querySelectorAll ('product'),
    buttons = document.querySelectorAll ('button'), 
    openBtn = document.querySelectorAll ('open') ;

    function createCart (){
        let cart = document.createElement ('div'),
        field = document.createElement ('div'),
        heading = document.createElement('h2'),
        closeBtn =document.createElement ('button');
        
        cart.classList.add('card')
        field.classList.add('card-field')
        closeBtn.classList.add('close')

        heading.textContent = 'our basket', 
        closeBtn.textContent = 'close'
        
    }
    createCart 
})



