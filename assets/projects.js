<script>
// Add projects here. Each renders a full case study on project.html?p=<slug>
window.PORTFOLIO_PROJECTS = [
  {
    slug: "blinkit",
    title: "Blinkit Retail Supermarket",
    summary: "End-to-end sales analytics: Silver measures, Gold QA; interactive Power BI with no sign-in.",
    thumbnail: "https://raw.githubusercontent.com/psa162/RetailSuperMarket/main/docs/blinkit_powerbi_view.png",

    problem: [
      "Leadership needs to know Total Sales, Avg Sales, #Items, and Avg Rating by outlet type, size, and location.",
      "Data arrives messy (duplicate fat labels, zero visibility, missing weights) and must be standardized.",
    ],
    dataSource: [
      "Blinkit grocery dataset (file import csv file).",
      "SQL Server Bronze→Silver→Gold warehouse (your RetailSuperMarket repo)."
    ],
    work: [
      "Modeled Medallion layers. Silver cleans: trim, normalize fat content (LF/reg), zero-visibility→NULL, item weight impute by item type.",
      "Gold exposed as a **view** that aggregates KPIs; avoided avg-of-avg by keeping report measures on Silver.",
      "Wrote SQL QA tests to reconcile Silver↔Gold segment KPIs and totals; added Power BI QA measures.",
      "Built Power BI dashboard with metric tabs and slicers; published to web for frictionless access."
    ],
    insights: [
      "Medium-size outlets lead on total sales relative to small outlets at similar mix.",
      "Fruits/Vegetables and Snack Foods drive top-line; ratings stable across tiers.",
      "Location Tier 3 slightly outperforms on totals in this sample period."
    ],
    recommendations: [
      "Prioritize stock and promos in Medium outlets for top item types.",
      "Introduce targeted assortment reviews for low-velocity item types with flat ratings.",
      "Use Tier-based allocation to balance inventory where uplift is measurable."
    ],
    results: [
      "Single source of truth for sales KPIs; ad-hoc Excel reduced.",
      "Data quality issues surfaced early; standardized labels improved reporting.",
      "Stakeholders review live report via public link without access barriers."
    ],
    tools: ["SQL Server", "Power BI", "DAX", "T-SQL", "GitHub Pages"],

    powerBI: {
      title: "Interactive Report",
      iframe: "https://app.powerbi.com/view?r=eyJrIjoiYzE3NDUzMGUtOGFhMy00OGJhLWI0MGItNmYxMjNjZTQzYzJkIiwidCI6ImI4MjE5ODM1LWI0ZGQtNGQ3Yy1hYTE3LWE1NmY4OTg1ODdhMiJ9"
    },
    images: [
      // { src: "path/to/extra.png", caption: "Optional visual" }
    ],
    links: {
      code: "https://github.com/psa162/RetailSuperMarket",
      architecture: "https://github.com/psa162/RetailSuperMarket/blob/main/docs/blinkit_architecture.png",
      dictionary: "https://github.com/psa162/RetailSuperMarket/blob/main/docs/Blinkit_Data_Dictionary_and_QA.docx",
      tests: "https://github.com/psa162/RetailSuperMarket/blob/main/test/blinkit_sql_qa_tests.sql"
    }
  }
];
</script>
