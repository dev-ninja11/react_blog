import { useParams } from "react-router";
import React, { useState, useEffect } from 'react';
import PostApi from '../API/PostApi'

const PostDetails = () => {

    const { id } = useParams()//
    const [postDetail, setPostDetail] = useState([])
    
    const getThePost = () => {
        PostApi.getPost({ params: { id } })
            .then(response => {
                setPostDetail(response.data)
            
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    useEffect(() => {
        getThePost()

    }, [])
    
    return ( 
        <div className='post-details'>
            <h2>Post Details</h2>
           {postDetail.map(posts => (
            <div key={posts.id}>
                <ul className="list-group">
                  <li className="list-group-item active"> Post ID: {posts.id}</li>
                  <li className="list-group-item">Title: {posts.title}</li>
                  <p className="list-group-item">Body: {posts.body}</p>
                </ul>
                </div>
            ))}
        
        </div>
     );
}
 
export default PostDetails;