import Profile from '@/components/Profile'

import React from 'react'

const page = () => {
  return (
    <div className='h-screen w-screen'>
        <div> {/*Left*/}
          <div>
           <Profile/>
          </div>
        </div>
    </div>
  )
}

export default page