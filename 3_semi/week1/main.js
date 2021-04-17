const choice1 = document.getElementById("choice1")
const choice2 = document.getElementById("choice2")
const choice3 = document.getElementById("choice3")
const display = document.getElementById("display")

choice1.onclick = function() {
  display.textContent = "残念！それは赤い飛ぶやつ！"
}
choice2.onclick = function() {
  display.textContent = "残念！それは黒くて速いやつ！"
}
choice3.onclick = function() {
  display.textContent = "正解！猫パンチ！"
}
