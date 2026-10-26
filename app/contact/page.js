"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Globe2,
  Mail,
  MessageCircle,
  Package,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./page.module.css";

const services = [
  "Product Sourcing",
  "Dropshipping",
  "Wholesale",
  "White Label",
  "Private Label",
  "Product Supply",
  "Warehousing",
  "Fulfilment",
  "Other",
];

const countries = [
  "United Kingdom",
  "United States",
  "Pakistan",
  "United Arab Emirates",
  "Canada",
  "Australia",
  "Germany",
  "Other",
];

const businessTypes = [
  "Startup / New Business",
  "E-commerce Seller",
  "Established Brand",
  "Retailer",
  "Wholesaler / Reseller",
  "Marketplace Seller",
  "Other",
];

const marketplaces = [
  "Shopify",
  "Amazon",
  "eBay",
  "TikTok Shop",
  "WooCommerce",
  "Own Website",
  "Multiple Platforms",
  "Not Applicable",
  "Other",
];

const markets = [
  "United Kingdom",
  "United States",
  "UK & USA",
  "Global / International",
  "Other",
];

const initialForm = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  country: "",
  businessType: "",
  website: "",
  marketplace: "",
  services: [],
  productCategory: "",
  productName: "",
  estimatedQuantity: "",
  monthlyOrders: "",
  targetPrice: "",
  targetMarket: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function updateField(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function toggleService(service) {
    setForm((current) => ({
      ...current,
      services: current.services.includes(service)
        ? current.services.filter((item) => item !== service)
        : [...current.services, service],
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (form.services.length === 0) {
      document.getElementById("services-required")?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return;
    }

    /*
      Frontend form is ready.
      Connect this handler to your API or CMS endpoint
      before treating enquiries as delivered.
    */

    setSubmitted(true);
  }

  return (
    <>
      <Header />

      <main className={styles.contactPage}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <div className={styles.breadcrumb}>
                <Link href="/">Home</Link>
                <span>/</span>
                <span>Contact</span>
              </div>

              <span className={styles.eyebrow}>
                <span className={styles.eyebrowDot} />
                LET&apos;S BUILD SOMETHING
              </span>

              <h1 className={styles.heroTitle}>
                Let&apos;s talk about
                <br />
                <span>your next move.</span>
              </h1>

              <p className={styles.heroDescription}>
                Tell us about your products, business and goals. We&apos;ll
                help you explore the right sourcing, branding, supply and
                fulfilment solutions for your requirements.
              </p>

              <div className={styles.heroActions}>
                <a href="#quote-form" className={styles.primaryButton}>
                  Start your enquiry
                  <ArrowRight size={17} />
                </a>

                <a href="#contact-options" className={styles.textButton}>
                  Other ways to connect
                  <ArrowRight size={16} />
                </a>
              </div>

              <div className={styles.heroFootnote}>
                <ShieldCheck size={17} />
                <span>
                  Your requirements help us understand your project.
                </span>
              </div>
            </div>

            <div className={styles.heroAside}>
              <div className={styles.asideTop}>
                <span className={styles.asideIndex}>ZL. / ENQUIRIES</span>
                <span className={styles.asideMark}>
                  <ArrowUpRight size={20} />
                </span>
              </div>

              <div className={styles.asideMain}>
                <span className={styles.asideLabel}>
                  ONE CONNECTED OPERATION
                </span>

                <div className={styles.asideWords}>
                  <span>Source.</span>
                  <span>Brand.</span>
                  <span>Store.</span>
                  <span>Fulfil.</span>
                  <span className={styles.asideGold}>Scale.</span>
                </div>
              </div>

              <div className={styles.asideBottom}>
                <Globe2 size={18} />
                <span>UK · USA · INTERNATIONAL</span>
              </div>
            </div>
          </div>

          <div className={styles.heroBottomLine}>
            <span>01 — CONTACT</span>
            <span>PRODUCTS / OPERATIONS / GROWTH</span>
          </div>
        </section>

        {/* CONTACT OPTIONS */}
        <section
          className={styles.contactOptions}
          id="contact-options"
        >
          <div className={styles.sectionIntro}>
            <span className={styles.sectionEyebrow}>
              A GOOD PLACE TO START
            </span>

            <h2 className={styles.sectionTitle}>
              Tell us what you&apos;re working on.
            </h2>

            <p className={styles.sectionDescription}>
              Whether you&apos;re launching a new business or improving an
              existing operation, start with the details that matter to you.
            </p>
          </div>

          <div className={styles.optionsGrid}>
            <a
              href="#quote-form"
              className={styles.optionCard}
            >
              <span className={styles.optionIcon}>
                <Package size={21} />
              </span>

              <span className={styles.optionNumber}>01 / PRODUCTS</span>

              <h3>Products & sourcing</h3>

              <p>
                Product research, supplier sourcing, wholesale and supply
                requirements.
              </p>

              <span className={styles.optionLink}>
                Discuss products <ArrowUpRight size={16} />
              </span>
            </a>

            <a
              href="#quote-form"
              className={styles.optionCard}
            >
              <span className={styles.optionIcon}>
                <Sparkles size={21} />
              </span>

              <span className={styles.optionNumber}>02 / BRANDING</span>

              <h3>Build your brand</h3>

              <p>
                White-label and private-label enquiries for your own product
                identity.
              </p>

              <span className={styles.optionLink}>
                Discuss branding <ArrowUpRight size={16} />
              </span>
            </a>

            <a
              href="#quote-form"
              className={styles.optionCard}
            >
              <span className={styles.optionIcon}>
                <Globe2 size={21} />
              </span>

              <span className={styles.optionNumber}>03 / OPERATIONS</span>

              <h3>Storage & fulfilment</h3>

              <p>
                Dropshipping, order processing, warehousing and fulfilment
                requirements.
              </p>

              <span className={styles.optionLink}>
                Discuss operations <ArrowUpRight size={16} />
              </span>
            </a>
          </div>
        </section>

        {/* QUOTE FORM */}
        <section className={styles.quoteSection} id="quote-form">
          <div className={styles.quoteLayout}>
            <aside className={styles.quoteSidebar}>
              <span className={styles.sectionEyebrow}>
                02 / YOUR PROJECT
              </span>

              <h2 className={styles.sidebarTitle}>
                The details make the difference.
              </h2>

              <p className={styles.sidebarDescription}>
                Share as much as you can about your requirements. This helps
                define the type of support your business may need.
              </p>

              <div className={styles.sidebarDivider} />

              <div className={styles.sidebarPoint}>
                <span className={styles.sidebarPointIcon}>
                  <CheckCircle2 size={18} />
                </span>

                <div>
                  <h3>Tell us about your business</h3>
                  <p>
                    Your company, website, business model and sales channels.
                  </p>
                </div>
              </div>

              <div className={styles.sidebarPoint}>
                <span className={styles.sidebarPointIcon}>
                  <CheckCircle2 size={18} />
                </span>

                <div>
                  <h3>Choose your services</h3>
                  <p>
                    Select the areas where you need sourcing or operational
                    support.
                  </p>
                </div>
              </div>

              <div className={styles.sidebarPoint}>
                <span className={styles.sidebarPointIcon}>
                  <CheckCircle2 size={18} />
                </span>

                <div>
                  <h3>Explain your requirements</h3>
                  <p>
                    Include quantities, target markets and any important
                    project details.
                  </p>
                </div>
              </div>

              <div className={styles.sidebarNote}>
                <span className={styles.sidebarNoteMark}>ZL.</span>

                <p>
                  One partner for your entire e-commerce operation.
                </p>
              </div>
            </aside>

            <div className={styles.formPanel}>
              <div className={styles.formHeader}>
                <div>
                  <span className={styles.formEyebrow}>
                    GET A QUOTE
                  </span>

                  <h2>Tell us about your project.</h2>

                  <p>
                    Complete the relevant details below. Fields marked with
                    * are required.
                  </p>
                </div>

                <span className={styles.formStep}>01 — 03</span>
              </div>

              {submitted ? (
                <div className={styles.successPanel}>
                  <span className={styles.successIcon}>
                    <CheckCircle2 size={30} />
                  </span>

                  <h3>Your details are ready.</h3>

                  <p>
                    The form interface is working, but enquiry delivery has
                    not been connected yet. Connect a backend endpoint before
                    accepting live customer enquiries.
                  </p>

                  <button
                    type="button"
                    className={styles.secondaryButton}
                    onClick={() => setSubmitted(false)}
                  >
                    Review your details
                  </button>
                </div>
              ) : (
                <form
                  className={styles.quoteForm}
                  onSubmit={handleSubmit}
                >
                  {/* SECTION 01 */}
                  <div className={styles.formSectionHeading}>
                    <span>01</span>

                    <div>
                      <h3>Your details</h3>
                      <p>How can we reach you?</p>
                    </div>
                  </div>

                  <div className={styles.fieldsGrid}>
                    <div className={styles.field}>
                      <label htmlFor="fullName">
                        Full name <span>*</span>
                      </label>

                      <input
                        id="fullName"
                        name="fullName"
                        value={form.fullName}
                        onChange={updateField}
                        placeholder="Your full name"
                        autoComplete="name"
                        required
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="companyName">
                        Company name
                      </label>

                      <input
                        id="companyName"
                        name="companyName"
                        value={form.companyName}
                        onChange={updateField}
                        placeholder="Your company or brand"
                        autoComplete="organization"
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="email">
                        Business email <span>*</span>
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={updateField}
                        placeholder="you@company.com"
                        autoComplete="email"
                        required
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="phone">
                        Phone / WhatsApp
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={updateField}
                        placeholder="+44 ..."
                        autoComplete="tel"
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="country">
                        Country <span>*</span>
                      </label>

                      <span className={styles.selectWrap}>
                        <select
                          id="country"
                          name="country"
                          value={form.country}
                          onChange={updateField}
                          required
                        >
                          <option value="">Select country</option>

                          {countries.map((country) => (
                            <option key={country} value={country}>
                              {country}
                            </option>
                          ))}
                        </select>

                        <ChevronDown size={16} />
                      </span>
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="businessType">
                        Business type <span>*</span>
                      </label>

                      <span className={styles.selectWrap}>
                        <select
                          id="businessType"
                          name="businessType"
                          value={form.businessType}
                          onChange={updateField}
                          required
                        >
                          <option value="">Select business type</option>

                          {businessTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>

                        <ChevronDown size={16} />
                      </span>
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="website">
                        Website URL
                      </label>

                      <input
                        id="website"
                        name="website"
                        type="url"
                        value={form.website}
                        onChange={updateField}
                        placeholder="https://yourwebsite.com"
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="marketplace">
                        Marketplace
                      </label>

                      <span className={styles.selectWrap}>
                        <select
                          id="marketplace"
                          name="marketplace"
                          value={form.marketplace}
                          onChange={updateField}
                        >
                          <option value="">Select platform</option>

                          {marketplaces.map((platform) => (
                            <option key={platform} value={platform}>
                              {platform}
                            </option>
                          ))}
                        </select>

                        <ChevronDown size={16} />
                      </span>
                    </div>
                  </div>

                  {/* SECTION 02 */}
                  <div className={styles.formSectionHeading}>
                    <span>02</span>

                    <div>
                      <h3>Services & products</h3>
                      <p>What do you need help with?</p>
                    </div>
                  </div>

                  <div
                    className={styles.servicesField}
                    id="services-required"
                  >
                    <div className={styles.labelRow}>
                      <label>
                        Services required <span>*</span>
                      </label>

                      <span>Select all that apply</span>
                    </div>

                    <div className={styles.serviceChoices}>
                      {services.map((service) => {
                        const selected = form.services.includes(service);

                        return (
                          <button
                            key={service}
                            type="button"
                            className={`${styles.serviceChoice} ${
                              selected ? styles.serviceChoiceActive : ""
                            }`}
                            aria-pressed={selected}
                            onClick={() => toggleService(service)}
                          >
                            {selected && (
                              <CheckCircle2 size={15} />
                            )}

                            {service}
                          </button>
                        );
                      })}
                    </div>

                    {form.services.length === 0 && (
                      <p className={styles.fieldHint}>
                        Select at least one service to continue.
                      </p>
                    )}
                  </div>

                  <div className={styles.fieldsGrid}>
                    <div className={styles.field}>
                      <label htmlFor="productCategory">
                        Product category
                      </label>

                      <input
                        id="productCategory"
                        name="productCategory"
                        value={form.productCategory}
                        onChange={updateField}
                        placeholder="e.g. Home, fashion, electronics"
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="productName">
                        Product name
                      </label>

                      <input
                        id="productName"
                        name="productName"
                        value={form.productName}
                        onChange={updateField}
                        placeholder="Product name or description"
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="estimatedQuantity">
                        Estimated quantity
                      </label>

                      <input
                        id="estimatedQuantity"
                        name="estimatedQuantity"
                        value={form.estimatedQuantity}
                        onChange={updateField}
                        placeholder="e.g. 500 units"
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="monthlyOrders">
                        Monthly order volume
                      </label>

                      <input
                        id="monthlyOrders"
                        name="monthlyOrders"
                        value={form.monthlyOrders}
                        onChange={updateField}
                        placeholder="e.g. 1,000 orders"
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="targetPrice">
                        Target price / budget
                      </label>

                      <input
                        id="targetPrice"
                        name="targetPrice"
                        value={form.targetPrice}
                        onChange={updateField}
                        placeholder="Currency and target amount"
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="targetMarket">
                        Target market <span>*</span>
                      </label>

                      <span className={styles.selectWrap}>
                        <select
                          id="targetMarket"
                          name="targetMarket"
                          value={form.targetMarket}
                          onChange={updateField}
                          required
                        >
                          <option value="">Select target market</option>

                          {markets.map((market) => (
                            <option key={market} value={market}>
                              {market}
                            </option>
                          ))}
                        </select>

                        <ChevronDown size={16} />
                      </span>
                    </div>
                  </div>

                  {/* SECTION 03 */}
                  <div className={styles.formSectionHeading}>
                    <span>03</span>

                    <div>
                      <h3>Project requirements</h3>
                      <p>Give us the bigger picture.</p>
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="message">
                      Message / requirements <span>*</span>
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={updateField}
                      placeholder="Tell us about your products, specifications, expected volumes, timelines and any other requirements..."
                      rows={6}
                      required
                    />

                    <span className={styles.textareaHint}>
                      The more relevant detail you provide, the easier it is
                      to understand your requirements.
                    </span>
                  </div>

                  <div className={styles.formFooter}>
                    <p>
                      <ShieldCheck size={17} />
                      <span>
                        Please share only information relevant to your
                        enquiry.
                      </span>
                    </p>

                    <button
                      type="submit"
                      className={styles.submitButton}
                    >
                      Submit enquiry
                      <ArrowUpRight size={18} />
                    </button>
                  </div>

                  <p className={styles.formDisclaimer}>
                    Submitting this form will validate your details in the
                    browser. A backend connection is required to deliver
                    enquiries to Zenvora Link.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className={styles.finalCta}>
          <div className={styles.finalCtaInner}>
            <div className={styles.finalCtaCopy}>
              <span className={styles.sectionEyebrow}>
                HAVE A SPECIFIC REQUIREMENT?
              </span>

              <h2>
                Every operation starts with a conversation.
              </h2>

              <p>
                Share your goals and outline what your business needs next.
              </p>
            </div>

            <a
              href="#quote-form"
              className={styles.finalCtaButton}
            >
              Tell us about your project
              <ArrowRight size={18} />
            </a>
          </div>

          <div className={styles.finalCtaBottom}>
            <span>ZENVORA LINK</span>
            <span>SOURCE. BRAND. STORE. FULFIL. SCALE.</span>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}