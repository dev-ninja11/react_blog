import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import UserApi from '../API/UserApi'


function UsersList() {
    
    const [user_list, setUserList] = useState([])

    const getAllUser = () => {
        UserApi.getAllUser()
            .then(response => {
                //Set our component's `post_list` array to the results of the API call
                // which would be 'response.data' object
                setUserList(response.data) 
            })      
    }
    useEffect(() => {
        getAllUser()

    }, [])

    
    return (
        <div className="user">
            <h4> List of Users</h4>
            {user_list.map(user => (
                <p key={user.id}> 
        
                    <Link to = {`/details/${user.id}`}>
                   
                         {user.name}
                    </Link>
                </p>
            ))}

        </div>
    )
}

export default UsersList