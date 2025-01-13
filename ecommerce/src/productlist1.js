import React, { useContext } from 'react'
import { mycontext} from './App'
 export const productlist1 = () => {
    const rs = useContext(mycontext)
  return (
    <div>
        <h4> I am some random component and the result is 
            {rs}
        </h4>
    </div>
  )
}

