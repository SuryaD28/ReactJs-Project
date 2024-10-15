import React from 'react';
import { Link } from 'react-router-dom';

const Employee = () => {
   
  return (
    <div>
        <h1>Employee List</h1><h2>Using useParams Hooks</h2>
        <ul>
            <li>
                <Link to="/employee/EmpOne" state={{name:"EmpOne" , age:25 }}>EmpOne</Link>
            </li>
            <li>
                <Link to="/employee/EmpTwo" state={{name:"EmpTwo" , location:"Pune"}}>EmpTwo</Link>
            </li>
        </ul>
    </div>
  )
}

export default Employee