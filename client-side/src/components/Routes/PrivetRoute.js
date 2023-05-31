import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/Auth'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import Spinner from '../spinner/Spinner'

const PrivetRoute = ({children}) => {
    const [ok, setOk] = useState(false)
    const [auth, setAuth] = useAuth()

    useEffect(()=>{
        const authCheck = async()=>{
            const {data} = await axios.get(`${process.env.REACT_APP_API}/user-check`)
            if(data?.ok){
                setOk(true)
            }else{
                setOk(false)
            }
        }

        if(auth?.token) authCheck()
    },[auth?.token]);

    return ok ? <Outlet/> : <Spinner/>
}

export default PrivetRoute
