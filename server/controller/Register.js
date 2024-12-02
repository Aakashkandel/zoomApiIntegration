const User = require("../model/registermodel");
const bcrypt = require("bcryptjs"); 

const register = async (req, res) => {

  const { firstname, lastname, username, email, password, confirmpassword } = req.body;
  console.log(firstname,lastname,username,email,password,confirmpassword);

  

  if (!firstname || !lastname || !username || !email || !password || !confirmpassword) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Please provide a valid email address." });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: "Password must be at least 6 characters long." });
  }

  if (password !== confirmpassword) {
    return res.status(400).json({ message: "Passwords do not match." });
  }

  try {
  
    const existingUseremail = await User.findOne({ email: email });
    if (existingUseremail) {
      return res.status(400).json({ message: "User already exists with this email." });
    }

    const existingUsername = await User.findOne({ username: username });
    if (existingUsername) {
      return res.status(400).json({ message: "Username already exits" });
    }

    
    const hashedPassword = await bcrypt.hash(password, 10); 

    
    const newUser = new User({
      firstname,
      lastname,
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return res.status(200).json({ message: "Registration successful!", success: 1 });
    console.log("register successfully");

  } catch (error) {
    console.error("Error during registration:", error);
    return res.status(500).json({ message: "Internal server error. Please try again later." });
  }
};

module.exports = { register };
