import React from "react";

class PureCompoexample extends React.PureComponent {
    constructor(){
        super();
            this.state={
                count:0
            }
    }
    render() {
        console.log("Component Rerendered...",this.state)
        return (
            <>
               <h3>Pure Component</h3>
               <p>{this.state.count}</p>
               <button onClick={()=>{
                // this.setState({count:this.state.count + 1})         
                this.setState({count:1})      
               }}>Update Count</button>
            </>
        );
    }
}

export default PureCompoexample;