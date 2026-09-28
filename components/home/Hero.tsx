export default function Hero() {
  return (
    <section className="flex flex-col gap-2 md:gap-6 justify-end min-h-[calc(100vh-5rem)] md:min-h-120 bg-[url('/services/hero-background-mobile.jpg')] md:bg-[url('/services/hero-background-desktop.png')] bg-cover p-4 md:p-8 lg:p-16">
      <div className="text-sm md:text-md bg-[hsla(207,90%,61%,0.1)] w-fit py-1 px-2 md:py-2 md:px-4 rounded-full">
        FOOTBALL, BUILT FOR THE DIGITAL AGE
      </div>

      <h1 className="font-montserrat text-5xl/15 md:text-6xl/18 font-bold md:max-w-2xl">
        A Stronger Team <br />
        <span className="text-[hsla(212,80%,42%,1)]">
          On and Off the <br /> Pitch
        </span>
      </h1>

      <p className="text-[hsla(215,16%,47%,1)] md:max-w-2xl">
        FreeStack helps football academies, clubs, and sports organizations
        bring their digital presence, media, operations, and performance
        insights <br />
        together. <br />
      </p>

      <div className="flex items-center gap-5 md:gap-10">
        <button className="bg-[hsla(212,80%,42%,1)] md:text-lg text-white p-2 lg:p-4 rounded-2xl cursor-pointer">
          Get Started
        </button>
        <button className="border md:text-lg p-2 lg:p-4 rounded-2xl cursor-pointer">
          View Our Work
        </button>
      </div>
    </section>
  );
}
