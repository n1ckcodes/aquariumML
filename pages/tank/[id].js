import { useState, useEffect } from "react";
import dayjs from "dayjs";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Layout from "../../components/layout";
import { fetchGet } from "../../utils/fetch";
import MaintenanceModal from "../../components/modals/addMaintenance";
import ConfirmDelete from "../../components/modals/confirmDelete";

export async function getServerSideProps(context) {
  const { id } = context.query;
  const tankData = await fetchGet(`${process.env.APP_URL}/api/tank/${id}`);
  const eventData = await fetchGet(
    `${process.env.APP_URL}/api/event/tank/${id}`
  );
  return {
    props: {
      tankData: tankData,
      eventData: eventData,
    },
  };
}

const deleteEventById = (id) => {
  <ConfirmDelete />;
};

export default function Tank({ tankData, eventData }) {
  useEffect(() => {});
  const router = useRouter();

  const triggerRerender = () => {
    //This will allow us to refresh the server side props and do a true SSR rerender
    router.replace(router.asPath);
  };

  return (
    <Layout>
      <Link href="/tank">
        <a>
          <div class="btn btn-wide btn-outlin">Go Back</div>
        </a>
      </Link>

      <div>
        <table>
          <tr>
            <td class="font-bold">ID:</td>
            <td>{tankData.TankID}</td>
          </tr>
          <tr>
            <td class="font-bold">Size:</td>
            <td>{tankData.Size}</td>
          </tr>
          <tr>
            <td class="font-bold">Type</td>
            <td>{tankData.Type}</td>
          </tr>
          <tr>
            <td class="font-bold">Size:</td>
            <td>{tankData.Size}</td>
          </tr>
        </table>
        <br />
        <hr />
        <br />
        <br />

        <MaintenanceModal tankID={tankData.TankID} callBack={triggerRerender} />
      </div>
    </Layout>
  );
}
