import { useState, useEffect } from "react";
import Layout from "../../components/layout";
import { withSessionSsr } from "../../helpers/ironSession";
import { useRouter } from "next/router";
import axios from "axios";
export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
    console.log(req.session);

    if (req.session.user) {
      return {
        redirect: {
          permanent: false,
          destination: "/dashboard/home",
        },
      };
    }
    //const eventData = await fetchGet(`${process.env.APP_URL}/api/event/all`);
    let eventData = [];
    //TODO: move this function elsewhere or better structure it
    const combobulateData = (tanks, eventData) => {
      let data = [];
      // for (const tank of tanks) {
      //   let temp = { ...tank, events: [] };

      //   const events = eventData.filter((e) => e.TankID == temp.TankID);
      //   temp.events.push(...events);
      //   data.push(temp);
      // }
      data.events = [];
      return data;
    };
    let test;
    const session =
      Object.keys(req.session).length === 0
        ? (test = null)
        : (test = req.session);
    return {
      props: {
        user: test,
      },
    };
  }
);
export default function Login({ tanks }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalidLogin, setInvalidLogin] = useState(false)
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };
  const submit = () => {
    axios
      .post("/api/auth/login", {
        username: username,
        password: password
      })
      .then(function (response) {
        console.log(response);
        refreshData();
        //...

        // const router = useRouter()

        // router.reload(window.location.pathname)
        // console.log(response)
      })
      .catch(function (error) {
        if (error.response.status == 401){
            setInvalidLogin(true)
        }
      });
  };

  return (
    <Layout>
      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text">Username</span>
        </label>
        <input
          type="text"
          class="input input-bordered w-full max-w-xs"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label class="label"></label>
      </div>
      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text">Password</span>
        </label>
        <input
          type="password"
          class="input input-bordered w-full max-w-xs"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label class="label"></label>
      </div>
      {invalidLogin ? <p style={{color:"red"}}>Invalid username or password</p> : <></>}
      <button class="btn"  onClick={(e) => submit()}>Login</button>
    </Layout>
  );
}
