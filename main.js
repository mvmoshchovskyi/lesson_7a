// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let id = document.querySelector('#text')
// let btn = document.querySelector('#btn')

// btn.onclick = () => {
//     id.style.display = 'none'
// }
//aбо так
//     btn.onclick = () => {
//         id.hidden
//             ? id.hidden = false
//             : id.hidden = true
//     }
// // - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// btn.onclick = () => {
//     btn.style.display = 'none'
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let input = document.getElementById('number')
// let submit = document.getElementById('submit')
//
// submit.onclick = () => {
//     const value = input.value
//     if (value < 18 && value > 0) {
//         alert('your age less then 18 ')
//     } else {
//         alert('everithing ok')
//     }
// }

// - Создайте меню, которое раскрывается/сворачивается при клике
//     let mainMenu = document.getElementById('mainMenu');
//     let subMenu = document.getElementById('subMenu');
//
// let flag = false
// mainMenu.onclick = event => {
//     if (flag) {
//         subMenu.style.display = "block";
//         flag = false;
//     } else {
//         subMenu.style.display = "none";
//         flag = true
//     }
// }

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
let comment= [
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'}
]

let content = document.querySelector("#content")
comment.forEach(item=>{
    let div = document.createElement("div")
    let h2 = document.createElement("h2")
    let p= document.createElement("p")
    let button= document.createElement("button")

    button.innerText = 'hide'
    h2.innerText = item.title
    p.innerText = item.body

    button.onclick = () => {
        h2.hidden
            ? h2.hidden = false
            : h2.hidden = true
    }
    div.appendChild(h2)
    div.appendChild(p)
    div.appendChild(button)
    content.appendChild(div)

})

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let but = document.getElementById('but')
let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')
let input21 = document.getElementById('input21')
let input22 = document.getElementById('input22')

but.onclick = () => {
    console.log(document.forms.form1.input1.value);
    console.log(document.forms.form1.input2.value);
    console.log(document.forms.form2.input21.value);
    console.log(document.forms.form2.input22.value);
}

// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.
let cont = document.getElementById('cont')
function createTable(rows,cols,tag) {
    const table = document.createElement('table');


    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            const td = document.createElement('td');
            //td.innerHTML = i.toString()+ j.toString()
            td.innerHTML= i +''+ j
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
    tag.appendChild(table)
}
createTable(4,5,cont)
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
let imgArray = [
    {
        id:1,
        img_url: '142019055_1.jpg'
    },
        {
        id:2,
        img_url: '142019055_2.jpg'
    },
        {
        id:3,
        img_url: '142019055_3.jpg'
    },

]

let con = document.getElementById('con')
const img = document.createElement('img')
const btn1 = document.createElement('button')
const btn2 = document.createElement('button')

btn1.innerText ="left"
btn2.innerText ="right"

let index = 0
img.width = 300

img.src = imgArray[index].img_url
con.appeChild(img)
con.appeChild(btn1)
con.appeChild(btn2)

btn1.onclick =()=>{
index -1 <0
    ?index = imgArray.length-1
    :index=index-1

    img.src = imgArray[index].img_url
}
btn2.onclick =()=>{
index +1 < imgArray.length-1
    ?index = 0
    :index=index+1

    img.src = imgArray[index].img_url
}

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
//
//
// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку
//
//
//
// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
//
// -- взять массив пользователей
let users = [
                {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
                {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
                {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
                {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
                {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
                {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
                {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
                {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
                {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
            ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

// let resolver = document.getElementsByClassName('resolver')[0];
// for (const user of users) {
//     let div = document.createElement('div')
//     div.innerText=JSON.stringify(users)
//     resolver.appendChild(div)
// }
// let cbox = document.getElementById('cbox')
// cbox.onclick = function () {
//     resolver.innerText = ''
//     if (cbox.checked){
//         for (const user of users ) {
//             let div = document.createElement('div')
//             div.innerText = JSON.stringify(user)
//             resolver.appendChild(div)
//         }
//     }
//     else {
//         for(const user of users) {
//             if(user.age > 29) {
//                 let div = document.createElement('div')
//                 div.innerText= JSON.stringify(user)
//                 resolver.appendChild(div)
//             }
//         }
//     }
//
// }


// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
//
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан