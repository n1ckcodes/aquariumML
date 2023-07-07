import TankLayout from "components/Tank/TankLayout";
import prisma from "utils/prisma";
import { getAuth, buildClerkProps } from "@clerk/nextjs/server";

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  const { userId } = getAuth(context.req);
  let tank;
  console.log(id);
  try {
    tank = await prisma.tank.findFirst({
      where: {
        TankUID: String(id),
      },
      //   include: {
      //     TankDetails: true,
      //   },
    });
  } catch (e) {
    console.log(e);
  }

  console.log(tank);
  if (tank) {
    if (tank.UserID != userId) {
      return { noutFound: true };
    }

    tank.TankStartedDate = tank.TankStartedDate.toISOString();

    return { props: { ...buildClerkProps(context.req), tank } };
  } else {
    return { notFound: true };
  }
};

export default function Tank({ tank, error }) {
  return <TankLayout error={error} tank={tank} />;
}
