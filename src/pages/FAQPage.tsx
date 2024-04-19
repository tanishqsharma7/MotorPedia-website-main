import CTASectiont from "../components/homepage/CTASectiont";
import FaqSection from "../components/homepage/FaqSection";
import BreadcrumbSection from "../components/ui/BreadcrumbSection";
import breadcrumpIllus from "/images/faq_man.png";
function FAQPage() {
  return (
    <main>
      <BreadcrumbSection
        img={breadcrumpIllus}
        pageName="FAQs"
        pageDesc="Discover seamless accounting and payroll processing services tailored to your business needs. Our expert team ensures accuracy,"
        pageTitle="FAQs"
      />

      <FaqSection />
      <CTASectiont />
    </main>
  );
}

export default FAQPage;
