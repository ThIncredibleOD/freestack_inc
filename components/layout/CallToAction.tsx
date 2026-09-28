import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="bg-[hsla(212,80%,42%,1)] text-white flex flex-col gap-8 items-center justify-center p-4 md:p-8 lg:p-16 mb-20">
      <h2 className="font-montserrat text-2xl md:text-3xl font-bold text-center">
        Give Your Organization The Tools To Grow.
      </h2>
      <p className="text-center">
        Tell us where your academy or club wants to go. We’ll help you bring the right solutions together.
      </p>
      <Link
        href="/#"
        className="group flex items-center gap-2 bg-white text-black text-lg py-2 px-20 rounded-xl cursor-pointer transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:transform-none"
      >
        Start a Conversation
        <ArrowRight
          size={20}
          strokeWidth={2.5}
          className="transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
        />
      </Link>
    </section>
  );
}
