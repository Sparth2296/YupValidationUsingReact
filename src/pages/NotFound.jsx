import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../assets/css/yupvalidaation.css';

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div style={{displat:'flex', justifyContent:'center',alignItems:'center',gap:'20px'}}>
      <h1 style={{fontSize:'10rem',textAlign:'center'}}>
        404
      </h1>
      <h3 style={{fontSize:'4rem',textAlign:'center'}}>Page Not Fond !!</h3>


      <button onClick={()=>navigate('/')} className='gotohomebtn'>Go to Home Page</button>
    </div>
  )
}

export default NotFound
