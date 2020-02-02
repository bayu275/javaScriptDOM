// DOM Selection

// const variabel yang tidak akan saya ubah
// harus ada node root nya

// 1. document.getElementById() ==> element

// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = '#ccc';
// judul.innerHTML = 'Bayu Dirgantara';

// 2. document.getElementsByTagName() ==> HTML Collection
// const p = document.getElementsByTagName('p');
// tidak bisa di manipulasi seperti ini
// p.style.backgroundColor = 'lightblue';

// ini benar
// p[0].style.backgroundColor = 'lightblue';
// p[1].style.backgroundColor = 'lightblue';
// p[2].style.backgroundColor = 'lightblue';
// p[3].style.backgroundColor = 'lightblue';

// ini benar dengan looping
// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'lightblue';
// }

// walaupun hanya punya 1 tag h1 di document tetap hasilnya HTML Collection
// const h1 = document.getElementsByTagName('h1');
// cara mengakalinya kita bisa langsung tambahkan index nya
// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';
// atau
// const h1 = document.getElementsByTagName('h1');
// h1[0].style.fontSize = '50px';

// 3. document.getElementsByClassName() ==> HTML Collection
// tidak bisa di manipulasi seperti ini
// const p1 = document.getElementsByClassName('p1');
// p.innerHTML = 'ini di ubah dengan javaScript';
// cara mengakalinya kita bisa tambahkan index nya
// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = 'ini di ubah dengan javaScript';
// atau
// const p1 = document.getElementsByClassName('p1');
// p1[0].innerHTML = 'ini di ubah dengan javaScript';


// untuk getElementsByTagName() & getElementsByClassName()
// hasill nya sama sama HTML Collection

// fungsi ini sangat familliar dengan penggunaan css
// 4. document.querySelector() ==> element
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';
// atau ini
// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';
// atau ini
// const p = document.querySelector('p');
// p.innerHTML = 'ini di ubah melaui javaScript';


// 5. document.querySelectorAll() ==> NODE List == HTML Collection
// tidak bisa di manipulasi seperti ini
// const p = document.querySelectorAll('p');
// p.style.backgroundColor = 'blue';
// cara mengakalinya kita bisa tambahkan index nya
// const p = document.querySelectorAll('p')[0];
// p.style.backgroundColor = 'blue';
// atau
// const p = document.querySelectorAll('p');
// p[1].style.backgroundColor = 'blue';
// ini benar dengan looping
// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'blue';
// }

// MENGGUNAKAN Node ROOT
// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');
// p4.style.backgroundColor = 'orange';
// atau ini
// const sectionB = document.querySelector('section#b');
// const p4 = sectionB.getElementsByTagName('p')[0];
// p4.style.backgroundColor = 'orange';