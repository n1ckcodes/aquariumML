
import { withSessionRoute } from "../../../helpers/ironSession";

export default withSessionRoute(logoutRoute);

async function logoutRoute(req, res) {
  await req.session.destroy();

  res.redirect(`/`);
}