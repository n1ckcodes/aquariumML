
import { withSessionRoute } from "../../../helpers/ironSession";

export default withSessionRoute(testRoute);

async function testRoute(req, res) {
  // get user from database then:
  if (!req.session.user){
    return res.status(401).end();
  }
  else {

    return res.json(req.session.user).end()
  }
}