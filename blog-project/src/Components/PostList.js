import React,{useState,useEffect} from 'react'
import PostApi from '../API/PostApi'
import {Link,useParams} from 'react-router-dom'

const PostList = () => {

    const [listPost,setListPost] = useState([])
    const getListofPosts = () => {
         PostApi.getAllPosts().then(response =>{
             setListPost(response.data)
         })
        .catch(err =>{
            console.log('getAllPosts Error')
        })
    }
    useEffect(() => {
        getListofPosts()
        
    }, [])
    
       

    return (
        <div>
            
        </div>
    )
}

export default PostList
