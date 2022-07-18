import Layout from "../../components/layout";
import TankThumbnail from "../../components/tanks/thumbnail";
import ToolBar from "../../components/tanks/toolbar";
import { fetchGet } from "../../utils/fetch";

export async function getServerSideProps(context) {
  const tanks = await fetchGet(`${process.env.APP_URL}/api/tank/all`);
  console.log(tanks);
  return {
    props: {
      tanks: tanks,
    },
  };
}

export default function Tanks({ tanks }) {
  return (
    <Layout>
      <ToolBar />
      <div>
        {tanks == undefined ? (
          <div>
            <p>Looks like you havn't added any tanks yet.</p> <br />
          </div>
        ) : (
          <div class="grid mr-10">
            {tanks.map((t) => (
              <TankThumbnail key={t.id} {...t} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
