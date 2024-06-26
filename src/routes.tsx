import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Loader from "./components/ui/Loader";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/Error";
import FAQPage from "./pages/FAQPage";
import HealthCareServices from "./pages/HealthCareServices";
import HomePage from "./pages/HomePage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ServicesPage from "./pages/ServicesPage";
import TaxationServices from "./pages/saleEnablement";
import TermsConditions from "./pages/TermsConditions";
import Digitalization from "./pages/Digitalization";
import RTO from "./pages/RTO";

export const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<Loader />}>
        <RootLayout />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/services/Digitalization",
        element: <Digitalization />,
      },
      {
        path: "/services/RTO",
        element: <RTO />,
      },
      {
        path: "/services/saleEnablement",
        element: <TaxationServices />,
      },

      {
        path: "/services/healthcare-services",
        element: <HealthCareServices />,
      },
      // {
      //   path: "/services/dentist-services",
      //   element: <DentistServices />,
      // },
      // {
      //   path: "/appointment",
      //   element: <AppointmentPage />,
      // },
      {
        path: "/faq",
        element: <FAQPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },

      {
        path: "/terms-conditions",
        element: <TermsConditions />,
      },
      {
        path: "/error",
        element: <ErrorPage />,
      },
    ],
  },
  {
    errorElement: <ErrorPage />,
    children: [],
  },
]);
