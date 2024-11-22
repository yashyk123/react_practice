
// import Header from './header';
// import './App.css';
// import Right from './right';
// import Left from './left';
// import Center from './center';

// function App()
// {
//   return(
//   <> 
//     <Header/>
//     <div className='main-body'>
  
//     <Left/>
//     <Center/>
//     <Right/>
    
    
//     </div>
//   </>
//   );
// }
// const App = ()=>
// {
//   return(
//     <>
//     <h1>yash</h1>
//     <h3>kore</h3>
//     </>
//   )
// }

// import { Component } from "react";

// class App extends Component
// {
//   render()
//   {
//     return <h1>as</h1>
//   }
// }
// export default App;


//8-11-24
// import Header from './header';
// import './App.css';

// const userlist = [
//   {
//     id : 1,
//     name : "yash",
//     age : 20,
//     marks : 90
// },
// {
//   id : 2,
//   name : "niraj",
//   age : 22,
//   marks : 90
// },
// {
// id : 3,
// name : "tejas",
// age : 22,
// marks : 80
// },
// {
// id : 4,
// name : "mahesh",
// age : 24,
// marks : 90
// }
// ];

// const App = ()=>
// {

//   return (
//     <>
    
//     <ul>
//       {   
//         userlist.map((each)=>
//         (<Header key={each.id} userdetails={each}/>))
//       }
//     </ul>
//     </>
//   );
// }

// export default App;

//9-11-24
// import { useState } from "react";
// import './App.css';


// const App = () =>
// {
//   const [name, setname] = useState("Yash");

//   const onChagename = ()=>
//   {
//     setname("Kore");
//   }

//   return( 
//     <>
//     <h1>hello I am {name}</h1>
//     <button onClick={onChagename}>Change Name</button>
//     </>
//   )
// }

// export default App;

//11-11-24
// import { useState } from "react";
// import './App.css';


// const App = () =>
// {
//   const [allValue, setValue] = useState({
//     name : "yash",
//     counter : 0,
//     marks : 90,
//     brach : "CSE"
//   });

//   const [veges, getVeges]=useState({
//     veg1 : "carrot",
//     veg2 : "potato",
//     veg3 : "tomato"
//   })

//   const onChagename = ()=>
//   {
//     setValue({...allValue,name :"kore",counter:allValue.counter+1});

//     getVeges({...veges,veg1:"cabeg"})
//     //{ veg1 : "carrot",veg2 : "potato",veg3 : "tomato",veg1:"cabeg"}
//   }

//   return( 
//     <>
//     <h1>hello I am {allValue.name}</h1>
//     <h1>hello I am {allValue.counter}</h1>
//     <p>{veges.veg1} {veges.veg2} {veges.veg3}</p>
//     <button onClick={onChagename}>Change Name</button>
//     </>
//   )
// }

// export default App;

//12-11-24

// import { useState } from 'react';
// import './App.css';
// import { useEffect } from 'react';

// const App = ()=>
// {
//   const [count,setCount] = useState(0);
  // const [name,setName] = useState("yash");

  //useEffect syntax:
 /* useEffect (()=>{},[]) 
 useEffect take a call back function and dependancy array*/


//if we use useEffect withaout [] then it will rerender at the time mounting , unmount and when we update the data.
  /*useEffect(()=>{
    console.log("hua render");
  })*/


  // if we use useEffect with dependanct empty [] the it will rerender only at the time of mounting and unmount
 /* useEffect(()=>{
    console.log("hua render");
  },[])*/
  

// if we use useEffect with [arguments,arguments,arguments] the it will rerender only at the time of mounting and unmount when that parameter get updates

  //useEffect(()=>{
    // console.log("hua render");
  //   const inervalId =setInterval(()=>
  //   {
  //     setCount(count+1);
  //   },1000);

  //   return ()=>{
  //     clearInterval(inervalId);
  //   }
  // })

  // return(
  //   <div className='maindiv'>
  //     <h1>Timer application</h1>
  //     <br /><br />
  //     <h1 style={{fontSize : "50px"}}>{count}</h1>

  //     <br /><br />
      {/* <div>
      <button onClick={()=>{setCount(count+1)}} className='btn btn-danger mr-4'>Inc</button>
      <button onClick={()=>{setCount(count-1)}} className='btn btn-success'>Dec</button>
      </div>

<h1>hello i am {name}</h1>
      <button onClick={()=>{setName("yash")}} className='btn btn-danger mr-4'>before</button>
      <button onClick={()=>{setName("kore")}} className='btn btn-success'>After</button> */}
    {/* </div>
  )
}

export default App; */}


import { useState } from 'react'
//13-11-24
// import { useState } from 'react';
// import './App.css';
// import { useEffect } from 'react';

// const App = ()=>
// {
//   const [joke,setjokes] = useState("");
  

//   const getJoke = async()=>
//   {
//      const response = await fetch("https://official-joke-api.appspot.com/jokes/random");
//      const data = await response.json();
//     //  console.log(data.setup);
//      setjokes(data.setup);
//   }
//   useEffect(()=>{
//    //getJoke();
//   });

//   return(
//     <div className='maindiv'> 
//       <h1>Timer application</h1>
//       <br /><br />
//       <button onClick={getJoke} className='btn btn-success'>click</button>

//       <br /><br />
//       <h1>{joke}</h1>
//     </div>
//   )
// }

// export default App;


//16-11-24
// import { useState } from 'react';
// import './App.css';
// import { useEffect } from 'react';

// const App = ()=>
// {
//   const [joke,setjokes] = useState("");
  

//   const changeData = async()=>
//   {
//     const token = "883a7b55e83792973d1f80d640edf250e8d18af043e9bc56a82889c82a68adf8";
//     const api = "https://gorest.co.in/public/v2/users";
     

//      const userDetails =
//      {
//       name: "mr y",
//       email: "yIb@bins.test",
//       gender: "female",
//       status: "active"
//   }

//   const options =
//   {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Access": "application/json",
//       Authorization: `Bearer ${token}`
//     },
//     body:JSON.stringify(userDetails)
//   }

//   const response = await fetch(api,options);
//   const data = await response.json();

//   console.log(response);
//   console.log(data);
     /*  
     {
        "id": 7529360,
        "name": "Adheesh Chattopadhyay",
        "email": "chattopadhyay_adheesh@bins.test",
        "gender": "female",
        "status": "active"
    }
     */
  
//   }

//   return(
//     <div className='maindiv'> 
//       <h1>Timer application</h1>
//       <br /><br />
//       <button onClick={changeData} className='btn btn-success'>click</button>

//       <br /><br />
//       <h1>{joke}</h1>
//     </div>
//   )
// }
  
// export default App;


 //18-11-24
//  import { useState, useEffect } from "react";
// import "./App.css";

// const App = () => {
//   const [allValues, setValues] = useState({
//     name: "",
//     email: "",
//     gender: "",
//     status: "Active",
//     showErro: false,
//   });

//   const onFetchData = async (e) => {
//     e.preventDefault();

//     const { name, email, gender, status } = allValues;

//     if (name === "" || email === "" || gender === "" || status === "") {
//       setValues({ ...allValues, showErro: true });
//     } else {
//       setValues({...allValues,showErro:false});
//       const api = "https://gorest.co.in/public/v2/users";

//       const token =
//         "d20a84b5f6abb618679205bf265bd36d56f20e637525449e0ab6a0ea9627b3cf";

//       const userDetails = {
//         name: name,
//         email: email,
//         gender: gender,
//         status: status,
//       };

//       const options = {
//         method: "Post",
//         headers: {
//           "Content-type": "application/json",
//           Access: "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(userDetails),
//       };

//       const response = await fetch(api, options);

//       if (response.ok === true) {
//         const data = await response.json();

//         console.log(response);

//         console.log(data);
//       } else {
//         console.log("Error");
//       }
//     }
//   };

//   return (
//     <div className="app-cont">
//       <h1> Fetching Data From Server </h1>

//       <form onSubmit={onFetchData}>
//         <div className="form-group">
//           <label htmlFor="exampleInputEmail1">Name</label>
//           <input
//             type="text"
//             className="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//             onChange={(e) => {
//               setValues({ ...allValues, name: e.target.value });
//             }}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="exampleInputPassword1">Email</label>
//           <input
//             type="email"
//             className="form-control"
//             id="exampleInputPassword1"
//             onChange={(e) => {
//               setValues({ ...allValues, email: e.target.value });
//             }}
//           />
//         </div>
//         <h3>Gender</h3>
//         <div className="form-group form-check">
//           <input
//             type="radio"
//             name="gender"
//             className="form-check-input"
//             id="malegender"
//             value="male"
//             onChange={(e) => {
//               setValues({ ...allValues, gender: e.target.value });
//             }}
//           />
//           <label className="form-check-label" htmlFor="malegender">
//             Male
//           </label>
//         </div>
//         <div className="form-group form-check">
//           <input
//             name="gender"
//             type="radio"
//             className="form-check-input"
//             id="femalegender"
//             value="female"
//             onChange={(e) => {
//               setValues({ ...allValues, gender: e.target.value });
//             }}
//           />
//           <label className="form-check-label" htmlFor="femalegender">
//             Female
//           </label>
//         </div>
//         <h3>Status</h3>
//         <div className="form-group">
//           <select
//             name="status"
//             className="form-control"
//             onChange={(e) => {
//               setValues({ ...allValues, status: e.target.value });
//             }}
//           >
//             <option value="Active">Active</option>
//             <option value="Inactive">Inactive</option>
//           </select>
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>

//       {
//         allValues.showErro && <p className="text-danger">Please fill Out All The Feilds</p>
//       }

//       <br />
//       <br />
//     </div>
//   );
// };

// export default App;


//19-11-24
// import { useState, useEffect } from "react";
// import Header from "./header";
// import './App.css';

// /*
//  {
//     "id": 7537362,
//     "name": "Suma Chaturvedi",
//     "email": "chaturvedi_suma@cremin-beer.test",
//     "gender": "female",
//     "status": "active"
//   }
// */

// const App = () => {
//   const [allValues, setValues] = useState({
//       userList : [],
//       showLoader : false

//   });

// useEffect(()=>{
//   const onFetchUserData = async()=>
//     {
//       setValues({...allValues,showLoader : true});
//        const api = "https://gorest.co.in/public/v2/users";
//        const response = await fetch(api);
  
//        if(response.ok === true)
//        {
//         const data = await response.json();
//         setValues({...allValues, userList : data,showLoader : false});
//        }
       
//       //  console.log(data);
//     }
//     onFetchUserData();
// },[])

//   return (
//     <div className="maindiv">
//       <h1> Fetching Data From Server </h1>

//       <br /><br />

//       {/* <button onClick={onFetchUserData} className="btn btn-outline-danger">Fetch</button> */}
//       <br /><br />

//       {allValues.showLoader ?<div class="spinner-border" role="status">
//        <span class="sr-only">Loading...</span>
//      </div> :  <ul>
//         {allValues.userList.map(each => <Header userDetail = {each} key = {each.id}/>)}
//       </ul>}

      

      
//      {/* {console.log(allValues.userList)} */}
//     </div>
//   );
// };

// export default App;



//20-11-24
// import useCounter from "./custom hook/useCounter";
// import { useState, useEffect, useRef } from "react";
// import Header from "./header";
// import './App.css';


// const App = () => {
// const [count,ondec,oninc] =useCounter();

//   const headingEl = useRef();

//   const onChangeHeading = ()=>{
//       // console.log(headingEl.current);
//       headingEl.current.style.color = "red";
//       headingEl.current.textContent ="Tum badal gaye";
//   }

  
//   return (
//     <div className="maindiv">
//       <h1 ref={headingEl}> Fetching Data From Server </h1>

//       <br /><br />

//        <button onClick={onChangeHeading} >Fetch</button> 
//       <br /><br />

//       <div className="maindiv">
//       <h1>Increment And decrement</h1>
//       <br /><br />
//       <h1 style={{fontSize:"50px"}}>{count}</h1>
//       <br /><br />

//       <button className="btn btn-danger" onClick={()=>{ondec()}}>DEC</button>
//       <button className="btn btn-success mt-4" onClick={()=>{oninc()}}>INC</button>
//     </div>
    
//     </div>
    
//   );
// };

// export default App;


//21-11-24
import { lazy,Suspense } from 'react'
const Header = lazy(()=>import("./header"));
import Center from './center';
import './App.css'


const App = ()=>
{
  
  return (
    <>
    <h1>App conponente</h1>
    <Suspense fallback={(<div class="spinner-border" role="status">
       <span class="sr-only">Loading...</span>
     </div> )}>
    <Header/>
    </Suspense>
    <Center/>
    
    </>
  );
}
export default App;