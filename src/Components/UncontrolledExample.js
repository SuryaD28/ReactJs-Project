import React, { useRef } from 'react'

const UncontrolledExample = () => {

    const inputRef = useRef(null);
    const inputRef2 = useRef(null);
 
    function handleSubmit() {
        alert(`Firstname: ${inputRef.current.value}   Lastname: ${inputRef2.current.value}`);
    }

  return (
    <>
       <h3>Uncontrolled Component</h3>
            <form onSubmit={handleSubmit}>
                <label>Name :</label>
                <input
                    type="text"
                    name="name"
                    ref={inputRef}
                /><br/>
                <label>Lastname :</label>
                <input
                    type="text"
                    name="Lastname"
                    ref={inputRef2}
                />
                <br/>
                <button type="submit">Submit</button>
            </form>
    </>
  )
}

export default UncontrolledExample








// import React from 'react'

// class UncontrolledExample extends React.Component{
//     constructor(props){
//         super(props);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.input = React.createRef();
//     }

//     handleSubmit(event){
//         alert("A name was submitted:" + this.input.current.value)
//         event.preventDefault();
//     }

//     render() {
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     {"Name:"}
//                     <input type="text" ref={this.input}/>
//                 </label>
//                 <input type="submit" value={"Submit"} />
//             </form>
//         )
//     }
// }

// export default UncontrolledExample;