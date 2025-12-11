// assets/projects.js
window.PORTFOLIO_PROJECTS = [
  {
    slug: "blinkit",
    title: "Blinkit Retail Supermarket",
    summary:
      "End-to-end sales analytics with Medallion layers; Silver measures, Gold QA; interactive Power BI (no sign-in).",
    thumbnail:
      "https://raw.githubusercontent.com/psa162/RetailSuperMarket/main/docs/blinkit_powerbi_view.png",

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
      "Gold: created aggregated view for KPIs; measures live on Silver to avoid average-of-averages.",
      "SQL QA tests to reconcile Silver↔Gold segment KPIs and totals; matching DAX QA measures.",
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

    powerBI: {
      title: "Interactive Report",
      iframe:
        "https://app.powerbi.com/view?r=eyJrIjoiYzE3NDUzMGUtOGFhMy00OGJhLWI0MGItNmYxMjNjZTQzYzJkIiwidCI6ImI4MjE5ODM1LWI0ZGQtNGQ3Yy1hYTE3LWE1NmY4OTg1ODdhMiJ9"
    },

    images: [],

    links: {
      code: "https://github.com/psa162/RetailSuperMarket",
      architecture:
        "https://github.com/psa162/RetailSuperMarket/blob/main/docs/blinkit_architecture.png",
      dictionary:
        "https://github.com/psa162/RetailSuperMarket/blob/main/docs/Blinkit_Data_Dictionary_and_QA.docx",
      tests:
        "https://github.com/psa162/RetailSuperMarket/blob/main/test/blinkit_sql_qa_tests.sql"
    }
  }
// assets/projects.js
// Portfolio projects config (right now: SQL Data Warehouse only)
window.PORTFOLIO_PROJECTS = [
  {
    slug: "baraa",
    title: "BARAA — SQL Data Warehouse & Power BI",
    summary:
      "Enterprise-style SQL warehouse (Bronze → Silver → Gold) with T-SQL ETL, Gold views, QA tests, and a Power BI report for core sales & product KPIs.",
    // Use your dashboard as the card image
    thumbnail:
      "https://raw.githubusercontent.com/psa162/sql-data-warehouse-project/main/docs/PowerBI_Dashboard.png",

    // Business Requirement & Problem Statement (sales/products only)
    problem: [
      "Leadership needs a consolidated, reliable view of sales and product performance from ERP CSVs, CRM extracts, and spreadsheets.",
      "Key questions: Total Sales, Order Count, Quantity, AOV, YoY/MoM trends, product ranking/underperformers, price vs volume patterns.",
      "Issues: inconsistent product names/codes, duplicate or mismatched customer IDs, missing dates/quantities, non-standard formats, manual Excel, no single source of truth."
    ],

    // Data sources
    dataSource: [
      "ERP CSV files (Products, Orders, Order Items/Lines).",
      "CRM extracts (Customers, Segments/Regions when available).",
      "SQL Server used for storage and pipeline."
    ],

    // What was done (by layer)
    work: [
      "Modeled Medallion pipelines (Bronze → Silver → Gold) with T-SQL ETL (TRY/CATCH logging + timings).",
      "Bronze: landed raw files as-is; preserved structure/encoding.",
      "Silver: cleaned + standardized product names/codes; normalized dates; trimmed/cased text; fixed numeric types; validated price×qty=extended; handled missing/zero quantities; generated surrogate keys; prepared business measures (Sales, Orders, Quantity, AOV).",
      "Gold: star schema (FactSales, DimProduct, DimCustomer, DimDate) and summary/QA views; clean joins between ERP and CRM; validated totals vs Silver measures.",
      "Power BI: measures for Total Sales, Orders, Quantity, AOV, YoY% and MoM; visuals for trends, product ranking/segments, contribution, price vs volume.",
      "QA: T-SQL tests (totals, dimension counts, FK integrity, duplicates, nulls/outliers, Silver↔Gold reconciliation) + DAX cross-checks in Power BI.",
      "Documentation: data dictionary, medallion/flow diagrams."
    ],

    // Insights (generic, aligned to sales/products)
    insights: [
      "Top products contribute a large share of revenue; long-tail SKUs drive orders with lower revenue per item.",
      "AOV shows seasonality; promo months align with higher AOV and volume.",
      "Price vs volume highlights items with strong elasticity signals.",
      "Order-to-ship lead time is stable; exceptions cluster in specific periods."
    ],

    // Recommendations
    recommendations: [
      "Protect availability/promo cadence for high-margin top sellers.",
      "Rationalize consistently low-performing SKUs or bundle/price-pack.",
      "Pilot targeted price tests where elasticity is indicated; monitor AOV/conv.",
      "Investigate exception windows in fulfillment to smooth spikes."
    ],

    // Value delivered
    results: [
      "Single source of truth for sales & product KPIs; much less reconciliation.",
      "Repeatable, auditable ETL with QA gates; fewer dashboard breaks.",
      "Public Power BI link speeds stakeholder reviews (no sign-in).",
      "Clear docs/models improve maintainability and onboarding."
    ],

    tools: ["SQL Server", "T-SQL", "SSMS", "Power BI", "DAX", "GitHub Pages"],

    // Live Power BI (publish-to-web)
    powerBI: {
      title: "Interactive Report",
      iframe:
        "https://app.powerbi.com/view?r=eyJrIjoiZWI5NGYxNzYtYTMwNi00YzZkLThlODMtN2I4MGFjNjk0ZjY1IiwidCI6ImI4MjE5ODM1LWI0ZGQtNGQ3Yy1hYTE3LWE1NmY4OTg1ODdhMiJ9"
    },

    // Extra visuals (gallery)
    images: [
      {
        src: "https://raw.githubusercontent.com/psa162/sql-data-warehouse-project/main/docs/PowerBI_Dashboard.png",
        caption: "Sales Overview — Sales, Orders, Quantity, Customers, AOV, trends"
      },
      {
        src: "https://raw.githubusercontent.com/psa162/sql-data-warehouse-project/main/docs/PowerBI_Dashboard2.png",
        caption: "Product Overview — segments, top products, table details"
      }
    ],

    // Links (point to your repo docs)
    links: {
      code: "https://github.com/psa162/sql-data-warehouse-project",
      architecture:
        "https://raw.githubusercontent.com/psa162/sql-data-warehouse-project/main/docs/Medallion_Architecture.png",
      dictionary:
        "https://github.com/psa162/sql-data-warehouse-project/blob/main/docs/Professional_Data_Dictionary_Gold_Layer.docx",
      tests:
        "https://github.com/psa162/sql-data-warehouse-project/tree/main/tests"
    }
  }
];

];
