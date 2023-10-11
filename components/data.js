import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Beneficios",
  desc: "Razones para elegirnos como tu socio de desarrollo de software a medida:  ",
  image: benefitOneImg,
  bullets: [
    {
      title: "Enfoque Centrado en el Cliente:",
      desc: "Ponemos a nuestros clientes en el centro de cada proyecto. Escuchamos tus necesidades y objetivos para asegurarnos de que el software que entregamos se alinee perfectamente con tus expectativas.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Calidad y Seguridad",
      desc: " Nos comprometemos con los más altos estándares de calidad y seguridad en el desarrollo de software. Utilizamos las mejores prácticas de la industria y herramientas de seguridad para garantizar la integridad y confidencialidad de tus datos.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Soporte Continuo",
      desc: "Nuestra relación no termina con la entrega del software. Ofrecemos un sólido soporte post-implementación para garantizar que tu sistema funcione sin problemas y esté al día con las últimas tecnologías y tendencias.      .",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Soluciones a Medida",
  desc: "Desarrollamos software a medida para satisfacer tus necesidades específicas. Nuestros servicios incluyen:",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Diseño Responsivo",
      desc: "Todas nuestras web están diseñados para funcionar en cualquier dispositivo, ya sea una computadora, una tableta o un teléfono inteligente.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Tecnología Moderna",
      desc: "Utilizamos las últimas tecnologías y herramientas para garantizar que tu software sea rápido, escalable y fácil de mantener.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Modo Claro y Oscuro",
      desc: "Nuestros sitios web vienen con un modo claro y oscuro integrado. Puedes cambiar entre los dos modos con solo presionar un botón.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
