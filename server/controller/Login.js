const User = require("../model/registermodel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); // Import jsonwebtoken
const cookie = require("cookie-parser");

const login = async (req, res) => {
    const { username, password } = req.body;
  

    if (!username || !password) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    try {
        const useremail = await User.findOne({ email: username });

        if (!useremail) {
            return res.status(400).json({
                message: "User not found"
            });
        }

        const ismatch = await bcrypt.compare(password, useremail.password);

        if (!ismatch) {
            return res.status(400).json({
                message: "Password does not match"
            });
        }

        const token = jwt.sign({ id: useremail._id, email: useremail.email }, 'shhhh' ,{
            expiresIn: "1h"
        });
        
        
        return res.status(200).json({
            message: "Verified successfully",
            success: 1,
            token:token
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

module.exports = { login };
