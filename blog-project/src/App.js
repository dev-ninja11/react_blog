import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import{Button,Form,FormGroup,Label,Input} from 'reactstrap'
import Forms from './Components/Forms'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import Navbar from './Components/Navbar'
import PostList from './Components/PostList';
import UsersList from './Components/UserList';

function App() {
  
  return (
    <Router>
     <div className="App">
          <Navbar/>
        <div className="content">
          <Switch>
            
            <Route path='/'>
              <Forms/>
            </Route>

            <Route  exact path="/user">
              <UsersList/>
            </Route>

            <Route  exact path="/post">
              <PostList/>
            </Route>

          </Switch>
        </div>
        
     </div>
    </Router>
    
  )

}

export default App