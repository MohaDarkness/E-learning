const jwt = require("jsonwebtoken");

const config = process.env;

const verifyTokenAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
    const secret ="EduCareSecret101";
    const decoded = jwt.verify(token, secret, (err, decodedToken) => {
        if(err){
            console.log("here's what I got : " + err);
            return res.status(401).send("Invalid Token");
        }else{
             return next();
        }
    });
    req.user = decoded;
};
module.exports = {verifyTokenAuth};