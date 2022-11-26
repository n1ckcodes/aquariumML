const withAuthentication = (req, res, next) => {
    if (!req.session.user) {
      return res.status(401).json({ message: "You are unauthorized" });
    }
  
    return next();
  };

  module.exports = {
    withAuthentication
  };
  