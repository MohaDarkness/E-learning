const User = require("../models/User");
const jwt = require ("jsonwebtoken");
const handleErrors = (err) => {
  let errors = { username: '', password: '' };

  if (err.message === 'incorrect username') {
    errors.username = 'That email is not registered';
  }

  // incorrect password
  if (err.message === 'incorrect password') {
    errors.password = 'That password is incorrect';
  }

  // duplicate username error
  if (err.code === 11000) {
    errors.username = 'that email is already registered';
    return errors;
  }

  // validation errors
  if (err.message.includes('user validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
}

const tokenDuration =  5 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, 'EduCareSecret101', {
    expiresIn: tokenDuration
  });
};

module.exports.signup_get = (req, res) => {
    
}
  
module.exports.login_get = (req, res) => {
  }
  
module.exports.signup_post = async (req, res) => {
    const { username, password, email } = req.body;

    try {
        const user = await User.create({ username, password, email });
        const token  = createToken(user._id);
        res.cookie('jwt',token, { maxAge:tokenDuration});
        console.log("here's what I have created: " + token);
        res.status(201).json({user:user._id});
    }
    catch(err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
  }
  
module.exports.login_post = async (req, res) => {
    const {username, password} = req.body;
    try{
        const user = User.login(username,password);
        const token = createToken(user._id);
        res.cookie('jwt',token, {httpOnly: true, maxAge:tokenDuration});
        res.status(200).json({user:user.id});

    }catch(err){
        console.log(); 
        res.status(400).json({});
    }
  }