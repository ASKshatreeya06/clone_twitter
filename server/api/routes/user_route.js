const express = require('express');
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { models, default: mongoose } = require('mongoose');
const userModel = mongoose.model('userModel')
const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { firstName, lastName, email, phone, password } = req.body;
        // console.log(req.body);
        if (!firstName || !lastName || !email || !phone || !password) {
            return res.status(404).json({ message: "all field required" })
        }
        const fullName = firstName+' '+lastName
        const capitalizeWords = (fullName) => {
            return fullName
              .toLowerCase()
              .split(' ')
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
        };
        const trimmedFirstName = firstName.trim();
        const trimmedLastName = lastName.trim();
        const userName = '@' + (trimmedFirstName === trimmedLastName ? trimmedFirstName.replace(/\s/g, '') : (trimmedLastName + trimmedFirstName).replace(/\s/g, '')) + Math.floor(Math.random() * 10000);//generate user name 
        const emailInDb = await userModel.findOne({email:email})
        const phoneInDb = await userModel.findOne({phone:phone})
        if (emailInDb) {
            console.log(emailInDb);
            return res.status(402).json({ error: "This email is already exist" })
        }else if(phoneInDb){
            return res.status(402).json({ error: "This phone is already exist" })
        }
        const hashPassword = await bcryptjs.hash(password,16)
        const user = new userModel({fullName:capitalizeWords(fullName),userName:userName,password:hashPassword,email:email,phone:phone})
        await user.save();
        res.status(201).json({ result: "User signed up successfully" });
        // console.log("user signed up ")
    } catch (error) {
        console.log(error);
    }
})

router.post('/login',async(req,res)=>{
    try {
        //take data form body
        const { userdata, password } = req.body;
        //check email or password field have a value or not if not then return the error message
        if (!userdata || !password) {
            return res.status(403).json({ error: "please fill add field" })
        }
        // check user by email,phone or userName exists or not in usermodel
        const userInDb = await userModel.findOne({ $or: [{ email: userdata }, { phone: userdata }, {userName:userdata}] });
        // const phoneInDb = await userModel.findOne({phone:userdata})
        if (!userInDb) {
            
            return res.status(404).json({ error: "you are not a user" })
          
        }
        //match current password with the hashed password
        const match = await bcryptjs.compare(password, userInDb.password);
        if (!match) {
            return res.status(405).json({ error: "Incorrect password" })
        }
        //generate a token for user 
        const jwtToken = jwt.sign({ _id: userInDb._id }, process.env.JWT_KEY);
        //store user data in userInfo for serving
        const userInfo = { "id": userInDb._id, "email": userInDb.email, "firstName": userInDb.lastName, "phone":userInDb.phone,"userName":userInDb.userName, "isAdmin": userInDb.isAdmin }
        //send response with status code 201 and token,userInfo in json format
        res.status(201).json({ result: { token: jwtToken, user: userInfo } });
        // console.log("user logged In")
    } catch (error) {
        console.log(error);

    }

})

module.exports = router;