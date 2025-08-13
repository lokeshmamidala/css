import React from 'react'

const User = (prop) => {
  return (
    <div className='user'>
        {prop.name} {prop.email} {prop.phoneno}
      
    </div>
  )
}

export default User
