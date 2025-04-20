// инкапсуляция кода: 
const cart = function() {
    const cartBtn = document.querySelector('.button-cart') 
    const cart = document.getElementById('modal-cart')
    const closeBtn = cart.querySelector('.modal-close')


    console.dir(cartBtn);

    // cartBtn.onclick = function () {//  от родителя к свойству через точку. в значение сво-ва занесем ф-ию
    //     console.log('click');
    // }

    // cartBtn.addEventListener('click', function () { //через addEventListener можно повесить множество фий на одно событие
    //     console.log('click1');
    // })

    // по клику будем открывать само МОДАЛЬНОЕ ОКНО с корзинкой: 
    // мод. окно находится в <div class="overlay" id="modal-cart">
    // const cart = document.querySelector('#modal-cart')// можно найти еще через document.getElementById('modal-cart')? он будет отрабатывать быстрее
    console.log(cart);

    cartBtn.addEventListener('click', function () {
        cart.style.display = 'flex'
    })
    closeBtn.addEventListener('click', function () {
        cart.style.display = '' // или none. Пустое место перезаписывает 'flex' 
    })
}
cart()