import React from 'react'
import LgNav from './LgNav'
import SmNav from './SmNav'

const Header = props => {
  const navList=[
    {
      title: '體驗京都',
      url: '/experience'
    },
    {
      title: '季節特輯',
      url: '/season'
    },
    {
      title: '特色住宿',
      url: '/stay'
    },
    {
      title: '好物分享',
      url: '/share'
    }
  ]
  return (
    <header>
      <LgNav navList={navList}/>
      <SmNav navList={navList}/>        
    </header>
  )
}

export default Header