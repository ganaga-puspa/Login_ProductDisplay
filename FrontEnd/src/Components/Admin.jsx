import React ,{useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'



export default function Admin() {

    const [loggedIn , setLoggedIn] = useState(true)

    const nav =useNavigate()

    const token = localStorage.getItem("token")
    
    

    const logout = () =>
    {      
        localStorage.clear("token")
        console.log('logout success');
         nav('/login')

    }

    if(loggedIn === false){
        return <Navigate to="/login" />;
    }

    if(token == null)  {
        return setLoggedIn(false)
    }
       

    return (
        <div>
            <div>
                 {/* <Link className='nav-link' to='/'>Products</Link> */}
                 <Link className='nav-link' to='/addProduct'>Add Products</Link>
                 <button onClick={logout} >Logout</button>
                 {/* <Link className='nav-link' to='/'>Logout</Link> */}
            </div>
        </div>
    )
}
