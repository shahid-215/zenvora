
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import styles from "./Header.module.css";

const services = [
  { name: "Dropshipping", href: "/services/dropshipping" },
  { name: "Private Label", href: "/services/private-label" },
  { name: "White Label", href: "/services/white-label" },
  { name: "Product Sourcing", href: "/services/product-sourcing" },
  { name: "Product Supply", href: "/services/product-supply" },
  { name: "Warehousing", href: "/services/warehousing" },
  { name: "Fulfilment", href: "/services/fulfilment" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <Image
            src="/zlogo.png"
            alt="Zenvora Link"
            width={150}
            height={52}
            className={styles.logoImage}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>

          <Link href="/about" className={styles.navLink}>
            About Us
          </Link>

          <div
            className={styles.dropdown}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={styles.dropdownButton}
              onClick={() => setServicesOpen((open) => !open)}
              type="button"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <ChevronDown
                size={15}
                className={servicesOpen ? styles.chevronOpen : ""}
              />
            </button>

            <div
              className={`${styles.dropdownMenu} ${
                servicesOpen ? styles.dropdownMenuOpen : ""
              }`}
              aria-hidden={!servicesOpen}
            >
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className={styles.dropdownItem}
                  tabIndex={servicesOpen ? 0 : -1}
                  onClick={() => setServicesOpen(false)}
                >
                  <span>{service.name}</span>
                  <ArrowUpRight size={14} />
                </Link>
              ))}
            </div>
          </div>

          <Link href="/markets/uk" className={styles.navLink}>
            UK
          </Link>

          <Link href="/markets/usa" className={styles.navLink}>
            USA
          </Link>

          <Link href="/faqs" className={styles.navLink}>
            FAQs
          </Link>
        </nav>

        {/* Desktop CTA */}
        <Link href="/contact" className={styles.headerCta}>
          Get a Quote
          <ArrowUpRight size={17} />
        </Link>

        {/* Mobile Button */}
        <button
          type="button"
          className={styles.menuButton}
          onClick={() => {
            setMenuOpen((open) => !open);
            setServicesOpen(false);
          }}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${styles.mobileMenu} ${
          menuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <nav className={styles.mobileNav}>
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>

          <Link href="/about" onClick={closeMenu}>
            About Us
          </Link>

          <button
            type="button"
            className={styles.mobileServicesButton}
            onClick={() => setServicesOpen((open) => !open)}
            aria-expanded={servicesOpen}
          >
            <span>Services</span>
            <ChevronDown
              size={17}
              className={servicesOpen ? styles.chevronOpen : ""}
            />
          </button>

          <div
            className={`${styles.mobileServices} ${
              servicesOpen ? styles.mobileServicesOpen : ""
            }`}
          >
            {services.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                onClick={closeMenu}
                tabIndex={servicesOpen ? 0 : -1}
              >
                {service.name}
              </Link>
            ))}
          </div>

          <Link href="/markets/uk" onClick={closeMenu}>
            UK Solutions
          </Link>

          <Link href="/markets/usa" onClick={closeMenu}>
            USA Solutions
          </Link>

          <Link href="/faqs" onClick={closeMenu}>
            FAQs
          </Link>

          <Link
            href="/contact"
            className={styles.mobileCta}
            onClick={closeMenu}
          >
            Get a Free Quote
            <ArrowUpRight size={17} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
