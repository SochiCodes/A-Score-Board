import React from 'react'
// import Logo from '/img/logo.png'

export default function Header() {
  return (
    <div>
      <nav className='nav'>
        <img src="/img/logo.png" alt="logo" width={130} />
        <div className='profileMenu'> 
            <img src="/img/profile.png" className='avatar' alt="profile" width={25}/>
            <span>Tappi</span>
            <img src="/img/arrowDown.png" alt="arrow" width={20}/>  
        </div>
      </nav>
    </div>
  )
}
