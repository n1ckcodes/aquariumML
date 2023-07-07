import { createRouter } from "next-connect";
import { routeAuthentication } from "pages/api/middleware";
import { getAuth } from "@clerk/nextjs/server";
import { addTank, deleteTank } from "./query";

const router = createRouter();

router.use(routeAuthentication).post("/api/tanks/add", async (req, res) => {
  const { userId } = getAuth(req);
  const result = await addTank(req.body.data, userId);
  return res.send(result);
});

router
  .use(routeAuthentication)
  .delete("/api/tanks/delete", async (req, res) => {
    const { userId } = getAuth(req);
    const result = await deleteTank(req.body.tankId);
    return res.send(result);
  });

export default router.handler();
