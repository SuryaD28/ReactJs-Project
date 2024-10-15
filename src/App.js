// import ClickIncrease from './HOC/ClickIncrease';
// import HigherOrderPractice from './HOC/HigherOrderPractice';
// import MouseHover from './HOC/MouseHover';

// // import ControlledExample from './Components/ControlledExample';
// // import PureCompoexample from './Components/PureCompoExample';
// // import UncontrolledExample from './Components/UncontrolledExample';
// // import User from './HOC/User';

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SignIn from "./Components/SignIn";
// import SignUp from "./Components/SignUp";

// // import UseMemoExample from './Hooks/UseMemoExample';
// // import RefExample from './Hooks/RefExample';
// // import CallbackExample from './Hooks/CallbackExample';
// // import ContextExample from './Hooks/ContextExample';
// // import EffectExample from './Hooks/EffectExample';
// // import StateExample from './Hooks/StateExample';

// import UploadFileCompo from "./Upload_File/UploadFileCompo";
// import UploadMultipleFile from "./Upload_File/UploadMultipleFile";
// import UploadwithFields from "./Upload_File/UploadwithFields";

// function App() {
//   return (
//     <div className="App">
//       <UploadFileCompo />
//       <UploadMultipleFile />
//       <UploadwithFields />

//       {/* <UncontrolledExample />
// //       <ControlledExample />
// //       <PureCompoexample /> */}
//       {/* //       <HigherOrderPractice />
// //       <hr></hr>
// //       <ClickIncrease />
// //       <br></br>
// //       <MouseHover /> */}
//       {/* <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<SignIn />}></Route>
//           <Route path="/signup" element={<SignUp />}></Route>
//         </Routes>
//       </BrowserRouter> */}
//       {/* <RefExample />
// //       <UseMemoExample />
// //       <CallbackExample />
// //        <StateExample />
// //        <EffectExample />
// //        <ContextExample /> */}
//     </div>
//   );
// }

// export default App;

//===========================================SearchBar Example

// import React from 'react';
// import withSearch from './HOC/withSearch';
// import Home from './HOC/Home';
// import About from './HOC/About';
// import Contact from './HOC/Contact';

// const homeData = ['Living Room', 'Kitchen', 'Bedroom', 'Bathroom'];
// const aboutData = ['Company History', 'Our Mission', 'Our Team', 'Careers'];
// const contactData = ['Email', 'Phone', 'Address', 'Support'];

// const SearchableHome = withSearch(Home, homeData);
// const SearchableAbout = withSearch(About, aboutData);
// const SearchableContact = withSearch(Contact, contactData);

// const App = () => {
//   return (
//     <div>
//       <h1>Searchable Components</h1>
//       <SearchableHome />
//       <SearchableAbout />
//       <SearchableContact />
//     </div>
//   );
// };

// export default App;

//===================================================================Routing

import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routing/Home";
import Navbar from "./Routing/Navbar";
import About from "./Routing/About";
import Contact from "./Routing/Contact";
import ErrorPage from "./Routing/ErrorPage";
import Employee from "./Routing/Employee";
import EmployeeDetails from "./Routing/EmployeeDetails";
import Company from "./Routing/Company";
import CompanyOne from "./Routing/CompanyOne";
import CompanyTwo from "./Routing/CompanyTwo";
import CompanyThree from "./Routing/CompanyThree";
import SignIn from "../src/Components/SignIn";
import SignUp from "../src/Components/SignUp";
import Logout from "./Routing/Logout";
import Cart from "./Redux/Cart";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/employee/:employeeId" element={<EmployeeDetails />} />
          <Route path="/company/" element={<Company />}>
            <Route path="cmpOne" element={<CompanyOne />}></Route>
            <Route path="cmpTwo" element={<CompanyTwo />}></Route>
            <Route path="cmpThree" element={<CompanyThree />}></Route>
          </Route>
          <Route path="/logout" element={<Logout />} />

          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;

//Protected routing
// import React from "react";
// import "./App.css";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./Routing/Home";
// import Navbar from "./Routing/Navbar";
// import About from "./Routing/About";
// import Contact from "./Routing/Contact";
// import ErrorPage from "./Routing/ErrorPage";
// import Employee from "./Routing/Employee";
// import EmployeeDetails from "./Routing/EmployeeDetails";
// import Company from "./Routing/Company";
// import CompanyOne from "./Routing/CompanyOne";
// import CompanyTwo from "./Routing/CompanyTwo";
// import CompanyThree from "./Routing/CompanyThree";
// import SignIn from "../src/Components/SignIn";
// import SignUp from "../src/Components/SignUp";
// import ProtectedRoute from "./Routing/ProtectedRoute";
// import Logout from "./Routing/Logout";
// import Cart from "./Redux/Cart";

// const App = () => {
//   return (
//     <>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<ProtectedRoute Component={Home} />} />
//           <Route path="/login" element={<SignIn />} />
//           <Route path="/about" element={<ProtectedRoute Component={About} />} />
//           <Route
//             path="/contact"
//             element={<ProtectedRoute Component={Contact} />}
//           />
//           <Route path="/employee" element={<Employee />} />
//           <Route path="/employee/:employeeId" element={<EmployeeDetails />} />
//           <Route path="/company/" element={<Company />}>
//             <Route path="cmpOne" element={<CompanyOne />}></Route>
//             <Route path="cmpTwo" element={<CompanyTwo />}></Route>
//             <Route path="cmpThree" element={<CompanyThree />}></Route>
//           </Route>
//           <Route path="/logout" element={<Logout />} />

//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/*" element={<ErrorPage />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// };
// export default App;

//====================================Props Drilling

// import React, { createContext, useState } from 'react';
// import ChildA from './PropsDrilling/ChildA';
// import One from './PropsDrilling/One';

// export let childContext = createContext();

// const App = () => {
//   const message = "Hello from App Component!";

//   const [firstName , setFirstName] = useState("Suryakanta");
//   const [lastName , setLastName] = useState("Dhale");

//   const [color , setColor] = useState("red");
//   const [bgColor , setBgColor] = useState("green");
//   return (
//     <div>
//       <ChildA message={message} firstName={firstName} lastName={lastName}/>
//       <childContext.Provider value={{color , bgColor}}>
//          <One/>
//       </childContext.Provider>
//     </div>
//   )
// }
// export default App

//======================================= React-Redux

// import React, { createContext, useState } from 'react';
// import One from './PropsDrilling/One';

// export let childContext = createContext();

// const App = () => {

//   const [color , setColor] = useState("red");
//   const [bgColor , setBgColor] = useState("green");

//   return (
//     <div>
//       <childContext.Provider value={{color , bgColor}}>
//           <One/>
//        </childContext.Provider>
//     </div>
//   )
// }

// export default App

//======================== Lazy loading

// import React from 'react';
// import { lazy , Suspense } from 'react';

// const Example = lazy(() => import('../src/Lazy _Loading/Example'));
// const ExampleTwo = lazy(() => import('../src/Lazy _Loading/ExampleTwo'));

// const App = () => {
//   return (
//     <div>
//       <Suspense fallback = {<div>Please wait for First Example.....</div>}>
//         <Example />
//       </Suspense>

//       <Suspense fallback = {<div>Please wait for Second Example.....</div>}>
//         <ExampleTwo/>
//       </Suspense>
//     </div>
//   )
// }

// export default App

//JSONWEBTOKEN(JWT)

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LoginPage from "./JWT_Components/LoginPage";
// import RegisterPage from "./JWT_Components/RegisterPage";
// import Navbar from "./JWT_Components/Navbar";
// import Home from "./JWT_Components/home";
// import About from "./JWT_Components/about";
// import Contact from "./JWT_Components/contact";
// import ProtectCompo from "./JWT_Components/ProtectCompo";
// import Logout from "./JWT_Components/Logout";

// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<ProtectCompo Component={Home} />} />
//           <Route
//             path="/abouts"
//             element={<ProtectCompo Component={About} />}
//           ></Route>
//           <Route
//             path="/contacts"
//             element={<ProtectCompo Component={Contact} />}
//           ></Route>
//           <Route path="/login" element={<LoginPage />}></Route>
//           <Route path="/logout" element={<Logout />}></Route>
//           <Route path="/register" element={<RegisterPage />}></Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };
// export default App;
