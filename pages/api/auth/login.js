
import { withSessionRoute } from "../../../helpers/ironSession";

export default withSessionRoute(loginRoute);

async function loginRoute(req, res) {
  const {username, password} = req.body
  // get user from database then:
  req.session.user = {
    id: 230,
    admin: true,
    test: 'ok'
  };
    await req.session.save();
//   return res.send('invalid login'
//   )

 // res.redirect(`/auth/login`)
  res.send("Logged in");
}