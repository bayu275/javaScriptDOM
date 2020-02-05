let scoreP = 0;
let scoreC = 0;

const info = document.querySelector('.info');
const tsComp = document.querySelector('.area-komputer p');
const tsPlayer = document.querySelector('.area-player p');
const sPlayer = document.querySelector('.player p');
const sComp = document.querySelector('.comp p');
const ktkRestart = document.querySelector('.container .restart');

function score(x) {
    hasil = x;
    if (hasil === 'MENANG') return scoreP += 1;
    if (hasil == 'KALAH') return scoreC += 1;
}

function getPilihanComputer() {
    const comp = Math.random();
    if (comp < 0.33) return 'semut';
    if (comp < 0.66) return 'Orang';
    return 'gajah';
}

function getHasil(comp, player) {
    if (player == comp) return 'SERI';
    if (player == 'orang') return (comp == 'semut') ? 'MENANG' : 'KALAH';
    if (player == 'semut') return (comp == 'gajah') ? 'MENANG' : 'KALAH';
    if (player == 'gajah') return (comp == 'Orang') ? 'MENANG' : 'KALAH';
}

const imgComputer = document.querySelector('.img-komputer');

function putar() {
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuAwal = new Date().getTime();
    setInterval(function () {
        if (new Date().getTime() - waktuAwal > 1000) return clearInterval;
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if (i == gambar.length) return i = 0;
    }, 100)
}

function restart() {
    putar();
    setTimeout(function () {
        imgComputer.setAttribute('src', 'img/gajah.png');
        hasil = '';
        info.innerHTML = hasil;
        tsComp.classList.add('tsComp');
        tsPlayer.classList.add('tsPlayer');
        sPlayer.innerHTML = 0;
        sComp.innerHTML = 0;
        ktkRestart.classList.add('kotak');
        return
    }, 1000)
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function (pil) {
    pil.addEventListener('click', function () {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        ktkRestart.classList.remove('kotak');
        let hasil = getHasil(pilihanComputer, pilihanPlayer);
        score(hasil);
        ktkRestart.addEventListener('click', function () {
            restart();
        });
        const imgComputer = document.querySelector('.img-komputer');
        putar();
        setTimeout(function () {
            imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
            info.innerHTML = hasil;
            sPlayer.innerHTML = scoreP;
            sComp.innerHTML = scoreC;
            if (hasil == 'MENANG') {
                tsPlayer.classList.remove('tsPlayer');
                tsComp.classList.add('tsComp');
            }
            if (hasil == 'KALAH') {
                tsComp.classList.remove('tsComp');
                tsPlayer.classList.add('tsPlayer');
            }
            if (hasil == 'SERI') {
                tsComp.classList.remove('tsComp');
                tsPlayer.classList.remove('tsPlayer');
            }
        }, 1000)
    })
})


// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click',function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanComputer,pilihanPlayer);
//     // console.log(pilihanComputer);
//     // console.log(pilihanPlayer);
//     // console.log(hasil);
//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src','img/'+pilihanComputer+'.png');
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil; 
// })

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click',function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(pilihanComputer,pilihanPlayer);
//     // console.log(pilihanComputer);
//     // console.log(pilihanPlayer);
//     // console.log(hasil);
//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src','img/'+pilihanComputer+'.png');
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil; 
// })

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click',function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil(pilihanComputer,pilihanPlayer);
//     // console.log(pilihanComputer);
//     // console.log(pilihanPlayer);
//     // console.log(hasil);
//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src','img/'+pilihanComputer+'.png');
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil; 
// })