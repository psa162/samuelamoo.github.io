<script>
window.PORTFOLIO_PROJECTS = [
  {
    slug: "blinkit",
    title: "Blinkit Retail Supermarket",
    summary: "End-to-end sales analytics with Medallion layers; Silver measures, Gold QA; interactive Power BI (no sign-in).",
    // thumbnail shown on cards
    thumbnail: "https://raw.githubusercontent.com/psa162/RetailSuperMarket/main/docs/blinkit_powerbi_view.png",

    // Sections shown on the project page
    problem: [
      "Leadership needs Total Sales, Avg Sales, #Items, Avg Rating by outlet type, size, and location.",
      "Raw data has inconsistent labels, zero visibility values, and missing weights—must be standardized.",
      "Stakeholders want a public link (no sign-in) for quick review."
    ],
    dataSource: [
      "Blinkit grocery dataset (CSV/Excel).",
      "SQL Server warehouse using Medallion pattern (Bronze→Silver→Gold)."
    ],
    work: [
      "Silver: trim text, normalize fat content (LF/reg), set zero visibility → NULL, impute item weight by item type avg.",
      "Gold: created aggregated **view** for KPIs; measures live on Silver to avoid average-of-averages.",
      "SQL QA tests to reconcile Silver↔Gold segment KPIs and totals; matching DAX QA measures in Power BI.",
      "Published report to web for frictionless access."
    ],
    insights: [
      "Medium outlets lead total sales vs small outlets with similar mix.",
      "Fruits/Vegetables and Snack Foods drive the top line; ratings steady across tiers.",
      "Tier 3 locations slightly outperform on totals in this sample."
    ],
    recommendations: [
      "Prioritize promos/stock for top item types in Medium outlets.",
      "Review low-velocity item types for assortment changes.",
      "Use tier-based allocation where uplift is measurable."
    ],
    results: [
      "Single source of truth for sales KPIs; fewer ad-hoc Excel asks.",
      "Standardized labels and visibility rules improved reporting quality.",
      "Public interactive report accelerates stakeholder review."
    ],
    tools: ["SQL Server", "T-SQL", "Power BI", "DAX", "GitHub Pages"],

    // Live Power BI
    powerBI: {
      title: "Interactive Report",
      iframe: "https://app.powerbi.com/view?r=eyJrIjoiYzE3NDUzMGUtOGFhMy00OGJhLWI0MGItNmYxMjNjZTQzYzJkIiwidCI6ImI4MjE5ODM1LWI0ZGQtNGQ3Yy1hYTE3LWE1NmY4OTg1ODdhMiJ9"
    },

    // Optional extra images
    images: [
      // { src: "https://.../visual.png", caption: "Breakdown by Item Type" }
    ],

    // Useful links
    links: {
      code: "https://github.com/psa162/RetailSuperMarket",
      architecture: "https://github.com/psa162/RetailSuperMarket/blob/main/docs/blinkit_architecture.png",
      dictionary: "https://github.com/psa162/RetailSuperMarket/blob/main/docs/Blinkit_Data_Dictionary_and_QA.docx",
      tests: "https://github.com/psa162/RetailSuperMarket/blob/main/test/blinkit_sql_qa_tests.sql"
    }
  }

  // Add more projects by copying this object and changing fields.
];
</script>
