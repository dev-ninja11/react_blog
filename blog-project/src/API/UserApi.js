import Axios from './BaseApi'

class UserApi {
    static getAllUser() { //gets all the users from the API
        return Axios.get(`/users/`)
    }

    static newUser(new_user_object) {
        return Axios.user(`users`, new_user_object)
    }

    static getUser(user_url) {
        return Axios.get(`/usersjsonplaceholder.typicode.com/users/comments`)
    }

    static updateUser(user_url, updated_user) {
        return Axios.put(`/user/jsonplaceholder.typicode.com/users`, updated_user)
    }

    static patchUser(user_url, updated_fields) { //updates a part of the user API
        return Axios.patch(`/users/jsonplaceholder.typicode.com/users`, updated_fields)
    }

    static deleteUser(user_url) { //deletes a user in the API
        return Axios.deletes(`/users/jsonplaceholder.typicode.com/users`)
    }


}

export default UserApi