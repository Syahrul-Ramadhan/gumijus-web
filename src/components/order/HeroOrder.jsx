import { motion } from "motion/react";

function HeroOrder() {
  const scrollToOrder = () => {
    document
      .getElementById("online-order")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section className="relative mt-14 overflow-hidden md:mt-18">
      <div
        className="
          relative
          h-[50vh]
          md:h-[70vh]
          lg:h-[110vh]
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
          className="absolute inset-0"
        >
          <picture className="block h-full w-full">
            {/* 2XL */}
            <source
              media="(min-width:1536px)"
              srcSet="/photos/hero/order-full.jpeg"
            />

            {/* LG */}
            <source
              media="(min-width:1024px)"
              srcSet="/photos/hero/order-full.jpeg"
            />

            {/* MD */}
            <source
              media="(min-width:768px)"
              srcSet="/photos/hero/order-full.jpeg"
            />

            {/* Mobile */}
            <img
              src="/photos/hero/order-full-sm.jpeg"
              alt="Pesan Online Gumijus"
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
              duration: 0.8,
              delay: 0.3,
            }}
            className="max-w-xl"
          >
            {/* Label */}

            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]
                text-white

                lg:text-sm
              "
            >
              Pesan Online
            </p>

            {/* Headline */}

            <h1
              className="
                mt-4
                font-bold
                leading-tight
                text-white

                text-4xl
                md:text-6xl
                lg:text-7xl
                2xl:text-8xl
              "
            >
              Order Now.
              <br />
              Enjoy Wow.
            </h1>

            {/* Description */}

            <p
              className="
                mt-5
                max-w-sm
                text-sm
                leading-6
                text-white/90

                md:text-base
                2xl:text-lg
              "
            >
              Pesan Gumijus favoritmu kapan saja.
            </p>

            {/* Button */}

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.96,
              }}
              onClick={scrollToOrder}
              className="
                mt-8
                rounded-xl
                bg-[#871D59]
                px-7
                py-3
                text-sm
                font-semibold
                text-white
                transition-colors
                hover:bg-[#871D59]/90
                hover:cursor-pointer
              "
            >
              Pesan Sekarang
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
            bg-gradient-to-t
            from-white
            to-transparent

            lg:h-24
          "
        />
      </div>
    </section>
  );
}

export default HeroOrder;