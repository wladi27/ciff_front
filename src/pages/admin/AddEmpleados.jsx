import React, { useState } from "react";
// Icons
import {
  RiEdit2Line,
  RiShieldCheckLine,
  RiErrorWarningLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { Switch } from "@headlessui/react";

const AddEmpleados = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <>
      {/* Profile */}
      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-xl text-gray-700">Empleado</h1>
        <hr className="my-8 border-gray-500/30" />
        <form>
          <div className="flex items-center mb-8">
            <div className="w-1/4">
              <p className="text-gray-700">Foto del empleado</p>
            </div>
            <div className="flex-1">
              <div className="relative mb-2">
                <img
                  src="https://img.freepik.com/foto-gratis/negocios-finanzas-empleo-concepto-mujeres-emprendedoras-exitosas-joven-empresaria-segura-anteojos-mostrando-gesto-pulgar-arriba-sostenga-computadora-portatil-garantice-mejor-calidad-servicio_1258-59118.jpg"
                  className="w-28 h-28 object-cover rounded-lg"
                />
                <label
                  htmlFor="avatar"
                  className="absolute bg-secondary-100 p-2 rounded-full hover:cursor-pointer -top-2 left-24"
                >
                  <RiEdit2Line />
                </label>
                <input type="file" id="avatar" className="hidden" />
              </div>
              <p className="text-gray-500 text-sm">
                Tipos de formatos: png, jpg, jpeg.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 md:flex-row md:items-center mb-8">
            <div className="w-full md:w-1/4">
              <p className="text-gray-700">
                Nombres<span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1 flex items-center gap-4">
              <div className="w-full">
                <input
                  type="text"
                  className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                  placeholder="Primer Nombre"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                  placeholder="Segundo Nombre"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 md:flex-row md:items-center mb-8">
            <div className="w-full md:w-1/4">
              <p className="text-gray-700">
                Apellidos<span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1 flex items-center gap-4">
              <div className="w-full">
                <input
                  type="text"
                  className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                  placeholder="Primer Apellido"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                  placeholder="Segundo Apellido"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p className="text-gray-700">
                Cédula <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder="Cédula"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p className="text-gray-700">
                Sexo <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <select className="w-full py-2 px-4 text-gray-700 outline-none rounded-lg bg-secondary-900 appearance-none">
                <option className="text-gray-700" value="Masculino">
                  Masculino
                </option>
                <option className="text-gray-700" value="Femenino">
                  Femenino
                </option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p className="text-gray-700">
                Teléfono fijo<span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder="Teléfono fijo"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p className="text-gray-700">
                Teléfono móvil <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder="Teléfono móvil"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p className="text-gray-700">
                Correo Electrónico <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="email"
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder="Correo Electronico"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p className="text-gray-700">
                Fecha de nacimiento <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="date"
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder="Fecha de nacimiento"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-primary/80 text-black py-2 px-4 rounded-lg hover:bg-primary transition-colors">
              Guardar
            </button>
          </div>
          <hr className="my-8 border-gray-500/30 border-dashed" />
          <h1 className="text-xl text-gray-700">Tallas del Empleados</h1>
          <hr className="my-8 border-gray-500/30" />
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p className="text-gray-700">
                Talla de Camisas <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder="Talla de Camisas"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p className="text-gray-700">
                Talla de Pantalón <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder="Talla de Pantalón"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p className="text-gray-700">
                Talla de Botas <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder="Talla de Botas"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-primary/80 text-black py-2 px-4 rounded-lg hover:bg-primary transition-colors">
              Guardar
            </button>
          </div>
          <hr className="my-8 border-gray-500/30 border-dashed" />
          <h1 className="text-xl text-gray-700">Ubicaión del Empleado</h1>
          <hr className="my-8 border-gray-500/30" />
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p className="text-gray-700">
                País <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <select className="w-full py-2 px-4 text-gray-700 outline-none rounded-lg bg-secondary-900 appearance-none">
                <option className="text-gray-700" value="Argentina">
                  Argentina
                </option>
                <option className="text-gray-700" value="Colombia">
                  Colombia
                </option>
                <option className="text-gray-700" value="México">
                  México
                </option>
                <option className="text-gray-700" value="Perú">
                  Perú
                </option>
                <option className="text-gray-700" value="Uruguay">
                  Uruguay
                </option>
                <option className="text-gray-700" value="Venezuela">
                  Venezuela
                </option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p className="text-gray-700">
                Estado <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <select className="w-full py-2 px-4 text-gray-700 outline-none rounded-lg bg-secondary-900 appearance-none">
                <option className="text-gray-700" value="Anzoátegui">
                  Anzoátegui
                </option>
                <option className="text-gray-700" value="Monagas">
                  Monagas
                </option>
                <option className="text-gray-700" value="Zulia">
                  Zulia
                </option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p className="text-gray-700">
                Municipio <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <select className="w-full py-2 px-4 text-gray-700 outline-none rounded-lg bg-secondary-900 appearance-none">
                <option className="text-gray-700" value="Anaco">
                  Anaco
                </option>
                <option className="text-gray-700" value="Cantaura">
                  Cantaura
                </option>
                <option className="text-gray-700" value="El Tigre">
                  El Tigre
                </option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p className="text-gray-700">
                Parroquía <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <select className="w-full py-2 px-4 text-gray-700 outline-none rounded-lg bg-secondary-900 appearance-none">
                <option className="text-gray-700" value="Anaco">
                  Anaco
                </option>
                <option className="text-gray-700" value="Cantaura">
                  Cantaura
                </option>
                <option className="text-gray-700" value="El Tigre">
                  El Tigre
                </option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p className="text-gray-700">
                Dirección de domicilio <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                className="w-full py-2 text-gray-700 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder="Dirección de domicilio"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-primary/80 text-black py-2 px-4 rounded-lg hover:bg-primary transition-colors">
              Guardar
            </button>
          </div>
          <hr className="my-8 border-gray-500/30 border-dashed" />
          <h1 className="text-xl text-gray-700">Cargo del Empleado</h1>
          <hr className="my-8 border-gray-500/30" />
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p className="text-gray-700">
                Cargo <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <select className="w-full py-2 px-4 text-gray-700 outline-none rounded-lg bg-secondary-900 appearance-none">
                <option className="text-gray-700" value="Gerente">
                  Gerente
                </option>
                <option className="text-gray-700" value="Analista">
                  Analista
                </option>
                <option className="text-gray-700" value="Obrero">
                  Obrero
                </option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p className="text-gray-700">
                Tipo de Persona<span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <select className="w-full py-2 px-4 text-gray-700 outline-none rounded-lg bg-secondary-900 appearance-none">
                <option className="text-gray-700" value="Administrativo">
                  Administrativo
                </option>
                <option className="text-gray-700" value="Operacional">
                  Operacional
                </option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p className="text-gray-700">
                Tipo de Jornada <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <select className="w-full py-2 px-4 text-gray-700 outline-none rounded-lg bg-secondary-900 appearance-none">
                <option className="text-gray-700" value="Diurno">
                  Diurno
                </option>
                <option className="text-gray-700" value="Nocturno">
                  Nocturno
                </option>
                <option className="text-gray-700" value="Mixto">
                  Mixto
                </option>
              </select>
            </div>
          </div>
        </form>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex justify-center">
            <button className="bg-primary/80 text-black py-2 px-4 rounded-lg hover:bg-primary transition-colors">
              Guardar
            </button>
          </div>
      </div>
    </>
  );
};

export default AddEmpleados;
