import { motion } from "motion/react";

function HeroOutlet() {
  const scrollToOutlet = () => {
    document
      .getElementById("outlet-list")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section className="relative mt-14 md:mt-18 overflow-hidden">
      <div
        className="
          relative
          h-[45vh]
          md:h-[60vh]
          lg:h-[105vh]
          2xl:h-screen
        "
      >

        {/* ===================== */}
        {/* Background */}
        {/* ===================== */}

        <motion.div
        initial={{
            scale: 1.08,
            opacity: 0,
            filter: "blur(8px)",
        }}
        animate={{
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
        }}
        transition={{
            duration: 1.4,
            ease: "easeOut",
        }}
        className="
            absolute
            inset-0
        "
        >
        <picture className="block h-full w-full">
            {/* 2XL */}
            <source
            media="(min-width:1536px)"
            srcSet="/photos/hero/outlet-full-2xl.jpeg"
            />

            {/* LG */}
            <source
            media="(min-width:1024px)"
            srcSet="/photos/hero/outlet-full-lg.jpeg"
            />

            {/* MD */}
            <source
            media="(min-width:768px)"
            srcSet="/photos/hero/outlet-full-md.jpeg"
            />

            {/* Mobile */}
            <img
            src="/photos/hero/outlet-full-sm.jpeg"
            alt="Outlet Gumijus"
            className="
                h-full
                w-full
                object-cover
                pointer-events-none
                select-none
            "
            />
        </picture>
        </motion.div>

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-black/35
          "
        />

        {/* ===================== */}
        {/* Content */}
        {/* ===================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            pt-10
            md:pt-40
            lg:pt-15
            2xl:pt-45
            h-full
            md:w-190
            lg:w-330
            2xl:w-450
            max-w-8xl
            px-6
            lg:px-10
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: .8,
              delay: .3,
            }}
            className="max-w-xl"
          >
            <p
            className="
                text-xs
                lg:text-sm
                2xl:text-base
                font-semibold
                uppercase
                tracking-[0.25em]
                text-white
            "
            >
            Outlet
            </p>

            <h1
            className="
                mt-4
                text-3xl
                font-bold
                leading-tight
                text-white

                md:text-6xl
                lg:text-7xl
                2xl:text-8xl
            "
            >
            Fresh Fruit.
            <br />
            Freshly Made.
            </h1>

            <p
            className="
                mt-4
                max-w-xm
                text-sm
                md:text-base
                lg:text-lg
                2xl:text-xl

                leading-6
                text-white

            "
            >
            Temukan outlet Gumijus terdekat.
            </p>

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: .96,
              }}
              onClick={scrollToOutlet}
              className="
                mt-8
                rounded-xl
                bg-[#EC7825]
                px-7
                py-3
                font-semibold
                text-white
                transition-colors
                hover:bg-[#d96d1f]
                text-sm
              "
            >
              Lihat Outlet
              
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Gradient */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-16
            lg:h-24
            bg-gradient-to-t
            from-white
            to-transparent
          "
        />
      </div>
    </section>
  );
}

export default HeroOutlet;