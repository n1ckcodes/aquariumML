
import { withSessionRoute } from "../../../helpers/ironSession";

export default withSessionRoute(loginRoute);

async function loginRoute(req, res) {
  // get user from database then:
  req.session.user = {
    id: 230,
    admin: true,
  };
  await req.session.save();
  res.send("Logged in");
}