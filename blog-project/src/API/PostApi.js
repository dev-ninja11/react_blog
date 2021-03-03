
import Axios from './BaseApi'

class PostApi{
    
    static getAllPosts(){//gets all the posts from the API
        return Axios.get(`/posts/`)
    }

    static getPost(post_url){
        return Axios.get(`posts/$(jsonplaceholder.typicode.com/posts)`)
    }

    static newPost(new_post_object){
        return Axios.post(`posts`,new_post_object)
    }

    static getCommentforPost(post_url){
        return Axios.get(`/postsjsonplaceholder.typicode.com/posts/comments`)
    }

    static updatePost(post_url, updated_post){
        return Axios.put(`/post/jsonplaceholder.typicode.com/posts`,updated_post)
    }

    static patchPost(post_url, updated_fields){//updates a part of the post API
        return Axios.patch(`/posts/jsonplaceholder.typicode.com/posts`,updated_fields)
    }

    static deletePost(post_url){//deletes a post in the API
        return Axios.delete(`/posts/jsonplaceholder.typicode.com/posts`)
    }

    
}

export default PostApi