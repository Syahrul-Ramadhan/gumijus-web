import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";


function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();

  const navClass = `
    font-semibold
    transition-colors
    duration-300
    hover:opacity-80
    ${scrolled ? "text-white" : "text-slate-900"}
    `;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`
          fixed left-0 top-0 z-100 flex w-full items-center justify-between
          px-8 py-4 lg:py-6 transition-all duration-500

          ${
            scrolled
              ? "bg-[#EC7825]/90 backdrop-blur-xl shadow-xl"
              : "bg-white"
          }
        `}
      >

        {/* Logo */}
        <a href="/">
          <img
            src={
              scrolled
                ? "/logo/white-logo.svg"
                : "/logo/logo.svg"
            }
            alt="Logo"
            className="w-24"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 lg:flex text-slate-700">

          <a href="/" className={navClass}>
            Beranda
          </a>

          <a href="/profile" className={navClass}>
            Profil
          </a>

          <a href="/products" className={navClass}>
            Produk
          </a>

          <a href="/outlet" className={navClass}>
            Outlet
          </a>

          <a href="/contact" className={navClass}>
            Kontak
          </a>
        </div>
        {/* Hamburger */}
        <button
          onClick={() => setShowMenu((prev) => !prev)}
          className="lg:hidden hover:cursor-pointer"
        >
          <Menu
            size={26}
            className={
                scrolled
                ? "text-white"
                : "text-slate-700"
            }
          />
          </button>
      </nav>

      {/* Blur Bottom */}
      <div
        className="
          fixed
          top-16
          left-0
          z-40
          h-3
          w-full
          bg-linear-to-b
          from-black/30
          via-black/10
          to-transparent
          blur-md
          pointer-events-none
        "
      />

      {/* Mobile Hamburger Menu */}
      <AnimatePresence>

        {showMenu && (

          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMenu(false)}
              className="fixed inset-0 z-60 bg-black/40"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: .35 }}
              className={`fixed right-0 top-0 z-70 flex h-screen w-72 flex-col p-8 shadow-2xl
                ${
                  scrolled
                    ? "bg-white"
                    : "bg-[#EC7825] "
                }
              `}
            >

              {/* Header */}
              <div className="mb-10 flex items-center justify-between">

                <img
                  src="/icons/logo-red-wide.png"
                  className="w-16"
                />

                <button onClick={() => setShowMenu(false)} className="hover:text-slate-500 text-slate-700 hover:cursor-pointer">
                  <X />
                </button>

              </div>

              {/* Navigation */}
              <div className="flex flex-col gap-6 text-base font-semibold">

                <a href="/" onClick={() => setShowMenu(false)} className={ scrolled ? "text-slate-700 hover:opacity-80" : "text-white hover:opacity-80"}>
                  Beranda
                </a>

                <a href="/profile" onClick={() => setShowMenu(false)} className={ scrolled ? "text-slate-700 hover:opacity-80" : "text-white hover:opacity-80"}>
                  Profil
                </a>

                <a href="/products" onClick={() => setShowMenu(false)} className={ scrolled ? "text-slate-700 hover:opacity-80" : "text-white hover:opacity-80"}>
                  Produk
                </a>

                <a href="/outlet" onClick={() => setShowMenu(false)} className={ scrolled ? "text-slate-700 hover:opacity-80" : "text-white hover:opacity-80"}>
                  Outlet
                </a>

                <a href="/contact" onClick={() => setShowMenu(false)} className={ scrolled ? "text-slate-700 hover:opacity-80" : "text-white hover:opacity-80"}>
                  Kontak
                </a>

              </div>
            </motion.div>

          </>

        )}

      </AnimatePresence>
    </>
  );
}

export default Navbar;