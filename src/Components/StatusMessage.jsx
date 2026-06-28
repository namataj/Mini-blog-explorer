import React from 'react'
import { ClipLoader } from 'react-spinners'

function StatusMessage({loading, error}) {


  return (
    <div className='loading-error-status-container'>
        
        {loading && (
            <>
             <div className='spinner'></div>
              <p style={{color: "white"}}>Loading users info....</p> 
               {/* < ClipLoader size={20} color='white'    /> */}
            </>
        )
        }
      
        {error && <p> {error} </p> }
    </div>
   
  )
}

export default StatusMessage