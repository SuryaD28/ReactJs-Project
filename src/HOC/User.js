 import React, { useState } from 'react';   // This component is use in ClickIncrease and MouseHover

 const User = (OriginalComponent) => {
    function NewComponent (props) {
      const[fontSize , setFontSize] = useState(15);

      const increaseSize = () => {
        setFontSize((size) => size + 1);
      };

      const newProps = {
        increaseSize,
        fontSize,
      };

     return <OriginalComponent {...newProps}/>
    }
    return NewComponent;
 }

 export default User; 
