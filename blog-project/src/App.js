import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import{Button,Form,FormGroup,Label,Input} from 'reactstrap'
//import Forms from './Components/Forms'
import PostList from './Components/PostList';
import CategoryDetail from './Components/CategoryDetail'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import Navbar from './Components/Navbar'
//import About from './Components/About'
//import Create from './Components/Create';
//import BlogDetails from './Components/BlogDetail';
import Axios from 'axios'

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <div className="cont"></div>
      <CategoryDetail/>
    
    </div>
    
  )

}

export default App