import { motion } from "motion/react";

function ProductCard({ product, onClick }) {
  return (
    <motion.button
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      onClick={() => onClick?.(product)}
      className="
        w-full
        overflow-hidden
        rounded-3xl
        border
        border-neutral-200
        bg-white
        p-5
        text-left
      "
    >
      <div className="flex items-center gap-5">
        {/* LEFT */}
        <div className="flex-1">
          <h3
            className="
              text-base
              md:text-lg
              font-semibold
              text-neutral-900
            "
          >
            {product.name}
          </h3>

          <p
            className="
              mt-2
              line-clamp-2
              text-xs
              lg:text-sm
              leading-relaxed
              text-neutral-500
            "
          >
            {product.description}
          </p>

          <p
            className="
              mt-5
              text-lg
              font-semibold
              text-[#F4B54D]
            "
          >
            Rp {product.price.toLocaleString("id-ID")}
          </p>
        </div>

        {/* RIGHT */}
        <div
          className="
            h-32
            w-32
            shrink-0
            overflow-hidden
            rounded-3xl

            md:h-36
            md:w-36
          "
        >
          <img
            src={product.image}
            alt={product.name}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-300
              hover:scale-105
            "
          />
        </div>
      </div>
    </motion.button>
  );
}

export default ProductCard;