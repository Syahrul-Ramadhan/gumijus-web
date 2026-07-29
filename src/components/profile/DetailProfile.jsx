import { motion } from "motion/react";

function ProfileDetail() {
  return (
    <section className="bg-white py-6 md:py-12 lg:py-24 2xl:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-10">

        {/* ========================= */}
        {/* PROFILE & HISTORY */}
        {/* ========================= */}

        <div>

          {/* Decorative */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:justify-end"
          >
            <img
              src="/icons/decoration.svg"
              alt=""
              className="
                w-25
                md:w-45
                lg:w-64
                2xl:w-72
                pointer-events-none
                select-none
              "
            />
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: .3 }}
            transition={{ duration: .7 }}
            className="mt-8"
          >
            <h2
              className="
                text-3xl
                font-bold
                text-[#2F6A44]

                md:text-4xl
                lg:text-5xl
              "
            >
              Profil & Sejarah
            </h2>
          </motion.div>

          {/* Description */}
          <div
            className="
              mt-8
              grid
              gap-8

              lg:grid-cols-2
              lg:gap-16
            "
          >
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: .3 }}
              transition={{ duration: .8 }}
              className="
                space-y-5
                text-sm
                leading-relaxed
                text-neutral-600

                md:text-base
              "
            >
              <p>
                Gumijus adalah kedai jus dan smoothie populer di Bandung
                yang berdiri dengan semangat menghadirkan minuman sehat
                berbahan dasar buah segar berkualitas.
              </p>

              <p>
                Berawal dari kecintaan terhadap gaya hidup sehat,
                Gumijus terus berkembang menjadi pilihan masyarakat
                yang menginginkan minuman segar dengan rasa alami.
              </p>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: .3 }}
              transition={{ duration: .8 }}
              className="
                space-y-5
                text-sm
                leading-relaxed
                text-neutral-600

                md:text-base
              "
            >
              <p>
                Saat ini Gumijus menghadirkan puluhan varian minuman
                berbahan dasar buah segar yang dibuat setiap hari untuk
                memberikan rasa terbaik kepada pelanggan.
              </p>

              <p>
                Mulai dari smoothie, jus, hingga minuman sehat dengan
                berbagai kombinasi buah yang menyegarkan dan kaya vitamin.
              </p>
            </motion.div>
          </div>

        </div>

        {/* ========================= */}
        {/* STORE + VISION */}
        {/* ========================= */}

        <div
          className="
            mt-12

            grid
            gap-10

            lg:grid-cols-[0.9fr_1.1fr]
            lg:items-center

            2xl:mt-28
          "
        >

          {/* Store Image */}

          <motion.div
            initial={{
                opacity: 0,
                y: 40,
                scale: 0.95,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
            }}
            viewport={{
                once: true,
                amount: 0.25,
            }}
            transition={{
                duration: 0.8,
            }}
            >
            <picture>

                <source
                media="(min-width:1536px)"
                srcSet="/photos/gallery/profile-potrait.jpeg"
                />

                <source
                media="(min-width:1024px)"
                srcSet="/photos/gallery/profile-potrait.jpeg"
                />

                <source
                media="(min-width:768px)"
                srcSet="/photos/gallery/profile-potrait-md.jpeg"
                />

                <img
                src="/photos/gallery/profile-potrait.jpeg"
                alt="Store Gumijus"
                className="
                    h-72
                    w-full
                    rounded-4xl
                    object-cover

                    md:h-120
                    lg:h-[500px]
                "
                />

            </picture>
            </motion.div>

          {/* Right */}

          <div className="space-y-14">

            {/* Vision */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .7 }}
            >
              <h3
                className="
                  text-3xl
                  font-bold
                  text-[#2F6A44]
                "
              >
                Visi
              </h3>

              <p
                className="
                  mt-5
                  text-sm
                  leading-relaxed
                  text-neutral-600

                  md:text-base
                "
              >
                Menjadi pilihan utama masyarakat dalam menikmati
                minuman sehat berbahan buah segar dengan kualitas
                terbaik, rasa alami, dan pelayanan yang ramah.
              </p>
            </motion.div>

            {/* Mission */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .7,
                delay: .15,
              }}
            >
              <h3
                className="
                  text-3xl
                  font-bold
                  text-[#2F6A44]
                "
              >
                Misi
              </h3>

              <ul
                className="
                  mt-5
                  space-y-3
                  text-sm
                  leading-relaxed
                  text-neutral-600

                  md:text-base
                "
              >
                <li>• Menggunakan buah segar berkualitas setiap hari.</li>
                <li>• Menyajikan minuman sehat dengan cita rasa terbaik.</li>
                <li>• Memberikan pelayanan yang ramah dan profesional.</li>
                <li>• Mengajak masyarakat menjalani gaya hidup sehat.</li>
              </ul>
            </motion.div>

          </div>

        </div>

        {/* ========================= */}
        {/* BOTTOM IMAGE */}
        {/* ========================= */}

        <motion.div
        initial={{
            opacity: 0,
            y: 50,
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
        className="mt-12"
        >
        <picture>

            <source
            media="(min-width:1536px)"
            srcSet="/photos/gallery/profile-wide-lg.jpeg"
            />

            <source
            media="(min-width:1024px)"
            srcSet="/photos/gallery/profile-wide-lg.jpeg"
            />

            <source
            media="(min-width:768px)"
            srcSet="/photos/gallery/profile-wide.jpeg"
            />

            <img
            src="/photos/gallery/profile-wide.jpeg"
            alt="Gumijus"
            className="
                h-40
                w-full
                rounded-4xl
                object-cover

                md:h-80
                md:rounded-[2.5rem]

                lg:h-90
                2xl:h-100
            "
            />

        </picture>
        </motion.div>

      </div>
    </section>
  );
}

export default ProfileDetail;