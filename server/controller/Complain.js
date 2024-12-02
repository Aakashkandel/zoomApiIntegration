const Complain = require("../model/Complain");

const complainRegister=async(req,res)=>{
    const {type,message,advice}=req.body;
    console.log(type,message,advice);
    const userid=req.user.id;
   

    if (
        (req.file.mimetype == 'image/png' || req.file.mimetype == 'image/jpg' || req.file.mimetype == 'image/jpeg') || 
        (req.file.mimetype == 'video/mp4')
      ) {
        if (
          (req.file.mimetype.startsWith('image') && req.file.size <= 1 * 1024 * 1024) || 
          (req.file.mimetype.startsWith('video') && req.file.size <= 10 * 1024 * 1024)  
        ) {
          var file = req.file.path; 
        } else {
        
          return res.status(400).json({ message: req.file.mimetype.startsWith('image') ? "Too large image" : "Too large video" });
        }
      } else {
        return res.status(400).json({ message: "Unsupported format" });
      }
      
      const complain=new Complain({
        user:userid,
        type,
        uploadfile:file,
        message,
        advice
      })

      await complain.save()
      return res.status(200).json({
        message:"Complain Register Successfully",
        success:1


      })

}

const fetchComplainUser=async(req,res)=>{

    const userid=req.user.id;
    const complain = await Complain.find({ user: userid })
            .populate('user', 'firstname lastname email') 
            .sort({createdAt:-1})
            .exec();
    return res.status(200).json(complain);

}

module.exports={complainRegister,fetchComplainUser} 