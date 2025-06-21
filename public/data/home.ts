import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const homeData = {
  // To use your own photo, just place it in /public/assets and write the link as I did: eg: /assets/my_image.jpg
  // Of course it's best to convert your image file type to webp for better performance on the web!
  // The links are optional
  myImage: "/assets/my_image.webp",
  contactInfo: [
    {
      Icon: IoMdMail,
      Label: "bayzidalways@gmail.com",
      Link: "/contact", // This refers to the Contact page in the website, you can change it to whatever you like
    },
    {
      Icon: FaLocationDot,
      Label: "Yangzhou, China",
      Link: "https://www.google.com/maps/place/Yangzhou,+Jiangsu,+China/@32.4176375,119.3246006,11z/data=!3m1!4b1!4m6!3m5!1s0x35b67d5e11326c23:0xd2a9ae7df2b45af8!8m2!3d32.3935799!4d119.41269!16zL20vMDN0Z3d6?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D", // This is just a simple location of my city
    },
    {
      Icon: FaPhoneAlt,
      Label: "+86 195 0527 4134",
      Link: "tel:+8619505274134",
    },
  ],
  education: [
    {
      Icon: FaUniversity,
      Label: "Yangzhou University",
      Link: "https://www.google.com/maps/place/Yangzhou+University/@32.3990825,119.3873181,17z/data=!3m1!4b1!4m6!3m5!1s0x35b67d15f1a08ed9:0xd11573ed68560516!8m2!3d32.399078!4d119.389893!16s%2Fm%2F026g81f?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D.edu.eg/",
    },
    {
      Icon: FaGraduationCap,
      Label: "Bachelor's Degree in Software Engineering",
      Link: "https://www.google.com/maps/place/Yangzhou+University/@32.3990825,119.3873181,17z/data=!3m1!4b1!4m6!3m5!1s0x35b67d15f1a08ed9:0xd11573ed68560516!8m2!3d32.399078!4d119.389893!16s%2Fm%2F026g81f?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D.edu.eg/",
    },
  ],
  social: [
    {
      Icon: FaGithub,
      Label: "GitHub",
      Link: "https://github.com/bayzidalways",
    },
    {
      Icon: FaLinkedin,
      Label: "LinkedIn",
      Link: "https://www.linkedin.com/in/md-bayzid-211b67345",
    },
    {
      Icon: FaFacebook,
      Label: "Facebook",
      Link: "https://www.facebook.com/mdbayezed.bustami.9",
    },
    {
      Icon: FaInstagram,
      Label: "Instagram",
      Link: "https://www.instagram.com/nibirox",
    },
  ],
};
