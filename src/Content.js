// import images
import Hero_person from "./assets/images/Hero/person.png";

import html from "./assets/images/Skills/html.jpg";
import css from "./assets/images/Skills/css.png";
import javascript from "./assets/images/Skills/javascript.png";
import maths from "./assets/images/Skills/maths.jpg";
import reactjs from "./assets/images/Skills/react.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "React Developer",
    firstName: "MANAV",
    LastName: "PATEL",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "3",
        text: "Months of Experience in React Developer. ",
      },
      {
        count: "10+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "HTML",
        para: "Hypertext Markup Language ",
        logo: html,
      },
      {
        name: "CSS",
        para: "Cascading Style Sheets",
        logo: css,
      },
      {
        name: "JS",
        para: "Java-Script",
        logo: javascript,
      },

      {
        name: "React",
        para: "React.js/ReactJS",
        logo: reactjs,
      },
      {
        name: "Master of Maths",
        para: "Mathematics",
        logo: maths,
      },
      // {
      //   name: "Sketch",
      //   para: "Lorem ipsum text  dummy",
      //   logo: sketch,
      // },
      {
        name: "Python",
        para: "Python programming language",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "Custom Web Application Development:   I can create custom web applications for your business using React. Whether you need an e-commerce website or a web application that can handle complex data, I can design and develop the application that best suits your business needs.",
        logo: services_logo1,
      },
      {
        title: "Master of Maths",
        para: " I have a strong foundation in advanced mathematical concepts such as calculus, linear algebra, and differential equations. I also have experience working with statistical analysis, probability theory, and optimization techniques.I have developed strong problem-solving skills through my studies in Mathematics. I can analyze complex problems, break them down into manageable parts, and develop effective solutions.",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "If you're looking for someone with strong photo editing skills, I have the expertise you need.  I have a strong understanding of photo editing software such as Adobe Photoshop, Lightroom, and GIMP. I can perform a wide range of editing tasks such as color correction, image enhancement, and photo restoration.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "NewsDNA -website",
        image: project1,
      },
      {
        title: "E-techz website",
        image: project2,
      },
      {
        title: "E-commerce website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "I can create custom web applications for your business using React. Whether you need an any website or a web application that can handle complex data, I can design and develop the application that best suits your business needs.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "manavpatel8122001@gmail.com",
        icon: GrMail,
        link: "manavpatel8122001@gmail.com",
      },
      {
        text: "+91 84695 19811",
        icon: MdCall,
        link: "https://wa.me/+918469519811",
      },
      {
        text: "manav_8121",
        icon: BsInstagram,
        link: "https://www.instagram.com/manav_8121/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2023",
  },
};
