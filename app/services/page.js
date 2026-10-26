
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { services } from "../data/services";
import styles from "./page.module.css";

export const metadata = {
  title: "Our Services | Zenvora Link",
  description:
    "Explore product sourcing, dropshipping, white label, private label, product supply, warehousing and fulfilment with Zenvora Link.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>WHAT WE DO</span>

              <h1>
                Every part of commerce.
                <br />
                <em>Connected.</em>
              </h1>

              <p>
                From finding products to planning fulfilment, explore
                the services that support your e-commerce operation.
              </p>
            </div>

            <aside className={styles.heroAside}>
              <span className={styles.asideNumber}>01 — 07</span>
              <strong>
                One partner for your e-commerce operation.
              </strong>
              <Link href="/contact">
                Discuss your requirements
                <ArrowRight size={16} />
              </Link>
            </aside>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <div>
                <span className={styles.eyebrow}>OUR CAPABILITIES</span>
                <h2>Services built around your business.</h2>
              </div>

              <p>
                Explore individual capabilities and find a suitable
                starting point for your business requirements.
              </p>
            </div>

            <div className={styles.grid}>
              {services.map((service) => (
                <Link
                  href={`/services/${service.slug}`}
                  className={styles.card}
                  key={service.slug}
                >
                  <div className={styles.imageWrap}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 650px) 100vw, (max-width: 1000px) 50vw, 33vw"
                    />

                    <span className={styles.number}>
                      {service.number}
                    </span>

                    <span className={styles.cardArrow}>
                      <ArrowUpRight size={19} />
                    </span>
                  </div>

                  <div className={styles.cardBody}>
                    <span className={styles.cardTag}>
                      {service.tagline}
                    </span>

                    <h3>{service.title}</h3>
                    <p>{service.description}</p>

                    <span className={styles.learnMore}>
                      Explore service <ArrowRight size={15} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.cta}>
              <div className={styles.ctaCopy}>
                <span className={styles.eyebrow}>LET'S TALK</span>
                <h2>Not sure where to start?</h2>
                <p>
                  Tell us about your business and the support you need.
                </p>
              </div>

              <Link href="/contact" className={styles.ctaButton}>
                Discuss your project <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}