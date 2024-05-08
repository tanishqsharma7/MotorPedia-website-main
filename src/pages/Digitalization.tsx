import CTASectiont from "../components/homepage/CTASectiont";
import ContactSection from "../components/homepage/ContactSection";
import DedicatedSupport from "../components/services/DedicatedSupport";
import DentistSection from "../components/services/DentistSection";
import WeHelpSection from "../components/services/WeHelpSection";
import WhatWeDo from "../components/services/WhatWeDo";
import BreadcrumbSection from "../components/ui/BreadcrumbSection";

function Digitalization() {
  return (
    <main>
      <BreadcrumbSection
        img="https://i.ibb.co/9cszsKd/laptopS1.png"
        middlePage="Services"
        pageName="Digitalization Services"
        pageDesc="Elevate your online presence via our comprehensive digitalization platform"
        pageTitle="Digitalization Services"
      />
      <WeHelpSection />
      <WhatWeDo />
      <DentistSection />
      <DedicatedSupport />
      <ContactSection isPaddingTop={true} />
      <CTASectiont />
    </main>
  );
}

export default Digitalization;
