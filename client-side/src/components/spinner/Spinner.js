import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Spinner = ({path = "login"}) => {
    const [count, setCount] = useState(3)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount((preValue)=> --preValue)
        },1000)
        count === 0 && navigate(`/${path}`, {
            state: location.pathname
        });
        return ()=> clearInterval(interval)
    },[count, navigate, location])
  return (
    <>
      <div id="biof-loading">
        <div className="biof-loading-center">
            <div className="biof-loading-center-absolute">
                <h1 className='text-center' style={{"font-size":"18px"}}>redirecting to you in {count} second</h1>
                <div className="dot dot-one" />
                <div className="dot dot-two" />
                <div className="dot dot-three" />
            </div>
        </div>
     </div>

    </>
  )
}

export default Spinner
