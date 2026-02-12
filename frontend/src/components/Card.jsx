import React from "react";
import { Ellipsis, Pencil, Shell } from "lucide-react";

function Card(props) {
  return (
    <div>
      <div className="card w-96 bg-base-100 card-xl shadow-sm m-4">
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="card-title">{props.title}</h2>
            <div className=" justify-end dropdown  dropdown-bottom dropdown-end">
              <div tabIndex={0} role="button" className="btn m-1">
                <Ellipsis />
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <a>
                    <Pencil size={16} /> Edit
                  </a>
                </li>
                <li>
                  <a className="hover:bg-red-500">
                    <Shell size={16} />
                    Delete
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
