import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import AquariumIcon from "../../../public/images/aquariumMenuIcon.svg";
import FishIcon from '../../../public/images/fish.svg'
import CalendarIcon from '../../../public/images/calendar.svg'
export default function DashboardNav(props) {

  const { pathname } = useRouter();
  return (
    <ul>
      <Link href="/dashboard/home">
        <a >
          <div >
          <li >
              Home
          </li>
          </div>
        </a>
      </Link>
      <Link href="/dashboard/home">
        <a>
        <div  className='border-solid border pt-5 pb-5'>
          <li class={`h-16 flex justify-center items-center`}>
          
              <Image
                class="inline-block"
                alt="Mountains"
                src={AquariumIcon}
                layout="responsive"
                width={700}
                height={475}
              />{" "}
              Tanks
          </li>
          </div>
        </a>
      </Link>

      <Link href="/dashboard/home">
        <a>
        <div  className='border-solid border pt-5 pb-5'>
          <li class={`h-16 flex justify-center items-center`}>
         
              Maintenance
          </li>
          </div>
        </a>
      </Link>
      <Link href="/dashboard/home">
        <a>
        <div  className='border-solid border pt-5 pb-5'>
          <li class={`h-16 flex justify-center items-center`}>
          <Image
            class="inline-block"
            alt="Mountains"
            src={FishIcon}
            layout="responsive"
            width={700}
            height={475}
          />{" "}
              Fish
          </li>
          </div>
        </a>
      </Link>
      <Link href="/dashboard/home">
        <a>
        <div  className='border-solid border pt-5 pb-5'>
          <li class={`h-16 flex justify-center items-center`}>
            <Image
            class="inline-block"
            alt="Mountains"
            src={CalendarIcon}
            layout="responsive"
            width={700}
            height={475}
          />{" "}
              Calendar
          </li>
          </div>
        </a>
      </Link>
    </ul>
  );
}
