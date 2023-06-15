const jwt = require("jsonwebtoken");

function AuthorizationCheck(req, res, next) {
  const token = req.cookies.token;
  if (token) {
    try {
      const validToken = jwt.verify(token, process.env.JWT_SECRET);
      console.log("token", validToken);
      next();
    } catch (error) {
      console.log("error", error);
      res.status(401).send("Unauthorized");
    }
  } else {
    res.status(401).send("Unauthorized");
  }
}

module.exports = AuthorizationCheck;
