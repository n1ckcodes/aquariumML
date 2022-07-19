import Layout from "../../components/layout";
import TankThumbnail from "../../components/tanks/thumbnail";
import ToolBar from "../../components/tanks/toolbar";
import { fetchGet } from "../../utils/fetch";

// export async function getServerSideProps(context) {
// //   const tanks = await fetchGet(`${process.env.APP_URL}/api/tank/all`);
// //   console.log(tanks);
// //   return {
// //     props: {
// //       tanks: tanks,
// //     },
// //   };
// }

export default function Login({ tanks }) {

  return (<>
    <form method="POST" action="/api/auth/login">
        <input type="text" name="username"></input>
        <button type="submit">Login</button>
 </form>
    </>
  );
}
