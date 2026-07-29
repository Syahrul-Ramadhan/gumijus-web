import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer({ bgColor }) {
  return (
    <footer className={`mt-6 md:mt-10 ${bgColor} text-white`}>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 py-12 md:grid-cols-3 ">

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
              <a href="/order" className="hover:underline">
                Pesan
              </a>
            </li>

          </ul>
        </div>

        {/* Follow Us */}
        <div className="">

          <h3 className="mb-4 text-lg font-semibold">
            Ikuti Kami
          </h3>

          <div className="flex gap-2">
            <a href="https://www.instagram.com/gumijus/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faInstagram}
                size="xl"
                className="pt-1 text-white hover:cursor-pointer hover:text-slate-300"
              />
            </a>
            <a href="https://x.com/gumijus?s=20" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faXTwitter}
                size="xl"
                className="pt-1 text-white hover:cursor-pointer hover:text-slate-300"
              />
            </a>
            {/* <FontAwesomeIcon
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
            </p> */}
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