
 import React from 'react';

 import PropTypes from "prop-types";




 const Profile = ({fullName,bio,profession,children})=>{
     const handleName=()=>{
         alert(`My name is nawres`)
     }
     
     return(
         <div>
            <img src="/nawres.jpg" alt ='myimage'/>{children}
         

         <h1 className='info'>
             <h2>nawres mabrouk</h2>
         </h1>
         <span>Bio:</span>
        <h3>Profession:</h3>


         </div>
     );
 }
     export default Profile ;