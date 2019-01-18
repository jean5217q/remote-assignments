//顯示下半部分
const btn = document.querySelector('.load-btn') //按鈕
const section = document.querySelector('.show-area') //要顯示區塊

function sectionHandler(){
  btn.classList.add('hide-btn')
  setTimeout(function() {
    btn.style.display = 'none'
    section.classList.add('show')
  },120)
}
btn.addEventListener('click',sectionHandler)

// small nav
const menu = document.querySelector('.menu-btn') //導覽列標籤外框
const menuIcon = document.querySelectorAll('.menu-icon > span') //導覽列標籤變形
const nav = document.querySelector('.sm-nav-list') //導覽列
const body = document.querySelectorAll('.nav-active') //導覽列

//一般開關
function toggleHandler(e){
  nav.classList.toggle('show-nav')
  menuIcon.forEach(el=>el.classList.toggle('active')) 
  //滾動控制
  if (nav.classList.contains('show-nav')) {
    document.addEventListener('touchmove',stopsScroll, {passive: false})
  }
  else {
    document.removeEventListener('touchmove',stopsScroll,{passive: true}); 
  }
}
//點非導覽列關閉
function closeNavHandler(e){
    if(!e.target.classList.contains('nav-active')) {
      nav.classList.remove('show-nav')
      menuIcon.forEach(el=>el.classList.remove('active'))
      //滾動控制
      document.removeEventListener('touchmove',stopsScroll,{passive: true});
    }
}
//停止滾動
function stopsScroll(e){
  e.preventDefault()
}

menu.addEventListener('click',toggleHandler)
window.addEventListener('click',closeNavHandler)



//banner change
const topHero = document.querySelector('.top-hero') //banner
const heroImg = document.querySelector('.top-hero-image') //banner圖
const sub = document.querySelector('.sub') //英文
const desc = document.querySelector('.desc > .text') //中文

let flag = false
function changeTopHandler(){
  heroImg.classList.toggle('changeBgi') 
  if(!flag) {
    sub.innerHTML = `<span>Things</span><span>to</span><span>do</span><span>in</span>`
    desc.textContent = `玩轉京都，在地人推薦的十大玩法`
    flag = true
  }
  else {
    sub.innerHTML = 
    `<span>Let's</span><span>visit</span><span>in</span>`
    desc.textContent = `說走就走！來場完美的京都の旅`
    flag = false
  }
}

topHero.addEventListener('click',changeTopHandler)

