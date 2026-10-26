"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Users,
  ShoppingCart,
  Boxes,
  Tags,
  Sparkles,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./page.module.css";

const services = [
  {
    number: "01",
    title: "Product Sourcing",
    text: "Find suitable products, suppliers and supply channels for your e-commerce business.",
    href: "/services/product-sourcing",
    image: "/1.jpg",
  },
  {
    number: "02",
    title: "Dropshipping",
    text: "Sell products without maintaining your own inventory with sourcing, processing and fulfilment support.",
    href: "/services/dropshipping",
    image: "/2.jpg",
  },
  {
    number: "03",
    title: "White Label",
    text: "Sell suitable existing products under your own brand identity with packaging and fulfilment support.",
    href: "/services/white-label",
    image: "/3.jpg",
  },
  {
    number: "04",
    title: "Private Label",
    text: "Build your own branded product line from product research and sourcing through packaging and fulfilment.",
    href: "/services/private-label",
    image: "/4.jpg",
  },
  {
    number: "05",
    title: "Product Supply",
    text: "Wholesale, bulk and recurring product supply for retailers, sellers, resellers and B2B customers.",
    href: "/services/product-supply",
    image: "/5.jpg",
  },
  {
    number: "06",
    title: "Warehousing",
    text: "Inventory storage and operational support in strategic markets, where available.",
    href: "/services/warehousing",
    image: "/6.jpg",
  },
  {
    number: "07",
    title: "Fulfilment",
    text: "Pick, pack, process and dispatch customer orders with shipping and tracking support.",
    href: "/services/fulfilment",
    image: "/7.jpg",
  },
];

const models = [
  {
    number: "01",
    title: "Dropshipping",
    text: "Ideal for new sellers and low-inventory e-commerce businesses.",
  },
  {
    number: "02",
    title: "Wholesale",
    text: "For retailers and established sellers requiring product supply.",
  },
  {
    number: "03",
    title: "White Label",
    text: "For businesses wanting suitable existing products under their brand.",
  },
  {
    number: "04",
    title: "Private Label",
    text: "For businesses building their own branded product lines.",
  },
];

const steps = [
  {
    number: "01",
    title: "Tell Us What You Need",
    text: "Share your business model, product requirements and target market.",
  },
  {
    number: "02",
    title: "Source & Select",
    text: "Identify suitable products and supply solutions for your requirements.",
  },
  {
    number: "03",
    title: "Brand & Prepare",
    text: "Brand, package and prepare products for white or private label projects.",
  },
  {
    number: "04",
    title: "Store",
    text: "Hold inventory in suitable warehouse facilities where available.",
  },
  {
    number: "05",
    title: "Fulfil",
    text: "Pick, pack, process and dispatch orders with operational support.",
  },
  {
    number: "06",
    title: "Scale",
    text: "Expand your infrastructure and services as your order volume grows.",
  },
];

const whyUs = [
  "End-to-end e-commerce solutions",
  "UK and USA market capabilities",
  "Multiple business models under one partner",
  "Product sourcing and product supply",
  "White label and private label options",
  "Warehousing and fulfilment infrastructure",
  "Scalable operational support",
  "International business focus",
];

const audiences = [
  "Startups",
  "E-commerce Sellers",
  "Established Brands",
  "Retailers",
  "Marketplace Sellers",
  "Entrepreneurs",
];

const faqs = [
  {
    question: "What e-commerce services do you provide?",
    answer:
      "Zenvora Link provides product sourcing, dropshipping, white label, private label, product supply, warehousing and fulfilment solutions.",
  },
  {
    question: "Do you provide dropshipping?",
    answer:
      "Yes. Zenvora Link supports dropshipping through product sourcing, catalogue support, order processing, pick and pack, shipping and fulfilment.",
  },
  {
    question: "Do you provide private-label products?",
    answer:
      "Private-label support can include product research, sourcing, customisation, branding, packaging, quality coordination, warehousing and fulfilment.",
  },
  {
    question: "Do you offer white-label products?",
    answer:
      "White-label support focuses on suitable existing products that can be prepared and presented under your own brand identity.",
  },
  {
    question: "Do you provide UK or USA warehousing?",
    answer:
      "Warehousing options can be available in strategic markets. Exact facilities and service coverage should be confirmed for your requirements.",
  },
];

function TypingWord() {
  const words = [
    "E-commerce Business",
    "Online Store",
    "Product Brand",
    "Global Operation",
  ];

  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    let delay = isDeleting ? 45 : 85;

    if (!isDeleting && displayText === currentWord) {
      delay = 1900;
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setWordIndex((current) => (current + 1) % words.length);
      return;
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.slice(0, displayText.length + 1));

        if (displayText.length + 1 === currentWord.length) {
          setIsDeleting(false);
        }
      } else {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
      }

      if (!isDeleting && displayText === currentWord) {
        setIsDeleting(true);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <span className={styles.typingLine}>
      <span className={styles.typingWord}>{displayText}</span>
      <span className={styles.typingCursor} />
    </span>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Header />

      <main className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay} />

          <div className={`${styles.container} ${styles.heroGrid}`}>
            <div className={styles.heroContent}>
              <div className={styles.heroKicker}>
                <span className={styles.heroKickerDot} />
                UK · USA · GLOBAL
              </div>

              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleLine}>Everything Your</span>

                <TypingWord />

                <span className={styles.heroTitleLine}>
                  Needs, Under One Roof.
                </span>
              </h1>

              <p className={styles.heroDescription}>
                From product sourcing and private labeling to warehousing,
                fulfilment and dropshipping, Zenvora Link helps businesses
                build, operate and scale across the UK, USA and global
                markets.
              </p>

              <div className={styles.heroActions}>
                <Link href="/contact" className={styles.primaryButton}>
                  Get a Free Quote
                  <ArrowUpRight size={17} />
                </Link>

                <Link href="/services" className={styles.secondaryButton}>
                  Explore Services
                  <ArrowRight size={17} />
                </Link>
              </div>

              <div className={styles.heroMeta}>
                {["Source", "Brand", "Store", "Fulfil", "Scale"].map(
                  (item, index) => (
                    <div className={styles.heroMetaItem} key={item}>
                      <span className={styles.heroMetaNumber}>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className={styles.heroMetaLabel}>{item}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* VALUE */}
        <section className={`${styles.section} ${styles.value}`}>
          <div className={`${styles.container} ${styles.valueGrid}`}>
            <div className={styles.valueLead}>
              <span className={styles.eyebrow}>
                01 / The Zenvora Link Model
              </span>

              <h2 className={styles.valueTitle}>
                Complete e-commerce solutions.
              </h2>

              <p className={styles.valueDescription}>
                One partner for your entire e-commerce operation. Connect
                sourcing, branding, product supply, warehousing and fulfilment
                into one operational ecosystem.
              </p>

              <Link href="/about" className={styles.secondaryButton}>
                Discover Zenvora Link
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className={styles.valuePoints}>
              {[
                ["01", "PRODUCTS", "SOURCE"],
                ["02", "OPERATIONS", "FULFIL"],
                ["03", "MARKETS", "SCALE"],
                ["04", "BUSINESS", "GROW"],
              ].map(([number, title, text]) => (
                <div className={styles.valuePoint} key={number}>
                  <span className={styles.valuePointNumber}>{number}</span>
                  <h3 className={styles.valuePointTitle}>{title}</h3>
                  <p className={styles.valuePointText}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className={`${styles.section} ${styles.services}`}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div>
                <span className={styles.eyebrow}>02 / Core Services</span>

                <h2 className={styles.sectionTitle}>
                  Built around your entire operation.
                </h2>
              </div>

              <p className={styles.sectionDescription}>
                From finding the right product to getting orders into
                customers&apos; hands, Zenvora Link connects the essential
                parts of your e-commerce operation.
              </p>
            </div>

            <div className={styles.servicesGrid}>
              {services.map((service) => (
                <Link
                  href={service.href}
                  className={styles.serviceCard}
                  key={service.number}
                >
                  <div className={styles.serviceImageWrap}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                      className={styles.serviceImage}
                    />

                    <div className={styles.serviceImageOverlay} />
                  </div>

                  <div className={styles.serviceContent}>
                    <span className={styles.serviceNumber}>
                      {service.number}
                    </span>

                    <h3 className={styles.serviceTitle}>{service.title}</h3>

                    <p className={styles.serviceText}>{service.text}</p>
                  </div>

                  <ArrowUpRight
                    className={styles.serviceArrow}
                    size={20}
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* MODELS */}
        <section className={`${styles.section} ${styles.modelsSection}`}>
          <div className={styles.container}>
            <div className={styles.modelsHeader}>
              <div className={styles.modelsHeading}>
                <span className={styles.eyebrow}>
                  03 / BUSINESS MODELS
                </span>

                <h2 className={styles.modelsTitle}>
                  One business.
                  <br />
                  <span>Different ways to grow.</span>
                </h2>
              </div>

              <div className={styles.modelsHeaderSide}>
                <p>
                  From selling ready-to-ship products to building your own
                  brand, choose a model that matches your goals and stage of
                  growth.
                </p>

                <div className={styles.modelsHeaderNote}>
                  <span className={styles.modelsStatusDot} />
                  FLEXIBLE COMMERCE SOLUTIONS
                </div>
              </div>
            </div>

            <div className={styles.modelsGrid}>
              {models.map((model, index) => {
                const ModelIcon = [
                  ShoppingCart,
                  Boxes,
                  Tags,
                  Sparkles,
                ][index];

                const details = [
                  {
                    label: "SELL WITHOUT STOCK",
                    visual: "dropshipping",
                    keywords: ["PRODUCT", "ORDER", "CUSTOMER"],
                  },
                  {
                    label: "BUY IN VOLUME",
                    visual: "wholesale",
                    keywords: ["BULK", "STOCK", "SUPPLY"],
                  },
                  {
                    label: "BRAND EXISTING PRODUCTS",
                    visual: "whiteLabel",
                    keywords: ["SOURCE", "BRAND", "SELL"],
                  },
                  {
                    label: "BUILD YOUR OWN BRAND",
                    visual: "privateLabel",
                    keywords: ["DESIGN", "CREATE", "GROW"],
                  },
                ][index];

                return (
                  <article
                    className={`${styles.modelCard} ${styles[details.visual]}`}
                    key={model.number}
                  >
                    <div className={styles.modelCardTop}>
                      <span className={styles.modelNumber}>
                        {model.number}
                      </span>

                      <span className={styles.modelIcon}>
                        <ModelIcon size={21} strokeWidth={1.6} />
                      </span>
                    </div>

                    <div className={styles.modelVisual}>
                      {index === 0 && (
                        <div className={styles.flowGraphic}>
                          <div className={styles.flowNode}>
                            <Boxes size={21} />
                            <span>Supplier</span>
                          </div>

                          <span className={styles.flowConnector}>
                            <ArrowRight size={17} />
                          </span>

                          <div
                            className={`${styles.flowNode} ${styles.flowNodeAccent}`}
                          >
                            <ShoppingCart size={21} />
                            <span>Customer</span>
                          </div>
                        </div>
                      )}

                      {index === 1 && (
                        <div className={styles.stackGraphic}>
                          <div
                            className={`${styles.stackBox} ${styles.stackBoxBack}`}
                          >
                            <span />
                            <span />
                          </div>

                          <div
                            className={`${styles.stackBox} ${styles.stackBoxMiddle}`}
                          >
                            <span />
                            <span />
                          </div>

                          <div
                            className={`${styles.stackBox} ${styles.stackBoxFront}`}
                          >
                            <span />
                            <span />
                          </div>

                          <span className={styles.stackLabel}>
                            BULK SUPPLY
                          </span>
                        </div>
                      )}

                      {index === 2 && (
                        <div className={styles.brandGraphic}>
                          <div className={styles.brandPackage}>
                            <span className={styles.brandPackageTop} />
                            <span className={styles.brandPackageMark}>
                              YOUR
                            </span>
                            <span className={styles.brandPackageName}>
                              BRAND
                            </span>
                            <span className={styles.brandPackageLine} />
                          </div>

                          <span
                            className={`${styles.brandOrbit} ${styles.brandOrbitOne}`}
                          />
                          <span
                            className={`${styles.brandOrbit} ${styles.brandOrbitTwo}`}
                          />
                        </div>
                      )}

                      {index === 3 && (
                        <div className={styles.privateGraphic}>
                          <div className={styles.privatePackage}>
                            <span className={styles.privatePackageSymbol}>
                              Z
                            </span>
                            <span className={styles.privatePackageLine} />
                            <span
                              className={styles.privatePackageLineShort}
                            />
                          </div>

                          <span
                            className={`${styles.privateSparkle} ${styles.sparkleOne}`}
                          >
                            ✳
                          </span>
                          <span
                            className={`${styles.privateSparkle} ${styles.sparkleTwo}`}
                          >
                            ✦
                          </span>
                          <span className={styles.privateGraphicLabel}>
                            OWN YOUR IDENTITY
                          </span>
                        </div>
                      )}
                    </div>

                    <div className={styles.modelCardBody}>
                      <span className={styles.modelLabel}>
                        {details.label}
                      </span>

                      <h3 className={styles.modelTitle}>{model.title}</h3>

                      <p className={styles.modelText}>{model.text}</p>

                      <div className={styles.modelKeywords}>
                        {details.keywords.map((keyword) => (
                          <span key={keyword}>{keyword}</span>
                        ))}
                      </div>
                    </div>

                    <div className={styles.modelCardFooter}>
                      <span>EXPLORE THE MODEL</span>
                      <ArrowUpRight size={18} />
                    </div>
                  </article>
                );
              })}
            </div>

            <div className={styles.modelsFooter}>
              <span className={styles.modelsFooterMark}>ZL.</span>

              <p>
                The right model starts with your products, your goals and your
                customers.
              </p>

              <Link href="/contact" className={styles.modelsFooterLink}>
                Discuss your business
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* MARKETS */}
        <section className={`${styles.section} ${styles.markets}`}>
          <div className={styles.container}>
            <div className={styles.marketsBox}>
              <video
                className={styles.marketsVideo}
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/secvideo.mp4" type="video/mp4" />
              </video>

              <div className={styles.marketsOverlay} />

              <div>
                <span className={styles.eyebrow}>Global / 03</span>

                <h2 className={styles.marketsTitle}>
                  Built for international commerce.
                </h2>

                <p className={styles.marketsText}>
                  Zenvora Link supports e-commerce operations across the United
                  Kingdom, United States and global markets.
                </p>
              </div>

              <div className={styles.marketList}>
                <Link href="/markets/uk">
                  United Kingdom
                  <ArrowUpRight size={18} />
                </Link>

                <Link href="/markets/usa">
                  United States
                  <ArrowUpRight size={18} />
                </Link>

                <Link href="/markets/global">
                  Global / International
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className={`${styles.section} ${styles.process}`}>
          <div className={styles.container}>
            <div className={styles.processHeader}>
              <div className={styles.processHeading}>
                <span className={styles.eyebrow}>
                  05 / HOW IT WORKS
                </span>

                <h2 className={styles.processTitle}>
                  From idea to
                  <br />
                  <span>e-commerce operation.</span>
                </h2>
              </div>

              <p className={styles.processDescription}>
                A connected process designed to help businesses move from
                product requirements to fulfilment and growth.
              </p>
            </div>

            <div className={styles.processGrid}>
              {steps.map((step, index) => (
                <article
                  className={styles.processCard}
                  key={step.number}
                >
                  <div className={styles.processCardTop}>
                    <span className={styles.processNumber}>
                      {step.number}
                    </span>

                    <span className={styles.processStepLabel}>
                      STEP {step.number}
                    </span>
                  </div>

                  <div className={styles.processCardBody}>
                    <h3 className={styles.processCardTitle}>
                      {step.title}
                    </h3>

                    <p className={styles.processCardText}>{step.text}</p>
                  </div>

                  <div className={styles.processCardBottom}>
                    <span className={styles.processProgress}>
                      <span
                        style={{
                          width: `${((index + 1) / steps.length) * 100}%`,
                        }}
                      />
                    </span>

                    <span className={styles.processCardIndex}>
                      {String(index + 1).padStart(2, "0")}
                      <span> / </span>
                      {String(steps.length).padStart(2, "0")}
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <div className={styles.processFooter}>
              <span className={styles.processFooterLabel}>
                ONE CONNECTED OPERATION
              </span>

              <span className={styles.processFooterLine} />

              <span className={styles.processFooterText}>
                SOURCE. BRAND. STORE. FULFIL. SCALE.
              </span>
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className={`${styles.section} ${styles.why}`}>
          <div className={`${styles.container} ${styles.whyGrid}`}>
            <div className={styles.whyIntro}>
              <span className={styles.eyebrow}>
                06 / Why Zenvora Link
              </span>

              <h2 className={styles.whyTitle}>
                More than a product supplier.
              </h2>

              <p className={styles.whyDescription}>
                We are positioned as the infrastructure partner behind
                e-commerce businesses — connecting products, operations,
                fulfilment and support.
              </p>

              <Link href="/contact" className={styles.primaryButton}>
                Talk to an Expert
                <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className={styles.whyList}>
              {whyUs.map((item, index) => (
                <div className={styles.whyItem} key={item}>
                  <span className={styles.whyItemNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className={styles.whyItemTitle}>{item}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AUDIENCE */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div>
                <span className={styles.eyebrow}>07 / Who We Serve</span>

                <h2 className={styles.sectionTitle}>
                  Infrastructure for ambitious businesses.
                </h2>
              </div>
            </div>

            <div className={styles.audienceGrid}>
              {audiences.map((audience, index) => (
                <div className={styles.audienceCard} key={audience}>
                  <span className={styles.audienceIcon}>
                    <Users size={22} />
                  </span>

                  <span className={styles.audienceNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className={styles.audienceTitle}>{audience}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={`${styles.section} ${styles.faq}`}>
          <div className={`${styles.container} ${styles.faqGrid}`}>
            <div className={styles.faqIntro}>
              <span className={styles.eyebrow}>08 / FAQ</span>

              <h2 className={styles.faqTitle}>Questions, answered.</h2>

              <p className={styles.faqDescription}>
                A few of the common questions businesses ask before getting
                started.
              </p>
            </div>

            <div className={styles.faqList}>
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    className={`${styles.faqItem} ${
                      isOpen ? styles.faqOpen : ""
                    }`}
                    key={faq.question}
                  >
                    <button
                      type="button"
                      className={styles.faqButton}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                    >
                      <span>{faq.question}</span>
                      <ChevronDown size={20} />
                    </button>

                    {isOpen && (
                      <div className={styles.faqAnswer}>
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className={`${styles.container} ${styles.ctaInner}`}>
            <span className={styles.eyebrow}>09 / Ready to Start?</span>

            <h2 className={styles.ctaTitle}>
              Ready to build your e-commerce business?
            </h2>

            <p className={styles.ctaText}>
              Tell us what you need and our team can help identify the right
              products, services and operational support for your business.
            </p>

            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.primaryButton}>
                Get a Free Quote
                <ArrowUpRight size={17} />
              </Link>

              <Link href="/services" className={styles.secondaryButton}>
                Explore Services
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}