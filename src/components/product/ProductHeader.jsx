import { motion } from "motion/react";

const tabs = [
  "Produk Terlaris",
  "Gumijus Blend",
  "Milk-Based Blend",
  "Yogurt Blend",
  "Yakult Blend",
  "Simple Juice",
];

function ProductHeader({ activeTab, setActiveTab }) {
  return (
    <section className="bg-white pt-0 lg:pt-24">
      <div className="mx-auto max-w-8xl px-6 lg:px-20">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >
          <p
            className="
              text-sm
              font-medium
              uppercase
              tracking-[0.2em]
              text-neutral-700
            "
          >
            Produk
          </p>

          <h2
            className="
              mt-3
              text-4xl
              font-bold
              text-[#F4B54D]

              md:text-5xl
              lg:text-6xl
            "
          >
            Menu Gumijus
          </h2>

          <p
            className="
              mt-5
              max-w-4xl
              text-sm
              leading-7
              text-neutral-600

              md:text-base
            "
          >
            Pilih minuman favoritmu dari berbagai varian buah segar
            yang dibuat langsung saat dipesan.
          </p>
        </motion.div>

        {/* Tabs */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
          className="
            mt-10
            flex
            gap-3
            overflow-x-auto
            pb-3

            [&::-webkit-scrollbar]:hidden
            [-ms-overflow-style:none]
            [scrollbar-width:none]
          "
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                shrink-0
                rounded-2xl
                border
                px-6
                py-3
                text-sm
                font-semibold
                transition-all
                duration-300

                ${
                  activeTab === tab
                    ? "border-[#F4B54D] bg-[#F4B54D] text-white shadow-lg"
                    : "border-gray-200 bg-white text-neutral-700 hover:border-[#F4B54D] hover:text-[#F4B54D] hover:cursor-pointer"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default ProductHeader;