import React from 'react'
import {Link } from 'react-router-dom'



function Nav() {


    // const login =() =>{

    //     const nav= useNavigate()
    //     const Handle = ()  =>{
    //         if(){
    //             nav('/addproduct')
    //         }
    //         nav('/login')
    //     }

    // }



    return (
        <div>
            {/* <Admin isLogged = {handleLogged} /> */}
            <nav className='nav justify-content-center'>
                {/* <Link className='nav-link' to='/home'>Home</Link> */}
                <Link className='nav-link' to='/'>Products</Link>
                {/* <Link className='nav-link' to='/addProduct'>Add Products</Link> */}
                <Link className='nav-link' to='/login'>AdminLogin</Link>
                {/* <Link onClick={props.login} className='nav-link' to='/login'>
                    {props.status ? "AdminLogout" : "AdminLogin"} 
                    
                </Link> */}

            </nav>
        </div>
    )
}

export default Nav

