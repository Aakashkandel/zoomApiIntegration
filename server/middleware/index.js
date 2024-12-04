const jwt = require("jsonwebtoken"); 

const auth = (req, res, next) => {
    const token = req.headers["token"];
  
   
    if (!token) {
        return res.status(403).json({
            message: "Access denied. No token provided."
        });
    }

    try {
        const decoded = jwt.verify(token, 'shhhh');

        req.user = decoded; 

        next();
    } catch (error) {
        console.error(error);

        return res.status(401).json({
            message: "Invalid or expired token."
        });
    }
};

module.exports = auth;  
