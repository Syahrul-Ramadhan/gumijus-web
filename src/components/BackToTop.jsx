import {
  AnimatePresence,
  motion,
} from "motion/react";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

function BackToTop() {
  const [show, setShow] = useState(false);
  const [nearFooter, setNearFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // tampil setelah scroll
      setShow(window.scrollY > 500);

      // cek posisi footer
      const footer = document.querySelector("footer");

      if (footer) {
        const rect = footer.getBoundingClientRect();

        // footer mulai masuk ke viewport
        setNearFooter(rect.top <= window.innerHeight);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: 30,
          }}
          transition={{
            duration: 0.25,
          }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className={`
            fixed
            bottom-6
            right-6
            z-20
            rounded-xl
            p-4
            shadow-xl
            transition-all
            duration-300
            hover:cursor-pointer

            ${
              nearFooter
                ? "bg-white text-slate-700 hover:bg-slate-100"
                : "bg-[#EC7825] text-white hover:bg-[#d46b20]"
            }
          `}
        >
          <ChevronUp size={22} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default BackToTop;