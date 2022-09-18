import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import AquariumIcon from "../../../public/images/aquariumMenuIcon.svg";
import FishIcon from "../../../public/images/fish.svg";
import CalendarIcon from "../../../public/images/calendar.svg";
export default function DashboardNav(props) {
  const { pathname } = useRouter();
  return (
    <nav style={{ background: "#D3D3D3", height: "100vh" }}>
      <ul>
        <Link href="#">
          <a>
            <div style={{ paddingBottom: "2vh", paddingTop: "2vh" }}>
              <li>Home</li>
            </div>
          </a>
        </Link>

        <div style={{ paddingBottom: "2vh" }}>
          <h5 style={{textAlign:"center", textDecoration:"underline"}}>
            {/* <Image
                class="inline-block"
                alt="Mountains"
                src={AquariumIcon}
                layout="responsive"
                width={700}
                height={475}
              />{" "} */}
            Tanks
          </h5>
          <li><Link href="/ml/tanks/add">Add</Link></li>
          <li>Edit</li>
          <li>View</li>
        
          <li>Delete</li>
        </div>

        <div style={{ paddingBottom: "2vh" }}>
          <h5 style={{textAlign:"center", textDecoration:"underline"}}>
            {/* <Image
                class="inline-block"
                alt="Mountains"
                src={AquariumIcon}
                layout="responsive"
                width={700}
                height={475}
              />{" "} */}
            Maintenance
          </h5>
          <li><Link href="#">Add</Link></li>
          <li><Link href="#">Schedules</Link></li>
          <li>Edit</li>
          <li>View</li>
        
          <li>Delete</li>
        </div>
        <Link href="#">
          <a>
            <div style={{ paddingBottom: "2vh" }}>
              <li>
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
            <div style={{ paddingBottom: "2vh" }}>
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
