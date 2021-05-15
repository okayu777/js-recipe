const display = document.getElementById("display")
const teaButton = document.getElementById("tea-button")
const cokeButton = document.getElementById("coke-button")
const addmymoneyButton = document.getElementById("add-my-money")
const myMoney = document.getElementById("my-money")
const addamountButton = document.getElementById("add-amount-money")
const amountmoney = document.getElementById("amount-money")
let mymoney = 0
let amoutMoney = 0

addmymoneyButton.onclick = function() {
  mymoney += 1000
  myMoney.textContent = mymoney
  console.log(mymoney)
}

addamountButton.onclick = function() {
  mymoney -= 100
  amountMoney += 100
  myMoney.textContent = mymoney
}

const createImage = (drink) => {
  let drinkImgSrc = ""
  switch (drink) {
    case "tea":
      drinkImgSrc =
        "https://www.itoen.jp/files/products/japanese_tea/210315%20ikiikiPKG.jpg"
      break
    case "coke":
      drinkImgSrc =
        "https://www.cocacola.jp/images/product/cola_bottle_img_2020.png"
      break
    default:
      drinkImgSrc =
        "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
  }
  const figure = document.createElement("figure")
  figure.classList.add("vending-machine__items-container__figure")
  const img = document.createElement("img")
  img.src = drinkImgSrc
  img.classList.add("vending-machine__items-container__figure__img")
  figure.append(img)
  return figure
}

teaButton.onclick = () => {
  const image = createImage("tea")
  display.append(image)
}
cokeButton.onclick = () => {
  const image = createImage("coke")
  display.append(image)
}
