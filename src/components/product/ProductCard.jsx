import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

function ProductCard({ product, onClick }) {
  return (
    <motion.button
      whileHover={{
        y: -8,
      }}
      whileTap={{
        scale: .98,
      }}
      onClick={onClick}
      className="
        group
        w-full
        overflow-hidden
        rounded-[2rem]
        border
        border-gray-200
        bg-white
        text-left
        shadow-sm
        transition-all
        duration-300

        hover:border-[#EC7825]
        hover:shadow-xl
      "
    >
      {/* Image */}

      <div
        className="
          overflow-hidden
          rounded-t-[2rem]
          bg-[#FFF7F2]
        "
      >
        <motion.img
          whileHover={{
            scale: 1.08,
          }}
          transition={{
            duration: .4,
          }}
          src={product.image}
          alt={product.name}
          className="
            h-64
            w-full
            object-cover
          "
        />
      </div>

      {/* Content */}

      <div className="p-6">

        <h3
          className="
            text-xl
            font-bold
            text-[#7B2C6F]
          "
        >
          {product.name}
        </h3>

        <p
          className="
            mt-3
            min-h-[52px]
            text-sm
            leading-6
            text-gray-500
          "
        >
          {product.description}
        </p>

        <div
          className="
            mt-6
            flex
            items-center
            justify-between
          "
        >
          <span
            className="
              text-xl
              font-bold
              text-[#EC7825]
            "
          >
            Rp {product.price.toLocaleString("id-ID")}
          </span>

          <span
            className="
              flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-[#EC7825]
            "
          >
            Detail

            <ArrowUpRight
              size={18}
              className="
                transition-transform
                duration-300

                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </span>
        </div>

      </div>
    </motion.button>
  );
}

export default ProductCard;