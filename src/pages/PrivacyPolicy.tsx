import { PiCheckCircle } from "react-icons/pi";
import CTASectiont from "../components/homepage/CTASectiont";
import BreadcrumbSection from "../components/ui/BreadcrumbSection";
import breadcrumpIllus from "/images/privacy.svg";
function PrivacyPolicy() {
  return (
    <main>
      <BreadcrumbSection
        img={breadcrumpIllus}
        pageName="Privacy Policy"
        pageDesc=""
        pageTitle="Privacy Policy"
      />

      <section className="container pt-10 flex flex-col gap-2">
        <div className=" flex justify-start items-start flex-col">
          <p className=" text-bodyText">
            We use your personal data to provide and improve the service. By
            using the service, you agree to the collection and use of
            information in accordance with this privacy policy.
          </p>
        </div>

        <div className="">
          <h3 className="heading-1 py-6">Information we collect</h3>
          <p className=" text-bodyText">
            While using our service, we may ask you to provide us with certain
            personally identifiable information that can be used to contact or
            identify you. Personally identifiable information may include, but
            is not limited to:
          </p>

          <ul className="pt-6 flex flex-col gap-4">
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1">
                <PiCheckCircle />
              </span>
              Email address
            </li>
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1">
                <PiCheckCircle />
              </span>
              First name and last name
            </li>
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1">
                <PiCheckCircle />
              </span>
              Phone number Address, State, Province, ZIP/Postal code, City
            </li>
          </ul>
        </div>

        <div className="">
          <h3 className="heading-2 py-6">Use of information</h3>
          <p className=" text-bodyText">
            Usage data is collected automatically when using the service. Usage
            data may include information such as your device's internet protocol
            address (e.g. Ip address), browser type, browser version, the pages
            of our service that you visit, the time and date of your visit, the
            time spent on those pages, unique device identifiers and other
            diagnostic data. When you access the service by or through a mobile
            device, we may collect certain information automatically, including,
            but not limited to, the type of mobile device you use, your mobile
            device unique id, the IP address of your mobile device, your mobile
            operating system, the type of mobile internet browser you use,
            unique device identifiers and other diagnostic data. We may also
            collect information that your browser sends whenever you visit our
            service or when you access the service by or through a mobile
            device.
          </p>
        </div>

        <div className="">
          <h3 className="heading-3 py-6">Use of Personal Data</h3>
          <p className=" text-bodyText">
            The Company may use Personal Data for the following purposes:
          </p>
          <ul className="pt-6 flex flex-col gap-4">
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1">
                <PiCheckCircle />
              </span>
              To provide and maintain our Service
            </li>
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1">
                <PiCheckCircle />
              </span>
              To manage Your Account
            </li>
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1">
                <PiCheckCircle />
              </span>
              For the performance of a contract
            </li>
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1">
                <PiCheckCircle />
              </span>
              To contact You
            </li>
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1">
                <PiCheckCircle />
              </span>
              To provide you with news, special offers and general information
              about other goods, services and events which we offer that are
              similar to those that you have already purchased or enquired about
              unless you have opted not to receive such information.
            </li>
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1">
                <PiCheckCircle />
              </span>
              To manage Your requests
            </li>
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1">
                <PiCheckCircle />
              </span>
              For business transfer.
            </li>
          </ul>
        </div>

        <div className="">
          <h3 className="heading-3 py-6">Data Sharing with Third Party</h3>
          <p className=" text-bodyText">
            We collect certain personal information and other information from
            you and when you access the platform or our services, or when you
            register with our platform. The personal information we collect
            includes your name, residential address, contact number, e-mail
            address, or any other data or information as may be required. We may
            disclose your personal information and other information to any of
            our associated brands, associated entities, subsidiary, group
            entitles, vendors, and other service providers who work for us or
            provide services through platform and are bound by contractual
            obligations to keep such personal information confidential and use
            it only on purpose.
          </p>
          <br></br>
          <p>
            We may share information we think we have to in order to comply with
            The law or to protect ourselves. We will share information to
            Respond to a court order or judicial summons. We may also share it
            If a governmental agency or investigatory body requests. Your
            Consent. By using the site you shall be deemed to have expressly
            Consented to our use of information and data as aforementioned. By
            Providing us with yiur information or using the site, you consent to
            The transfer and processing of your information outside your country
            Of residence.
          </p>
        </div>

        <div className="">
          <h3 className="heading-3 py-6">Data retention</h3>
          <p className=" text-bodyText">
            The Company will retain Your Personal Data only for as long as is
            Necessary for the purposes set out in this Privacy Policy. We will
            Retain and use Your Personal Data to the extent necessary to comply
            With our legal obligations (for example, if we are required to
            Retain your data to comply with applicable laws), resolve disputes,
            And enforce our legal agreements and policies. The Company will also
            Retain Usage Data for internal analysis purposes. Usage Data is
            Generally retained for a shorter period of time, except when this
            Data is used to strengthen the security or to improve the
            Functionality of Our Service, or We are legally obligated to retain
            This data for longer time periods.
          </p>
        </div>

        <div className="">
          <h3 className="heading-3 py-6">Cookies and tracking technologies</h3>
          <p className=" text-bodyText">
            Cookies can be "persistent" or "session" cookies. Persistent cookies
            Remain on your personal computer or mobile device when you go
            Offline, while session cookies are deleted as soon as you close your
            Web browser.
          </p>
        </div>

        <div className="">
          <h3 className="heading-3 py-6">Children's privacy</h3>
          <p className=" text-bodyText">
            Our service does not address anyone under the age of 13. We do not
            Knowingly collect personally identifiable information from anyone
            Under the age of 13. If you are a parent or guardian and you are
            Aware that your child has provided us with personal data, please
            Contact us. If we become aware that we have collected personal data
            From anyone under the age of 13 without verification of parental
            Consent, we take steps to remove that information from our servers.
            If we need to rely on consent as a legal basis for processing your
            Information and your country requires consent from a parent, we may
            Require your parent's consent before we collect and use that
            Information.
          </p>
        </div>

        <div className="">
          <h3 className="heading-3 py-6">Changes to the privacy policy</h3>
          <p className=" text-bodyText">
            This Privacy Policy was last updated on 20-04-2024. We may update
            Our Privacy Policy from time to time. We will notify you of any
            Material changes to this policy as required by law by posting the
            New Privacy Policy on this page. You are advised to review this
            Privacy Policy periodically for any changes. Changes to this Privacy
            Policy are effective when they are posted on this page.
          </p>
        </div>

        <div className="">
          <h3 className="heading-3 py-6">Contact information</h3>
          <p className=" text-bodyText">
            If you have any questions or concerns regarding our Privacy Policy
            Or the handling of your personal information, please contact us at :
            <span className="text-p1"> contact@themotorpedia.com</span>
          </p>
        </div>
      </section>

      <CTASectiont />
    </main>
  );
}

export default PrivacyPolicy;
