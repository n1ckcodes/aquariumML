import { useState, useEffect } from "react";
import dayjs from "dayjs";
import Link from "next/link";
import { useRouter } from "next/router";
import { fetchGet } from "../../utils/fetch";
import DashboardLayout from "../../components/layouts/dashboard/dashboard";

export async function getServerSideProps(context) {
  const { id } = context.query;
  const tankData = await fetchGet(`${process.env.APP_URL}/api/tank/${id}`);
  const eventData = await fetchGet(
    `${process.env.APP_URL}/api/event/tank/${id}`
  );
  return {
    props: {
      tankData: [],
      eventData: [],
    },
  };
}



export default function DashboardHome({  }) {
  useEffect(() => {});
  const router = useRouter();

  const triggerRerender = () => {
    //This will allow us to refresh the server side props and do a true SSR rerender
    router.replace(router.asPath);
  };

  return (
    <DashboardLayout>
      <div className="max-h-full">This is the home page for a logged in user</div>
    </DashboardLayout>
  );
}
