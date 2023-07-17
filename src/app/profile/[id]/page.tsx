import React from 'react'

type Props = {
    params : any
}

function UserProfile({params}: Props) {
  return (
    <div>Profile QW
        <p>
            Profile Page {params.id} 
        </p>
    </div>

  )
}

export default UserProfile