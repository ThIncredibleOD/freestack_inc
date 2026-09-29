import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const socials = [
    { label: "LinkedIn", href: "#", icon: FaLinkedin },
    { label: "X", href: "#", icon: FaXTwitter },
    { label: "Instagram", href: "#", icon: FaInstagram },
    { label: "GitHub", href: "#", icon: FaGithub },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/#" },
    { name: "About", href: "/about-us" },
  ];

  const services = [
    { name: "Branding", href: "/services" },
    { name: "UI/UX Design", href: "/services" },
    { name: "Web Development", href: "/services" },
    { name: "Deployment & Support", href: "/services" },
  ];

  const linkClasses =
    "w-fit text-muted-invert transition-colors hover:text-white";

  return (
    <footer className="bg-ink bg-[url('/footer-background.png')] bg-cover bg-center">
      <div className="mx-auto w-full max-w-[85rem] px-4 py-10 md:px-8 md:py-14 lg:px-16">
        <div className="grid gap-10 border-y border-white/15 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="flex max-w-75 flex-col gap-6">
            <Image
              src="/logo-white.png"
              width={240}
              height={101}
              alt="FreeStack"
              className="h-12 w-auto self-start"
            />
            <p className="text-muted-invert">
              An end-to-end digital agency engineering scalable web products from
              UI/UX design to cloud deployment.
            </p>
            <div className="flex items-center gap-4 text-muted-invert">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:text-accent"
                  >
                    <Icon size={26} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="font-montserrat text-lg font-bold text-white">
              Quick Links
            </h2>
            <nav className="flex flex-col gap-4">
              {quickLinks.map((link) => (
                <Link key={link.name} href={link.href} className={linkClasses}>
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="font-montserrat text-lg font-bold text-white">
              Services
            </h2>
            <nav className="flex flex-col gap-4">
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className={linkClasses}
                >
                  {service.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="font-montserrat text-lg font-bold text-white">
              Contact
            </h2>
            <a
              href="mailto:hello@freestack.com"
              className="w-fit text-accent transition-colors hover:text-white"
            >
              hello@freestack.com
            </a>
            <p className="text-muted-invert">ABS-CITS, UNILAG, LAGOS, NIGERIA.</p>
            <div className="flex w-fit items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm text-white">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-online opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-online" />
              </span>
              Available for projects
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-sm text-muted-invert md:flex-row">
          <p>© 2026 FreeStack Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/#" className={linkClasses}>
              Privacy Policy
            </Link>
            <Link href="/#" className={linkClasses}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
