const imgJumbo = document.querySelector('.jumbo');
const container = document.querySelector('.container');
container.addEventListener('click',function (e) {
    if (e.target.className == 'thumb') {
        imgJumbo.src = e.target.src;
        imgJumbo.classList.add('fade');
        setTimeout(function () {
            imgJumbo.classList.remove('fade');
        },500);
        const thumbs = document.querySelectorAll('.thumb');
        thumbs.forEach(function (thumb) {
            thumb.className = 'thumb'
        });

        e.target.classList.add('active');
    }
})

