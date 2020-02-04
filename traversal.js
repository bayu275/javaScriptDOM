// const card = document.querySelector('.card');
// const btnClose = card.querySelector('.close');
// btnClose.addEventListener('click',function () {
//    card.style.display = 'none'; 
// });

// DOM Traversal
// const card = document.querySelectorAll('.card');
// const btnClose = document.querySelectorAll('.close');
// for (let i = 0; i < btnClose.length; i++) {
//     btnClose[i].addEventListener('click', function (e) {
//         // btnClose[i].parentElement.style.display = 'none';
//         e.target.parentElement.style.display = 'none';
//     })
// }

// const btnCloes = document.querySelectorAll('.close');
// btnCloes.forEach(function (i) {
//     i.addEventListener('click',function (e) {
//         e.target.parentElement.style.display = 'none';
//         // prevent default
//         e.preventDefault();
//         // even bubling
//         e.stopPropagation();
//     })
// });


// const cards = document.querySelectorAll('.card');
// cards.forEach(function (i) {
//     i.addEventListener('click',function (e) {
//         alert('ok');
//     });
// });


// const nama = document.querySelector('.nama');
// console.log(nama.previousElementSibling);



const container = document.querySelector('.container');
container.addEventListener('click',function (e) {
    if (e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
    }
})
