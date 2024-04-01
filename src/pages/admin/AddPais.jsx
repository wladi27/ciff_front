import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowLeftSLine, RiArrowRightSLine, RiAddLine } from "react-icons/ri";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import SearchComponent from "../../components/SearchPais";
import ListaPais from "../../components/ListaPais";

const AddPais = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <div className="flex items-center justify-between mb-10">
      <h3 className="text-2xl text-gray-700">Sistema de Control de Asistencia / País</h3>
        <div className="flex items-center gap-2 text-3xl">
          <RiArrowLeftSLine className="hover:cursor-pointer hover:text-white transition-colors" />
          <RiArrowRightSLine className="hover:cursor-pointer hover:text-white transition-colors" />
        </div>
      </div>
      <br />

      <>
        <button
          className="flex items-center gap-2 text-white text-1xl hover:underline bg-green-600 text-white active:bg-geen-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          <RiAddLine /> Agregar País
        </button>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 bg-slate-800 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl text-gray-700 font-semibold">
                      Agregar nuevo país
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <input
                      type="text"
                      placeholder="Nombre de país"
                      className="w-full text-gray-700 py-2 px-4 outline-none rounded-lg bg-secondary-100"
                    />
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Cerrar
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Guardar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
      <ListaPais />
      <SearchComponent />
    </>
  );
};

export default AddPais;
