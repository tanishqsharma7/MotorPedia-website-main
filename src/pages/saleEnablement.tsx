import CTASectiont from "../components/homepage/CTASectiont";
import HealthCareSection from "../components/services/HealthCareSection";
import SearvicesFeaturesSection from "../components/services/SearvicesFeaturesSection";
import TaxationSection from "../components/services/TaxationSection";
import TaxationVideoSection from "../components/services/TaxationVideoSection";
import WhatWeDoTaxation from "../components/services/WhatWeDoTaxation";
import BreadcrumbSection from "../components/ui/BreadcrumbSection";

function saleEnablement() {
  return (
    <main>
      <BreadcrumbSection
        img="https://i.ibb.co/RbgzcG3/sale3.webp"
        middlePage="Services"
        pageName="Sales Enablement Services"
        pageDesc="At MotorPedia, we offer all ancillary services associated with a vehicle transaction such as inusrance, finance, warranty, RSA, inventory funding, refurbishment services, etc - all this through our one-stop solution. Experience the difference today."
        pageTitle="Sales Enablement Services"
      />
      <TaxationSection />
      <WhatWeDoTaxation />
      <HealthCareSection />
      <TaxationVideoSection />
      <SearvicesFeaturesSection />
      <CTASectiont />
    </main>
  );
}

export default saleEnablement;
