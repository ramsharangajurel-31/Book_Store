const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  // Get the user from the jwt token and add id to req object
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

// Stub admin middleware - replace with real admin check as needed
const admin = (req, res, next) => {
  // For now, allow all authenticated users as admin
  next();
}

module.exports = { auth, admin };
