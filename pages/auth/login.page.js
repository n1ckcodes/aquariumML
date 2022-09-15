import { useState } from "react";
import { withSessionSsr } from "../../helpers/ironSession";
import { useRouter } from "next/router";
import axios from "axios";
import Layout from "../../components/layouts/master";

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
    if (req.session.user) {
      return {
        redirect: {
          permanent: false,
          destination: "/dashboard/home",
        },
      };
    }
    //Next requires SSR rendered pages to return a prop object
    return {
      props: {},
    };
  }
);
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalidLogin, setInvalidLogin] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const router = useRouter();

  //Will trigger page to rerender and run the SSR logic
  const refreshData = () => {
    router.replace(router.asPath);
  };

  const submit = () => {
    axios
      .post("/api/auth/login", {
        username: username,
        password: password,
      })
      .then(() => {
        refreshData();
      })
      .catch((error) => {
        if (error.response.status == 401) {
          setInvalidLogin(true);
          setLoginError(false);
        }
        else{
          setLoginError(true);
          setInvalidLogin(false);
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
      {loginError ? (
        <p style={{ color: "red" }}>Error logging in. Please try again.</p>
      ) : (
        <></>
      )}
      {invalidLogin ? (
        <p style={{ color: "red" }}>Invalid username or password.</p>
      ) : (
        <></>
      )}
      <button class="btn" onClick={(e) => submit()}>
        Login
      </button>
    </Layout>
  );
}
