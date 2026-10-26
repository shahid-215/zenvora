"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Globe2,
  PackageCheck,
  ShieldCheck,
  Truck,
} from "lucide-react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./page.module.css";

const capabilities = [
  {
    number: "01",
    title: "Source",
    text: "Find the right products, suppliers and opportunities for your market.",
  },
  {
    number: "02",
    title: "Brand",
    text: "Build differentiated products through white and private label solutions.",
  },
  {
    number: "03",
    title: "Store",
    text: "Support the commercial side of your e-commerce operation.",
  },
  {
    number: "04",
    title: "Fulfil",
    text: "Connect storage, inventory and fulfilment into one operation.",
  },
  {
    number: "05",
    title: "Scale",
    text: "Create an operational foundation designed to grow with your business.",
  },
];

const reasons = [
  "End-to-end e-commerce support",
  "UK, USA and international market focus",
  "Flexible business models",
  "Product sourcing and supply",
  "White & private label capabilities",
  "Warehousing and fulfilment support",
];

const markets = [
  {
    code: "UK",
    title: "United Kingdom",
    text: "Built around one of the world's most established e-commerce markets.",
  },
  {
    code: "US",
    title: "United States",
    text: "Supporting businesses targeting scale across the US market.",
  },
  {
    code: "GL",
    title: "Global",
    text: "Flexible infrastructure for businesses operating internationally.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <span className={styles.eyebrow}>ABOUT ZENVORA LINK</span>

                <h1>
                  The infrastructure
                  <br />
                  behind <em>e-commerce.</em>
                </h1>

                <p>
                  Zenvora Link connects sourcing, branding, supply,
                  warehousing and fulfilment into one reliable e-commerce
                  operation.
                </p>

                <div className={styles.heroActions}>
                  <Link href="/contact" className={styles.primaryButton}>
                    Work with us
                    <ArrowRight size={17} />
                  </Link>

                  <Link href="/services" className={styles.textLink}>
                    Explore services
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>

              <div className={styles.heroVisual}>
                <div className={styles.heroImage}>
                  <Image
                    src="/about/about-hero.jpg"
                    alt="Zenvora Link e-commerce operations"
                    fill
                    priority
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                </div>

                <div className={styles.heroTag}>
                  <span>01</span>
                  <strong>One partner.</strong>
                  <small>Entire operation.</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className={styles.intro}>
          <div className={styles.container}>
            <div className={styles.introGrid}>
              <div className={styles.sectionLabel}>
                <span>01</span>
                <p>WHO WE ARE</p>
              </div>

              <div className={styles.introMain}>
                <h2>
                  More than a supplier.
                  <br />
                  <span>An operational partner.</span>
                </h2>

                <div className={styles.introBottom}>
                  <p>
                    We help entrepreneurs, sellers, retailers and growing
                    brands simplify the complex side of e-commerce. From
                    finding products to getting them where they need to be,
                    Zenvora Link brings the key pieces together.
                  </p>

                  <div className={styles.marketMini}>
                    <div>
                      <strong>UK</strong>
                      <span>Market</span>
                    </div>
                    <div>
                      <strong>USA</strong>
                      <span>Market</span>
                    </div>
                    <div>
                      <strong>Global</strong>
                      <span>Reach</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className={styles.capabilities}>
          <div className={styles.container}>
            <div className={styles.capabilitiesHeader}>
              <div>
                <span className={styles.eyebrow}>OUR APPROACH</span>
                <h2>
                  One connected
                  <br />
                  <em>operation.</em>
                </h2>
              </div>

              <p>
                Every stage is connected so your business can move with less
                friction and more control.
              </p>
            </div>

            <div className={styles.capabilityList}>
              {capabilities.map((item) => (
                <div className={styles.capabilityRow} key={item.number}>
                  <span className={styles.capabilityNumber}>
                    {item.number}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <ArrowUpRight
                    className={styles.rowArrow}
                    size={20}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STORY */}
        <section className={styles.story}>
          <div className={styles.container}>
            <div className={styles.storyGrid}>
              <div className={styles.storyVisual}>
                <Image
                  src="/about/about-story.jpg"
                  alt="Zenvora Link operations"
                  fill
                  sizes="(max-width: 900px) 100vw, 48vw"
                />

                <div className={styles.storyBadge}>
                  <PackageCheck size={20} />
                  <span>Built around commerce</span>
                </div>
              </div>

              <div className={styles.storyContent}>
                <span className={styles.eyebrow}>OUR STORY</span>

                <h2>
                  Designed to make
                  <br />
                  <em>commerce simpler.</em>
                </h2>

                <p>
                  E-commerce businesses often have to manage multiple
                  suppliers, product decisions, inventory, storage and
                  fulfilment separately.
                </p>

                <p>
                  Zenvora Link brings these capabilities together under one
                  partner, giving businesses a simpler way to build, operate
                  and grow.
                </p>

                <div className={styles.storyLine}>
                  <span />
                  <strong>Source. Brand. Store. Fulfil. Scale.</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MISSION / VISION */}
        <section className={styles.mission}>
          <div className={styles.container}>
            <div className={styles.missionGrid}>
              <div className={styles.missionBlock}>
                <span className={styles.eyebrow}>MISSION</span>
                <h2>Make e-commerce operations easier to build and manage.</h2>
                <p>
                  We focus on practical infrastructure that removes
                  unnecessary complexity and helps businesses move forward.
                </p>
              </div>

              <div className={styles.missionBlockDark}>
                <span className={styles.eyebrow}>VISION</span>
                <h2>Become the trusted infrastructure partner for growing commerce.</h2>
                <p>
                  A connected partner for businesses that want to operate
                  confidently across markets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className={styles.why}>
          <div className={styles.container}>
            <div className={styles.whyGrid}>
              <div>
                <span className={styles.eyebrow}>WHY ZENVORA</span>
                <h2>
                  Built for businesses
                  <br />
                  <em>ready to grow.</em>
                </h2>

                <p className={styles.whyIntro}>
                  Whether you are launching your first product or expanding an
                  established operation, our model is designed around
                  flexibility and scale.
                </p>
              </div>

              <div className={styles.reasonList}>
                {reasons.map((reason) => (
                  <div className={styles.reason} key={reason}>
                    <span>
                      <Check size={14} />
                    </span>
                    <p>{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MARKETS */}
        <section className={styles.markets}>
          <div className={styles.container}>
            <div className={styles.marketsTop}>
              <div>
                <span className={styles.eyebrow}>MARKETS</span>
                <h2>
                  Local understanding.
                  <br />
                  <em>International ambition.</em>
                </h2>
              </div>

              <p>
                Zenvora Link is positioned to support businesses across key
                e-commerce markets while keeping operations connected.
              </p>
            </div>

            <div className={styles.marketGrid}>
              {markets.map((market) => (
                <div className={styles.marketCard} key={market.code}>
                  <div className={styles.marketCode}>{market.code}</div>

                  <div>
                    <h3>{market.title}</h3>
                    <p>{market.text}</p>
                  </div>

                  <ArrowUpRight size={18} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <div className={styles.ctaBox}>
              <div>
                <span className={styles.eyebrow}>LET'S BUILD</span>

                <h2>
                  Your next stage of
                  <br />
                  <em>e-commerce starts here.</em>
                </h2>
              </div>

              <Link href="/contact" className={styles.ctaButton}>
                Get a quote
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}