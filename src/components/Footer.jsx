import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer({ bgColor }) {
  return (
    <footer className={`mt-6 md:mt-10 ${bgColor} text-white`}>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 py-12 md:grid-cols-4">

        {/* Left */}
        <div>
          <img
            src="/logo/white-logo.svg"
            alt="Gumijus Logo"
            className="mb-4 w-40"
          />

          <p className="text-sm leading-6 text-white/90">
            Ruko NonStop, Jl. Tubagus Ismail No.40, 
            Sekeloa, Kecamatan Coblong,
            Kota Bandung, Jawa Barat 40134
          </p>
        </div>

        {/* Other */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">
            Navigasi
          </h3>

          <ul className="space-y-2 text-sm">

            <li>
              <a href="/" className="hover:underline">
                Beranda
              </a>
            </li>

            <li>
              <a href="/profile" className="hover:underline">
                Profil
              </a>
            </li>

            <li>
              <a href="/products" className="hover:underline">
                Produk
              </a>
            </li>

            <li>
              <a href="/outlet" className="hover:underline">
                Outlet
              </a>
            </li>

            <li>
              <a href="/contact" className="hover:underline">
                Kontak
              </a>
            </li>

          </ul>
        </div>

        {/* Follow Us */}
        <div className="">

          <h3 className="mb-4 text-lg font-semibold">
            Ikuti Kami
          </h3>

          <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-2">
            <FontAwesomeIcon
              icon={faInstagram}
              size="lg"
              className="pt-1 text-white"
            />
            <p className="text-sm text-white lg:text-base">
              gumijus
            </p>

            <FontAwesomeIcon
              icon={faEnvelope}
              size="lg"
              className="pt-1 text-white"
            />
            <p className="text-sm text-white lg:text-base">
              gumijusindonesia@gmail.com
            </p>
          </div>

        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-white/20 py-5 text-center text-xs lg:text-sm">
        Copyright © 2026 by Faisal. All Rights Reserved
      </div>

    </footer>
  );
}

export default Footer;