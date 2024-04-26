import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <section className="bg-footer_bg h-10">
      <footer className="px-4 divide-y bg-footer_bg text-gray-800">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex justify-center space-x-3 lg:justify-start"
            >
              <img className="w-2/6" src="/public/Resources/logo.png" alt="" />
            </a>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase text-slate-400 font-semibold">Product</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Features
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Integrations
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Pricing
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase text-slate-400 font-semibold">Company</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Privacy
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="uppercase text-slate-400 font-semibold">Developers</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Khan
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="uppercase text-slate-400 font-semibold">Social media</div>
              <div className="flex justify-start space-x-3">
                <p
                  className="flex items-center p-1"
                >
                  <FaFacebook className="text-3xl" />
                </p>
                <p
                  className="flex items-center p-1"
                >
                  <FaTwitter className="text-3xl" />
                </p>
                <p
                  className="flex items-center p-1"
                >
                  <FaInstagram className="text-3xl" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center text-gray-600">
          © 1968 Company Co. All rights reserved.
        </div>
      </footer>
    </section>
  );
};

export default Footer;
