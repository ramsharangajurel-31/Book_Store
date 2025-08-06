const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
 
  const token = req.header('auth-token');
  if (!token) {
    return res.status(401).send({ error: "Please authenticate using a valid token" });
  }
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    if (!data || !data.user) {
      return res.status(401).send({ error: "Invalid token." });
    }
    req.user = data.user;
    next();
  } catch (error) {
    return res.status(401).send({ error: "Invalid token." });
  }
}


const admin = (req, res, next) => {
  
  next();
}

module.exports = { auth, admin };
