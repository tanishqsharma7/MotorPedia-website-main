import CTASectiont from "../components/homepage/CTASectiont";
import ContactSection from "../components/homepage/ContactSection";
import DedicatedSupport from "../components/services/DedicatedSupport";
import DentistSection from "../components/services/DentistSection";
import WeHelpSection from "../components/services/WeHelpSection";
import WhatWeDo from "../components/services/WhatWeDo";
import BreadcrumbSection from "../components/ui/BreadcrumbSection";
import breadcrumbImg from "/images/laptopS1.png";

function DigitalizePro() {
  return (
    <main>
      <BreadcrumbSection
        img={breadcrumbImg}
        middlePage="Services"
        pageName="Digitalization Services"
        pageDesc="Elevate your online presence via our comprehensive digitalization platform"
        pageTitle="Digitalization Services"
      />
      <WeHelpSection />
      <WhatWeDo />
      {/* <StepByStepGuide /> */}
      <DentistSection />
      <DedicatedSupport />
      {/* <CounterSection />
      <WhyAccoupay /> */}
      <ContactSection isPaddingTop={true} />
      <CTASectiont />
    </main>
  );
}

export default DigitalizePro;
