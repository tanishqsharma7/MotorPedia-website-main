import CTASectiont from "../components/homepage/CTASectiont";
import ContactSection from "../components/homepage/ContactSection";
//import FaqSection from "../components/homepage/FaqSection";
//import StepByStepGuide from "../components/homepage/StepByStepGuide";
import AccountSection from "../components/services/AccountSection";
import AccountingServicesSection from "../components/services/AccountingServices";
import ManageHealthSection from "../components/services/ManageHealthSection";
import NerverWorrySection from "../components/services/NerverWorrySection";
import BreadcrumbSection from "../components/ui/BreadcrumbSection";
import breadcrumbImg from "/images/RTO-Services.png";

function RTO() {
  return (
    <main>
      <BreadcrumbSection
        img={breadcrumbImg}
        middlePage="Services"
        pageName="RTO Assistance"
        pageDesc="With MotorPedia, you dont have to worry about anything related to RTO - just onboard with us and relax. We cover all aspects of your RTO expediture ranging from vehicle ownership transfer to fancy numbers, HSRP booking and much more"
        pageTitle="RTO Assistance"
      />
      <AccountingServicesSection />
      <NerverWorrySection />

      {/* <StepByStepGuide /> */}
      <AccountSection />
      <ManageHealthSection />
      <ContactSection isPaddingTop={true} />
      <CTASectiont />
    </main>
  );
}

export default RTO;
