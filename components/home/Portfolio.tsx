import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  return (
    <section className="flex flex-col gap-6 bg-[hsla(210,40%,98%,1)] p-4 md:p-8 lg:p-16 mb-10">
      <div className="flex justify-between items-center">
        <h2 className="font-montserrat text-2xl md:text-3xl font-bold">
          Selected Work
        </h2>
        <Link
          href="/#"
          className="flex items-center gap-2 md:text-lg text-[hsla(212,80%,42%,1)] hover:underline"
        >
          view all projects
          <ArrowRight size={18} strokeWidth={3} />
        </Link>
      </div>

      <ul>
        <li className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <div className="bg-[hsla(52,40%,36%,1)] flex items-center justify-center w-fit p-8 rounded-xl">
            <div className="">
              <Image
                src="/works/humanity-desktop.png"
                height={250}
                width={250}
                alt="work image"
              />
            </div>
            <div className="-ml-10 mt-10">
              <Image
                src="/works/humanity-mobile.png"
                height={80}
                width={80}
                alt="work image"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 md:gap-4">
            <div className="text-sm md:text-md bg-[hsla(207,90%,61%,0.1)] py-1 px-2 w-fit md:py-2 md:px-4 rounded-full">
              Football
            </div>
            <h3 className="font-montserrat text-xl md:text-2xl font-bold">
              Peakline Sports
            </h3>
            <p className="text-sm md:text-md text-[hsla(215,16%,47%,1)]">
              A platform for teams to register for a football foundation cup  
            </p>

            <div className="flex gap-4">
              <div className="bg-[hsla(212,52%,14%,0.1)] w-fit py-1 px-2 md:py-2 md:px-4 rounded-full">
                Foundation
              </div>
              <div className="bg-[hsla(212,52%,14%,0.1)] w-fit py-1 px-2 md:py-2 md:px-4 rounded-full">
                Football
              </div>
              <div className="bg-[hsla(212,52%,14%,0.1)] w-fit py-1 px-2 md:py-2 md:px-4 rounded-full">
                Sports
              </div>
            </div>

            <Link
              href="/#"
              className="flex gap-2 items-center text-[hsla(212,80%,42%,1)] hover:underline mt-5 md:mt-0"
            >
              Read Case Study
              <ArrowUpRight size={18} strokeWidth={3} />
            </Link>
          </div>
        </li>
      </ul>
    </section>
  );
}
