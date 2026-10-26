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
    text: "Find suitable products and coordinate with suppliers around your business requirements.",
    points: ["Product research", "Supplier coordination", "Bulk and custom sourcing"],
  },
  {
    icon: Package,
    number: "02",
    title: "Product Supply",
    text: "Source products for retailers, resellers, online sellers and B2B businesses.",
    points: ["Wholesale supply", "Bulk purchasing", "Recurring supply needs"],
  },
  {
    icon: ShoppingBag,
    number: "03",
    title: "Dropshipping",
    text: "Build an online selling model with product and operational support without holding your own stock.",
    points: ["Product selection", "Order processing support", "Fulfilment coordination"],
  },
  {
    icon: Boxes,
    number: "04",
    title: "Warehousing",
    text: "Explore inventory storage and stock handling options suited to your operational requirements.",
    points: ["Inventory handling", "Stock management support", "Pick and pack options"],
  },
  {
    icon: Truck,
    number: "05",
    title: "Order Fulfilment",
    text: "Coordinate the operational steps involved in preparing orders for dispatch and tracking.",
    points: ["Order processing", "Packing and dispatch coordination", "Tracking and returns support"],
  },
  {
    icon: Globe2,
    number: "06",
    title: "Brand Development",
    text: "Explore white-label and private-label options for businesses developing their own product identity.",
    points: ["Branding options", "Product customisation", "Packaging coordination"],
  },
];

export default function UKSolutionsPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              MARKET SOLUTIONS <span>/</span> UNITED KINGDOM
            </div>

            <h1>
              Your e-commerce partner for the{" "}
              <span>UK market.</span>
            </h1>

            <p className={styles.heroText}>
              From product sourcing and supply to warehousing and fulfilment,
              bring the essential parts of your e-commerce operation together
              with one business partner.
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
              Solutions shaped around your business model
            </div>
          </div>

          <div className={styles.heroVisual} aria-label="UK e-commerce operations illustration">
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
              <span>01</span>
              <div>
                <strong>United Kingdom</strong>
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
            <span className={styles.sectionTag}>UK E-COMMERCE SOLUTIONS</span>
            <h2>Build your operation around the way you sell.</h2>
          </div>
          <p>
            Whether you are launching a store, supplying retailers or growing
            an established brand, explore the services that can support your
            product and operational needs in the UK market.
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
            <h2>From requirements to operations.</h2>
            <p>A straightforward starting point for discussing your UK requirements.</p>
          </div>

          <div className={styles.steps}>
            {[
              ["01", "Share your needs", "Tell us about your products, business model and target customers."],
              ["02", "Explore options", "Discuss relevant sourcing, branding, supply or fulfilment services."],
              ["03", "Plan next steps", "Review requirements and agree on the appropriate way forward."],
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
            <h2>Planning to grow in the UK?</h2>
            <p>Tell us what you need, and start a conversation about the right solution for your business.</p>
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