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
          lg:px-10
        "
      >
        <OutletCard
          title="Tubagus"
          image="/photos/outlets/tubagus.jpeg"
          address="Ruko NonStop, Jl. Tubagus Ismail No.40, Sekeloa, Kecamatan Coblong, Kota Bandung, Jawa Barat 40134"
        />

        <OutletCard
          reverse
          title="Sukajadi"
          image="/photos/outlets/sukajadi.jpeg"
          address="The Island, Jl. Sukajadi No.5, Sukabungah, Kecamatan Sukajadi, Kota Bandung, Jawa Barat 40162"
        />

        <OutletCard
          title="Dipatiukur"
          image="/photos/outlets/dipatiukur.jpeg"
          address="Jl. Dipatiukur No.XX, Bandung, Jawa Barat"
        />

        <OutletCard
          reverse
          title="Antapani"
          image="/photos/outlets/antapani.jpeg"
          address="Jl. Antapani Lama No.XX, Bandung, Jawa Barat"
        />
      </div>
    </section>
  );
}

export default OutletList;