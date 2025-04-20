const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.header("authorization");
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorizes access as no token provided",
    });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(decodedToken);

    req.userInfo = decodedToken;
    next();
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Some error occured. Please try again",
    });
  }
};

module.exports = authMiddleware;
