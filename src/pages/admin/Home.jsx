import React from "react";
import { Link } from "react-router-dom";
import CardTicket from "../../components/CardTicket";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import UserApp from "./Users";
import Example from "../../components/ModalForm";
// import AppUsers from "../admin/Users"

const Home = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <h3 className="text-2xl text-gray-700">Sistema de Control de Asistencia / Home</h3>
        <div className="flex items-center gap-2 text-3xl">
          <RiArrowLeftSLine className="hover:cursor-pointer hover:text-white transition-colors" />
          <RiArrowRightSLine className="hover:cursor-pointer hover:text-white transition-colors" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {/* Card */}
        
        <CardTicket
          ticket="inProcess"
          totalTickets="297"
          text="Total de Empleados"
        />
        <CardTicket
          ticket="close"
          totalTickets="264"
          text="Asistentes"
        />
        <CardTicket
          ticket="total"
          totalTickets="33"
          text="Inasistentes"
        />
      </div>
      <div>
        <h1 className="text-2xl text-gray-700 my-10">Registros más recientes</h1>
      </div>
      <div className="bg-secondary-100 p-8 rounded-xl">
        <div className="hidden md:grid grid-cols-1 md:grid-cols-5 gap-4 mb-10 p-4">
          <h5 className="text-gray-700">Nombre</h5>
          <h5 className="text-gray-700">Cargo</h5>
          <h5 className="text-gray-700">Estatus</h5>
          <h5 className="text-gray-700">Fecha / Hora</h5>
          <h5 className="text-gray-700">Acciones</h5>
        </div>
        <UserApp/>
      </div>
    </div>
  );
};

export default Home;
