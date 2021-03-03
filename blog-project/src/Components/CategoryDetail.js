import React, {useState, useEffect} from 'react'
//import '../../css/CategoryDetail.css'
import { Link, useParams } from 'react-router-dom';
import PostApi from '../API/PostApi'

function CategoryDetail() {
    
    const [post_list, setPostList] = useState([])

    const getListofPosts = () => {
        PostApi.getAllPosts()
            .then(response => {
                //Set our component's `post_list` array to the results of the API call
                // which would be 'response.data' object
                setPostList(response.data) 
            })      
    }

    useEffect(() => {

        getListofPosts()

    }, [])

    
    return (
        <div className="container">
            <h4> List of Posts</h4>
            <p>
                These are our current list of blog posts
            </p>
            {post_list && post_list.map(post => (
                <p  key={post.id}> 
                        {post.title}
                </p>
            ))}

        </div>
    )
}

export default CategoryDetail