import Link from "next/link";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
export default function TankThumbnail(props) {
  console.log(props);
  return (
    <div class="mb-10 w-10/12 border rounded-lg inline-block border-1 border-black hover:cursor-pointer p-5">
      <div tabindex="0" class="collapse">
        <input type="checkbox" class="peer" />
        <div class="collapse-title  text-primary-content  peer-checked:text-secondary-content">
          <h4 class="text-xl font-bold underline mb-3">{props.Name}</h4>
          <div>
            <p>Gallons: {props.Size}</p>
            <p>Type: {props.Type}</p>
            <p># Fish: 5</p>
            <p>Last water change: 1/2/2</p>
          </div>
        </div>
        <div class="collapse-content text-primary-content peer-checked:text-secondary-content">
          <div class="overflow-x-auto">
            <table class="table w-full">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Desc</th>
                  <th>Amount</th>
                  <th>Comments</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <td>
                  {" "}
                  <button class="btn btn-sm btn-wide btn-outline">
                    Add maintenance
                  </button>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                {props.events.map((t) => (
                  <tr class="hover">
                    <th>{dayjs(t.EventDate).format("MM/DD/YYYY")}</th>
                    <td>{t.Type}</td>
                    <td>{t.WaterChgAmt}</td>
                    <td>{t.Comments}</td>
                    <td>
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        id={t.EventID}
                        onClick={(e) => editEventByID(t.EventID)}
                      />
                      &nbsp;&nbsp;
                      <FontAwesomeIcon
                        id={t.EventID}
                        icon={faTrashCan}
                        onClick={(e) => deleteEventById(t.EventID)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div class="mt-10 btn-group grid grid-cols-12">
              <button class="btn btn-outline ">Previous</button>
              <button class="btn btn-outline">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
