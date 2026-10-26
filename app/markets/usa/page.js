import Link from "next/link";
import {
  ArrowRight, Globe2, Package, Truck, Boxes,
  ShoppingBag, Search, CheckCircle2
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "../../markets.module.css";

const services = [
  {
    icon: Search,
    number: "01",
    title: "Product Sourcing",
    text: "Identify suitable products and coordinate supplier options around your business requirements.",
    points: ["Product research", "Supplier coordination", "Bulk and custom sourcing"],
  },
  {
    icon: Package,
    number: "02",
    title: "Product Supply",
    text: "Explore product supply options for retailers, resellers, online sellers and B2B customers.",
    points: ["Wholesale supply", "Bulk purchasing", "Recurring supply needs"],
  },
  {
    icon: ShoppingBag,
    number: "03",
    title: "Dropshipping",
    text: "Explore an online selling model supported by product sourcing and order operations without holding your own stock.",
    points: ["Product selection", "Order processing support", "Fulfilment coordination"],
  },
  {
    icon: Boxes,
    number: "04",
    title: "Warehousing",
    text: "Discuss inventory storage and stock handling options based on your target market and business needs.",
    points: ["Inventory handling", "Stock management support", "Pick and pack options"],
  },
  {
    icon: Truck,
    number: "05",
    title: "Order Fulfilment",
    text: "Coordinate order preparation, packing and dispatch workflows for your e-commerce operation.",
    points: ["Order processing", "Packing and dispatch coordination", "Tracking and returns support"],
  },
  {
    icon: Globe2,
    number: "06",
    title: "Brand Development",
    text: "Explore white-label and private-label options to develop products under your own brand identity.",
    points: ["Branding options", "Product customisation", "Packaging coordination"],
  },
];

export default function USASolutionsPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              MARKET SOLUTIONS <span>/</span> UNITED STATES
            </div>

            <h1>
              Make your next move in the{" "}
              <span>USA market.</span>
            </h1>

            <p className={styles.heroText}>
              Connect product sourcing, supply, branding and fulfilment
              planning through e-commerce solutions shaped around your
              business goals and target customers.
            </p>

            <div className={styles.actions}>
              <Link href="/contact" className={styles.primaryButton}>
                Discuss your requirements <ArrowRight size={17} />
              </Link>
              <Link href="/services" className={styles.secondaryButton}>
                Explore services
              </Link>
            </div>

            <div className={styles.heroNote}>
              <CheckCircle2 size={16} />
              Flexible solutions for different business models
            </div>
          </div>

          <div className={styles.heroVisual} aria-label="USA e-commerce operations illustration">
            <div className={styles.visualTop}>
              <span className={styles.visualLabel}>MARKET OVERVIEW</span>
              <span className={styles.liveDot} />
            </div>

            <div className={styles.globeCircle}>
              <Globe2 size={76} strokeWidth={1.1} />
             <span className={`${styles.orbit} ${styles.orbitOne}`} />
<span className={`${styles.orbit} ${styles.orbitTwo}`} />
              <span className={styles.orbitDot} />
            </div>

            <div className={styles.marketStamp}>
              <span>02</span>
              <div>
                <strong>United States</strong>
                <small>Product to fulfilment</small>
              </div>
              <ArrowRight size={18} />
            </div>

            <div className={styles.visualBottom}>
              <span>SOURCE</span><i />
              <span>SUPPLY</span><i />
              <span>FULFIL</span>
            </div>
          </div>
        </section>

        <section className={styles.intro}>
          <div>
            <span className={styles.sectionTag}>USA E-COMMERCE SOLUTIONS</span>
            <h2>Bring the moving parts of your business together.</h2>
          </div>
          <p>
            From new online businesses to established sellers and brands,
            explore sourcing, product supply, branding and operational
            support relevant to your plans for the USA market.
          </p>
        </section>

        <section className={styles.serviceSection}>
          <div className={styles.serviceGrid}>
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className={styles.serviceCard} key={service.number}>
                  <div className={styles.cardTop}>
                    <span className={styles.cardIcon}><Icon size={21} /></span>
                    <span className={styles.cardNumber}>{service.number}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <ul>
                    {service.points.map((point) => (
                      <li key={point}><CheckCircle2 size={15} />{point}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        <section className={styles.process}>
          <div className={styles.processHeading}>
            <span className={styles.sectionTag}>A CLEAR WAY FORWARD</span>
            <h2>Start with your business requirements.</h2>
            <p>Discuss your needs before deciding which services fit your operation.</p>
          </div>

          <div className={styles.steps}>
            {[
              ["01", "Share your needs", "Outline your products, business model and USA market goals."],
              ["02", "Explore options", "Discuss relevant sourcing, branding, supply and fulfilment support."],
              ["03", "Plan next steps", "Review the requirements and determine a suitable approach."],
            ].map(([number, title, text]) => (
              <div className={styles.step} key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.cta}>
          <div>
            <span className={styles.sectionTag}>LET'S TALK BUSINESS</span>
            <h2>Exploring the USA market?</h2>
            <p>Share your plans and discuss the services that may fit your business requirements.</p>
          </div>
          <Link href="/contact" className={styles.primaryButton}>
            Get a free quote <ArrowRight size={17} />
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}