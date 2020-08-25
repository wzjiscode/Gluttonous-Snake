let list = []
let n = 0
let q = 0

const bindSnake = function(num, k, kid, m) {
    let ul = e('#nav-ul')
    let li = ul.children
    let span = e('.head-grade')
    let s = m
    if (li[num + k] !== undefined) {
        list.push(num + k)
        if (Array.isArray(s) && s.length !== 0) {
            for (let i = 0; i < s.length; i++) {
                if (s[i] === num + k) {
                    s.splice(i, 1)
                    n++
                    played('eat.mp3', false)
                    span.innerHTML = `分数:${n}`
                }
            }
        } else if (n === 10){
            plays('9981.mp3', false)
            clearInterval(kid)
            alert('You Win!')
        }
        if (list.length >= n + 2) {
            for (let i = 1; i < list.length; i++) {
                if (i === list.length - 1) {
                    li[list[i]].style.backgroundColor = 'red'
                    // log('111')
                } else if (i === 1) {
                    li[list[i]].style.backgroundColor = 'blue'
                } else {
                    li[list[i]].style.backgroundColor = 'yellow'
                }
            }
            let m = list.shift()
            li[m].style.backgroundColor = 'transparent'
        } else {
            bindSnake(num, k, kid)
        }
    } else {
        plays('9882.mp3', false)
        clearInterval(kid)
        alert('game over')
    }
}

const fond = function() {
    let li = es('li')
    for (let i = 0; i < li.length; i++) {
        li[i].style.backgroundColor = ''
    }
    let m = f1(12)
    for (let i = 0; i < m.length; i++) {
        li[m[i]].style.backgroundColor = 'black'
    }
    return m
}

let k = 1

const keys = function(num) {
    window.addEventListener('keydown',function (event) {
        if (event.key === 'ArrowUp') {
            k = -num
        } else if (event.key === 'ArrowLeft') {
            k = -1
        } else if (event.key === 'ArrowRight') {
            k = 1
        } else if (event.key === 'ArrowDown') {
            k = num
        }
    })
}

const draw = function(len) {
    let ul = e('#nav-ul')
    let html = template()
    let length = len
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            ul.insertAdjacentHTML('beforeend', html)
        }
    }
    let li = e('.nav-li')
    if (li.classList.contains('nav-li')) {
        li.style.width = '15px'
        let s = parseInt(li.style.width, 10)
        let nav = e('.nav')
        ul.style.width = String(s * length) + 'px'
        ul.style.height = String(s * length) + 'px'
        nav.style.width = ul.style.width
        nav.style.height = ul.style.height
    }
}

let kid = null
const bindSit = function() {
    let timer = 8000 / 60
    let num = 200
    let m = fond()
    kid = setInterval(function() {
        bindSnake(num, k, kid, m)
        num += k
    }, timer)
}

const beginGame = function() {
    let begins = e('.begin')
    boxShow(begins, 'click', function(event){
        clearInterval(kid)
        bindSit()
        plays('贪吃蛇大作战.mp3', true)
    })
}

const beginGames = function() {
    let begins = e('.begins')
    boxShow(begins, 'click', function(event){
        window.location.reload()
    })
}

const bindEvent = function() {
    let num = 30
    draw(num)
    keys(num)
    beginGame()
    beginGames()
}

const __main = function () {
    bindEvent()
}

__main()