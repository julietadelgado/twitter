const User = require('./../models/User')
class UserService {
    static create(id, username, name){
        return new User(id, username, name, "Without bio")
    }

    static getInfo(user){
        return Object.values(user)
    }

    static updateUserUsername(user, newUsername){
        user.username = newUsername
    }

}

module.exports = UserService