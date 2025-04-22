const search = function() {
    const input = document.querySelector('.search-block > input')     // внутри .search-block ищем input
    const searchBtn = document.querySelector('.search-block > button')

    // input.addEventListener('input', (event) => {//function заменили () =>, перешли на стрелочные фии. Затем обозначим событие на event
    
    //     // console.log('ввод');
    //     console.log(event.target.value);
    
    // })    
    searchBtn.addEventListener('click', () => { // обработчик событий на кнопку поиска
        console.log(input.value);
    }) 
}
search();










