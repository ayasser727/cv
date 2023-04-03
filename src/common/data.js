import IntegrationInstructionsOutlinedIcon from "@mui/icons-material/IntegrationInstructionsOutlined";
import CellTowerIcon from "@mui/icons-material/CellTower";
import LaptopWindowsIcon from "@mui/icons-material/LaptopWindows";
import NoEncryptionGmailerrorredIcon from "@mui/icons-material/NoEncryptionGmailerrorred";
import QueuePlayNextIcon from "@mui/icons-material/QueuePlayNext";
import TerminalIcon from "@mui/icons-material/Terminal";
import DataObjectSharpIcon from "@mui/icons-material/DataObjectSharp";
import SensorsOffIcon from "@mui/icons-material/SensorsOff";
import FireHydrantAltIcon from "@mui/icons-material/FireHydrantAlt";
import { GoLocation } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";

import Cert1 from "../assets/images/cert1.jpg";
import Cert2 from "../assets/images/cert2.jpg";
import Cert3 from "../assets/images/cert3.png";
import Cert4 from "../assets/images/cert4.jpg";
import Cert6 from "../assets/images/cert6.jpg";
import Cert7 from "../assets/images/cert7.jpg";
import Cert8 from "../assets/images/cert8.jpg";
import Cert9 from "../assets/images/cert9.jpg";
import Cert10 from "../assets/images/cert10.jpg";
import Cert11 from "../assets/images/cert11.jpg";

export const Skills = [
  {
    Icon: <IntegrationInstructionsOutlinedIcon />,
    title: "Programming",
    info: "A programming language is a system of notation for writing computer programs.[1] Most programming languages are text-based formal languages, but they may also be graphical. They are a kind of computer language.",
  },
  {
    Icon: <CellTowerIcon />,
    title: "Networking",
    info: "Networking, also known as computer networking, is the practice of transporting and exchanging data between nodes over a shared medium in an information system. Networking comprises not only the design, construction and use of a network, but also the management, maintenance and operation of the network infrastructure, software and policies",
  },
  {
    Icon: <LaptopWindowsIcon />,
    title: "Windows, Malware Analysis",
    info: "Microsoft security researchers analyze suspicious files to determine if they are threats, unwanted applications, or normal files. Submit files you think are malware or files that you believe have been incorrectly classified as malware. For more information, read the submission guidelines.",
  },
  {
    Icon: <NoEncryptionGmailerrorredIcon />,
    title: "Encryption",
    info: "Encryption is one of the fundamental building blocks of cybersecurity, where it is used to protect data from being stolen, changed, or compromised. It works by scrambling data into a secret code that can only be unlocked with a unique digital key.",
  },
  {
    Icon: <QueuePlayNextIcon />,
    title: "FTK",
    info: "Create full-disk forensic images and process a wide range of data types from many sources, from hard drive data to mobile devices, network data and Internet storage, all in a centralized, secure database. FTK®",
  },
  {
    Icon: <TerminalIcon />,
    title: "Bash",
    info: "Bash is the GNU Project's shell—the Bourne Again SHell. This is an sh-compatible shell that incorporates useful features from the Korn shell (ksh) and the C shell (csh). It is intended to conform to the IEEE POSIX P1003.2/ISO 9945.2 Shell and Tools standard. It offers functional improvements over sh for both programming and interactive use. In addition, most sh scripts can be run by Bash without modification.",
  },
  {
    Icon: <DataObjectSharpIcon />,
    title: "Python",
    info: "Whether you're new to programming or an experienced developer, it's easy to learn and use Python.",
  },
  {
    Icon: <SensorsOffIcon />,
    title: "Wireshark",
    info: "Wireshark is a free and open-source packet analyzer. It is used for network troubleshooting, analysis, software and communications protocol development, and education. Originally named Ethereal, the project was renamed Wireshark in May 2006 due to trademark issues.[5]",
  },
  {
    Icon: <FireHydrantAltIcon />,
    title: "Hydra",
    info: "With Hydra's extensive web dashboard you're able to comfortably customize Hydra on the web without having to remember any commands or syntaxes!",
  },
];

export const certificates = [
  { title: "CCNA (200-301)", img: Cert1, subtitle: "NTI" },
  { title: "CyberOps Associate (200-201)", img: Cert2, subtitle: "NTI" },
  { title: "Network Security", img: Cert11, subtitle: "NTI" },

  { title: "Introduction to Cyber Security", img: Cert3, subtitle: "NTI" },
  { title: "Red Hat System Admin I (RH124)", img: Cert4, subtitle: "NTI" },
  { title: "Red Hat System Admin II (RH134)", img: Cert6, subtitle: "NTI" },
  { title: "NSE 1 Associate", img: Cert7, subtitle: "NTI" },
  { title: "NSE 2 Associate", img: Cert8, subtitle: "NTI" },
  { title: "NSE 3 Associate", img: Cert9, subtitle: "NTI" },
  { title: "CCNP Security (350-701)", img: Cert10, subtitle: "NTI" },
];

export const contact = [
  { icon: <GoLocation />, info: "Minufiyah - Egypt" },
  { icon: <BsTelephone />, info: "+20 115 240 6798" },
  { icon: <AiOutlineMail />, info: "ayasser727@gmail.com" },
  { icon: <BsCheck2Circle />, info: "Freelance Available" },
];
