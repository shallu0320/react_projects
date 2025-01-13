import React, { useContext } from 'react'
import { productlist } from './productlist'
import { mycontext } from './App'

export const product2 = () => {
    const rst = useContext(mycontext)
  return (
    <div>
        <h3> Hi product 2 and the result is 
            {rst}
            </h3>
            </div>
  )
}
