import React from 'react'
import UsersCard from './UsersCard'

function UsersGrid({users}) {


  return (
    <div className='users-grid'>
       <>
     {users.map((user) => (
         <div >
           <UsersCard key={user.id} user={user} />
         </div>
       ))}
     </>
   
    </div>
   

    
  )
}

export default UsersGrid