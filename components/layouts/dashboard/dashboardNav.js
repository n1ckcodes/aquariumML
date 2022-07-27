import Link from "next/link";
import { useRouter } from "next/router";
import AppBanner from "./appBanner";
import Image from "next/image";
import AquariumIcon from "../../../public/images/aquariumMenuIcon.svg";
import FishIcon from '../../../public/images/fish.svg'
import CalendarIcon from '../../../public/images/calendar.svg'
export default function DashboardNav(props) {
  //TODO: see how to get rid of repition with tailwind styles

  const { pathname } = useRouter();
  return (
    <ul class={`border-r text-center h-full bg-neutral text-white text-lg`}>
      <Link href="/dashboard/home">
        <a >
          <div  className='border-solid border  pt-5 pb-5'>
          <li class={`h-16 flex justify-center items-center`}>
            <span
              class={`hover:text-teal-800 text-2xl  ${
                pathname == "/dashboard/home" ? "text-teal-700" : null
              }`}
            >
              Home
            </span>
          </li>
          </div>
        </a>
      </Link>
      <Link href="/dashboard/home">
        <a>
        <div  className='border-solid border pt-5 pb-5'>
          <li class={`h-16 flex justify-center items-center`}>
            <span
              class={`hover:text-teal-800 text-2xl inline-block  ${
                pathname == "/dashboard/23432" ? "text-teal-700" : null
              }`}
            >
              <Image
                class="inline-block"
                alt="Mountains"
                src={AquariumIcon}
                layout="responsive"
                width={700}
                height={475}
              />{" "}
              Tanks
            </span>
          </li>
          </div>
        </a>
      </Link>

      <Link href="/dashboard/home">
        <a>
        <div  className='border-solid border pt-5 pb-5'>
          <li class={`h-16 flex justify-center items-center`}>
            <span
              class={`hover:text-teal-800  text-2xl  ${
                pathname == "/dashboard/414" ? "text-teal-700" : null
              }`}
            >
              Maintenance
            </span>
          </li>
          </div>
        </a>
      </Link>
      <Link href="/dashboard/home">
        <a>
        <div  className='border-solid border pt-5 pb-5'>
          <li class={`h-16 flex justify-center items-center`}>
            <span
              class={`hover:text-teal-800 text-2xl   ${
                pathname == "/dashboard/23423" ? "text-teal-700" : null
              }`}
            >      <Image
            class="inline-block"
            alt="Mountains"
            src={FishIcon}
            layout="responsive"
            width={700}
            height={475}
          />{" "}
              Fish
            </span>
          </li>
          </div>
        </a>
      </Link>
      <Link href="/dashboard/home">
        <a>
        <div  className='border-solid border pt-5 pb-5'>
          <li class={`h-16 flex justify-center items-center`}>
            <span
              class={`hover:text-teal-800 text-2xl   ${
                pathname == "/dashboard/32424" ? "text-teal-700" : null
              }`}
            >  <Image
            class="inline-block"
            alt="Mountains"
            src={CalendarIcon}
            layout="responsive"
            width={700}
            height={475}
          />{" "}
              Calendar
            </span>
          </li>
          </div>
        </a>
      </Link>
    </ul>
  );
}
