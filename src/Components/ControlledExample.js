import React, { useState } from 'react'

const ControlledExample = () => {

    const [name, setName] = useState("");
    const [val , setVal] = useState("");
 
    function handleSubmit() {
        alert(`Name: ${name}`);
    }

  return (
    <>
        <h3>Controlled Component</h3>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    name="name"
                    value={name}
                    onChange={(e) =>
                        setName(e.target.value)
                    }
                />
                <button type="submit">Submit</button>

                 <br/><br/>
                 <label>Type value:</label>
                <input type='text' value={val} onChange={(e)=>setVal(e.target.value)} />
                <h3>Value:{val}</h3>
            </form>
    </>
  )
}

export default ControlledExample;