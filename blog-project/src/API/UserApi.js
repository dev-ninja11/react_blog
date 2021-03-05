import Axios from './BaseApi'


class UserApi {
    static getAllUser() { //gets all the users from the API
        return Axios.get(`/users/`)
    }

    static newUser(new_user_object) {
        return Axios.put(`/users`, new_user_object)
    }

    static getUser(user_url) {
        return Axios.get(`/users/`,user_url)
    }

    static updateUser(user_url, updated_user) {
        return Axios.put(`/users/`, updated_user)
    }

    static patchUser(user_url, updated_fields) { //updates a part of the user API
        return Axios.patch(`/user/`, updated_fields)
    }

    static deleteUser(user_url) { //deletes a user in the API
        return Axios.deletes(`/users/users`)
    }


}

export default UserApi