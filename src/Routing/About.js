import React from 'react'
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const About = () => {

  const [serachParam , setSearchParam] = useSearchParams({name:"Default name" , address:"Default Address"});

  console.log("name :",serachParam.get("name"));
  console.log("address :",serachParam.get("address"));

  const name = serachParam.get("name");
  const address = serachParam.get("address");

  return (
    <div >
        <h1>This is About Component...!</h1>
        <h2>Using useSearchParams Hooks</h2>

        <h3>Username : {name}</h3>
        <h3>Address : {address}</h3>

        <button onClick={() => setSearchParam({name:"Surya" , address:"Pune"})}>Update Query Params</button>
        <br/>
        <input type="text" onChange={(e) => setSearchParam({name:e.target.value})}></input>

        <br/><br/>

        <button>
          <Link to="/logout">Logout</Link>
        </button>
       
    </div>   
  )
}

export default About