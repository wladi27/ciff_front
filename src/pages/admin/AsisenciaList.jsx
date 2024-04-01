import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowLeftSLine, RiArrowRightSLine, RiAddLine } from "react-icons/ri";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import UserApp from './Users';
import AddAsistencia from '../../components/AddAsisencia';
import ExcelAsistencia from '../../components/ExcelAsistencia';

const AsisenciaList = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <h3 className="text-2xl text-gray-700">Sistema de Control de Asistencia / Asistencia</h3>
        <div className="flex items-center gap-2 text-3xl">
          <RiArrowLeftSLine className="hover:cursor-pointer hover:text-white transition-colors" />
          <RiArrowRightSLine className="hover:cursor-pointer hover:text-white transition-colors" />
        </div>
      </div>
      <div className='p-7'>
      <ExcelAsistencia />
      <AddAsistencia />
      </div>

      <div className="bg-secondary-100 p-8 rounded-xl">
        <div className="hidden md:grid grid-cols-1 md:grid-cols-5 gap-4 mb-10 p-4">
          <h5 className="text-gray-700">Nombre</h5>
          <h5 className="text-gray-700">Cargo</h5>
          <h5 className="text-gray-700">Estatus</h5>
          <h5 className="text-gray-700">Fecha / Hora</h5>
          <h5 className="text-gray-700">Acciones</h5>
        </div>
        <UserApp />
      </div>
    </div>
  )
}
export default AsisenciaList
