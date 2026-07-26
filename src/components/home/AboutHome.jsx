import { motion } from "motion/react";

function AboutHome() {
  return (
    <section className="bg-white py-12 lg:py-16 2xl:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* ========================= */}
        {/* TOP */}
        {/* ========================= */}

        <div className="grid gap-10 grid-cols-1 lg:grid-cols-[0.9fr_1fr_1fr] 2xl:grid-cols-[1fr_1.1fr_1.1fr] lg:gap-12 2xl:gap-16 lg:items-start">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >
            <h1
            className="
                font-oleo
                text-orange-500
                leading-none

                text-6xl
                md:text-7xl
                lg:text-8xl
                2xl:text-9xl
            "
            >
            Gumijus
            </h1>

            <h2
              className="
                mt-4
                text-2xl
                font-medium
                text-orange-500

                md:text-3xl
                lg:text-4xl
              "
            >
              Gimmie JUS-Sseyeo!
            </h2>
          </motion.div>

            {/* Description 1 */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .8 }}
                className="
                flex
                flex-col
                gap-5
                text-sm
                leading-relaxed
                text-[#7B2C6F]
                md:text-base
                "
            >
                <p>
                Camilan sehat modern yang memadukan
                kebaikan 100% jus buah alami dengan tekstur kenyal
                (gummy) yang menyenangkan.
                </p>

                <p>
                Gumijus menjadi solusi guilt-free snack terbaik untuk
                memenuhi kebutuhan vitamin harian sekaligus recharge
                energi.
                </p>
            </motion.div>

            {/* Description 2 */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .8 }}
                className="
                flex
                flex-col
                justify-between
                gap-5
                text-sm
                leading-relaxed
                text-[#7B2C6F]
                md:text-base
                "
            >
                <p>
                Bukan sekadar air buah biasa, ini liquid mood-booster kamu.
                Lepaskan penat dan biarkan buah asli yang me-reset hari
                melelahkanmu!
                </p>

                <div className="flex justify-start lg:justify-end">
                <a
                    className="
                    rounded-xl
                    bg-[#EC7825]
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    "
                >
                    Lihat Produk
                </a>
                </div>
            </motion.div>
        </div>

        {/* ========================= */}
        {/* CONTENT */}
        {/* ========================= */}

        <div
          className="
            mt-14

            grid
            gap-10

            lg:grid-cols-2

            2xl:mt-20
          "
        >
          {/* LEFT */}
          <div>
            <motion.img
              src="/photos/gallery/home-wide.jpeg"
              alt="Buah segar pilihan, segar maksimal!"
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "0px 0px -120px 0px", }}
              transition={{
              duration: 1.2,
              ease: "easeOut",
              }}
              className="
                w-full
                rounded-4xl
                object-cover

                h-64
                md:h-80
                lg:h-72
                2xl:h-80
              "
            />

            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
              duration: 0.6,
              delay: 0.15,
              }}
              className="
                mt-6
                text-3xl
                font-semibold
                leading-tight
                text-orange-500

                lg:text-4xl
              "
            >
              Buah segar pilihan,
              <br />
              segar maksimal!
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
              duration: 0.6,
              delay: 0.3,
              }}
              className="
                mt-5
                text-sm
                leading-relaxed
                text-[#7B2C6F]

                md:text-base
              "
            >
              Buah hanya akan dikupas, dipotong, dan dihancurkan sesaat sebelum harimu dimulai atau saat pesananmu masuk. tidak ada cerita buah layu yang menginap berhari hari di sudut rak.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
              duration: 0.6,
              delay: 0.45,
              }}
              className="
                mt-5
                text-sm
                leading-relaxed
                text-[#7B2C6F]

                md:text-base
              "
              >
                Rasa manis yang menenangkan dan asam yang bikin melek murni berasal dari fruktosa alami buah itu sendiri. Kalaupun butuh tambahan manis, kami hanya menggunakan takaran gula yang rasional, tanpa perisa sintetik yang bikin tenggorokan tidak nyaman.
            </motion.p>
          </div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >
            <img
              src="/photos/gallery/home-potrait.jpeg"
              alt=""
              className="
                w-full
                rounded-[2rem]
                object-cover

                h-[450px]
                md:h-[600px]
                lg:h-[650px]
                2xl:h-[760px]
              "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutHome;