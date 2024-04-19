import CTASectiont from "../components/homepage/CTASectiont";
//import ContactUsSection from "../components/homepage/ContactUsSection";
import FaqSection from "../components/homepage/FaqSection";
//import PricingSection from "../components/homepage/PricingSection";
//import StepByStepGuide from "../components/homepage/StepByStepGuide";
//import WhyAccoupay from "../components/homepage/WhyAccoupay";
import CoreServices from "../components/services/CoreServices";
import BreadcrumbSection from "../components/ui/BreadcrumbSection";
import breadcrumpIllus from "/images/all_services.png";
function ServicesPage() {
  return (
    <main>
      <BreadcrumbSection
        img={breadcrumpIllus}
        pageName="All Services"
        pageDesc="At Motorpedia, we offer a variety of services to make your dealership efficient. From ownership transfer, fancy numbers, insurance and finance to digitalising your store, you just name it, we've got it!"
        pageTitle="Our Services"
      />

      <CoreServices />
      {/* <WhyAccoupay />
      <StepByStepGuide />
      <ContactUsSection />
      <PricingSection /> */}
      <FaqSection />
      <CTASectiont />
    </main>
  );
}

export default ServicesPage;
