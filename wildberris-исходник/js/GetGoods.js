const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link')

    const getData = () => {
        fetch('/db/db.json')
            .then((Res) => Res.json())
            .then((data) => {
                console.log(data);        
                localStorage.setItem('goods', JSON.stringify(data));
            })
    }

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault() // предотвращает стандартное поведение ссылок, убираем # и она не появляется в адресной строке
            getData()
        })
    })

    localStorage.setItem('goods', JSON.stringify([1, 2, 3, 4, 5]))

   // console.log(localStorage.getItem('goods')); чтоб развернуть массив используем: 
   // console.log(JSON.parse(localStorage.getItem('goods'))); получили массив. Сохраним массив в переменную: 
   const goods = JSON.parse(localStorage.getItem('goods'))
   
   console.log(goods);
   console.log(localStorage);

   localStorage.removeItem('goods') // таким образом можно удалить информацию из localStorage

   console.log(localStorage);
}
getGoods()