import { motion } from "motion/react";

function HeroProduct() {
  return (
    <section className="relative -mt-7 overflow-hidden bg-white md:-mt-40 lg:mt-15">
      <div
        className="
          relative
          h-[50vh]
          sm:h-[60vh]
          md:h-[75vh]
          lg:h-[130vh]
          2xl:h-screen
        "
      >
        {/* ========================= */}
        {/* Background */}
        {/* ========================= */}

        <div
          className="
            absolute
            inset-x-0
            top-1/2
            h-[30%]
            lg:h-[60%]
            -translate-y-1/2
            z-10
          "
        >
          <picture className="block h-full w-full">
            <source
              media="(min-width:1536px)"
              srcSet="/photos/hero/product-full.jpeg"
            />

            <source
              media="(min-width:1024px)"
              srcSet="/photos/hero/product-full.jpeg"
            />

            <source
              media="(min-width:768px)"
              srcSet="/photos/hero/product-full.jpeg"
            />

            <motion.img
              src="/photos/hero/product-full.jpeg"
              alt=""
                initial={{
                    scale: 1.08,
                    opacity: 0,
                }}
                animate={{
                    scale: 1,
                    opacity: 1,
                }}
                transition={{
                    duration: 1.4,
                    ease: "easeOut",
                }}
              className="
                h-full
                w-full
                object-cover
                pointer-events-none
                select-none
              "
            />
          </picture>
        </div>

        {/* ========================= */}
        {/* HERO CONTENT */}
        {/* ========================= */}

        <div
          className="
            absolute
            inset-0
            z-20
          "
        >
          {/* ========================= */}
          {/* Taste Fill */}
          {/* ========================= */}

          <motion.img
            src="/text/taste-fill.svg"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: .3,
            }}
            className="
              absolute
              left-1/2
              top-[-5%]
              lg:top-[-40%]
              -translate-x-1/2

              w-[85vw]
              md:w-[92vw]
              lg:w-[75vw]
              2xl:w-[82vw]

              pointer-events-none
              select-none
            "
          />

          {/* ========================= */}
          {/* Model */}
          {/* ========================= */}

          <picture
            className="
              absolute
              inset-0
              z-30
            "
          >
            <source
              media="(min-width:1536px)"
              srcSet="/photos/hero/product-model.png"
            />

            <source
              media="(min-width:1024px)"
              srcSet="/photos/hero/product-model.png"
            />

            <source
              media="(min-width:768px)"
              srcSet="/photos/hero/product-model.png"
            />

            <motion.img
              src="/photos/hero/product-model.png"
              initial={{
                opacity: 0,
                scale: .96,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: .2,
              }}
              className="
                h-full
                w-full
                object-contain
                object-center
                pointer-events-none
                select-none
              "
            />
          </picture>

          {/* ========================= */}
          {/* Taste Outline */}
          {/* ========================= */}

          <motion.img
            src="/text/taste-outline.svg"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: .5,
            }}
            className="
              absolute
              left-1/2
              top-[-5%]
              lg:top-[-40%]
              z-40
              -translate-x-1/2

              w-[85vw]
              md:w-[92vw]
              lg:w-[75vw]
              2xl:w-[82vw]

              pointer-events-none
              select-none
            "
          />

          {/* ========================= */}
          {/* The Fresh */}
          {/* ========================= */}

          <motion.img
            src="/text/thefresh-fill.svg"
            initial={{
              opacity: 0,
              y: 80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: .7,
            }}
            className="
              absolute
              bottom-[18%]
              lg:bottom-[-8%]
              left-1/2
              z-50
              -translate-x-1/2

              w-[85vw]
              md:w-[86vw]
              lg:w-[90vw]
              2xl:w-[72vw]

              pointer-events-none
              select-none
            "
          />
        </div>
      </div>
    </section>
  );
}

export default HeroProduct;