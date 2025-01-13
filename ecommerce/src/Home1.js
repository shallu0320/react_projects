import React, { useContext } from 'react'
import { product1 } from './product1'
import { mycontext } from './App'
export const Home1 = ({un}) => {
    const r = useContext(mycontext)
  return (
    <div>
        <h2> Hi I am 
            {uname}
             </h2>
             <product1 un = {unmae} />
    </div>
  )
}

