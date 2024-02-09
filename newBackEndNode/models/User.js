const mongoose = require('mongoose');
const {isEmail} = require('validator');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "is Empty"],
    unique: [true, "the username is taken"],
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "the length is less than 6 charechters"],
  },
  email:{
    type: String,
    required:false,
    lowercase:true,
    validate:[isEmail ,'please enter a valid email']
  },


});
userSchema.post('save', function(doc, next){
    next();
});

userSchema.pre('save',async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });;

userSchema.statics.login = async function(username, password) { 
    const user = await this.findOne({username});
    if(user){
       const auth = await bcrypt.compare(password, user.password);
       if(auth){
        return user;
       }
       throw Error('incorrect pasword');
    }
    throw Error('invalid username');
}
const User = mongoose.model('user', userSchema);

module.exports = User;