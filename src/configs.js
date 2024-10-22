import {
  displayAt,
  STOPS,
  PAGE_DEPH_MARGIN,
  SKILLS_LIST,
  EXPERIENCE,
} from './constants/pageData';

const configs = {
  title: 'Edwin Garcia',
  subTitle: 'Dev portfolio.',
  stars: {
    maxSize: 20,
    emissionIntencity: 40,
    //optionally stars can be an image
    // url: 'icons/three-js-logo.png',
    dencity: 900,
  },
  navTitle: 'Edwin Garcia portfolio.',
  relevantStops: STOPS,
  pages: [
    {
      scale: 15,
      rotation: [Math.PI, 0, Math.PI],
      position: [0, 0, -PAGE_DEPH_MARGIN],
      displayAt: displayAt('About'),
      title: '¿Quien soy?',
      infos: [
        "* Desarrollador de software con 2 años de experiencia en soluciones front-end y back-end.",
        "* Soy un profesional orientado a resultados, siempre buscando optimizar procesos y mejorar la experiencia del usuario.",
        "* Mi capacidad para adaptarme rápidamente a nuevas tecnologías y entornos me impulsa a enfrentar desafíos con entusiasmo.",
        "* Me esfuerzo por orientar mis esfuerzos al logro y la mejora continua.",
    ],
    },
    {
      scale: 15,
      displayAt: displayAt('Experience'),
      rotation: [0, -Math.PI / 2, 0],
      position: [-PAGE_DEPH_MARGIN, 0, 0],
      title: 'Experiencia',
      imageList: EXPERIENCE,
      footer: 'Puede hacer clic en los iconos',
    },
    {
      scale: 15,
      displayAt: displayAt('Skills'),
      rotation: [-Math.PI / 2, 0, -Math.PI / 2],
      position: [0, PAGE_DEPH_MARGIN, 0],
      title: 'Skills',
      footer: 'And more...',
      imageList: SKILLS_LIST,
    },
    {
      scale: 15,
      displayAt: displayAt('Download CV'),
      rotation: [0, 0, 0],
      position: [0, 0, PAGE_DEPH_MARGIN],
      title: 'Este es mi CV!',
      footer: 'Haga clic en el icono de arriba para ver!',
      imageList: {
        rows: 1,
        separation: 3,
        leftPadding: 0,
        topPadding: 0,
        scale: 0.8,
        items: [
          {
            url: 'icons/resume.png',
            websiteURL:
              'https://docs.google.com/document/d/1TtV7WUyLmxhsBJh8SR5TEZmczq2Mdbyo/edit?usp=sharing&ouid=101978054952609176075&rtpof=true&sd=true',
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Personal Projects'),
      rotation: [Math.PI / 2, 0, 0],
      position: [0, -PAGE_DEPH_MARGIN, 0],
      title: '¿Quien soy?',
      infos: [
        "* Mision:",
        " Crear aplicaciones web de alta calidad enfocadas en el usuario, utilizando tecnologías modernas y fomentando la colaboración para impulsar el éxito de mis clientes y la comunidad tecnológica.",
        "* Vision: ",
        "* Ser un referente en desarrollo web, ofreciendo soluciones innovadoras y accesibles que mejoren la experiencia del usuario y potencien el crecimiento de negocios.",
    ],
    },
    {
      scale: 15,
      displayAt: displayAt('Get In Touch'),
      rotation: [0, Math.PI / 2, 0],
      position: [PAGE_DEPH_MARGIN, 0, 0],
      title: 'You can find me in:',
      footer: 'Almost done but keep scrolling :)',
      imageList: {
        rows: 2,
        separation: 1.8,
        leftPadding: -0.25,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: 'icons/linkedin.png',
            websiteURL:
              'http://www.linkedin.com/in/ealexandergarcia',
          },
          {
            url: 'icons/github.png',
            websiteURL: 'https://github.com/ealexandergarcia',
          },
          {
            url: 'icons/email.png',
            websiteURL: 'mailto:egarciapame@gmail.com',
          },
        ],
      },
    },
  ],
};

export default configs;
