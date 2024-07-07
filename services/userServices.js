const User = require("../models/userModel")


const loginService = async (req, res) => {
    const { email, password } = req.body;

    let existingUser;
  
    try {
      existingUser = await User.findOne({ email: email });
    } catch (err) {
        let obj = {
            status: "failure",
            message: 'login failed, please try again later'
        }
        return obj
    //   return res.status(500).json( { message: 'Login failed'  });
    }
  
    if (!existingUser || existingUser.password !== password) {
    //   return res.status(422).json( { message: 'Invalid credentials'  });
    let obj = {
        status: "failure",
        message: 'Invalid credentials'
    }
    return obj

    }
    let obj = {
        status: "success",
        message: 'Logged in!'
    }
    return obj
  
    // res.json({ message: 'Logged in!' });

}

const registerService = async (req, res, next) => {
    const { username, email, password } = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({ email: email });
    } catch (err) {
        let obj = {
            status: "failure",
            message: 'Signup failed, please try again later'
        }
        return obj
    }
    if (existingUser) {
        let obj = {
            status: "failure",
            message: 'Email already exists'
        }
        return obj
    }
    const createdUser = new User({
        username,
        email,
        password
    });

    try {
        await createdUser.save();
    } catch (err) {
        // return res.status(500).json( { message:  err.message  });
        let obj = {
            status: "failure",
            message: err.message
        }
        return obj
    }

    let obj = {
        status: "success",
        message: "Registration success"
    }
    return obj
};


module.exports = { loginService, registerService }