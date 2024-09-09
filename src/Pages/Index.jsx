import React from 'react'
import CurrentTemp from '../Components/CurrentTemp'
import UserInput from '../Components/UserInput'
import ForeCast from '../Components/ForeCast'

function Index() {
  return (
    <div className='flex flex-col items-center'>
        <UserInput />
        <CurrentTemp />
        <ForeCast />
    </div>
  )
}

export default Index