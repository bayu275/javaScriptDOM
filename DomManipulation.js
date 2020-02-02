// Manipulasi ELEMENT

// 1. innerHTML
// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Bayu Dirgantara<em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'Hello World';

// 2. element.sytle
// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'blue';

// 3. element.setAttribute()
// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name','Bayu');
// const a = document.querySelector('section#a a');
// a.setAttribute('id','link');

// menambahkan attr
// a.setAttribute('name','bayu');

// menghapus attr
// a.removeAttribute('href');

// 4. element.classList
// const p2 = document.querySelector('.p2');
// menambahkan class
// p2.classList.add('class','label');

// menghapus class
// p2.classList.remove('class','label');

// toogle seperti mematikan lampu
// p2.classList.toggle('class','label');

// mengecek class yang ada
// p2.classList.item(2);

// menanya ke js ada kelas yang nama nya dua
// p2.classList.contains('dua');

// mengganti class ex: mengganti class=tiga jadi class=empat
// p2.classList.replace('tiga','empat');


// Manipulasi NODE

// 1. buat element baru
// simpan ke tag akhir
// 1.1 document.createElement()
// const pBaru = document.createElement('p');
// 1.2 document.createTextNode()
// const teksPbaru = document.createTextNode('Paragraf Baru');
// simpan tulisan di dalam tag p kosong
// pBaru.appendChild(teksPbaru);
// simpan pBaru di akhir sectionA
// const sectionA = document.getElementById('a');
// sectionA.appendChild(pBaru);


// IsertBefore()

// simpan ke tag yang di inginkan
// 1.1 document.createElement()
// const liBaru = document.createElement('li');
// 1.2 document.createTextNode()
// const teksLiBaru = document.createTextNode('ItemBaru');
// simpan tulisan kedalam tag li
// liBaru.appendChild(teksLiBaru);
// cari parentnya
// const ul = document.querySelector('section#b ul');
// cari saudaranya terdekatnya
// const li2 = ul.querySelector('li:nth-child(2)');
// simpan dia dekat saudara yang di inginkannya
// 1.3 inserBefore()
// ul.insertBefore(liBaru,li2);

// remove.child()

// cari parent nya
// const sectionA = document.getElementById('a');
// cari childnya yang mau di remove
// const link = document.getElementsByTagName('a')[0];
// hapus childnya
// sectionA.removeChild(link);

// replace.child()

// cari parent nya
// const sectionB = document.getElementById('b');
// cari child yang mau di replace/ganti
// const p4 = sectionB.querySelector('p');
// create.element
// const h2Baru = document.createElement('h2');
// create text node
// const judulBaru = document.createTextNode('Bayu Dirgantara');
// masukan text node ke dalam element baru
// h2Baru.appendChild(judulBaru);
// replace chilld tag yang ingi di ganti dengan tag baru
// sectionB.replaceChild(h2Baru,p4);