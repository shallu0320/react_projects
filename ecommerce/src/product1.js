import React from 'react'
import { productlist } from './productlist'
const product1 = ({un}) => {
  return (
    <div>
        <h3> Hi I am grand child and the username is {un} 
        </h3>
        <productlist ue = {un} />
    </div>
  )
}

