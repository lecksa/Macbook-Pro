let img = document.querySelector('.wrap_gallery')

let color = document.querySelector('.color')//text
let price = document.querySelector('.price')//text

let btncol = document.querySelectorAll('.gry')//btncolor

let btnprice = document.querySelectorAll('.btn')//btnprice
let active_2 = document.querySelector('.active_2')//btnprice active

let imgs = {
    White: './img/white.png',
    SpaceGray: './img/gray.png'
}

let prices = {
    GB_512_SSD: '$1999',
    TB_1_SSD: '$2199',
    TB_2_SSD: '$2799',
    TB_4_SSD: '$3199'
}

btncol.forEach(btn => {
    btn.onclick = () => {
        btncol.forEach(btn => btn.classList.remove('active'))
        let key = btn.getAttribute('id')
        img.style.backgroundImage = `url(${imgs[key]})`
        btn.classList.add('active')
        color.innerHTML = btn.innerHTML
    }
})

btnprice.forEach(btn => {
    btn.onclick = () => {
        btnprice.forEach(btn => btn.classList.remove('active_2'))
        let key = btn.getAttribute('id')
        price.innerHTML = `${prices[key]}`
        btn.classList.add('active_2')
    }
})