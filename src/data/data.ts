import React from "react";
// import {
//   AiFillBehanceCircle,
//   AiFillCiCircle,
//   AiFillFileText,
//   AiFillPlusCircle,
//   AiFillQqCircle,
//   AiFillWeiboCircle,
// } from "react-icons/ai";
import {
  FaCartArrowDown,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaRunning,
  FaCarAlt,
  
  //FaUsers,
} from "react-icons/fa";
import { TbQuotes } from "react-icons/tb";
import { BiSelectMultiple } from "react-icons/bi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { RiFundsBoxFill,
  RiExchangeFundsLine, } from "react-icons/ri";
import {
  FaHandshakeSimple,
  FaPeopleGroup,
  FaTachographDigital,
  FaXTwitter,
} from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
import {
  MdEditDocument,
  MdOutlineEmail,
  MdOutlineInventory,
  MdOutlineLocationOn,
} from "react-icons/md";
import {
  //PiBinocularsFill,
  PiBuildingsFill,
  //PiCalculatorFill,
  PiCalendarBlankFill,
  // PiCarDuotone,
  // PiCarProfileDuotone,
  PiCarSimpleBold,
  PiChartLineFill,
  // PiChartLineUpFill,
  // PiChatCenteredFill,
  // PiChatCircleFill,
  // PiCheck,
  // PiCheckCircleFill,
  // PiCheckSquareDuotone,
 // PiCoinFill,
  // PiCrownDuotone,
  // PiDesktopDuotone,
  // PiDesktopFill,
  // PiDeviceMobileFill,
  PiEnvelopeFill,
  PiFileArchiveDuotone,
  // PiFileFill,
  PiFileMagnifyingGlassDuotone,
  PiFilePlusFill,
  PiFileTextFill,
  PiGearFill,
  PiHandCoinsFill,
  PiHandshakeFill,
  PiHeadphonesFill,
  PiHeartbeatFill,
  //PiLightbulbFilamentFill,
  PiMapPinFill,
  PiMoneyFill,
  PiPhoneCallBold,
  PiPhoneCallDuotone,
  PiPhoneCallFill,
  //PiSealCheckFill,
  PiStarFill,
  PiTimerFill,
  PiToothFill,
  PiUserFill,
  PiUsersThreeFill,
  PiWebhooksLogoFill,
  PiWhatsappLogo,
  //PiWhatsappLogoBold,
  PiWindowsLogoFill,
} from "react-icons/pi";
import { v4 as uuidv4 } from "uuid";

import whyMotorpediaCard1 from "/images/img1.jpg";
import whyMotorpediaCard2 from "/images/whyus2.jpg";
import whyMotorpediaCard3 from "/images/whyus3.jpg";
import whyMotorpediaCard4 from "/images/whyus4.jpg";
// import whyMotorpediaCard5 from "/images/whyAccoupayCard_5.png";
// import whyMotorpediaCard6 from "/images/whyAccoupayCard_6.png";

import testimonial1 from "/images/testimonial1.png";
import testimonial2 from "/images/testimonial2.png";
import testimonial3 from "/images/testimonial3.png";
import testimonial4 from "/images/testimonial4.png";
// import testimonial5 from "/images/testimonial5.png";
// import testimonial6 from "/images/testimonial6.png";
// import testimonial7 from "/images/testimonial7.png";
// import testimonial8 from "/images/testimonial8.png";

import blogImg1 from "/images/blogImg1.png";
import blogImg2 from "/images/blogImg2.png";
import blogImg3 from "/images/blogImg3.png";

import {
  BsBagHeartFill,
  BsClockHistory,
  BsFillRocketTakeoffFill,
  BsGraphUpArrow,
  BsPersonCheck,
  BsRobot,
} from "react-icons/bs";
import { GiCarKey, GiKite } from "react-icons/gi";

import { SlPlane } from "react-icons/sl";

import caseStudyImg1 from "/images/case_study_img1.png";
import caseStudyImg2 from "/images/case_study_img2.png";
import caseStudyImg3 from "/images/case_study_img3.png";
import caseStudyImg4 from "/images/case_study_img4.png";
import caseStudyImg5 from "/images/case_study_img5.png";
import caseStudyImg6 from "/images/case_study_img6.png";

import teamPic1 from "/images/team_image1.png";
import teamPic2 from "/images/team_image2.png";
import teamPic3 from "/images/team_image3.png";
import teamPic4 from "/images/team_image4.png";
import teamPic5 from "/images/team_image5.png";
import teamPic6 from "/images/team_image6.png";

// import productImg1 from "/images/produc_Img1.png";
// import productImg2 from "/images/produc_Img2.png";
// import productImg3 from "/images/produc_Img3.png";
// import productImg4 from "/images/produc_Img4.png";
// import productImg5 from "/images/produc_Img5.png";
// import productImg6 from "/images/produc_Img6.png";

import blogPageImg1 from "/images/blog_img1.png";
import blogPageImg2 from "/images/blog_img2.png";
import blogPageImg3 from "/images/blog_img3.png";
import blogPageImg4 from "/images/blog_img4.png";
import blogPageImg5 from "/images/blog_img5.png";
import blogPageImg6 from "/images/blog_img6.png";

import recentPostImg1 from "/images/recent_post_img1.png";
import recentPostImg3 from "/images/recent_post_img3.png";
import recentPostImg4 from "/images/recent_post_img4.png";
// import { TbMapPinSearch } from "react-icons/tb";
import {
  SiConvertio,
  //SiPiaggiogroup,
  // SiPicardsurgeles,
  SiPrivateinternetaccess,
} from "react-icons/si";
//import { RiGroup2Fill } from "react-icons/ri";
// import { GrServices } from "react-icons/gr";
// import { Link } from "react-router-dom";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { TbDeviceDesktopStar } from "react-icons/tb";
import { IoMailUnreadOutline } from "react-icons/io5";
// import { FcAssistant } from "react-icons/fc";
// import { GrAction, GrHelp, GrHelpBook } from "react-icons/gr";
import { BiCheckShield, BiTargetLock } from "react-icons/bi";
import { RiSeoFill } from "react-icons/ri";
import { TiSocialGooglePlusCircular } from "react-icons/ti";
import { HiDocumentCheck } from "react-icons/hi2";

export const headerMenu = [
  {
    id: uuidv4(),
    name: "Home",
    link: "/",
    isSubmenu: false,
  },
  {
    id: uuidv4(),
    name: "About Us",
    link: "/about",
    isSubmenu: false,
  },

  // {
  //   id: uuidv4(),
  //   name: "Contact Us",
  //   link: "/contact",
  //   isSubmenu: false,
  // },
  {
    id: uuidv4(),
    name: "Services",
    isSubmenu: true,
    submenu: [
      {
        id: uuidv4(),
        name: "All Services",
        link: "/services",
      },
      {
        id: uuidv4(),
        name: "Digitalization",
        link: "/services/DigitalizePro",
      },
      {
        id: uuidv4(),
        name: "RTO Assistance",
        link: "/services/RTO",
      },
      {
        id: uuidv4(),
        name: "Sales Enablement",
        link: "/services/saleEnablement",
      },
      // {
      //   id: uuidv4(),
      //   name: "Real State Services",
      //   link: "/services/real-state-services",
      // },
      // {
      //   id: uuidv4(),
      //   name: "Healthcare Services",
      //   link: "/services/healthcare-services",
      // },
      // {
      //   id: uuidv4(),
      //   name: "Dentist Services",
      //   link: "/services/dentist-services",
      // },
    ],
  },
  // {
  //   id: uuidv4(),
  //   name: "Shop",
  //   isSubmenu: true,
  //   submenu: [
  //     {
  //       id: uuidv4(),
  //       name: "Shop Page",
  //       link: "/shop",
  //     },
  //     {
  //       id: uuidv4(),
  //       name: "Shop Details",
  //       link: "/shop/shop-details",
  //     },
  //     {
  //       id: uuidv4(),
  //       name: "Cart",
  //       link: "/cart",
  //     },
  //     {
  //       id: uuidv4(),
  //       name: "Checkout",
  //       link: "/checkout",
  //     },
  //   ],
  // },

  // {
  //   id: uuidv4(),
  //   name: "Blog",
  //   isSubmenu: true,
  //   submenu: [
  //     {
  //       id: uuidv4(),
  //       name: "Blog Page",
  //       link: "/blog",
  //     },

  //     {
  //       id: uuidv4(),
  //       name: "Blog Details",
  //       link: "/blog-details",
  //     },
  //   ],
  // },

  {
    id: uuidv4(),
    name: "FAQs",
    link: "/faq",
    isSubmenu: false,
  },
];

export const socialLinks = [
  {
    id: uuidv4(),
    name: "Facebook",
    link: "#",
    icon: React.createElement(FaFacebookF),
  },
  {
    id: uuidv4(),
    name: "Twitter",
    link: "https://twitter.com/TheMotorPedia",
    icon: React.createElement(FaXTwitter),
  },
  {
    id: uuidv4(),
    name: "Linkedin",
    link: "#",
    icon: React.createElement(FaLinkedinIn),
  },
  {
    id: uuidv4(),
    name: "Instagram",
    link: "https://www.instagram.com/motorpedia_in/",
    icon: React.createElement(FaInstagram),
  },
];

export const footerLinks = [
  {
    id: uuidv4(),
    name: "Resources",
    links: [
      {
        id: uuidv4(),
        name: "Home",
        link: "/",
      },
      {
        id: uuidv4(),
        name: "About",
        link: "/about",
      },

      {
        id: uuidv4(),
        name: "Services",
        link: "/services",
      },
      {
        id: uuidv4(),
        name: "Contact Us",
        link: "/contact",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Services",
    links: [
      {
        id: uuidv4(),
        name: "All Services",
        link: "/services",
      },
      {
        id: uuidv4(),
        name: "Digitalization",
        link: "/services/DigitalizePro",
      },
      {
        id: uuidv4(),
        name: "RTO",
        link: "/services/RTO",
      },
      {
        id: uuidv4(),
        name: "Sale Enablement",
        link: "/services/saleEnablement",
      },
      // {
      //   id: uuidv4(),
      //   name: "Dentist Services",
      //   link: "/services/dentist-services",
      // },
    ],
  },
];

export const getInTouch = [
  {
    id: uuidv4(),
    name: "Get In Touch",
    links: [
      {
        id: uuidv4(),
        name: "contact@themotorpedia.com",
        link: "mailto:contact@themotorpedia.com",
        isLink: true,
        icon: React.createElement(MdOutlineEmail),
      },
      {
        id: uuidv4(),
        name: "+91 9205522250",
        isLink: true,
        link: "tel:+91 9205522250",
        icon: React.createElement(PiPhoneCallBold),
      },
      {
        id: uuidv4(),
        name: "Suite No. 24, 3rd Floor, JMD Empire Square Mall, MG Road, Gurugram, Haryana, India - 122002",
        isLink: false,
        icon: React.createElement(MdOutlineLocationOn),
      },
    ],
  },
];

export const teamContactDetails = [
  {
    id: uuidv4(),
    name: "contact@themotorpedia.com",
    link: "contact@themotorpedia.com",
    icon: React.createElement(PiEnvelopeFill),
  },
  {
    id: uuidv4(),
    name: "+91 9205522250",
    link: "tel:+91 9205522250",
    icon: React.createElement(PiPhoneCallFill),
  },
  {
    id: uuidv4(),
    name: "Suite No. 24, 3rd Floor, JMD Empire Square Mall, MG Road, Gurugram, Haryana, India - 122001",
    link: "",
    icon: React.createElement(PiMapPinFill),
  },
];

export const solutionsFeatures = [
  {
    id: uuidv4(),
    name: "RTO Assistance Network",
    icon: React.createElement(PiCarSimpleBold),
    linkto: "/services/RTO",
  },
  {
    id: uuidv4(),
    name: "Comprehensive Digitalization Platform",
    icon: React.createElement(FaTachographDigital),
    linkto: "/services/DigitalizePro",
  },
  {
    id: uuidv4(),
    name: "Sales Optimization Suite",
    icon: React.createElement(BsGraphUpArrow),
    linkto: "/services/saleEnablement",
  },

  {
    id: uuidv4(),
    name: "Procurement Powerhouse",
    icon: React.createElement(FaCartArrowDown),
    linkto: "/services/saleEnablement",
  },
];

export const featuresCard = [
  {
    id: uuidv4(),
    icon: React.createElement(PiCarSimpleBold),
    name: "RTO Assistance Network",
    desc: "Covering all RTO requirements such as ownership transfer, challan clearance, NOC issuance, and Vahan check services in just few clicks",
    linkto: "/services/RTO",
  },
  {
    id: uuidv4(),
    icon: React.createElement(FaTachographDigital),
    name: "Comprehensive Digitization Platform",
    desc: "Offering online and offline marketing, 360-degree photo- shoot capabilities with virtual studio, and centralized website for inventory management",
    linkto: "/services/DigitalizePro",
  },
  {
    id: uuidv4(),
    icon: React.createElement(BsGraphUpArrow),
    name: "Sales Optimization Suite",
    desc: "Including lead management, inventory oversight, insurance facilitation, and finance assistance to enhance sales efficiency ",
    linkto: "/services/saleEnablement",
  },
  {
    id: uuidv4(),
    icon: React.createElement(FaCartArrowDown),
    name: "Procurement Powerhouse",
    desc: "Providing the predictive buying  price analysis , lead generation for procurement , vehicle inspection services , and inventory funding ",
    linkto: "/services/saleEnablement",
  },
];

export const stepByStepCard = [
  {
    id: uuidv4(),
    title: "Strategic Consultation  ",
    desc: "Engage in comprehensive discussions and effective liaising, dedicating 30 minutes to grasp challenges and prioritize objectives",
    icon: React.createElement(LiaChalkboardTeacherSolid),
  },
  {
    id: uuidv4(),
    title: "AI-driven Unified Integration ",
    desc: "Implement Motorpedia's AI tools for a unified dashboard integrating procurement, sales, digital presence, and operational efficiency in dealership operations",
    icon: React.createElement(BsRobot),
  },
  {
    id: uuidv4(),
    title: "Conversion-Centric Excellence",
    desc: "Prioritize conversion with world-class automotive solutions, ensuring exceptional customer experiences",
    icon: React.createElement(SiConvertio),
  },
];

export const whyMotorpediaCard = [
  {
    id: uuidv4(),
    img: whyMotorpediaCard1,
    title: "Expertly Tailored ",
    des: "We empathize with dealership challenges, offering centralized solutions to meet every need",
  },
  {
    id: uuidv4(),
    img: whyMotorpediaCard2,
    title: "Timely Coordination ",
    des: "We consistently deliver solutions within the allocated time frame, ensuring client satisfaction",
  },
  {
    id: uuidv4(),
    img: whyMotorpediaCard3,
    title: "Value-Based Billing",
    des: "We charge only when it benefits you, ensuring affordability and transparent pricing",
  },
  {
    id: uuidv4(),
    img: whyMotorpediaCard4,
    title: "Personalized Management",
    des: "We assign auto expert relationship manager catering exclusively to all your requirements",
  },
  // {
  //   id: uuidv4(),
  //   img: whyMotorpediaCard1,
  //   title: "Fancy Number Booking",
  //   des: "Hire or relocate team member with in house visa support",
  // },
  // {
  //   id: uuidv4(),
  //   img: whyMotorpediaCard2,
  //   title: "Challan Clearance",
  //   des: "Hire or relocate team member with in house visa support",
  // },
  // {
  //   id: uuidv4(),
  //   img: whyMotorpediaCard3,
  //   title: "Insurance Transfer & Endorsement",
  //   des: "Hire or relocate team member with in house visa support",
  // },
  // {
  //   id: uuidv4(),
  //   img: whyMotorpediaCard4,
  //   title: "Scrap Vehicle Deregistration",
  //   des: "Hire or relocate team member with in house visa support",
  // },
];

export const faqs = [
  {
    id: uuidv4(),
    question: "What services does Motorpedia offer?",
    answer:
      "Motorpedia offers a comprehensive suite of services to transform auto dealership, including ownership transfer, challan clearance, fancy numbers, digitalization of dealership, and many more",
  },
  {
    id: uuidv4(),
    question: "Which locations does Motorpedia operate in?",
    answer:
      "We are currently operational across NCR, Haryana and Uttar Pradesh",
  },
  {
    id: uuidv4(),
    question: "How does time does ownership transfer take?",
    answer:
      "Ownership transfer usually takes 3 RTO working dats from the day of document submission / seller peshi as applicable",
  },
  {
    id: uuidv4(),
    question: "Can Motorpedia handle interstate transfers?",
    answer:
      "Yes, Motorpedia can facilitate interstate transfers for any location",
  },
  {
    id: uuidv4(),
    question: "How quickly can services be initiated?",
    answer: "As soon as you wish to!",
  },
  {
    id: uuidv4(),
    question: "How do I get in touch with Motorpedia?",
    answer:
      "You can write to us at contact@themotorpedia.com and we will be in touch with you shortly",
  },
];

export const testimonials = [
  {
    id: uuidv4(),
    img: testimonial1,
    name: "Amit",
    designation: "Used Car Dealer in Delhi",
    review:
      "I highly recommend anyone looking for quick and reliable RC transfer services. Thank you for outstanding support!",
  },
  {
    id: uuidv4(),
    img: testimonial2,
    name: "Rizwan",
    designation: "Used Bike Dealer in Gurgaon",
    review:
      "What impresses me the most was their innovative lead generation strategies. They utilize cutting-edge tools to connect with potential buyers like me, making the entire bike-buying experience effortless and convenient",
  },
  {
    id: uuidv4(),
    img: testimonial3,
    name: "Gurpreet",
    designation: "Used Car Dealer in Ghaziabad",
    review:
      "Thanks to their exceptional photoshoot and inventory presentation, I was able to find the perfect car for my needs without any hassle. The entire experience was seamless",
  },
  {
    id: uuidv4(),
    img: testimonial4,
    name: "Rajiv",
    designation: "Used Commercial Vehicle Dealer in Sonipat",
    review:
      "The team made the entire process hassle-free and straightforward. They handled the NOC and Challan clearance with utmost care and attention to detail, ensuring all necessary paperwork was completed accurately and promptly",
  },
  // {
  //   id: uuidv4(),
  //   img: testimonial5,
  //   name: "Lav Kush",
  //   designation: "Restaurant Owner",
  //   review:
  //     "Highly impressed and satisfied with their commitment to excellence. My go-to choice for all car servicing needs",
  // },
  // {
  //   id: uuidv4(),
  //   img: testimonial6,
  //   name: "Parveen Shekhawat",
  //   designation: "CEO, Tech Innovations",
  //   review:
  //     "Their cost-effective solutions and impeccable service quality make them my top recommendation for automotive needs.",
  // },
  // {
  //   id: uuidv4(),
  //   img: testimonial7,
  //   name: "Jiya Arya ",
  //   designation: "Product Manager",
  //   review:
  //     "Absolutely thrilled with the service! Motorpedia showed unmatched professionalism and expertise",
  // },
  // {
  //   id: uuidv4(),
  //   img: testimonial8,
  //   name: "Shreya Sharma",
  //   designation: "CFO, Solutions",
  //   review:
  //     " With their affordable solutions and top-notch service quality, they've earned my trust. I highly recommend them for reliable car assistance",
  // },
];

export const pricing = [
  {
    id: uuidv4(),
    icon: React.createElement(GiKite),
    planName: "Basic Plan",
    desc: "Hire employees in 100+ countries where you don't have entities",
    isPopular: false,
    monthlyPrice: "10",
    features: [
      "Accurate and Timely",
      "Basic Financial Records",
      "Starting at $X per month",
    ],
  },
  {
    id: uuidv4(),
    icon: React.createElement(SlPlane),
    planName: "Standard Plan",
    desc: "All packages come with [mention any additional benefits, features, ",
    isPopular: true,
    monthlyPrice: "20",
    features: ["Payroll Processing", "Full Bookkeeping", "Tax Preparation"],
  },
  {
    id: uuidv4(),
    icon: React.createElement(BsFillRocketTakeoffFill),
    planName: "Premium Plan",
    desc: "Explore our case studies to see how businesses like yours have benefited",
    isPopular: false,
    monthlyPrice: "40",
    features: ["Full Bookkeeping", "Tax Preparation", "Financial Advisory"],
  },
];

export const blogSection = [
  {
    id: uuidv4(),
    date: "Jan 15",
    title: "Streamlining Year-End Financial Reporting",
    img: blogImg1,
    desc: "Explore essential factors to consider when selecting payroll processing services. From compliance expertise ",
    category: "Taxation",
  },
  {
    id: uuidv4(),
    date: "Jan 16",
    title: "Best Practices for Employee Expense Management",
    img: blogImg2,
    desc: "Discover how technology is reshaping modern accounting practices. From automation to cloud-based solutions,",
    category: "Processing",
  },
  {
    id: uuidv4(),
    date: "Jan 1",
    title: "The Evolution of Cloud-Based Accounting Solutions",
    img: blogImg3,
    desc: "Identify and prevent common accounting mistakes with our insightful guide. Learn practical strategies.",
    category: "Taxation",
  },
];

export const contactCard = [
  // {
  //   id: uuidv4(),
  //   icon: React.createElement(PiBinocularsFill),
  //   title: "Compare Motorpedia",
  //   desc: "Explore how Motorpedia stands out. Check our comparison.",
  //   linkText: "Compare Motorpedia",
  // },
  {
    id: uuidv4(),
    icon: React.createElement(IoMailUnreadOutline),
    title: "Write to us     ",
    desc: "Curious about our services? Send an email to know more",
    linkText: "contact@themotorpedia.com",
    linkto: "mailto:contact@themotorpedia.com",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiPhoneCallDuotone),
    title: "Give us a ring ",
    desc: "Monday through Saturday from 9AM - 8PM IST ",
    linkText: "Call Us",
    linkto: "tel:+919205522250",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiWhatsappLogo),
    title: "Chat with us",
    desc: "Looking for answers? Chat with us and clear all your doubts",
    linkText: "Ping Us",
    linkto: "https://wa.me/+919205522250",
  },
];

export const integrationsCard = [
  {
    id: uuidv4(),
    icon: React.createElement(FaPeopleGroup),
    title: "Dealership Management Solution (DMS)",
    description:
      "Transform your dealership via our all-in-one digital platform providing comprehensive services such as RTO, finance, insurance and invoicing",
  },
  {
    id: uuidv4(),
    icon: React.createElement(MdOutlineInventory),
    title: "Central Inventory Management ",
    description:
      "Enhance efficiency in marketing, procurement and sales with centralized inventory management solutions",
  },
  {
    id: uuidv4(),
    icon: React.createElement(SiPrivateinternetaccess),
    title: "AI powered Pricing Tool     ",
    description:
      "Drive informed decisions with predictive analysis of buying/selling prices",
  },
  {
    id: uuidv4(),
    icon: React.createElement(TbDeviceDesktopStar),
    title: "Digital Hub ",
    description:
      "Establish a cohesive digital presence across all social media platforms along with your own website and digital catalogue",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiHandshakeFill),
    title: "Lead Management ",
    description:
      "Boost procurement and sales performance through lead improvisation strategies",
  },
];

export const storyData = [
  {
    id: uuidv4(),
    title: "Who We Are",
    desc: "At Motorpedia, we are more than just a service provider. We are your partners in revolutionizing the automotive industry. Our team brings years of experience and a passion for innovation to every project. We're dedicated to offering tailored solutions and world-class services to help your dealership thrive. With Motorpedia, you're getting more than just a vendor – you're gaining a trusted partner committed to your success ",
  },
  {
    id: uuidv4(),
    title: "Our Vision",
    desc: "At Motorpedia, our aspiration is to redefine the automotive landscape through innovation and technology. We strive to lead the industry by empowering dealerships with AI-driven solutions, transforming traditional approaches into extraordinary experiences. With a commitment to excellence and a passion for progress, we envision a future where every dealership operates at the forefront of innovation, efficiency, and customer satisfaction",
  },
  {
    id: uuidv4(),
    title: "Expert Team",
    desc: "Our team of seasoned automotive specialists offers extensive expertise in every dealer engagement. From procurement to sales and marketing, we're equipped to navigate all your dealership needs with precision and care",
  },
];

export const ourValues = [
  {
    id: uuidv4(),
    icon: React.createElement(BsBagHeartFill),
    title: "Customer Empathy",
    desc: "Understanding and addressing customer needs with compassion and consideration",
  },
  {
    id: uuidv4(),
    icon: React.createElement(FaRunning),
    title: "Bias for Action",
    desc: "Taking proactive steps swiftly and decisively to drive progress and achieve goals",
  },
  {
    id: uuidv4(),
    icon: React.createElement(FaHandshakeSimple),
    title: "Commitment to Excellence",
    desc: " Dedicated to achieving the highest standards of performance and continuous improvement in all endeavors",
  },
  {
    id: uuidv4(),
    icon: React.createElement(BsPersonCheck),
    title: "Trustworthy",
    desc: "Consistently demonstrating reliability, integrity, and honesty in all interactions",
  },
];

export const awardsData = [
  {
    id: uuidv4(),
    name: "Awwwards SOTD",
    desc: "FOR DISPLAY 2022",
  },
  {
    id: uuidv4(),
    name: "Wix.com",
    desc: "INTERVIEW 2021",
  },
  {
    id: uuidv4(),
    name: "CSS Awards",
    desc: "FEATURE 2020",
  },
  {
    id: uuidv4(),
    name: "Muzli",
    desc: "FEATURE 2020",
  },
  {
    id: uuidv4(),
    name: "Awwwards",
    desc: "FOR MUTEZA 2019",
  },
  {
    id: uuidv4(),
    name: "Chapters Studio",
    desc: "FOR DISPLAY 2018",
  },
];

export const coreServices = [
  {
    id: uuidv4(),
    icon: React.createElement(FaTachographDigital),
    title: "Digitalization",
    link: "/services/DigitalizePro",
    desc: "Elevate your online presence across all social media platforms, establish your own website, enjoy seamless digital catalogue, enhance vehicle listing through professional photoshoot and editing - all this through our comprehensive digitalization platform",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiCarSimpleBold),
    title: "RTO Assistance",
    link: "/services/RTO",
    desc: "Say goodvye to all your RTO related issues with our one-stop solution - be it basic ownership transfer, hypothecation addition and termination, challan clearance or NOC issuance, we have got you covered and all this at superfast TATs",
  },
  {
    id: uuidv4(),
    icon: React.createElement(BsGraphUpArrow),
    title: "Sales Enablement",
    link: "/services/saleEnablement",
    desc: "You focus on right buying and selling of cars while we take care of the rest - finance, insurance, inventory funding, warrenty, RSA, refurbishment, lead management, inventory oversight and pricing solutions to improve your vehicle transaction experience",
  },
  // {
  //   id: uuidv4(),
  //   icon: React.createElement(PiBuildingsFill),
  //   title: "Real Estate Services",
  //   link: "/services/real-state-services",
  //   desc: "Efficient payroll management is at the heart of our services. Experience seamless payroll processing,",
  // },
  // {
  //   id: uuidv4(),
  //   icon: React.createElement(PiHeartbeatFill),
  //   title: "Healthcare Services",
  //   desc: "Efficient payroll management is at the heart of our services. Experience seamless payroll processing,",
  //   link: "/services/healthcare-services",
  // },
  // {
  //   id: uuidv4(),
  //   icon: React.createElement(PiToothFill),
  //   title: "Dentist Services",
  //   link: "/services/dentist-services",
  //   desc: "Efficient payroll management is at the heart of our services. Experience seamless payroll processing,",
  // },
];

export const whatWeDo = [
  {
    id: uuidv4(),
    title: "Target Audience Identification",
    desc: "Pinpoint your ideal customer base, ensuring precise targeting for effective lead generation",
  },
  {
    id: uuidv4(),
    title: "Engaging Content Creation",
    desc: "Craft compelling and relevant content tailored to your customer's needs and preferences, capturing their attention and encouraging them to take action",
  },
  {
    id: uuidv4(),
    title: "Multi-Channel Promotion",
    desc: "Utilize a variety of digital channels such as social media, email marketing, SEO, and PPC advertising to reach potential leads wherever they may be online",
  },
  {
    id: uuidv4(),
    title: "Data-Driven Optimization",
    desc: "Continuously analyze and refine your lead generation strategies based on real-time data insights, maximizing efficiency and ROI for sustainable business growth",
  },
];

export const accountingServices = [
  {
    id: uuidv4(),
    title: "Ownership Transfer and New Vehicle Registration",
    desc: "Ownership Transfer of pre-owned vehicle/ registration of new vehicle with a well-defined TAT along with status updates throughout the process",
    icon: React.createElement(GiCarKey),
  },
  {
    id: uuidv4(),
    title: "Hypothecation Termination and Addition",
    desc: "Hypothecation related services now at your fingertips - no more hassle in loan cases!!",
    icon: React.createElement(PiFileTextFill),
  },
  {
    id: uuidv4(),
    title: "Challan Clearance and Bank NOC Issuance",
    desc: "Challan clearance and NOC issuance for our customers within superfast TATs to ensure stress free buying and selling of vehicles",
    icon: React.createElement(PiMoneyFill),
  },
  {
    id: uuidv4(),
    title: "Fancy Number and HSRP Booking",
    desc: "Booking of fancy numbers and HSRP in advance resulting in seamless car buying experience for your customers",
    icon: React.createElement(PiFileArchiveDuotone),
  },
];

export const neverWorry = [
  {
    id: uuidv4(),
    title: "NOC Issuance",
    desc: "Interstate registering your vehicle in another state? Get the interstate NOC through us in lightning fast TATs",
    icon: React.createElement(HiDocumentCheck),
  },

  {
    id: uuidv4(),
    title: "Advance Party Peshi",
    desc: "Seller going out of town? Get advance party peshi done to avoid later hassles",
    icon: React.createElement(BsClockHistory),
  },
  {
    id: uuidv4(),
    title: "Care-off transfers",
    desc: "Buyer doesn't have local address proff? Get the vehicle registered via us with a local care-off address",
    icon: React.createElement(FaHandshakeSimple),
  },
  {
    id: uuidv4(),
    title: "Duplicate RC and RC modifications",
    desc: "RC is missing or eeds coorections? Explore our super efficient RC solutions",
    icon: React.createElement(PiFilePlusFill),
  },
];

export const accountantFeatures = [
  {
    id: uuidv4(),
    title: "Identification of Outstanding Challans",
    desc: "The first step is to identify any outstanding challans (traffic violation tickets) associated with the vehicle or the driver.",
  },
  {
    id: uuidv4(),
    title: "Verification",
    desc: " After payment is made, the RTO or motorworks service center verifies the clearance of the challans by checking with the respective authorities or online portals.",
  },
  {
    id: uuidv4(),
    title: "Receipt and Clearance Certificate",
    desc: "Upon successful verification, customers receive a receipt of payment and a clearance certificate stating that all outstanding challans have been cleared.",
  },
];

export const taxationFeatures = [
  {
    id: uuidv4(),
    title: "Used Vehicle Financing",
    desc: " Apply for used vehicle loans at best-in-market interest rates and best commission",
    icon: React.createElement(FaMoneyBillTransfer),
  },
  {
    id: uuidv4(),
    title: "New Vehicle Financing",
    desc: "Get new vehicle finance options from <br> all premier banks & NBFCs",
    icon: React.createElement(FaCarAlt),
  },
  {
    id: uuidv4(),
    title: "Inventory Funding",
    desc: "Avail working capitals loans to buy more cars and  increase your business ",
    icon: React.createElement(RiFundsBoxFill),
  },
  {
    id: uuidv4(),
    title: "Refinance",
    desc: "Get existing customer loans refinanced at better rates or get a balance topup",
    icon: React.createElement(RiExchangeFundsLine),
  },
];

export const whtaWeDoTaxationData = [
  {
    id: uuidv4(),
    icon: React.createElement(TbQuotes),
    title: "Cheapest Quotes",
    desc: "Get the best priced quotes for your insurance",
  },
  {
    id: uuidv4(),
    icon: React.createElement(BiSelectMultiple),
    title: "Multiple Insurance",
    desc: "Be Spoilt for choice with offers from multitude of insurers for every vehicle",
  },
  {
    id: uuidv4(),
    icon: React.createElement(BiSolidOffer),
    title: "Best Offers",
    desc: "Avail best discount and cashbacks on every case done through MotorPedia",
  },
];

export const realStateFeatures = [
  {
    id: uuidv4(),
    icon: React.createElement(PiBuildingsFill),
    title: "Property Management",
    desc: "Effortlessly manage your properties with our professional property management services. From tenant relations to maintenance, ",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiHandCoinsFill),
    title: "Investment Analysis",
    desc: "Make informed investment decisions with our detailed investment analysis. Our experts assess potential properties and provide insights to guide",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiHandshakeFill),
    title: "Real Estate Transactions",
    desc: "Navigate real estate transactions with confidence. Our team facilitates smooth buying, selling, or leasing processes,",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiUserFill),
    title: "Lease Administration",
    desc: "Streamline lease management with our lease administration services. We handle documentation, renewals,",
  },
];

export const servicesFeatures = [
  {
    id: uuidv4(),
    icon: React.createElement(PiMoneyFill),
    title: "Commissions Made Easy",
    desc: "Whether admin or agent, employee or contractor, run unlimited payrolls for your team in just a few clicks.",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiTimerFill),
    title: "Time-Saving Workflows",
    desc: "Employees can access earnings, check their paystubs, and add expenses, at the office or on the go.",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiStarFill),
    title: "Worry-free work",
    desc: "Never stress about late or incorrect payments again. With Gusto, payroll is accurate, efficient.",
  },
];

export const healthCareFeatures = [
  {
    id: uuidv4(),
    icon: React.createElement(PiHandCoinsFill),
    title: "Payroll for Healthcare Professionals",
    desc: "Efficient payroll processing tailored to the unique needs of healthcare professionals. Ensure accurate and timely compensation",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiGearFill),
    title: "Compliance Management",
    desc: "Stay compliant with ever-evolving healthcare regulations. Our services include compliance management to ensure your practice",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiHeartbeatFill),
    title: "Financial Advisory for Healthcare Practices",
    desc: "Navigate the financial landscape of automotive journey with our expert advisory services. From budgeting to strategic planning.",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiUsersThreeFill),
    title: "Healthcare Consulting",
    desc: "Receive personalized consulting services to address the unique challenges of your healthcare practice.",
  },
];

export const manageHealthItems = [
  {
    id: uuidv4(),
    icon: React.createElement(PiFileMagnifyingGlassDuotone),
    title: "Pre-purchase loan verification",
  },
  {
    id: uuidv4(),
    icon: React.createElement(BiCheckShield),
    title: "Bank NOC Validation",
  },
  {
    id: uuidv4(),
    icon: React.createElement(HiDocumentCheck),
    title: "Fresh NOC issuance",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiChartLineFill),
    title: "Loan foreclosure services",
  },
];

export const dentistSectionFeatures = [
  {
    id: uuidv4(),
    icon: React.createElement(BiTargetLock),
    title: "Targeted Advertising",
    desc: " Reach potential car buyers precisely where they are, leveraging advanced targeting tools to maximize exposure and engagement.",
  },
  {
    id: uuidv4(),
    icon: React.createElement(MdEditDocument),
    title: "Compelling Content Creation",
    desc: "Captivate audiences with visually stunning imagery, informative videos, and persuasive copywriting, enticing them to explore your inventory further.",
  },
  {
    id: uuidv4(),
    icon: React.createElement(RiSeoFill),
    title: "Search Engine Optimization (SEO)",
    desc: "Enhance your website's visibility on search engines, ensuring that your car listings rank prominently for relevant search queries.",
  },
  {
    id: uuidv4(),
    icon: React.createElement(TiSocialGooglePlusCircular),
    title: "Social Media Engagement",
    desc: " Leverage the power of social media platforms to build brand awareness, engage with potential buyers, and showcase your inventory in an interactive and appealing manner",
  },
];

export const whyCooseUs = [
  {
    id: uuidv4(),
    icon: React.createElement(PiToothFill),
    title: "Dental Industry Expertise",
    desc: "Our team understands the specific needs and challenges of the dental industry, providing tailored solutions.",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiHeadphonesFill),
    title: "Financial Support",
    desc: "Beyond payroll, we offer a range of financial services to support the overall health of your dental practice.",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiWebhooksLogoFill),
    title: "Technology Integration",
    desc: "Stay ahead with technology-driven solutions that enhance efficiency and compliance in the dental care sector.",
  },
];

export const caseStudies = [
  {
    id: uuidv4(),
    img: caseStudyImg1,
    name: "Tax Compliance Simple",
  },
  {
    id: uuidv4(),
    img: caseStudyImg2,
    name: "Automated Payroll Success",
  },
  {
    id: uuidv4(),
    img: caseStudyImg3,
    name: "A Payroll Case Study",
  },
  {
    id: uuidv4(),
    img: caseStudyImg4,
    name: "Payroll Income Business",
  },
  {
    id: uuidv4(),
    img: caseStudyImg5,
    name: "Accounting Success",
  },
  {
    id: uuidv4(),
    img: caseStudyImg6,
    name: "Payroll Outsourcing Center",
  },
];

export const teamList = [
  {
    id: uuidv4(),
    name: "Bess Collins",
    designation: "Web Designer",
    img: teamPic1,
  },
  {
    id: uuidv4(),
    name: "Micheal James",
    designation: "Accountant",
    img: teamPic2,
  },
  {
    id: uuidv4(),
    name: "Dean Obrien",
    designation: "Tax Specialist",
    img: teamPic3,
  },
  {
    id: uuidv4(),
    name: "Maggie Clark",
    designation: "Manager",
    img: teamPic4,
  },
  {
    id: uuidv4(),
    name: "Rosalie Chapman",
    designation: "Product Manager",
    img: teamPic5,
  },
  {
    id: uuidv4(),
    name: "Verna Gutierrez",
    designation: "CEO, Motorpedia",
    img: teamPic6,
  },
];

export const caseStudySidebar = [
  {
    id: uuidv4(),
    icon: React.createElement(PiUserFill),
    name: "Client",
    desc: "David Warner",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiCalendarBlankFill),
    name: "Date",
    desc: "15 - January - 2024",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiWindowsLogoFill),
    name: "Category",
    desc: "DigitalizePro",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiMapPinFill),
    name: "Location",
    desc: "Garuda, 99 INA",
  },
];

export const teamSkills = [
  {
    id: uuidv4(),
    name: "Web Design",
    percentage: 70,
  },
  {
    id: uuidv4(),
    name: "Mobile App Design",
    percentage: 80,
  },
  {
    id: uuidv4(),
    name: "UI/UX Design",
    percentage: 85,
  },
];

export const shopPage = [
  {
    id: uuidv4(),
    img: "",
    name: "",
    price: "",
  },
  //   {
  //     id: uuidv4(),
  //     img: productImg2,
  //     name: "Online Courses",
  //     price: "637",
  //   },
  //   {
  //     id: uuidv4(),
  //     img: productImg3,
  //     name: "Payroll Processing Tools",
  //     price: "948",
  //   },
  //   {
  //     id: uuidv4(),
  //     img: productImg4,
  //     name: "Educational Resources",
  //     price: "402",
  //   },
  //   {
  //     id: uuidv4(),
  //     img: productImg5,
  //     name: "Templates and Forms",
  //     price: "782",
  //   },
  //   {
  //     id: uuidv4(),
  //     img: productImg6,
  //     name: "Tax Compliance",
  //     price: "573",
  //   },
];

export const blogList = [
  {
    id: uuidv4(),
    title: "The Evolution of Cloud-Based Accounting Solutions",
    img: blogPageImg1,
    date: "Jan 15",
    tag: "Accounting",
    desc: "Explore the transformative effects of remote work on payroll processing.",
  },
  {
    id: uuidv4(),
    title: "Best Practices for Employee Expense Management",
    img: blogPageImg2,
    date: "Jan 16",
    tag: "Payroll Processing",
    desc: "Explore comprehensive strategies to fortify data security in your accounting operations. ",
  },
  {
    id: uuidv4(),
    title: "Payroll Outsourcing vs. In-House Processing",
    img: blogPageImg3,
    date: "Jan 14",
    tag: "Remote Work",
    desc: "Explore the transformative effects of remote work on payroll processing.",
  },
  {
    id: uuidv4(),
    title: "Streamlining Year-End Financial Reporting",
    img: blogPageImg4,
    date: "Jan 19",
    tag: "Software",
    desc: "Uncover the pros and cons of payroll outsourcing and in-house processing. Delve into cost considerations,",
  },
  {
    id: uuidv4(),
    title: "Ensuring Data Security in Your Accounting Practices",
    img: blogPageImg5,
    date: "Jan 25",
    tag: "Taxation",
    desc: "Discover expert strategies for optimizing employee expense management.",
  },
  {
    id: uuidv4(),
    title: "The Impact of Remote Work on Payroll Processing.",
    img: blogPageImg6,
    date: "Jan 13",
    tag: "Planning",
    desc: "Embark on a journey through the transformative growth of cloud-based accounting solutions.",
  },
];

export const blogCategories = [
  {
    id: uuidv4(),
    name: "Accounting",
    count: "6",
  },
  {
    id: uuidv4(),
    name: "Business",
    count: "4",
  },
  {
    id: uuidv4(),
    name: "Finance",
    count: "8",
  },
  {
    id: uuidv4(),
    name: "Invest",
    count: "3",
  },
  {
    id: uuidv4(),
    name: "DigitalizePro",
    count: "2",
  },
  {
    id: uuidv4(),
    name: "Taxation",
    count: "5",
  },
];

export const recentPost = [
  {
    id: uuidv4(),
    img: recentPostImg1,
    date: "December 15",
    title: "Learn About Payroll Processing Essentials",
  },
  {
    id: uuidv4(),
    img: recentPostImg1,
    date: "December 10",
    title: "Financial Management Strategies People Use",
  },
  {
    id: uuidv4(),
    img: recentPostImg3,
    date: "December 8",
    title: "Recent Industry News and Updates",
  },
  {
    id: uuidv4(),
    img: recentPostImg4,
    date: "December 20",
    title: "Innovations in Accounting Software",
  },
];

export const contactPageCard = [
  {
    id: uuidv4(),
    icon: React.createElement(PiEnvelopeFill),
    name: "Write to Us",
    linkText: "themotorpedia@gmail.com",
    link: "mailto:themotorpedia@gmail.com",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiPhoneCallFill),
    name: "Contact Us",
    linkText: "+91 99999-61887",
    link: "tel:+91 99999-61887",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiMapPinFill),
    name: "Visit Our Office",
    address:
      "TR24, 3rd Floor, JMD Empire Square Mall, MG Road, Gurugram, Haryana, India - 122001",
  },
];

export const blogTags = [
  {
    id: uuidv4(),
    name: "Payroll",
  },
  {
    id: uuidv4(),
    name: "Software",
  },
  {
    id: uuidv4(),
    name: "RTO",
  },
  {
    id: uuidv4(),
    name: "Solutions",
  },
  {
    id: uuidv4(),
    name: "Planning",
  },
  {
    id: uuidv4(),
    name: "Finance",
  },
  {
    id: uuidv4(),
    name: "Tax",
  },
];
