import React, { useContext } from 'react'
import { mycontext } from './App'
export const productlist = ({ue}) => {
  const uname = useContext(mycontext)
  return (
    <div>
      <h4> Hi I am 
        {r} {ue}
      </h4>
    </div>
  )
}

