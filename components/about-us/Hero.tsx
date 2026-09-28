import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[hsla(210,40%,98%,1)] flex flex-col gap-2 md:gap-6 p-4 md:p-8 lg:p-16">
      <div className="text-sm md:text-md bg-[hsla(207,90%,61%,0.1)] w-fit py-1 px-2 md:py-2 md:px-4 rounded-full">
        ABOUT FREESTACK
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-12 justify-between">
        <div className="flex-2 flex flex-col gap-2 md:gap-6">
          <h1 className="font-montserrat text-5xl/15 md:text-6xl/18 font-bold md:max-w-2xl">
            Architects of The Digital Experience.
          </h1>
          <p className="text-[hsla(215,16%,47%,1)] md:max-w-2xl">
            FreeStack Inc. is a Nigerian technology and digital solutions company helping football academies, 
            clubs, and sports organizations build their digital presence and improve how they operate. 
            We bring together digital platforms, creative media, communication, and performance analysis 
            sto solve practical challenges across the sports ecosystem.
          </p>
        </div>

        <div className="flex-1 flex items-center justify-center bg-[hsla(212,52%,14%,1)] rounded-xl">
          <Image src="/logo-white.png" height={400} width={400} alt="Logo" />
        </div>
      </div>
    </section>
  );
}
