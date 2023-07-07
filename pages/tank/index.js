import prisma from "utils/prisma";
import Link from "next/link";
import Card from "components/Tank/Card";
import { getAuth, buildClerkProps } from "@clerk/nextjs/server";

export const getServerSideProps = async (ctx) => {
  const { userId } = getAuth(ctx.req);
  const tanks = await prisma.tank.findMany({
    where: {
      UserID: userId,
    },
    // include: {
    //   // TankEvents: true,
    // },
  });

  for (const element of tanks) {
    element.TankStartedDate = element.TankStartedDate.toISOString();
    }
  

  return { props: { ...buildClerkProps(ctx.req), tanks } };
};
export default function Tank({ tanks }) {
  console.log(tanks);
  return (
    <div>
   <Link href='/tank/add' class="p-10 border-solid border-blue-100 rounded-lg"><span class="bg-blue border-solid border-zinc-300 rounded-lg">Add</span></Link>
    <div class="grid grid-cols-12 gap-5">
      
      {tanks.map((tank) => (
        <div class="xs:col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4">
          <Card
            href={`/tank/${tank.TankUID}`}
            title={tank.TankName}
            desc={tank.TankDesc}
            uuid={tank.TankUID}
          />
        </div>
      ))}
    </div>
    </div>
  );
}
