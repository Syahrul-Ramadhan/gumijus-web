import { motion } from "motion/react";

function OutletCard({
  image,
  title,
  address,
  link,
  reverse = false,
}) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
      }}
      className={`
        grid
        gap-8
        items-center

        md:grid-cols-2
        md:gap-20

        ${reverse ? "md:[&>*:first-child]:order-2" : ""}
      `}
    >
      {/* ====================== */}
      {/* IMAGE */}
      {/* ====================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: .96,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: .7,
        }}
      >
        <picture>
          <source
            media="(min-width:1536px)"
            srcSet={image}
          />

          <source
            media="(min-width:1024px)"
            srcSet={image}
          />

          <source
            media="(min-width:768px)"
            srcSet={image}
          />

          <img
            src={image}
            alt={title}
            className="
              h-72
              w-full
              rounded-[2rem]
              object-cover

              md:h-[420px]
              lg:h-[360px]
              xl:h-[420px]
            "
          />
        </picture>
      </motion.div>

      {/* ====================== */}
      {/* CONTENT */}
      {/* ====================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: reverse ? -40 : 40,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: .8,
        }}
        className="
          flex
          flex-col

          items-center
          text-center

          md:items-start
          md:text-left
        "
      >
        {/* Decorative */}

        <img
          src="/icons/decorative.svg"
          alt=""
          className="
            mb-6
            w-40
          "
        />

        <p
          className="
            text-lg
            font-semibold
            text-[#D73A35]
          "
        >
          Outlet
        </p>

        <h2
          className="
            mt-1
            text-3xl
            font-bold
            text-[#D73A35]
          "
        >
          {title}
        </h2>

        <p
          className="
            mt-5
            max-w-sm
            text-neutral-600
            leading-relaxed
            text-sm

            md:text-base
          "
        >
          {address}
        </p>

        <motion.a
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: .95,
          }}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-8

            rounded-lg
            bg-[#B72E2C]

            px-8
            py-3

            text-sm
            font-semibold
            text-white

            shadow-lg
          "
        >
          Kunjungi Outlet
        </motion.a>
      </motion.div>
    </motion.article>
  );
}

export default OutletCard;