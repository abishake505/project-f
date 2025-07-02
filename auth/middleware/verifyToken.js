const jwt = require("jsonwebtoken");

const verifyUser = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(403).json({ message: "Token missing" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};

const verifyAdmin = (req, res, next) => {
  verifyUser(req, res, () => {
    if (req.user.role === "admin") next();
    else res.status(403).json({ message: "Only admin allowed" });
  });
};

module.exports = { verifyUser, verifyAdmin };
