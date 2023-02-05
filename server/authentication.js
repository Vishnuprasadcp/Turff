const db = require('./db')

const register = (name, email, mobile, password) => {
    return db.User.findOne({ email })
        .then(data => {
            if (data) {
                return {
                    statuscode: 422,
                    status: false,
                    message: "email is already used"
                }
            } else {
                return db.Unicode.findOne({ init_id: 1000 })
                    .then(code => {
                        if (code) {
                            const newUser = new db.User({
                                name,
                                email,
                                mobile,
                                user_code: code.nextid,
                                password
                            })
                            newUser.save()
                            uId = code.nextid
                            code.nextid++
                            code.save()
                            return {
                                statuscode: 200,
                                status: true,
                                message: "user created successfully",
                                uId
                            }
                        }
                        else {
                            const newUnicode = new db.Unicode({
                                init_id: 1000,
                                nextid: 1001
                            })
                            newUnicode.save()
                            const newUser = new db.User({
                                name,
                                email,
                                mobile,
                                user_code: 1000,
                                password
                            })
                            newUser.save()
                            return {
                                statuscode: 200,
                                status: true,
                                message: "user created successfully",
                                uId: 1000
                            }
                        }
                    })

            }
        })
}

const login = (email, password) => {
    return db.User.findOne({ email, password })
        .then(data => {
            if (data) {
                currentname = data.name
                currentusercode = data.user_code
                currentemail = data.email
                return {
                    statuscode: 200,
                    status: true,
                    message: "login successful",
                    currentname,
                    currentusercode,
                    currentemail
                }
            } else {
                return {
                    statuscode: 432,
                    status: false,
                    message: "login failed"
                }

            }
        })
}

module.exports = { register,login }
