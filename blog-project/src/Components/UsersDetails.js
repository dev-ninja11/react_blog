import { useParams } from "react-router";
import React, { useState, useEffect } from 'react';
import UserApi from '../API/UserApi'

const UsersDetails = () => {
    const { id } = useParams()//passes id to the API request
    const [userDetail,setUserDetail]= useState([])

    //function to request data from API to get details of each User
    const getTheUser = () => {
        UserApi.getUser({ params: { id } })
            .then(response => {
                setUserDetail(response.data)//gets data from API and sets it to the response
                console.log(response)
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    useEffect(() => {
        getTheUser()

    },[])

    return ( 
        <div className='user-details'>
         <h2>User Details - {id}</h2>
           {userDetail.map(users => (
            <div key={users.id}>
                <ul className="list-group">
                  <li className="list-group-item active">Name: {users.name}</li>
                  <li className="list-group-item">Username: {users.username}</li>
                  <li className="list-group-item">Email: {users.email}</li>
                  <li className="list-group-item">Phone: {users.phone}</li>
                  <li className="list-group-item">Street Address: {users.address.street}, {users.address.city}  {users.address.zipcode}</li>
                </ul>
            </div>
            ))}
        </div>
     );
}
 
export default UsersDetails;