"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  Search,
  MessageCircle,
  Package,
  Globe2,
  Boxes,
  ShoppingBag,
  X,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

const faqData = [
  {
    category: "General",
    question: "What e-commerce services does Zenvora Link provide?",
    answer:
      "Zenvora Link brings together product sourcing, product supply, dropshipping, wholesale, white label, private label, warehousing, fulfilment and e-commerce operational support.",
  },
  {
    category: "General",
    question: "Who can work with Zenvora Link?",
    answer:
      "Our solutions are intended for e-commerce startups, online sellers, marketplace businesses, retailers, resellers, established brands and entrepreneurs developing new products.",
  },
  {
    category: "General",
    question: "Which markets do you support?",
    answer:
      "Our website focuses on the United Kingdom, United States and international business requirements. Specific service availability should be confirmed for your requirements.",
  },
  {
    category: "Sourcing & Supply",
    question: "Can you help me find products for my business?",
    answer:
      "Product sourcing support can include product research, supplier coordination, bulk sourcing and discussion of custom product requirements. Share your product category and specifications so the requirements can be reviewed.",
  },
  {
    category: "Sourcing & Supply",
    question: "Do you provide wholesale and bulk product supply?",
    answer:
      "Product supply solutions are designed for retailers, resellers, e-commerce sellers and B2B customers. Product availability, quantities and commercial terms need to be discussed for each enquiry.",
  },
  {
    category: "Sourcing & Supply",
    question: "Can I request a specific product?",
    answer:
      "Yes, you can describe the product you need, including its category, specifications, estimated quantity and target price, when submitting an enquiry.",
  },
  {
    category: "Branding",
    question: "What is the difference between white label and private label?",
    answer:
      "White label generally involves selling an existing suitable product under your brand identity. Private label focuses on developing a product line for your brand, which may include product research, customisation, branding and packaging.",
  },
  {
    category: "Branding",
    question: "Can you help with branding and packaging?",
    answer:
      "Branding and packaging coordination may form part of suitable white-label and private-label projects. The available options depend on the product and the agreed requirements.",
  },
  {
    category: "Dropshipping",
    question: "How does your dropshipping solution work?",
    answer:
      "Dropshipping is a selling model where the seller does not hold the products in their own inventory. Depending on the agreed service, support may include product sourcing, catalogue support, order processing, pick and pack, and fulfilment coordination.",
  },
  {
    category: "Dropshipping",
    question: "Do I need to hold my own inventory for dropshipping?",
    answer:
      "The dropshipping model is intended for sellers who want to sell without maintaining their own stock. The specific inventory and fulfilment arrangement should be confirmed before starting.",
  },
  {
    category: "Warehousing & Fulfilment",
    question: "What does e-commerce fulfilment include?",
    answer:
      "Fulfilment can involve processing orders, picking products, packing parcels, coordinating dispatch, tracking and returns support, depending on the agreed service.",
  },
  {
    category: "Warehousing & Fulfilment",
    question: "Do you offer UK and USA warehousing?",
    answer:
      "UK and USA warehousing options are part of the planned service offering where available. Please contact Zenvora Link to confirm current facilities and availability for your needs.",
  },
  {
    category: "Warehousing & Fulfilment",
    question: "Can you confirm delivery times and warehouse addresses?",
    answer:
      "Specific warehouse locations, delivery estimates and operational coverage should be confirmed directly before being relied upon. They can vary by service, location and shipment requirements.",
  },
  {
    category: "Getting Started",
    question: "How do I request a quote?",
    answer:
      "Visit the Contact page and share your business details, required services, product information, estimated quantity and target market. Providing clear requirements helps the team review your enquiry.",
  },
  {
    category: "Getting Started",
    question: "What information should I include in my enquiry?",
    answer:
      "Include your business model, product category, estimated quantities, target market and any sourcing, branding, storage or fulfilment requirements. Add a website or marketplace link if you have one.",
  },
  {
    category: "Getting Started",
    question: "Can I discuss a solution tailored to my business?",
    answer:
      "Yes. Use the enquiry form to describe your business goals and operational requirements so the appropriate services can be discussed.",
  },
];

const categories = [
  { name: "All questions", icon: MessageCircle },
  { name: "General", icon: Globe2 },
  { name: "Sourcing & Supply", icon: Package },
  { name: "Branding", icon: Boxes },
  { name: "Dropshipping", icon: ShoppingBag },
  { name: "Warehousing & Fulfilment", icon: Package },
  { name: "Getting Started", icon: MessageCircle },
];

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState("All questions");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState(0);

  const filteredFAQs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return faqData.filter((faq) => {
      const matchesCategory =
        activeCategory === "All questions" ||
        faq.category === activeCategory;

      const matchesSearch =
        !query ||
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query) ||
        faq.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  function changeCategory(category) {
    setActiveCategory(category);
    setOpenIndex(0);
  }

  function updateSearch(value) {
    setSearchQuery(value);
    setOpenIndex(0);
  }

  return (
    <>
      <Header />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.eyebrow}>
              <span /> HELP CENTRE
            </div>

            <h1>
              Questions, <span>answered.</span>
            </h1>

            <p>
              Find clear answers about our e-commerce services, product
              sourcing, branding, dropshipping and fulfilment solutions.
            </p>

            <div className={styles.searchBox}>
              <Search size={19} />
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => updateSearch(event.target.value)}
                placeholder="Search your question..."
                aria-label="Search frequently asked questions"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => updateSearch("")}
                  aria-label="Clear search"
                  className={styles.clearSearch}
                >
                  <X size={17} />
                </button>
              )}
            </div>

            <div className={styles.heroFoot}>
              <span>{faqData.length} helpful answers</span>
              <span className={styles.footDivider} />
              <span>Explore by topic or search</span>
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <aside className={styles.sidebar}>
            <span className={styles.sidebarTitle}>BROWSE BY TOPIC</span>

            <nav className={styles.categoryList} aria-label="FAQ categories">
              {categories.map((category) => {
                const Icon = category.icon;
                const active = activeCategory === category.name;

                return (
                  <button
                    key={category.name}
                    type="button"
                    onClick={() => changeCategory(category.name)}
                    className={`${styles.categoryButton} ${
                      active ? styles.categoryActive : ""
                    }`}
                    aria-pressed={active}
                  >
                    <Icon size={17} />
                    <span>{category.name}</span>
                    <ArrowRight size={14} className={styles.categoryArrow} />
                  </button>
                );
              })}
            </nav>

            <div className={styles.helpCard}>
              <span className={styles.helpIcon}>
                <MessageCircle size={20} />
              </span>
              <h3>Still need help?</h3>
              <p>
                Tell us about your business and the support you are looking for.
              </p>
              <Link href="/contact">
                Contact our team <ArrowRight size={15} />
              </Link>
            </div>
          </aside>

          <div className={styles.questions}>
            <div className={styles.questionsTop}>
              <div>
                <span className={styles.sectionLabel}>KNOW MORE</span>
                <h2>
                  {activeCategory === "All questions"
                    ? "Frequently asked questions"
                    : activeCategory}
                </h2>
              </div>

              <span className={styles.resultCount}>
                {filteredFAQs.length} {filteredFAQs.length === 1 ? "answer" : "answers"}
              </span>
            </div>

            {filteredFAQs.length > 0 ? (
              <div className={styles.accordion}>
                {filteredFAQs.map((faq, index) => {
                  const isOpen = openIndex === index;

                  return (
                    <article
                      className={`${styles.faqItem} ${
                        isOpen ? styles.faqOpen : ""
                      }`}
                      key={faq.question}
                    >
                      <button
                        type="button"
                        className={styles.questionButton}
                        onClick={() => setOpenIndex(isOpen ? -1 : index)}
                        aria-expanded={isOpen}
                      >
                        <span className={styles.questionNumber}>
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className={styles.questionText}>
                          {faq.question}
                        </span>
                        <span className={styles.chevron}>
                          <ChevronDown size={18} />
                        </span>
                      </button>

                      <div
                        className={`${styles.answerWrap} ${
                          isOpen ? styles.answerVisible : ""
                        }`}
                        hidden={!isOpen}
                      >
                        <p>{faq.answer}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className={styles.noResults}>
                <Search size={27} />
                <h3>No matching questions found</h3>
                <p>
                  Try a different search term or browse all questions.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    updateSearch("");
                    changeCategory("All questions");
                  }}
                >
                  Show all questions
                </button>
              </div>
            )}
          </div>
        </section>

        <section className={styles.bottomCta}>
          <div className={styles.ctaMark}>
            <MessageCircle size={24} />
          </div>
          <div className={styles.ctaText}>
            <span className={styles.sectionLabel}>LET'S TALK</span>
            <h2>Have a specific requirement?</h2>
            <p>
              Share your goals and requirements with our team to discuss the
              right e-commerce solution for your business.
            </p>
          </div>
          <Link href="/contact" className={styles.ctaButton}>
            Get in touch <ArrowRight size={16} />
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}