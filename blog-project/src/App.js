import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
//import{Button,Form,FormGroup,Label,Input} from 'reactstrap'
import Forms from './Components/Forms'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import Navbar from './Components/Navbar'
import PostList from './Components/PostList';
import UsersList from './Components/UsersList';
import UsersDetails from './Components/UsersDetails';
import PostDetails from './Components/PostDetail';
import HomePage from './Components/Homepage'

function App() {
  
  return (
    <Router>
     <div className="App">
        <Navbar />
        <Switch>
            <Route   path='/' component={Homepage} />
            <Route   path="/users" component={UserList}/>
            <Route   path="/details/:id" component={UsersDetails}/>
            <Route   path="/posts" component={PostList}/>
            <Route   path="/postDetails/:id" component={PostDetails}/>
            <Route     path="/forms" component={Forms}/>
        </Switch>
              
     </div>
    </Router>
    
  )

}

export default App