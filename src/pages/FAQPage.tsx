import CTASectiont from "../components/homepage/CTASectiont";
import FaqSection from "../components/homepage/FaqSection";
import BreadcrumbSection from "../components/ui/BreadcrumbSection";

function FAQPage() {
  return (
    <main>
      <BreadcrumbSection
        img="https://i.ibb.co/2k1DvHR/faq-man.png"
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
