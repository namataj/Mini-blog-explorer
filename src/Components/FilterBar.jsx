import React from 'react'

function FilterBar({userids, selectedUserId, setSelectedUserId}) {

  
    return (
    <div >
        <select className='user-filter' id="userFilter" value={selectedUserId} onChange={(e) =>  setSelectedUserId(e.target.value)} >
            <option value="All">All Users</option>

           {userids.map((id) => (
                <option key={id} value={id}>
                    User: {id}
                </option>
            ))}

        </select>
        
    </div>
  )
}

export default FilterBar