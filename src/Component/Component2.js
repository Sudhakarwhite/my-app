import React, { memo } from 'react'

 const Component2 = (props) => {
    console.log("re-render");
    
  return (
    <div>
        <button onClick={props.handlechange}>cliclk</button>
    </div>
  )
}

export default memo(Component2)