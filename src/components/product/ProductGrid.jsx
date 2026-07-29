import ProductCard from "./ProductCard";
import { motion } from "motion/react";

function ProductGrid({ products, onSelect }) {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <div
          className="
            grid
            gap-6

            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            2xl:grid-cols-4
          "
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: .2,
              }}
              transition={{
                duration: .6,
                delay: index * .08,
              }}
            >
              <ProductCard
                product={product}
                onClick={() => onSelect(product)}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ProductGrid;