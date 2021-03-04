import { useParams } from "react-router";

const UsersDetails = () => {

    const {id}= useParams()//
    return ( 
        <div className='user-details'>
            <h2>Users Details - {id}</h2>
        
        </div>
     );
}
 
export default UsersDetails;