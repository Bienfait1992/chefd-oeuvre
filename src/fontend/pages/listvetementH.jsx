import React from "react";
import { NavLink } from "react-router-dom";
import { DataVtmh } from "../datas/data_vetementH/data_vetementH";

function ListevetementH() {
  return (
    <div>
      <div>
        <div className="text-[#ffffff] bg-[#02518A] w-full justify-center mb-3">
          <div className="justify-center items-center ml-96 font-bold text-5xl">
            Vetements Homme
          </div>
        </div>

        <div className=" flex flex-wrap gap-3 ">
          {DataVtmh.map((Element) => (
            <>
              <div className="border-solid border-inherit border rounded-xl mb-5 w-96 justify-center items-center pt-20">
                <div>
                  <img src={Element.avatar1} alt="" className="m-auto mt-5 " />
                </div>
                <div className="ml-20">{Element.description}</div>
                <div className="ml-20">
                  <span>Prix:</span>
                  {Element.prix}
                </div>
                <NavLink to={`/VetementH/${Element.id}`}>
                  <button className="bg-[#E64C3C] rounded-xl text-white p-3 mt-3 mb-3 ml-20">
                    Voir plus
                  </button>
                </NavLink>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ListevetementH;
