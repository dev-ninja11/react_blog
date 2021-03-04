import React, {useState, useEffect} from 'react'
import UserApi from '../API/UserApi'

function Use() {
    
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
        <div className="container">
            <h4> List of Users</h4>
            {user_list && user_list.map(user => (
                <p  key={user.id}> 
                    {user.title}
                    {user.name}
                </p>
            ))}

        </div>
    )
}

export default Use