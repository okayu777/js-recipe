const display = document.getElementById("display")
const button = document.getElementById("button")

let count = 0

const countUp = function() {
  count += 1
  console.log(count)
  display.textContent = count / 100
}

let id = null

button.onclick = function() {
  if (id === null) {
    id = setInterval(countUp, 10)
    button.textContent = "ザ・ワールド"
  } else {
    clearInterval(id)
    id = null
    button.textContent = "そして時は動き出す"
  }
}
