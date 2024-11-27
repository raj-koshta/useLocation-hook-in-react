import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const User = () => {
    const {fname, lname} = useParams();

    const location = useLocation();
    console.log(location)
  return (
    <>
      {location.pathname === "/user/Raj/Koshta" 
        ? <h3 style={{textAlign: "center"}}>Welcome {fname} {lname} Admin to User Page
            <p>your current locatin is: {location.pathname}</p>
            <button style={{color: "white", backgroundColor: "black", padding: "2px 10px 2px 10px"}}>Click Me</button>
          </h3>
        : <h1 style={{  textAlign: 'center', fontSize: '50px', fontWeight: 'bold'}}>
            Welcome {fname} {lname} to User Page
          </h1>
      }

    </>


  );
}

export default User
