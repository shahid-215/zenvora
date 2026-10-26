import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";
import styles from "./Footer.module.css";

const services = [
  ["Dropshipping", "/services/dropshipping"],
  ["Private Label", "/services/private-label"],
  ["White Label", "/services/white-label"],
  ["Product Sourcing", "/services/product-sourcing"],
  ["Product Supply", "/services/product-supply"],
  ["Warehousing", "/services/warehousing"],
  ["Fulfilment", "/services/fulfilment"],
];

const company = [
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Contact", "/contact"],
  ["FAQs", "/faqs"],
];

const markets = [
  ["UK", "/markets/uk"],
  ["USA", "/markets/usa"],
  ["Global", "/markets/global"],
];

const legal = [
  ["Privacy Policy", "/privacy-policy"],
  ["Terms & Conditions", "/terms"],
  ["Cookie Policy", "/cookie-policy"],
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.container}>
          {/* Brand */}
          <div className={styles.brandColumn}>
            <Link href="/" className={styles.logo}>
              <Image
                src="/zlogo.png"
                alt="Zenvora Link"
                width={170}
                height={50}
                priority
                style={{
                  width: "auto",
                  height: "100px",
                  objectFit: "contain",
                }}
              />
            </Link>

            <p className={styles.tagline}>
              One partner for your entire
              <br />
              e-commerce operation.
            </p>

            <div className={styles.brandLine}>
              <span>SOURCE.</span>
              <span>BRAND.</span>
              <span>STORE.</span>
              <span>FULFIL.</span>
              <span>SCALE.</span>
            </div>
          </div>

          {/* Company */}
          <div className={styles.column}>
            <h3>Company</h3>

            {company.map(([name, href]) => (
              <Link href={href} key={name}>
                {name}
                <ArrowUpRight size={13} />
              </Link>
            ))}
          </div>

          {/* Services */}
          <div className={`${styles.column} ${styles.servicesColumn}`}>
            <h3>Services</h3>

            {services.map(([name, href]) => (
              <Link href={href} key={name}>
                {name}
                <ArrowUpRight size={13} />
              </Link>
            ))}
          </div>

          {/* Markets */}
          <div className={styles.column}>
            <h3>Markets</h3>

            {markets.map(([name, href]) => (
              <Link href={href} key={name}>
                {name}
                <ArrowUpRight size={13} />
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className={styles.contactColumn}>
            <h3>Contact</h3>

            <a href="mailto:info@zenvoralink.com">
              <span className={styles.contactIcon}>
                <Mail size={15} />
              </span>
              <span>info@zenvoralink.com</span>
            </a>

            <a href="tel:+440000000000">
              <span className={styles.contactIcon}>
                <Phone size={15} />
              </span>
              <span>+44 (0) 000 000 0000</span>
            </a>

            <a href="https://wa.me/" target="_blank" rel="noreferrer">
              <span className={styles.contactIcon}>
                <MessageCircle size={15} />
              </span>
              <span>WhatsApp</span>
            </a>

            <Link href="/contact" className={styles.footerCta}>
              Talk to an Expert
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className={styles.bottom}>
        <div className={styles.container}>
          <p>
            © {year} Zenvora Link. All Rights Reserved.
          </p>

          <div className={styles.legal}>
            {legal.map(([name, href]) => (
              <Link href={href} key={name}>
                {name}
              </Link>
            ))}
          </div>

          <p className={styles.location}>
            UK · USA · Global
          </p>
        </div>
      </div>
    </footer>
  );
}