import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import{Button,Form,FormGroup,Label,Input} from 'reactstrap'
import Forms from './Components/Forms'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import Navbar from './Components/Navbar'
import PostList from './Components/PostList';
import UsersList from './Components/UsersList';
import UsersDetails from './Components/UsersDetails';
import PostDetails from './Components/PostDetail';

function App() {
  
  return (
    <Router>
     <div className="App">
          <Navbar/>
        <div className="content">
          <Switch>
            
            <Route  exact path='/'>
              <Forms/>
            </Route>

            <Route   path="/users">
              <UsersList/>
            </Route>

            <Route  exact path="/details/:id">
              <UsersDetails/>
            </Route>

            <Route  exact path="/postDetails/:id">
              <PostDetails/>
            </Route>

            <Route      exact path="/posts">
              <PostList/>
            </Route>

          </Switch>
        </div>
        
     </div>
    </Router>
    
  )

}

export default App