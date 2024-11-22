
//20-11-24
// import './index.css';

//import { useEffect } from "react";

// const Header = (prop) => 
// {
//   // const {myobj} = prop;
//   // const {name,age, marks} =myobj;
//   console.log(prop);

//   const {userDetail } =prop;
//   const {name,gender,email,status} = userDetail;
//   return(
    
//     <li>
//       <h1>name: {name}</h1>
//       <h2>Age: {status}</h2>
//       <h3>Marks : {gender}</h3>
//       <h4>Email : {email}</h4>
//     </li>  
  
//   );
// }

// export default Header;


//21-11-24
// import React, {useState,useEffect} from "react";

// const Header = ()=>
// {
//   const [userdata, setdata] = useState([]);

// useEffect(()=>
// {
//   const onfetch=async()=>
//     {
//       const api = "https://gorest.co.in/public/v2/users";
  
//       const response = await fetch(api);
//       const data = await response.json();
  
//       if(response.ok===true)
//       {
//         setdata(data);
//       }
//     }

//     onfetch();

// },[])

//   return(
//     <>
//     <h1>header Component</h1>
//     {console.log(userdata)};
//     </>
//   );
// }

// export default Header;



import React, {useState,useEffect} from "react";

const Header = ()=>
{
  const [name, setname] = useState("yash");

useEffect(()=>
{
  const onfetch=async()=>
    {
      for(let i=0 ; i<100000000;i++)
      {
        if(i==9999999)
        {
            setname("kore");
        }
      }
    }

    onfetch();

},[])

  return(
    <>
    <h1>{name}</h1>
    <h1>header Component</h1>
    
    </>
  );
}

export default Header;