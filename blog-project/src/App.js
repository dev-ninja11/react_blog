import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import{Button,Form,FormGroup,Label,Input} from 'reactstrap'
//import Forms from './Components/Forms'
import Posts from './Components/Posts';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import Navbar from './Components/Navbar'
import axios from 'axios'
import UsersList from './Components/UsersList';
import CategoryDetail from './Components/CategoryDetail';

function App() {
  
  return (
    
    <div className="App">
      <Navbar/>
      <CategoryDetail/>
    </div>
    
  )

}

export default App