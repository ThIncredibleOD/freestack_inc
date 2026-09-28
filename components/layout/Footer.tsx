import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-6 min-h-140 bg-[url('/footer-background.png')] bg-cover bg-center p-4 md:p-8 lg:p-16">
      <div className="flex flex-col md:flex-row gap-6 justify-between border-t border-b border-t-[hsla(215,16%,47%,1)] border-b-[hsla(215,16%,47%,1)] py-20">
        <div className="flex flex-col gap-6 max-w-75">
          <Image src="/logo-white.png" height={250} width={250} alt="Logo" />
          <p className="text-[hsla(215,16%,47%,1)]">
            An end-to-end digital agency engineering scalable web products from
            UI/UX design to cloud deployment.
          </p>
          <div className="flex gap-2 justify-between items-center text-[hsla(215,16%,47%,1)]">
            <a href="#">
              <FaLinkedin size={30} />
            </a>
            <a href="#">
              <FaXTwitter size={30} />
            </a>
            <a href="#">
              <FaInstagram size={30} />
            </a>
            <a href="#">
              <FaGithub size={30} />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-6 max-w-75">
          <h2 className="text-white text-2xl font-bold">Quick Links</h2>
          <nav className="flex flex-col gap-4 text-[hsla(215,16%,47%,1)]">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/about-us">About</Link>
          </nav>
        </div>
        <div className="flex flex-col gap-6 max-w-75">
          <h2 className="text-white text-2xl font-bold">Services</h2>
          <nav className="flex flex-col gap-4 text-[hsla(215,16%,47%,1)]">
            <Link href="/">Branding</Link>
            <Link href="/#">UI/UX Design</Link>
            <Link href="/#">Web Development</Link>
            <Link href="/#">Deployment & Support</Link>
          </nav>
        </div>
        <div className="flex flex-col gap-6 max-w-75">
          <h2 className="text-white text-2xl font-bold">Contact</h2>
          <a href="#" className="text-[hsla(212,80%,42%,1)]">
            hello@freestack.com
          </a>
          <p className="text-[hsla(215,16%,47%,1)]">
            ABS-CITS, UNILAG, LAGOS, NIGERIA.
          </p>
          <div className="flex items-center gap-2 bg-[hsla(212,80%,42%,1)] text-white py-2 px-4 rounded-full w-fit">
            <div className="bg-[hsla(120,61%,50%,1)] h-2 w-2 rounded-full"></div>
            Available for projects
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[hsla(215,16%,47%,1)]">
        <p>© 2026 FreeStack Inc. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link href="/#">Privacy Policy</Link>
          <Link href="/#">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
