import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "¿Qué es el desarrollo de software a medida y por qué debería considerarlo para mi negocio? ",
    answer: "El desarrollo de software a medida significa que hacemos un programa de computadora especialmente diseñado para las cosas que tu negocio necesita. Es como un traje hecho a medida en lugar de uno que compras en una tienda. Este software se ajusta perfectamente a la forma en que trabajas, lo que hace que todo sea más rápido y eficiente. Esto es muy útil si tu negocio tiene formas de trabajar que son diferentes o especiales. En resumen, obtendrás un programa que se adapta exactamente a lo que tú haces, lo que te ayudará a hacer tu trabajo de manera más rápida y efectiva.",
  },
  {
    question: "¿Cuánto tiempo tomará desarrollar el software a medida para mi empresa?",
    answer: "El tiempo de desarrollo depende de la complejidad y alcance del proyecto. Proyectos simples pueden completarse en unas pocas semanas, mientras que proyectos más complejos pueden llevar varios meses. Realizamos una evaluación detallada al inicio del proyecto y proporcionamos un cronograma estimado.",
  },
  {
    question: "¿Qué medidas de seguridad se implementan para proteger la confidencialidad de mis datos?",
    answer:
      "La seguridad es nuestra prioridad. Implementamos medidas de seguridad estándar de la industria, como cifrado de datos, controles de acceso y auditorías periódicas. También cumplimos con regulaciones de seguridad y privacidad de datos, asegurando que tu información esté protegida.",
  },
  {
    question: "¿Qué sucede después de la entrega del software? ¿Ofrecen soporte y actualizaciones?",
    answer:
      "Sí, ofrecemos soporte continuo después de la entrega. Esto incluye mantenimiento, actualizaciones y asistencia técnica. Estamos comprometidos en asegurar que tu sistema funcione sin problemas y esté al día con las últimas tecnologías.",
  },
  {
    question: "¿Cómo puedo estar involucrado en el proceso de desarrollo y cómo mantendré actualizado sobre el progreso del proyecto?",
    answer:
      "Mantenemos una comunicación abierta y transparente. Durante el desarrollo, programamos reuniones regulares para proporcionarte actualizaciones. También te brindamos acceso a un sistema de seguimiento en línea donde puedes ver el progreso y hacer comentarios en tiempo real. Tu participación es fundamental para garantizar que el software cumpla con tus expectativas.",
  },
];

export default Faq;