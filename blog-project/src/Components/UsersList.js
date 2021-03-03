import React,{useState,useEffect} from 'react'
import axios from 'axios'
import UsersDetails from './UsersDetails'

//import {Link,useParams} from 'react-router-dom'


const UsersList = () => {
  const [users, setUsers] = useState({ hits: [] });
  
  useEffect(() => {

    const fetchData = async () => {
      const { data } = await axios( "https://jsonplaceholder.typicode.com/users");
      setUsers({ hits: data });
      console.log(data)
    };
      fetchData();
      
  }, [setUsers]);

  return (
    <div className='home'>
     <UsersDetails users={users} title='All Users' />
    </div>
  );
}

export default UsersList