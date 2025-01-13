import React, {useContext} from 'react'
import { product2 } from './product2'
import { mycontext } from './App'

export const Home2 = ({uname}) => {
    const r = useContext(mycontext)
  return (
    <div>
        <h2> Hi I am home and result is
            {r}
            </h2>
            <product2 un = {uname} /> 
    </div>
  )
}
