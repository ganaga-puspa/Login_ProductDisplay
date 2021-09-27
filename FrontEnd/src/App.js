import React  from 'react';
import AddProduct from './Components/AddProduct';
import ProductDetail from './Components/ProductDetail'
import Product from './Components/product'
import Nav from './Components/Nav'
import {BrowserRouter , Route ,Routes} from 'react-router-dom';
import Login from './Components/Login';
import Admin from './Components/Admin';
import Home from './Components/Home';



class App extends React.Component {

  // state={
  //   isLog:false
  // }

  // handleLogin = (isLog) => this.setState({isLog})

  render(){

    // const {isLog} = this.state;

    return (
      
      <>
       <div className='container'>
       
         <BrowserRouter>
         < Nav />
        <Routes>

          {/* {
            !isLog ? 
            <Route path='/login' render={() => <Login isLogin={this.handleLogin}/> }  />         
            :  
            <Route path='/' render={() => <Product handleLogged={this.handleLogin}/> }  />  

          } */}

         <Route path='/home' element={ <Home/>} />
         <Route path='/' element={ <Product/>} />

          {/* <Route path='/addProduct' element={() => <AddProduct authHandler={false} />} /> */}

          <Route path='/addProduct'  element={< AddProduct />} />
          <Route path='/login' element={ <Login/>} />
           <Route path='/admin' element={ <Admin/>} />
            
            {/* {auth === false ?  <OhNo /> : <AddProduct/>}           */}
          {/* </Route> */}

          {/* <Route path='/addProduct' element={ <AddProduct/>} /> */}
           <Route path='/:id/' element={ <ProductDetail/>} />
           <Route  path="/:id/productDetail" element={ <ProductDetail/>}  />
           
  
          {/* <Route path='/admin' element={() => <Admin handleLoginSubmit={false} />} /> */}
         </Routes>
       
        
       </BrowserRouter>
        
       </div>
      </>
    )

  }

  

    
  }
  export default App
  


  



