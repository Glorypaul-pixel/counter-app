let saver = document.getElementById("saver-app")
let counter = document.getElementById("count-app")
let count = 0

function increment() {
    count += 1
    counter.textContent = count
}

function save() {
    let countStr = count +  " - "
    saver.textContent += countStr
    counter
    counter.textContent = 0
    count = 0
}


