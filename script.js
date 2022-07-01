const getNum = (max = 100, min = 0) => Math.floor(Math.random() * (max - min + 1) + min)

const starCreator = () => {
  let starSize = getNum(10, 3) + 'px'
  let starTop = getNum() + '%'
  let starLeft = getNum() + '%'
  let starDuration = getNum(10000, 3000) + 'ms'
  let star = document.createElement('span')
  star.classList.add('star')
  star.style.width = starSize
  star.style.height = starSize
  star.style.top = starTop
  star.style.left = starLeft
  star.style.animationDuration = starDuration
  window.document.body.insertAdjacentElement('beforeend', star)
}

const starNum = getNum(100, 70)

for (let i = 0; i < starNum; i++) {
  starCreator()
}