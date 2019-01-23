const button = document.querySelector('button')
const answerBox= document.querySelector('.box')

button.addEventListener('click',getTotal)

function getTotal(){
  const url = 'http://localhost:3000/getData?number=10'
  fetch(url,{
    method: 'get'
  }).then(res=>{
    return res.text()
  }).then(res=>{
    console.log(res)
    button.style.display='none'
    const ans=`<div class="number">${res}</div>` 
    answerBox.insertAdjacentHTML('afterbegin',ans)
  }).catch(err=>{
    console.log('err')
  })
}

