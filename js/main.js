const log = console.log.bind(console)

const e = function(element) {
    let ele = document.querySelector(element)
    if (ele === null) {
        let s = `该元素${element},在页面中未找到。`
        alert(s)
        return null
    } else {
        return ele
    }
}

const es = function(element) {
    let ele = document.querySelectorAll(element)
    if (ele.length === 0) {
        let s = `该元素${element},在页面中未找到。`
        alert(s)
        return []
    } else {
        return ele
    }
}

const template = function () {
    return `<li class="nav-li"></li>`
}

const boxAll = function(element, eventName, callback) {
    for (let i = 0; i < element.length; i++) {
        element[i].addEventListener(eventName, callback)
    }
}

const boxShow = function(element, eventName, callback) {
    element.addEventListener(eventName, callback)
}

let musicAudio = new Audio()
const plays = function(src, bool) {
    if (musicAudio!=null) {
        musicAudio.pause()
        musicAudio = null
    }
    musicAudio = new Audio(src)
    musicAudio.loop = bool
    musicAudio.play()
}

const played = function(src, bool) {
    let audio = new Audio(src)
    audio.loop = bool
    audio.play()
}