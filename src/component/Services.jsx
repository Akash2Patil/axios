import instance from '../utils/axios'
import React, { useEffect, useState } from 'react'

const Services = () => {
    const [user,setuser] = useState([]);
    const getusers = ()=>{
        
        instance.get("/users")
        .then((response)=>{
            // console.log(response)
            setuser(response.data)
        })
        .catch((error)=>{
            console.log(error);
            
        })
    }
    useEffect(()=>{
        getusers()
    },[])
    console.log(user);
    
  return (
    <div className='w-full h-[100vh] bg-zinc-900 flex flex-wrap gap-10 justify-center content-center text-white'>
        {user.map((info)=>(
            <div className="card border h-fit p-5">
                <h2>Full Name : {info.name.firstname} {info.name.lastname}</h2>
                <h2>Email : {info.email}</h2>
                <h2>Phone : {info.phone}</h2>
                <h2>Username : {info.username}</h2>
            </div>
        ))}
    </div>
  )
}

export default Services