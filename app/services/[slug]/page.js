
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { getServiceBySlug, services } from "../../data/services";
import styles from "./page.module.css";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found | Zenvora Link" };
  }

  return {
    title: `${service.title} | Zenvora Link`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const otherServices = services.filter(
    (item) => item.slug !== service.slug
  );

  return (
    <>
      <Header />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <Link href="/services" className={styles.backLink}>
              <ArrowLeft size={15} />
              All services
            </Link>

            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <span className={styles.eyebrow}>
                  SERVICE {service.number} / 07
                </span>

                <h1>{service.title}</h1>

                <h2>{service.tagline}</h2>

                <p>{service.intro}</p>

                <Link href="/contact" className={styles.primaryButton}>
                  Discuss your requirements
                  <ArrowRight size={17} />
                </Link>
              </div>

              <div className={styles.heroVisual}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority
                  sizes="(max-width: 800px) 100vw, 50vw"
                />

                <span className={styles.imageLabel}>
                  ZENVORA LINK <span> / </span> {service.number}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.details}>
          <div className={styles.container}>
            <div className={styles.detailsGrid}>
              <div className={styles.detailsIntro}>
                <span className={styles.eyebrow}>THE SERVICE</span>
                <h2>
                  A clearer approach
                  <br />
                  to your next step.
                </h2>
              </div>

              <div className={styles.detailsContent}>
                <p>{service.description}</p>

                <p>
                  Every business has different requirements. Our approach
                  starts with understanding your products, market and
                  operational needs before discussing suitable options.
                </p>
              </div>
            </div>

            <div className={styles.pointsPanel}>
              <div className={styles.pointsHeading}>
                <span className={styles.eyebrow}>WHAT TO CONSIDER</span>
                <h2>Key areas of focus</h2>
              </div>

              <div className={styles.pointsList}>
                {service.points.map((point, index) => (
                  <div className={styles.point} key={point}>
                    <span className={styles.pointNumber}>
                      0{index + 1}
                    </span>

                    <p>{point}</p>

                    <Check size={17} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.outcome}>
          <div className={styles.container}>
            <div className={styles.outcomeBox}>
              <div>
                <span className={styles.eyebrow}>YOUR NEXT STEP</span>
                <h2>{service.outcome}</h2>
                <p>
                  Tell us about your business and the requirements you
                  want to explore.
                </p>
              </div>

              <Link href="/contact" className={styles.outcomeButton}>
                Start a conversation
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.moreServices}>
          <div className={styles.container}>
            <div className={styles.moreHeading}>
              <div>
                <span className={styles.eyebrow}>EXPLORE MORE</span>
                <h2>Connected capabilities.</h2>
              </div>

              <Link href="/services" className={styles.allServices}>
                All services <ArrowRight size={15} />
              </Link>
            </div>

            <div className={styles.moreGrid}>
              {otherServices.slice(0, 3).map((item) => (
                <Link
                  href={`/services/${item.slug}`}
                  key={item.slug}
                  className={styles.moreCard}
                >
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.tagline}</p>
                  <ArrowUpRight size={18} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}