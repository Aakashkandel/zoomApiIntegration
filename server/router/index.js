const express = require("express");
const router = express.Router();
const RegisterController = require('../controller/Register');
const LoginController = require('../controller/Login');
const complainRegister = require('../controller/Complain');
const auth = require('../middleware/index');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);  
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)); 
  }
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/png', 'image/jpg', 'image/jpeg', 'video/mp4'];
  if (!allowedTypes.includes(file.mimetype)) {
    cb(null,false)
  }
  cb(null, true);
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024  
  },
  fileFilter: fileFilter  
});

router.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
      // Multer-specific error (e.g., file size, file type, etc.)
      return res.status(400).json({ message: err.message });
    } else if (err) {
      // Other types of errors
      return res.status(500).json({ message: "Server error" });
    }
    next();
  });


router.post('/register', RegisterController.register);
router.post('/login', LoginController.login);
router.post('/complainregister',auth,upload.single('uploadfile') ,complainRegister.complainRegister);
router.get('/fetchcomplainuser',auth,complainRegister.fetchComplainUser);

module.exports = router;
