import React, { useState } from 'react'

function UsersCard({user}) {

  const [showModal, setShowModal] = useState(false)

  function handleViewDetails() {
    setShowModal(true)
    
  }




  return (
    <div className='user-card'>
        {/* <p> {user.id} </p> */}
        <p> {user.userId} </p>
        <p> {user.title} </p>
        {/* <p> {user.body} </p> */}
        <button onClick={handleViewDetails}>View Details</button>

        {showModal && 
        
        <div className='modal'>
          <p> {user.body} </p>
          <button onClick={() => setShowModal(false)} > Close </button>
        </div>
        
        
        }
    </div>
  )
}

export default UsersCard