import { motion } from "motion/react";

function HeroProfile() {
  return (
    <section className="relative mt-14 overflow-hidden lg:mt-18">
      <div
        className="
          relative
          h-[35vh]
          sm:h-[45vh]
          md:h-[55vh]
          lg:h-[90vh]
          2xl:h-[94vh]
        "
      >
        {/* Background */}
        <motion.img
          src="/photos/hero/profile-full.jpeg"
          alt="Profile Gumijus"
          initial={{
            scale: 1.08,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/25" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div
            className="
              mx-auto
              flex
              w-full
              md:w-[90%]
              xl:-w-[85%]
              max-w-8xl
              justify-end
              px-6
              lg:px-10
            "
          >
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
              className="
                max-w-xl
                text-right
              "
            >
              <p
                className="
                  mb-4
                  text-[0.6rem]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-white
                  md:text-base
                    2xl:text-xl
                "
              >
                Tentang Gumijus
              </p>

              <h1
                className="
                  font-bold
                  leading-none
                  text-white

                  text-4xl
                  sm:text-6xl
                  md:text-7xl
                  lg:text-8xl
                  2xl:text-9xl
                "
              >
                Sehat.
                <br />
                Fresh.
                <br />
                & Tetap Fun.
              </h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "120px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.9,
                }}
                className="
                  mt-6
                  md:mt-12
                  ml-auto
                  h-1
                  max-w-20
                  md:max-w-100
                  rounded-full
                  bg-[#EC7825]
                "
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroProfile;