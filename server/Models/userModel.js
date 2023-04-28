const mongoose = require("mongoose")
const bcrypt = require('bcrypt')


const rating = {
   value:{
      type:Number
   },
   moviename:{
      type:String
   }
}

const userSchema = new mongoose.Schema({
   email:{
      type:String,
      required:true,
      unique:true
   },
   name:{
      type:String,
      required:true,
   },
   phone:{
      type:String,
      required:true
   },
   password:{
      type:String,
      required:true
   },
   isBlocked: {
      type: Boolean,
    },
    verified:{
      type: Boolean,
    },
    ratings:[rating]
})

userSchema.pre('save',async function (next) {
   const salt = await bcrypt.genSalt()
   this.password = await bcrypt.hash(this.password,salt)
})

userSchema.statics.login = async function (email, password) {
   const user = await this.findOne({ email });
   if (user) {
     const auth = await bcrypt.compare(password, user.password);
     if (auth) {
       return user;
     }
     throw Error("incorrect password");
   }
   throw Error("incorrect email");
 };
 
module.exports = mongoose.model("Users",userSchema)