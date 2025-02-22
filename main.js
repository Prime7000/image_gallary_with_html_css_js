
const model = document.getElementById('model')
var pop = document.getElementById('pop')
var close = document.getElementById('close')


var items = document.querySelectorAll(".item img") 

items.forEach(item => {
  item.addEventListener('click', () => {
    model.style.display = "flex"
    document.getElementById('model_img').src = item.src
    console.log(item.src)
  })
})

close.addEventListener('click', () => {
  model.style.display = "none"
})

