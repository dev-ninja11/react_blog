import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import{Button,Form,FormGroup,Label,Input} from 'reactstrap'
//import Forms from './Components/Forms'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import Navbar from './Components/Navbar'
import PostList from './Components/PostList';
import UsersList from './Components/UserList';

function App() {
  
  return (
    
    <div className="App">
      <Navbar/>
     
      <UsersList/>
    </div>
    
  )

}

export default App