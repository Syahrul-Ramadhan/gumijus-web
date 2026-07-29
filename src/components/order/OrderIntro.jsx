import { motion } from "motion/react";
import OutletCard from "./OutletCard";

const outletData = [
  {
    outlet: "Outlet Tubagus",
    stores: [
      {
        name: "Shopee",
        desc: "Belanja Gumijus melalui Shopee.",
        logo: "/logo/shopee-logo.svg",
        url: "#",
      },
      {
        name: "GoFood",
        desc: "Pesan Gumijus lewat GoFood.",
        logo: "/logo/gofood-logo.svg",
        url: "https://gofood.link/a/DENx6Wu",
      },
      {
        name: "GrabFood",
        desc: "Pesan Gumijus lewat GrabFood.",
        logo: "/logo/grab-logo.svg",
        url: "https://r.grab.com/g/6-20260724_191010_61863FED70324468963CFA255C8D8A24_MEXMPS-6-C3DWGJVJCN4ZEJ",
      },
    ],
  },

  {
    outlet: "Outlet Gegerkalong",
    stores: [
      {
        name: "Shopee",
        desc: "Belanja Gumijus melalui Shopee.",
        logo: "/logo/shopee-logo.svg",
        url: "#",
      },
      {
        name: "GoFood",
        desc: "Pesan Gumijus lewat GoFood.",
        logo: "/logo/gofood-logo.svg",
        url: "https://gofood.link/a/Kt7F1qm",
      },
    ],
  },
];

function OrderIntro() {
  return (
    <section className="bg-white py-16 lg:py-24">

      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* ================= */}
        {/* Heading */}
        {/* ================= */}

        <div
          className="
            grid
            gap-4
            md:gap-8
            lg:grid-cols-[.8fr_1.2fr]
            lg:items-center
          "
          id="online-order"
        >

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >
            <h2
              className="
                text-3xl
                font-bold
                leading-none
                text-[#871D59]

                md:text-5xl
                lg:text-6xl
                2xl:text-7xl

                hidden
                lg:block
              "
            >
              Pesan
              <br />
              Online.
            </h2>
            <h2
              className="
                text-4xl
                font-bold
                leading-none
                text-[#871D59]

                md:text-5xl
                lg:text-6xl
                2xl:text-7xl

                lg:hidden
              "
            >
              Pesan Online.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >
            <p
              className="
                max-w-2xl
                text-base
                leading-relaxed
                text-slate-700

                md:text-lg
                lg:text-xl
              "
            >
              Pilih outlet favoritmu, lalu pesan melalui platform
              online yang tersedia. 
            </p>
          </motion.div>

        </div>

        {/* ================= */}
        {/* Outlet List */}
        {/* ================= */}

        <div className="mt-16 space-y-20">

          {outletData.map((outlet, index) => (
            <div key={index}>

              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .6 }}
                className="
                  mb-8
                  text-3xl
                  font-bold
                  text-[#a72b71]
                "
              >
                {outlet.outlet}
              </motion.h3>

              <div
                className="
                  grid
                  gap-8

                  sm:grid-cols-2
                  lg:grid-cols-3
                "
              >
                {outlet.stores.map((store, i) => (
                  <OutletCard key={i} store={store} />
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default OrderIntro;