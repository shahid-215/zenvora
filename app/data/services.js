
export const services = [
  {
    slug: "product-sourcing",
    number: "01",
    title: "Product Sourcing",
    tagline: "Find the right products.",
    description:
      "Explore products and sourcing options that align with your business, customers and target market.",
    intro:
      "The right product is a foundation for a strong e-commerce business. We help you explore product opportunities and clarify your sourcing requirements.",
    image: "/1.jpg",
    points: [
      "Product opportunity research",
      "Supplier and sourcing exploration",
      "Product specifications and requirements",
      "Market-focused sourcing considerations",
    ],
    outcome:
      "Build a clearer, more informed approach to product sourcing.",
  },
  {
    slug: "dropshipping",
    number: "02",
    title: "Dropshipping",
    tagline: "A flexible commerce model.",
    description:
      "Explore a dropshipping model that fits your products, supply requirements and online business.",
    intro:
      "Dropshipping can help businesses sell online without managing all inventory themselves. The right setup depends on the products, suppliers and operational model.",
    image: "/2.jpg",
    points: [
      "Product and supply model planning",
      "Supplier coordination requirements",
      "Order workflow considerations",
      "Business model alignment",
    ],
    outcome:
      "Plan a dropshipping model around your business requirements.",
  },
  {
    slug: "white-label",
    number: "03",
    title: "White Label",
    tagline: "Bring products to your brand.",
    description:
      "Explore existing product options that can be offered under your own brand identity.",
    intro:
      "White label gives businesses an opportunity to develop a branded product range using existing products, subject to supplier options and branding requirements.",
    image: "/3.jpg",
    points: [
      "Existing product exploration",
      "Branding and presentation requirements",
      "Product range planning",
      "Supplier and commercial considerations",
    ],
    outcome:
      "Explore a branded product range with a clearer plan.",
  },
  {
    slug: "private-label",
    number: "04",
    title: "Private Label",
    tagline: "Build your own product identity.",
    description:
      "Explore product development and branding options shaped around your business vision.",
    intro:
      "Private label can help businesses develop a more distinctive product offering. Requirements may include product specifications, packaging, branding and supplier discussions.",
    image: "/4.jpg",
    points: [
      "Product concept and requirements",
      "Specifications and packaging planning",
      "Brand identity considerations",
      "Supplier and production discussions",
    ],
    outcome:
      "Create a clearer direction for your own product line.",
  },
  {
    slug: "product-supply",
    number: "05",
    title: "Product Supply",
    tagline: "Align products with your needs.",
    description:
      "Plan product supply requirements around your product range and commercial objectives.",
    intro:
      "A considered supply approach starts with understanding your product requirements, quantities, specifications and commercial needs.",
    image: "/5.jpg",
    points: [
      "Product requirements planning",
      "Supply needs and specifications",
      "Product range considerations",
      "Commercial requirement discussions",
    ],
    outcome:
      "Establish a clearer plan for your product supply needs.",
  },
  {
    slug: "warehousing",
    number: "06",
    title: "Warehousing",
    tagline: "Organize your inventory.",
    description:
      "Explore inventory storage and organization as part of your wider e-commerce operation.",
    intro:
      "Storage is an important part of a connected commerce operation. The right arrangement depends on product type, stock requirements and your fulfilment model.",
    image: "/6.jpg",
    points: [
      "Storage requirements assessment",
      "Inventory organization considerations",
      "Product handling requirements",
      "Warehousing model discussions",
    ],
    outcome:
      "Plan inventory storage around your operational needs.",
  },
  {
    slug: "fulfilment",
    number: "07",
    title: "Fulfilment",
    tagline: "Connect orders with operations.",
    description:
      "Plan order preparation and fulfilment requirements around your e-commerce workflow.",
    intro:
      "Fulfilment connects order handling with the movement of products. The right process depends on order volumes, inventory arrangements and product requirements.",
    image: "/7.jpg",
    points: [
      "Order workflow planning",
      "Packing and handling requirements",
      "Inventory and fulfilment coordination",
      "Operational model discussions",
    ],
    outcome:
      "Build a clearer picture of your fulfilment requirements.",
  },
];

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug);
}