import OutletCard from "./OutletCard";

function OutletList() {
  return (
    <section
      id="outlet-list"
      className="
        bg-white
        py-16

        lg:py-24
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          space-y-24

          px-6
          md:px-10
        "
      >
        <OutletCard
          title="Tubagus"
          image="/photos/outlets/tubagus.jpeg"
          address="Ruko NonStop, Jl. Tubagus Ismail No.40, Sekeloa, Kecamatan Coblong, Kota Bandung, Jawa Barat 40134"
          link="https://maps.app.goo.gl/o6w2osCfQcsX6MKeA"
        />

        <OutletCard
          reverse
          title="Sukajadi"
          image="/photos/outlets/sukajadi.webp"
          address="The Island, Jl. Sukajadi No.5, Sukabungah, Kec. Sukajadi, Kota Bandung, Jawa Barat 40162"
          link="https://maps.app.goo.gl/3C5kDdfmE2oLEtin8"
        />

        <OutletCard
          title="Buah Batu"
          image="/photos/outlets/buahBatu.webp"
          address="Jl. Buah Batu No.79, Malabar, Kec. Lengkong, Kota Bandung, Jawa Barat 40262"
          link="https://maps.app.goo.gl/UoRry8zSTtWnJXri8"
        />

        <OutletCard
          reverse
          title="Geger Kalong"
          image="/photos/outlets/gegerkalong.webp"
          address="Jl. Gegerkalong Hilir No.106, Sukarasa, Kec. Sukasari, Kota Bandung, Jawa Barat 40153"
          link="https://maps.app.goo.gl/D23qAsD7YNUc2L7o6"
        />
      </div>
    </section>
  );
}

export default OutletList;