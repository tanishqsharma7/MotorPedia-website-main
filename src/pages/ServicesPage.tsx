import CTASectiont from "../components/homepage/CTASectiont";
import FaqSection from "../components/homepage/FaqSection";
import CoreServices from "../components/services/CoreServices";
import BreadcrumbSection from "../components/ui/BreadcrumbSection";

function ServicesPage() {
  return (
    <main>
      <BreadcrumbSection
        img="https://i.ibb.co/DR5QcQh/all-services.png"
        pageName="All Services"
        pageDesc="At MotorPedia, we offer a variety of services to make your dealership efficient. From ownership transfer, fancy numbers, insurance and finance to digitalising your store, you just name it, we've got it!"
        pageTitle="Our Services"
      />

      <CoreServices />
      <FaqSection />
      <CTASectiont />
    </main>
  );
}

export default ServicesPage;
