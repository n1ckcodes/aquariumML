import nc from "next-connect";
import { withSessionRoute } from "../../../helpers/ironSession";


const handler = nc({
  attachParams: true,
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Server error.");
  },
  onNoMatch: (req, res) => {
    console.log(req);
    res.status(404).end("Page not found.");
  },
});

handler.post("/api/test/requiresAuth", async (req, res) => {
    if (req.session.user){
        return res.status(200).send('auth success')
    }
    else {
         res.status(401).send('unauthorized')
    }
});


export default withSessionRoute(handler);
