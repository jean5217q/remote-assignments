const title = document.querySelector('.title')
const input= document.querySelector('input')
const button = document.querySelector('button')
const warn= document.querySelector('.warn')
const answerBox= document.querySelector('.box')


button.addEventListener('click',getTotal)

function getTotal(){
  const val = input.value
  const reg = /^\+?[1-9][0-9]*$/
  if(!reg.test(val)) {
    warn.style.display='block'
    input.style.border='solid 1px #ef8a47'
  }
  else {
    warn.style.display='none'
    const url = `http://localhost:3000/getData?number=${val}`
    fetch(url,{
      method: 'get'
    }).then(res=>{
      return res.text()
    }).then(res=>{
      button.style.display='none'
      input.style.display='none'
      const ans=`<div class="number">${res}</div>` 
      answerBox.insertAdjacentHTML('afterbegin',ans)
      title.textContent=`1+...${val}=?`
    }).catch(err=>{
      console.log('err')
    })
  }
}