import React from 'react'

function Header({users}) {


  return (
    <div className='Header'>
        <h2> MINI BLOG EXPLORER</h2>
        <p>A React Application that fetches and displays Users information</p>
        <p> Total User Count: {users} </p>
        
    </div>
  )
}

export default Header