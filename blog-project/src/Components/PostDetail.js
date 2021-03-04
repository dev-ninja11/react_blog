import { useParams } from "react-router";

const PostDetails = () => {

    const {id}= useParams()//
    return ( 
        <div className='post-details'>
            <h2>Post Details - {id}</h2>
        
        </div>
     );
}
 
export default PostDetails;