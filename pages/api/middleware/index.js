import { getAuth } from "@clerk/nextjs/server";

const routeAuthentication = (req, res, next) => {
  const { userId } = getAuth(req);
  if (userId) return next();
  return res.status(401);
};

module.exports = {
  routeAuthentication,
};
