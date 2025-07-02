module.exports = function(req, res, next) {
    const token = req.headers.authorization;

    if (!token || token !== "admin-secret-token") {
        return res.status(403).json({ message: "Access Denied. Not an Admin." });
    }

    next();
};
