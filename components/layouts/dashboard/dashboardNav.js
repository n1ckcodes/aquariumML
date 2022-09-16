import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import AquariumIcon from "../../../public/images/aquariumMenuIcon.svg";
import FishIcon from '../../../public/images/fish.svg'
import CalendarIcon from '../../../public/images/calendar.svg'
export default function DashboardNav(props) {

  const { pathname } = useRouter();
  return (
    <nav style={{background:"#D3D3D3", height:"100vh"}}>
    <ul>
      <Link href="#" >
        <a >
          <div style={{paddingBottom:"2vh", paddingTop:"2vh"}}>
          <li >
              Home
          </li>
          </div>
        </a>
      </Link>
      <Link href="#">
        <a>
        <div style={{paddingBottom:"2vh"}}>
          <li>
          
              {/* <Image
                class="inline-block"
                alt="Mountains"
                src={AquariumIcon}
                layout="responsive"
                width={700}
                height={475}
              />{" "} */}
              Tanks
          </li>
          </div>
        </a>
      </Link>

      <Link href="#">
        <a>
        <div style={{paddingBottom:"2vh"}}>
          <li >
         
              Maintenance
          </li>
          </div>
        </a>
      </Link>
      <Link href="#">
        <a>
        <div style={{paddingBottom:"2vh"}}>
          <li >
          {/* <Image
            class="inline-block"
            alt="Mountains"
            src={FishIcon}
            layout="responsive"
            width={700}
            height={475}
          />{" "} */}
              Fish
          </li>
          </div>
        </a>
      </Link>
      <Link href="#">
        <a>
        <div style={{paddingBottom:"2vh"}}>
          <li>
            {/* <Image
            class="inline-block"
            alt="Mountains"
            src={CalendarIcon}
            layout="responsive"
            width={700}
            height={475}
          />{" "} */}
              Calendar
          </li>
          </div>
        </a>
      </Link>
    </ul>
    </nav>
  );
}
