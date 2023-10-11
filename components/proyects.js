import Image from "next/image";
import React from "react";
import Container from "./container";

import appIa from "../public/img/appia.png";
import admindashboard from "../public/img/admindashboard.png";
import Ecommerce from "../public/img/Ecommerce.png";

const Proyects = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-6 rounded-2xl py-14 dark:bg-trueGray-800">
            <div className="flex justify-center items-center">
              <p className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                Aplicación IA
              </p>
            </div>
            <Proyect image={appIa} />

            <p className="text-2xl leading-normal ">
              App estilo <Mark>ChatGPT</Mark>
              que permite a los usuarios interactuar con un bot de{" "}
              <Mark>inteligencia artificial</Mark>
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-6 rounded-2xl py-14 dark:bg-trueGray-800">
            <div className="flex justify-center items-center">
              <p className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                Panel Administrador
              </p>
            </div>
            <Proyect image={admindashboard} />

            <p className="text-2xl leading-normal ">
              Dashboard de <Mark>administrador</Mark> para todo tipo de
              aplicaciones, administracion de usuarios, roles, permisos, etc.
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-6 rounded-2xl py-14 dark:bg-trueGray-800">
        
          <div className="flex justify-center items-center">
              <p className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                Ecommerce
              </p>
            </div>

            <Proyect
              image={Ecommerce} 
            />

            <p className="text-2xl leading-normal ">
                Tienda online <Mark>ecommerce</Mark> con carrito de compras,
                administracion de productos, categorias, ventas, pasarelas de pago como paypal, mercado pago, etc.
            </p>


            <p className="text-2xl leading-normal "></p>
          </div>
        </div>
      </div>
    </Container>
  );
};

//Image card with description
function Proyect(props) {
  return (
    <div className="flex flex-col bg-gray-100 rounded-2xl dark:bg-trueGray-800 pt-6">
      <Image
        className="object-fit w-full h-64 mb-4 rounded-t-2xl"
        placeholder="blur"
        src={props.image}
      />
      <div className="px-6 py-6">{props.children}</div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Proyects;
