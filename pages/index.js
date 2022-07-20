import Layout from "../components/layout";
import TankThumbnail from "../components/tanks/thumbnail";
import ToolBar from "../components/tanks/toolbar";
import { fetchGet } from "../utils/fetch";
import { withSessionSsr } from "../helpers/ironSession";
import LoginForm from "../components/auth/login";
import RegistrationForm from "../components/auth/register";

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
    console.log(req.session)
  const tanks = await fetchGet(`${process.env.APP_URL}/api/tank/all`);
  //const eventData = await fetchGet(`${process.env.APP_URL}/api/event/all`);
  let eventData = []
  //TODO: move this function elsewhere or better structure it
  const combobulateData = (tanks, eventData) => {
    let data = [];
    // for (const tank of tanks) {
    //   let temp = { ...tank, events: [] };

    //   const events = eventData.filter((e) => e.TankID == temp.TankID);
    //   temp.events.push(...events);
    //   data.push(temp);
    // }
     data.events = []
    return data;
  };
  let test;
  const session =  Object.keys(req.session).length === 0 ? test = null : test = req.session
  return {
    props: {
      tankData: combobulateData(tanks, eventData),
      user: test
    },
  };
})

export default function Home({ tankData, user }) {
  console.log(user)
  return (
    <>
  <RegistrationForm />

  </>
  );
}
