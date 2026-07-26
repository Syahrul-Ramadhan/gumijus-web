import { motion } from "motion/react";

function HeroHome() {
  return (
    <section className="relative mt-14 md:mt-18 overflow-hidden bg-white">

  {/* HERO */}
  <div
    className="
      relative
      h-[45vh]
      sm:h-[55vh]
      md:h-[70vh]
      lg:h-[120vh]
      2xl:h-screen
    "
  >

    {/* Background */}
    <motion.div
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
    className="absolute inset-0 z-10"
    >
        <picture>
        {/* Desktop Besar */}
        <source
            media="(min-width: 1536px)"
            srcSet="/photos/hero/home-full-xl.jpeg"
        />

        {/* Desktop */}
        <source
            media="(min-width: 1024px)"
            srcSet="/photos/hero/home-full-lg.jpeg"
        />

        {/* Tablet */}
        <source
            media="(min-width: 768px)"
            srcSet="/photos/hero/home-full-md.jpeg"
        />

        {/* Mobile */}
        <img
            src="/photos/hero/home-full-sm.jpeg"
            alt=""
            className="
            h-full
            lg:h-[120%]
            w-full
            object-cover
            pointer-events-none
            select-none
            "
        />
        </picture>
    </motion.div>

    {/* TEXT */}
    <motion.div
    initial={{
        opacity: 0,
        y: -80,
    }}
    animate={{
        opacity: 1,
        y: 0,
    }}
    transition={{
        duration: .9,
        delay: .3,
        ease: "easeOut",
    }}
      className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        -translate-y-1/3

        bg-white
        mt-5
        py-3
        md:mt-8
        md:py-6
        lg:mt-8
        lg:py-8
        xl:mt-12
        xl:py-10
        w-full
        flex
        items-center
        justify-center
        z-30
        leading-none
      "
    >
        <h1 className="        
        text-orange-500
        font-bold
        text-4xl
        sm:text-5xl
        md:text-7xl
        lg:text-8xl
        2xl:text-9xl">
            Gimmie Jus-Sseyeo!
        </h1>
    </motion.div>

    {/* Purple Star */}
    <motion.img
        src="/icons/Purple-Star.svg"
        initial={{
            opacity: 0,
            scale: 0,
            rotate: -50,
        }}
        animate={{
            opacity: 1,
            scale: 1,
            rotate: [0, 5, -5, 0],
            y: [0, -12, 0],
        }}
        transition={{
            opacity: {
            duration: 0.5,
            },
            scale: {
            duration: 0.6,
            ease: "backOut",
            },
            rotate: {
            duration: 4,
            delay: 0.6,
            repeat: Infinity,
            },
            y: {
            duration: 3,
            delay: 0.6,
            repeat: Infinity,
            ease: "easeInOut",
            },
        }}
        className="
            absolute
            left-[8%]
            top-[32%]
            z-20
            w-25
            md:w-60
            md:left-[2%]
            md:top-[35%]
            lg:w-50
            lg:left-[23%]
            lg:top-[45%]
            2xl:w-65
            2xl:left-[20%]
            2xl:top-[50%]
        "
    />

    {/* MODEL */}
    <motion.div
    initial={{
        opacity: 0,
        y: 80,
        scale: .96,
    }}
    animate={{
        opacity: 1,
        y: 0,
        scale: 1,
    }}
    transition={{
        duration: 1,
        delay: .5,
        ease: "easeOut",
    }}
    className="absolute inset-0 z-40"
    >   
        <picture>
        <source
            media="(min-width:1536px)"
            srcSet="/photos/hero/home-model-xl.png"
        />

        <source
            media="(min-width:1024px)"
            srcSet="/photos/hero/home-model-lg.png"
        />

        <source
            media="(min-width:768px)"
            srcSet="/photos/hero/home-model-md.png"
        />

        <img
            src="/photos/hero/home-model-sm.png"
            alt=""
            className="
            h-full
            lg:h-[120%]
            w-full
            object-cover
            pointer-events-none
            select-none
            "
        />
        </picture>
    </motion.div>
    
    {/* Yellow */}
    <motion.img
      src="/icons/Yellow-Star.svg"
        initial={{
            opacity: 0,
            scale: 0,
            rotate: -50,
        }}
        animate={{
            opacity: 1,
            scale: 1,
            rotate: [0, 5, -5, 0],
            y: [0, 12, 0],
        }}
        transition={{
            opacity: {
            duration: 0.5,
            },
            scale: {
            duration: 0.6,
            ease: "backOut",
            },
            rotate: {
            duration: 4,
            delay: 0.6,
            repeat: Infinity,
            },
            y: {
            duration: 3,
            delay: 0.6,
            repeat: Infinity,
            ease: "easeInOut",
            },
        }}
      className="
        absolute
        right-[6%]
        top-[23%]
        z-50
        w-30
        md:w-65
        md:right-[7%]
        md:top-[27%]
        lg:w-60
        lg:right-[23%]
        lg:top-[33%]
        2xl:w-90
        2xl:right-[22%]
        2xl:top-[35%]
      "
    />

    {/* Green */}
    <motion.img
      src="/icons/Green-Star.svg"
      initial={{
            opacity: 0,
            scale: 0,
            rotate: -50,
        }}
        animate={{
            opacity: 1,
            scale: 1,
            rotate: [0, -5, 5, 0],
            y: [0, -12, 0],
        }}
        transition={{
            opacity: {
            duration: 0.5,
            },
            scale: {
            duration: 0.6,
            ease: "backOut",
            },
            rotate: {
            duration: 4,
            delay: 0.6,
            repeat: Infinity,
            },
            y: {
            duration: 3,
            delay: 0.6,
            repeat: Infinity,
            ease: "easeInOut",
            },
        }}
      className="
        absolute
        left-[8%]
        bottom-[12%]
        z-50
        w-12
        md:w-30
        md:left-[3%]
        md:bottom-[12%]
        lg:w-25
        lg:left-[22%]
        lg:bottom-[2%]
        2xl:w-30
        2xl:left-[21%]
        2xl:bottom-[5%]
      "
    />

    {/* Orange */}
    <motion.img
      src="/icons/Orange-Star.svg"
      initial={{
            opacity: 0,
            scale: 0,
            rotate: -50,
        }}
        animate={{
            opacity: 1,
            scale: 1,
            rotate: [0, -5, 5, 0],
            y: [0, 12, 0],
        }}
        transition={{
            opacity: {
            duration: 0.5,
            },
            scale: {
            duration: 0.6,
            ease: "backOut",
            },
            rotate: {
            duration: 4,
            delay: 0.6,
            repeat: Infinity,
            },
            y: {
            duration: 3,
            delay: 0.6,
            repeat: Infinity,
            ease: "easeInOut",
            },
        }}
      className="
        absolute
        right-[10%]
        bottom-[5%]
        z-50
        w-10
        md:w-20
        md:right-[7%]
        md:bottom-[5%]
        lg:w-20
        lg:right-[24%]
        lg:bottom-[5%]
        2xl:w-30
        2xl:right-[22%]
        2xl:bottom-[5%]
      "
    />

  </div>

</section>
  );
}

export default HeroHome;