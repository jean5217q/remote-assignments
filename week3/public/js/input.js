const title = document.querySelector('.title')
const input= document.querySelector('input')
const button = document.querySelector('button')
const warn= document.querySelector('.warn')
const answerBox= document.querySelector('.box')

button.addEventListener('click',clickHandler)

function clickHandler(e){
  if(input.value=='') {
    warn.style.display='block'
    input.style.border='solid 1px #ef8a47'
    e.preventDefault()
    
  }
}