import { motion } from "motion/react";

function OutletCard({ store }) {
  return (
    <motion.a
      href={store.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: .25,
      }}
      className="
        group
        overflow-hidden
        rounded-[2rem]
        border
        border-gray-200
        bg-white
        shadow-sm
        transition
        hover:shadow-xl
      "
    >

      {/* Logo */}

      <div
        className="
          flex
          h-64
          items-center
          justify-center
          bg-white
        "
      >
        <img
          src={store.logo}
          alt={store.name}
          className="
            h-14
            w-auto
            object-contain
            transition-transform
            duration-300
            group-hover:scale-105
          "
        />
      </div>

      {/* Content */}

      <div
        className="
          flex
          flex-col
          gap-4
          bg-gray-50
          p-6
        "
      >

        <h4
          className="
            text-2xl
            font-bold
            text-slate-800
          "
        >
          {store.name}
        </h4>

        <p
          className="
            text-sm
            leading-relaxed
            text-gray-600
          "
        >
          {store.desc}
        </p>

        <button
          className="
            mt-2
            w-fit
            rounded-xl
            bg-[#871D59]
            px-5
            py-3
            text-sm
            font-semibold
            text-white
            transition
            hover:bg-[#871D59]/90
          "
        >
          Pesan Sekarang
        </button>

      </div>

    </motion.a>
  );
}

export default OutletCard;