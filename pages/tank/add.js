import { useForm } from "react-hook-form";
import axios from "axios";
export const getServerSideProps = async (ctx) => {
  // const { userId } = getAuth(ctx.req);
  // const tanks = await prisma.tank.findMany({
  //   where: {
  //   UserID: userId,
  //   },
  // });

  return { props: { test: "test" } };
};
export default function Add() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, event) => {
    event.preventDefault();
    axios
      .post("/api/tanks/add", {
        data: data,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label for="TankName" class="block text-xs font-medium text-gray-700">
          Tank Name
        </label>

        <input
          type="text"
          id="Tank Name"
          placeholder="Office tank"
          class="mt-1 w-1/4 rounded-md border-gray-200 shadow-sm sm:text-sm"
          defaultValue=""
          {...register("Name", { required: true })}
        />
        {errors.example && <span>This field is required</span>}
        <br />
        <br />
        <label
          for="Size (gallons)"
          class="block text-xs font-medium text-gray-700"
        >
          Size
        </label>

        <input
          type="number"
          id="Size"
          class="mt-1 w-1/4 rounded-md border-gray-200 shadow-sm sm:text-sm"
          {...register("Size")}
        />

        <br />
        <br />
        <label for="Location" class="block text-xs font-medium text-gray-700">
          Location
        </label>

        <input
          type="text"
          id="Location"
          class="mt-1 w-1/4 rounded-md border-gray-200 shadow-sm sm:text-sm"
          {...register("Location")}
        />

        <br />
        <br />
        <label for="Start Date" class="block text-xs font-medium text-gray-700">
          Start Date
        </label>

        <input
          type="date"
          id="StartDate"
          class="mt-1 w-1/4 rounded-md border-gray-200 shadow-sm sm:text-sm"
          {...register("StartDate")}
        />

        <br />
        <br />
        <label for="Desc" class="block text-xs font-medium text-gray-700">
          Desc
        </label>

        <textarea
          id="Desc"
          class="mt-1 w-1/4 rounded-md border-gray-200 shadow-sm sm:text-sm"
          {...register("Description")}
        />

        <input type="submit" />
      </form>

      <div></div>
    </>
  );
}
