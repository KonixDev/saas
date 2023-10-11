import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Proyects from "../components/proyects";

const Home = () => {
  return (
    <>
      <Head>
        <title>Soluciones Digitales | Hacemos tus ideas realidad</title>
        <meta
          name="description"
          content="Desarollamos soluciones digitales para tu negocio, desde una página web hasta un sistema de gestión empresarial."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="¿Quienes somos?" 
        title="Somos una empresa de desarrollo de software">
         Desarollamos soluciones digitales para tu negocio, desde una página web, aplicaciones y hasta un sistema de gestión empresarial,
          con el objetivo de ayudarte a crecer y mejorar tu negocio, a través de la tecnología  sistemas robustos y solidos 
          que te permitan escalar y crecer. 
         
      </SectionTitle>


      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        pretitle="Proyectos"
        title="Proyectos realizados">
        Estos son algunos de los proyectos que podriamos realizar.
      </SectionTitle>
      <Proyects/>
 


      <SectionTitle
        pretitle="Video de Presentación"
        title= "Conoce más sobre nosotros">
        Creemos que la mejor forma de conocernos es a través de un video, por eso te invitamos a ver nuestro video de presentación.
          
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonios"
        title="Esto es lo que dicen nuestros clientes">
        Nuestros clientes son nuestra mejor carta de presentación, por eso te
        invitamos a ver lo que dicen de nosotros.

      </SectionTitle>
      <Testimonials />

 


      <SectionTitle pretitle="FAQ" title="Preguntas frecuentes">
        Si tienes alguna pregunta, te invitamos a ver las preguntas frecuentes.
        
       
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;