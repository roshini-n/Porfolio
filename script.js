const skillData = [
  {
    id: "frontend",
    label: "Front-End",
    title: "Front-End Product Interfaces",
    accent: "var(--cyan)",
    depth: 72,
    summary:
      "Front-end work is a meaningful layer in the resume, especially where AI outputs need to become usable experiences instead of raw model responses.",
    cardSummary:
      "Strong complementary capability across React, Angular, Android, and dashboards.",
    strengths: [
      { label: "AI Product UI", value: 78 },
      { label: "Interactive Dashboards", value: 74 },
      { label: "Mobile Delivery", value: 70 }
    ],
    evidence: [
      "Built a React front end for an LLM-powered research assistant and connected it to a FastAPI back end.",
      "Architected an Angular and TypeScript review platform with role-based access control for 200+ users.",
      "Delivered a Java Android application with real-time camera capture and API-backed inference.",
      "Created Tableau and Power BI dashboards for non-technical stakeholders and accreditation decisions."
    ],
    tools: [
      "React",
      "Angular",
      "TypeScript",
      "JavaScript",
      "Android",
      "Java",
      "Tableau",
      "Power BI"
    ]
  },
  {
    id: "backend",
    label: "Back-End",
    title: "Back-End, APIs, and Data Services",
    accent: "var(--teal)",
    depth: 94,
    summary:
      "This is the clearest engineering depth area in the resume: ETL, databases, APIs, retrieval services, schema design, validation, and production data workflows.",
    cardSummary:
      "Most differentiated strength: system construction from data ingestion to service delivery.",
    strengths: [
      { label: "API and Service Design", value: 95 },
      { label: "ETL and Data Pipelines", value: 94 },
      { label: "Databases and Querying", value: 92 }
    ],
    evidence: [
      "Built ETL pipelines to extract, clean, structure, and load research data for downstream NLP workloads.",
      "Developed modular FastAPI microservices to expose LLM-powered Q&A and retrieval endpoints.",
      "Optimized SQL in PostgreSQL and Microsoft Access, reducing average runtime by 35%.",
      "Designed backend schema and secure data access patterns for full-stack AI applications."
    ],
    tools: [
      "Python",
      "FastAPI",
      "Flask",
      "PostgreSQL",
      "Firebase",
      "SQL",
      "REST APIs",
      "ETL"
    ]
  },
  {
    id: "ai-ml",
    label: "ML / AI",
    title: "Machine Learning and AI Systems",
    accent: "var(--gold)",
    depth: 96,
    summary:
      "The resume goes well beyond buzzwords: RAG pipelines, vector retrieval, transformer-based NLP, semantic search, computer vision, forecasting, and applied agentic AI research.",
    cardSummary:
      "Strong depth across retrieval, NLP, deep learning, and generative AI.",
    strengths: [
      { label: "RAG and Semantic Search", value: 97 },
      { label: "NLP and Transformers", value: 95 },
      { label: "Modeling Breadth", value: 92 }
    ],
    evidence: [
      "Delivered Retrieval-Augmented Generation systems over medical and research corpora using LangChain and OpenAI APIs.",
      "Worked with BERT, Hugging Face Transformers, NER, tokenization, TF-IDF, and embedding workflows.",
      "Built classical ML and deep learning systems using PyTorch, TensorFlow, Scikit-learn, XGBoost, and Random Forest.",
      "Co-authored peer-reviewed research on agentic AI frameworks and autonomous systems."
    ],
    tools: [
      "LangChain",
      "GPT-4 APIs",
      "FAISS",
      "Pinecone",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Hugging Face"
    ]
  },
  {
    id: "cloud",
    label: "Cloud / Ops",
    title: "Cloud, MLOps, and Delivery",
    accent: "var(--coral)",
    depth: 89,
    summary:
      "Strong production thinking across cloud training and hosting, Docker, CI/CD, MLflow, versioned datasets, and reproducible workflows.",
    cardSummary:
      "Strong production mindset that turns models into repeatable systems and shipped releases.",
    strengths: [
      { label: "AWS Delivery", value: 90 },
      { label: "Azure Pipelines", value: 86 },
      { label: "CI/CD and Versioning", value: 91 }
    ],
    evidence: [
      "Used AWS services including S3, EC2, SageMaker, Lambda, API Gateway, Glue, IAM, and CloudWatch.",
      "Built Azure-hosted pipelines with Azure Data Factory, Blob Storage, Databricks, and DevOps documentation.",
      "Tracked experiments and model versions with MLflow in reproducible workflows.",
      "Automated testing and deployment with Docker and GitHub Actions."
    ],
    tools: [
      "AWS",
      "Azure",
      "Docker",
      "MLflow",
      "GitHub Actions",
      "CI/CD",
      "SageMaker",
      "Azure Data Factory"
    ]
  }
];

const projectData = [
  {
    id: "research-assistant",
    title: "LLM-Powered Research Assistant and Semantic Search System",
    category: "Full-Stack RAG Product",
    period: "Jan 2025 - May 2025",
    summary:
      "Built a full-stack AI search experience that lets users query a 50,000+ document corpus in natural language with fast, grounded retrieval.",
    problem:
      "Researchers needed a faster and more intuitive way to search large document collections without depending on brittle keyword matching.",
    solution:
      "Designed a RAG architecture with document chunking, embeddings, Pinecone indexing, prompt engineering, a FastAPI service layer, and a React interface tailored to AI-assisted search.",
    impact: "87% user-reported answer accuracy",
    previewMetric: "50K+",
    previewLabel: "Indexed documents",
    previewCopy: "Natural-language search over large research corpora.",
    bars: ["92%", "77%", "86%"],
    feed: [
      { label: "Retrieval", value: "Sub-second semantic search" },
      { label: "Prompting", value: "Few-shot and structured reasoning" }
    ],
    results: [
      "Enabled sub-second semantic retrieval across a 50,000+ document corpus.",
      "Improved answer quality through prompt engineering and retrieval-grounded responses.",
      "Reduced release cycle time by 50% through Dockerized deployment and GitHub Actions CI/CD.",
      "Combined retrieval, reasoning, and product UX into a usable research workflow."
    ],
    stack: [
      "LangChain",
      "OpenAI GPT-4",
      "Pinecone",
      "FastAPI",
      "React",
      "AWS EC2",
      "Docker",
      "GitHub Actions"
    ]
  },
  {
    id: "asthma-risk",
    title: "Asthma Risk Prediction - End-to-End ML Pipeline on AWS",
    category: "Cloud ML Pipeline",
    period: "Sep 2025 - Dec 2025",
    summary:
      "Designed and deployed a complete AWS-based ML workflow for asthma risk prediction, combining large-scale preprocessing, clustering, supervised learning, and validation.",
    problem:
      "Clinical prediction needed a reproducible pipeline that handled preprocessing, training, validation, and stakeholder-ready metrics in a cloud environment.",
    solution:
      "Created layered data storage on S3, used SageMaker for training and hosting, engineered features with Pandas and clustering, and protected data integrity with SQL validation.",
    impact: "99.65% accuracy",
    previewMetric: "60K",
    previewLabel: "Patient records",
    previewCopy: "Cloud-trained clinical risk modeling pipeline.",
    bars: ["99%", "81%", "67%"],
    feed: [
      { label: "Model", value: "Random Forest + GridSearchCV" },
      { label: "Insight", value: "Top 5 features drove 56.7% of weight" }
    ],
    results: [
      "Achieved 99.65% accuracy using a Random Forest classifier on a 60,000-record dataset.",
      "Identified the top 5 predictive features contributing 56.7% of model decision weight.",
      "Segmented patients into two distinct risk groups through K-Means clustering.",
      "Used SQL validation checks to protect data quality throughout the pipeline."
    ],
    stack: [
      "AWS S3",
      "SageMaker",
      "Pandas",
      "Scikit-learn",
      "Random Forest",
      "GridSearchCV",
      "PostgreSQL",
      "SQL"
    ]
  },
  {
    id: "freshtrack",
    title: "FreshTrack - Computer Vision and Mobile AI Application",
    category: "Vision + Mobile Product",
    period: "Jan 2025 - Apr 2025",
    summary:
      "Delivered a mobile AI experience that classifies food freshness in near real time using a fine-tuned CNN, API-based inference, and an Android app.",
    problem:
      "The experience needed practical freshness classification on constrained devices while keeping the model maintainable and scalable.",
    solution:
      "Fine-tuned MobileNetV2 on a custom image dataset, exposed inference through a FastAPI service with Docker, and built an Android app with camera capture and response handling.",
    impact: "Sub-2-second inference latency",
    previewMetric: "<2s",
    previewLabel: "Inference latency",
    previewCopy: "Mobile-first computer vision product delivery.",
    bars: ["88%", "71%", "63%"],
    feed: [
      { label: "Model", value: "MobileNetV2 fine-tuning" },
      { label: "App", value: "Camera capture + live classification" }
    ],
    results: [
      "Optimized the model for resource-constrained mobile environments.",
      "Separated model serving from the mobile client for easier scaling and maintenance.",
      "Delivered end-to-end ML lifecycle ownership from data curation to deployment.",
      "Integrated Firebase and GitHub Actions into the delivery workflow."
    ],
    stack: [
      "TensorFlow",
      "MobileNetV2",
      "FastAPI",
      "Docker",
      "Android Studio",
      "Java",
      "Firebase",
      "GitHub Actions"
    ]
  },
  {
    id: "reviewnext",
    title: "ReviewNext - AI-Powered Full-Stack Review Platform",
    category: "AI Full-Stack Platform",
    period: "May 2025 - Dec 2025",
    summary:
      "Built a role-aware review platform that uses OpenAI APIs to enrich content with summaries and sentiment insights for a growing user base.",
    problem:
      "The platform needed scalable review management, AI-generated summaries, secure role separation, and efficient querying for multiple user types.",
    solution:
      "Combined Angular and TypeScript on the front end with Firebase services on the back end, then layered in GPT-powered enrichment, third-party integrations, and automated deployment workflows.",
    impact: "70% less manual content entry",
    previewMetric: "200+",
    previewLabel: "Platform users",
    previewCopy: "Structured review operations with AI enrichment.",
    bars: ["84%", "72%", "90%"],
    feed: [
      { label: "Access", value: "RBAC for reviewer, moderator, admin" },
      { label: "Automation", value: "GPT summaries + sentiment pipelines" }
    ],
    results: [
      "Supported 200+ users with role-based access control across reviewer, moderator, and admin tiers.",
      "Reduced manual content entry by 70% through ingestion and enrichment automation.",
      "Improved release reliability with GitHub Actions-driven CI/CD.",
      "Balanced front-end usability with backend schema design and scalable data access."
    ],
    stack: [
      "Angular",
      "TypeScript",
      "Firebase",
      "OpenAI APIs",
      "RBAC",
      "GitHub Actions",
      "CI/CD",
      "Third-party APIs"
    ]
  },
  {
    id: "crop-price",
    title: "Crop Price Prediction - Time-Series ML Pipeline",
    category: "Forecasting and Analytics",
    period: "Jan 2023 - Jun 2023",
    summary:
      "Created a time-series forecasting workflow that cleaned large historical pricing datasets, engineered seasonality-aware features, and improved forecast quality.",
    problem:
      "Forecasting crop prices required handling messy time gaps, multi-source joins, seasonal anomalies, and stakeholder-friendly interpretation.",
    solution:
      "Built a Python and SQL pipeline to prepare 50,000+ records, engineered lag and rolling features, trained multiple regressors, and delivered visualization-driven insights.",
    impact: "28% accuracy improvement over baseline",
    previewMetric: "28%",
    previewLabel: "Forecast lift",
    previewCopy: "Time-series modeling with interpretable outputs.",
    bars: ["78%", "64%", "86%"],
    feed: [
      { label: "Features", value: "Lag, rolling, seasonal, trend signals" },
      { label: "Delivery", value: "Visual analysis for strategy decisions" }
    ],
    results: [
      "Processed 50,000+ historical pricing records into analysis-ready inputs.",
      "Engineered lag variables, rolling averages, trend signals, and seasonal indicators.",
      "Improved regression performance by 28% over a baseline approach.",
      "Used Matplotlib and Seaborn visuals to translate model output for business decisions."
    ],
    stack: [
      "Python",
      "Pandas",
      "SQL",
      "XGBoost",
      "Linear Regression",
      "Ridge",
      "Matplotlib",
      "Seaborn"
    ]
  }
];

const experienceData = [
  {
    role: "Machine Learning Developer",
    company: "Preservation Quest",
    location: "USA (Remote)",
    period: "Feb 2026 - Present",
    summary:
      "Building production-oriented retrieval and NLP systems for medical research corpora with emphasis on RAG, semantic search, ETL, and API delivery.",
    highlights: ["RAG Pipelines", "FastAPI", "FAISS", "PostgreSQL", "MLflow", "AWS S3"],
    details: [
      "Designed and deployed a LangChain and GPT-4 powered RAG pipeline over 3,000+ medical studies, reducing manual literature review time by 60%.",
      "Built Python ETL workflows to extract, clean, and structure data from PDFs, REST APIs, and text sources for downstream NLP usage.",
      "Implemented embedding-based retrieval with OpenAI embeddings and FAISS for more precise natural-language search.",
      "Delivered modular FastAPI microservices so teams could access Q&A and retrieval endpoints through clean REST interfaces."
    ]
  },
  {
    role: "Graduate Teaching Assistant",
    company: "Northwest Missouri State University",
    location: "USA",
    period: "Aug 2025 - Dec 2025",
    summary:
      "Supported graduate machine learning education through labs, debugging guidance, grading, and reproducible workflow coaching.",
    highlights: ["30+ Students", "Scikit-learn", "GitHub Classroom", "Reproducibility"],
    details: [
      "Facilitated graduate ML labs covering preprocessing, feature engineering, tuning, evaluation, and the supervised learning lifecycle.",
      "Reviewed and graded 20+ coding assignments and projects per cycle with feedback on leakage prevention, modularity, validation, and performance interpretation.",
      "Designed hands-on exercises around real datasets to explain bias-variance tradeoffs and model complexity.",
      "Improved course materials with updated examples using modern Scikit-learn APIs and MLflow."
    ]
  },
  {
    role: "Data Assistant",
    company: "Northwest Missouri State University",
    location: "USA",
    period: "Oct 2024 - Sep 2025",
    summary:
      "Automated institutional analytics and reporting workflows across Python, R, SQL, dashboards, and Azure-hosted data pipelines.",
    highlights: ["50% Faster Reports", "Azure Data Factory", "Power BI", "SQL Optimization"],
    details: [
      "Replaced manual Excel-heavy processes with automated Python and R workflows, reducing report preparation time by 50%.",
      "Built an Azure-hosted pipeline using Data Factory and Blob Storage to consolidate student datasets into a centralized analytics store.",
      "Optimized SQL queries across PostgreSQL and Microsoft Access, reducing average query runtime by 35%.",
      "Created Tableau and Power BI dashboards for enrollment, assessment, and accreditation reporting."
    ]
  },
  {
    role: "Machine Learning Engineer",
    company: "Prowin Health Technologies",
    location: "India",
    period: "Jan 2022 - Jul 2024",
    summary:
      "Progressed from intern to full-time ML engineer while contributing to healthcare AI, ETL, NLP, claims modeling, and cloud pipeline work.",
    highlights: ["Promoted in 6 Months", "Healthcare AI", "BERT", "AWS", "FastAPI"],
    details: [
      "Joined as a Data Analyst Intern and was promoted to full-time machine learning engineer within six months.",
      "Supported ETL pipelines for healthcare claims data using Python and SQL, reducing manual reporting effort by 40%.",
      "Worked with Scikit-learn, TensorFlow, and XGBoost on claims outcome prediction and fraud detection tasks.",
      "Implemented BERT-based document classification and contributed to FastAPI integration and MLflow-based experiment tracking."
    ]
  }
];

const badgeData = [
  {
    icon: "AWS",
    title: "AWS Certified Machine Learning Engineer",
    description:
      "Signals cloud-based ML engineering readiness across training, deployment, monitoring, and managed AWS services.",
    tags: ["AWS", "ML Engineering", "Production Delivery"]
  },
  {
    icon: "OCI",
    title: "OCI Certified AI Foundation",
    description:
      "Validates strong fundamentals in AI concepts, tooling, and enterprise-oriented cloud AI capability.",
    tags: ["Oracle Cloud", "AI Foundations", "Cloud Fluency"]
  },
  {
    icon: "GEN",
    title: "OCI Generative AI Certified Professional",
    description:
      "Highlights applied readiness for modern LLM workflows, generative AI solution design, and enterprise AI usage.",
    tags: ["Generative AI", "LLMs", "Applied AI"]
  },
  {
    icon: "PUB",
    title: "Peer-Reviewed Agentic AI Research",
    description:
      "Co-authored published research exploring agentic AI architectures, evaluation methods, and autonomous systems.",
    tags: ["Research", "Agentic AI", "LLM Systems"]
  }
];

const orbitRadii = ["5.8rem", "8.4rem", "11rem", "13.4rem"];

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const skillTabs = document.getElementById("skill-tabs");
const skillDetail = document.getElementById("skill-detail");
const skillBubbles = document.getElementById("skill-bubbles");
const skillGrid = document.getElementById("skill-grid");
const projectGrid = document.getElementById("project-grid");
const experienceTimeline = document.getElementById("experience-timeline");
const badgeGrid = document.getElementById("badge-grid");
const modal = document.getElementById("project-modal");
const modalContent = document.getElementById("modal-content");
const scrollProgressBar = document.getElementById("scroll-progress-bar");
const cursorHalo = document.querySelector(".cursor-halo");
const hero = document.getElementById("hero");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const canvas = document.getElementById("particle-canvas");
const assistantDock = document.getElementById("assistant-dock");
const assistantMessage = document.getElementById("assistant-message");
const assistantStatus = document.getElementById("assistant-status");
const assistantAvatar = document.getElementById("assistant-avatar");
const assistantPromptButtons = document.querySelectorAll(".assistant-prompt");
const assistantToggle = document.getElementById("assistant-toggle");

let activeSkillId = "backend";
let assistantPinnedState = {
  message: "Use the quick options to explore skills, projects, and experience.",
  status: "Explore skills, projects, and experience"
};
let assistantSpeakTimer;

const assistantTopics = {
  ml: {
    message:
      "My strongest areas include machine learning, NLP, retrieval-augmented generation, and semantic search.",
    status: "Skills overview"
  },
  backend: {
    message:
      "My back-end work includes Python ETL, FastAPI services, SQL optimization, databases, and API development.",
    status: "Back-end overview"
  },
  projects: {
    message:
      "Open any project to see the problem, solution, tech stack, and measurable impact.",
    status: "Project overview"
  },
  cloud: {
    message:
      "My experience includes AWS, Azure, Docker, MLflow, CI/CD, teaching, analytics, and applied machine learning delivery.",
    status: "Experience overview"
  }
};

function setAssistantState(state, pin = false) {
  if (!assistantMessage || !assistantStatus || !state) {
    return;
  }

  assistantMessage.textContent = state.message;
  assistantStatus.textContent = state.status;
  assistantDock?.classList.add("is-speaking");

  window.clearTimeout(assistantSpeakTimer);
  assistantSpeakTimer = window.setTimeout(() => {
    assistantDock?.classList.remove("is-speaking");
  }, 1300);

  if (pin) {
    assistantPinnedState = state;
  }
}

function restoreAssistantState() {
  setAssistantState(assistantPinnedState);
}

function bindAssistantHover(element, state) {
  if (!element) {
    return;
  }

  element.addEventListener("mouseenter", () => setAssistantState(state));
  element.addEventListener("focus", () => setAssistantState(state));
  element.addEventListener("mouseleave", restoreAssistantState);
  element.addEventListener("blur", restoreAssistantState);
}

function getSkillAssistantState(skill) {
  return {
    message: `${skill.title}: ${skill.evidence[0]}`,
    status: `${skill.label} overview`
  };
}

function getProjectAssistantState(project) {
  return {
    message: `${project.title} uses ${project.stack.slice(0, 3).join(", ")} and focuses on ${project.impact.toLowerCase()}.`,
    status: `${project.title}`
  };
}

function splitTextOnLoad() {
  document.querySelectorAll("[data-split-text]").forEach((element) => {
    const text = element.textContent.trim();
    element.setAttribute("aria-label", text);
    element.textContent = "";

    text.split(" ").forEach((word, index) => {
      const span = document.createElement("span");
      span.className = "split-word";
      span.style.setProperty("--word-index", index);
      span.textContent = word;
      element.appendChild(span);
    });
  });
}

function renderSkills() {
  skillTabs.innerHTML = skillData
    .map(
      (skill) => `
        <button
          class="skill-tab ${skill.id === activeSkillId ? "active" : ""}"
          type="button"
          data-skill-id="${skill.id}"
        >
          ${skill.label}
        </button>
      `
    )
    .join("");

  skillGrid.innerHTML = skillData
    .map(
      (skill) => `
        <article
          class="skill-card panel ${skill.id === activeSkillId ? "active" : ""}"
          data-skill-id="${skill.id}"
          tabindex="0"
          role="button"
          aria-pressed="${skill.id === activeSkillId}"
        >
          <div class="skill-card-top">
            <div>
              <span class="panel-kicker">${skill.label}</span>
              <h3>${skill.title}</h3>
            </div>
            <span class="skill-score">${skill.depth}%</span>
          </div>
          <p class="skill-card-summary">${skill.cardSummary}</p>
          <div class="mini-bar-group">
            ${skill.strengths
              .map(
                (strength) => `
                  <div class="mini-bar-row">
                    <span>${strength.label}<b>${strength.value}%</b></span>
                    <div class="mini-bar"><i style="width:${strength.value}%"></i></div>
                  </div>
                `
              )
              .join("")}
          </div>
          <div class="skill-card-tags">
            ${skill.tools.slice(0, 4).map((tool) => `<span>${tool}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");

  setSkillDetail(activeSkillId);

  document.querySelectorAll("[data-skill-id]").forEach((element) => {
    const activate = () => {
      activeSkillId = element.dataset.skillId;
      const selectedSkill = skillData.find((item) => item.id === activeSkillId);
      setAssistantState(getSkillAssistantState(selectedSkill), true);
      renderSkills();
    };

    const hoveredSkill = skillData.find((item) => item.id === element.dataset.skillId);
    bindAssistantHover(element, getSkillAssistantState(hoveredSkill));

    element.addEventListener("click", activate);
    element.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        activate();
      }
    });
  });
}

function setSkillDetail(skillId) {
  const skill = skillData.find((item) => item.id === skillId);

  skillDetail.innerHTML = `
    <div class="detail-top">
      <div class="radial-wrap">
        <div class="radial-meter" style="--value:${skill.depth}; --accent:${skill.accent};">
          <div class="radial-inner">
            <strong>${skill.depth}%</strong>
            <span>Depth Signal</span>
          </div>
        </div>
        <p>${skill.summary}</p>
      </div>
      <div class="detail-copy">
        <h3>${skill.title}</h3>
        <p>${skill.summary}</p>
        <div class="detail-strengths">
          ${skill.strengths
            .map(
              (strength) => `
                <div class="detail-strength-row">
                  <strong>${strength.label}<span>${strength.value}%</span></strong>
                  <div class="detail-strength-bar"><span style="width:${strength.value}%"></span></div>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    </div>
    <div class="detail-bottom">
      <article class="detail-panel">
        <h4>Resume Proof Points</h4>
        <ul class="detail-list">
          ${skill.evidence.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </article>
      <article class="detail-panel">
        <h4>Technology Layer</h4>
        <div class="detail-tags">
          ${skill.tools.map((tool) => `<span>${tool}</span>`).join("")}
        </div>
      </article>
    </div>
  `;

  renderSkillBubbles(skill);
}

function renderSkillBubbles(skill) {
  skillBubbles.innerHTML = `
    <div class="orbit-hub">
      <div>
        <span>Active Layer</span>
        <strong>${skill.label}</strong>
      </div>
    </div>
    ${skill.tools
      .map((tool, index) => {
        const radius = orbitRadii[index % orbitRadii.length];
        const angle = `${(360 / skill.tools.length) * index}deg`;
        const direction = index % 2 === 0 ? "normal" : "reverse";
        const duration = `${16 + (index % 4) * 3}s`;

        return `
          <div class="skill-orbit" style="--duration:${duration}; --direction:${direction};">
            <div class="skill-orbit-arm" style="--radius:${radius}; --angle:${angle}; --delay:${index * 0.18}s;">
              <span class="skill-bubble" tabindex="0" data-tool-name="${tool}">${tool}</span>
            </div>
          </div>
        `;
      })
      .join("")}
  `;

  skillBubbles.querySelectorAll(".skill-bubble").forEach((bubble) => {
    bindAssistantHover(bubble, {
      message: `${bubble.dataset.toolName} is one of the tools I have used in ${skill.label.toLowerCase()} work.`,
      status: `${bubble.dataset.toolName}`
    });
  });
}

function renderProjects() {
  projectGrid.innerHTML = projectData
    .map(
      (project) => `
        <article class="project-card panel reveal" data-tilt>
          <div class="project-preview">
            <div class="project-window">
              <div class="window-dots"><span></span><span></span><span></span></div>
              <span>${project.category}</span>
            </div>
            <div class="project-preview-grid">
              <div class="preview-stat">
                <span class="project-label">${project.previewLabel}</span>
                <strong>${project.previewMetric}</strong>
                <small>${project.previewCopy}</small>
                <div class="preview-bars">
                  ${project.bars
                    .map((bar) => `<span style="--bar-width:${bar};"></span>`)
                    .join("")}
                </div>
              </div>
              <div class="preview-feed">
                ${project.feed
                  .map(
                    (item) => `
                      <div class="feed-line">
                        <p>${item.label}</p>
                        <strong>${item.value}</strong>
                      </div>
                    `
                  )
                  .join("")}
              </div>
            </div>
          </div>
          <div class="project-body">
            <div class="project-meta">
              <span class="panel-kicker">${project.category}</span>
              <span>${project.period}</span>
            </div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-summary">${project.summary}</p>
            <div class="project-info-grid">
              <article class="project-info-card">
                <span class="project-section-label">Problem</span>
                <p>${project.problem}</p>
              </article>
              <article class="project-info-card">
                <span class="project-section-label">Impact</span>
                <strong class="project-impact">${project.impact}</strong>
              </article>
            </div>
            <div class="project-tags">
              ${project.stack.slice(0, 6).map((item) => `<span>${item}</span>`).join("")}
            </div>
            <div class="project-actions">
              <button class="project-button" type="button" data-open-project="${project.id}">
                Open Case Study
              </button>
              <span class="link-hint">Problem -> Solution -> Outcome</span>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  projectGrid.querySelectorAll(".project-card").forEach((card, index) => {
    const project = projectData[index];
    bindAssistantHover(card, getProjectAssistantState(project));
  });

  projectGrid.querySelectorAll("[data-open-project]").forEach((button) => {
    button.addEventListener("click", () => openProjectModal(button.dataset.openProject));
  });
}

function openProjectModal(projectId) {
  const project = projectData.find((item) => item.id === projectId);
  setAssistantState(getProjectAssistantState(project), true);

  modalContent.innerHTML = `
    <div class="modal-header">
      <p>${project.category} • ${project.period}</p>
      <h2 id="modal-title">${project.title}</h2>
      <p class="modal-subtitle">${project.summary}</p>
    </div>
    <div class="modal-grid">
      <article class="modal-card">
        <h3>Problem</h3>
        <p>${project.problem}</p>
      </article>
      <article class="modal-card">
        <h3>Impact</h3>
        <p>${project.impact}</p>
      </article>
      <article class="modal-card">
        <h3>Approach</h3>
        <p>${project.solution}</p>
      </article>
      <article class="modal-card">
        <h3>Tech Stack</h3>
        <div class="detail-tags">
          ${project.stack.map((item) => `<span>${item}</span>`).join("")}
        </div>
      </article>
      <article class="modal-card">
        <h3>Results</h3>
        <ul>
          ${project.results.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </article>
      <article class="modal-card">
        <h3>Highlights</h3>
        <p>
          This project combines problem solving, technical implementation,
          deployment, and measurable results in a production-focused workflow.
        </p>
      </article>
    </div>
  `;

  modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
}

function renderExperience() {
  experienceTimeline.innerHTML = experienceData
    .map(
      (item, index) => `
        <article class="timeline-card panel reveal">
          <span class="timeline-index">${String(index + 1).padStart(2, "0")}</span>
          <div class="timeline-head">
            <div>
              <h3>${item.role}</h3>
              <p class="timeline-meta">${item.company} • ${item.location}</p>
            </div>
            <span class="timeline-period">${item.period}</span>
          </div>
          <p class="timeline-summary">${item.summary}</p>
          <div class="timeline-chips">
            ${item.highlights.map((highlight) => `<span>${highlight}</span>`).join("")}
          </div>
          <button
            class="timeline-toggle"
            type="button"
            aria-expanded="${index === 0}"
            data-toggle-details="details-${index}"
          >
            ${index === 0 ? "Hide contributions" : "Show contributions"}
          </button>
          <ul class="timeline-details" id="details-${index}" ${index === 0 ? "" : "hidden"}>
            ${item.details.map((detail) => `<li>${detail}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");

  experienceTimeline.querySelectorAll("[data-toggle-details]").forEach((button) => {
    button.addEventListener("click", () => {
      const details = document.getElementById(button.dataset.toggleDetails);
      const hidden = details.hasAttribute("hidden");

      if (hidden) {
        details.removeAttribute("hidden");
        button.textContent = "Hide contributions";
        button.setAttribute("aria-expanded", "true");
      } else {
        details.setAttribute("hidden", "");
        button.textContent = "Show contributions";
        button.setAttribute("aria-expanded", "false");
      }
    });
  });
}

function renderBadges() {
  badgeGrid.innerHTML = badgeData
    .map(
      (badge) => `
        <article class="badge-card panel reveal">
          <div class="badge-icon">${badge.icon}</div>
          <h3>${badge.title}</h3>
          <p>${badge.description}</p>
          <div class="badge-tags">
            ${badge.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function setupRevealObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function setupCounters() {
  const counters = document.querySelectorAll("[data-counter-target]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const element = entry.target;
        const target = Number(element.dataset.counterTarget);
        const decimals = Number(element.dataset.counterDecimals || 0);
        const suffix = element.dataset.counterSuffix || "";
        const duration = 1200;
        const start = performance.now();

        const animate = (time) => {
          const progress = Math.min((time - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = target * eased;
          element.textContent = `${decimals ? value.toFixed(decimals) : Math.round(value)}${suffix}`;

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
        observer.unobserve(element);
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

function setupScrollProgress() {
  const update = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgressBar.style.width = `${progress}%`;
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
}

function setupCursorHalo() {
  if (prefersReducedMotion || window.matchMedia("(pointer: coarse)").matches || !cursorHalo) {
    return;
  }

  let rafId = 0;
  let pointerX = 0;
  let pointerY = 0;

  window.addEventListener("pointermove", (event) => {
    pointerX = event.clientX;
    pointerY = event.clientY;

    if (rafId) {
      return;
    }

    rafId = window.requestAnimationFrame(() => {
      cursorHalo.style.left = `${pointerX}px`;
      cursorHalo.style.top = `${pointerY}px`;
      cursorHalo.style.opacity = "1";
      rafId = 0;
    });
  });
}

function setupNav() {
  navToggle?.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      navToggle?.setAttribute("aria-expanded", "false");
    });
  });
}

function setupModal() {
  modal.addEventListener("click", (event) => {
    if (event.target.hasAttribute("data-close-modal")) {
      closeModal();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      closeModal();
    }
  });
}

function setupContactForm() {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    window.location.href = `mailto:nagururoshini@gmail.com?subject=${subject}&body=${body}`;
  });
}

function setupAssistantDock() {
  const applyDockState = (minimized) => {
    assistantDock?.classList.toggle("is-minimized", minimized);
    assistantToggle?.setAttribute("aria-expanded", String(!minimized));
    assistantToggle?.setAttribute(
      "aria-label",
      minimized ? "Expand AI guide" : "Minimize AI guide"
    );

    if (assistantToggle) {
      assistantToggle.innerHTML = `<span aria-hidden="true">${minimized ? "+" : "-"}</span>`;
    }

    try {
      window.localStorage.setItem("portfolio-assistant-minimized", minimized ? "1" : "0");
    } catch (error) {
      // Ignore storage failures and keep the UI working.
    }
  };

  try {
    applyDockState(window.localStorage.getItem("portfolio-assistant-minimized") === "1");
  } catch (error) {
    applyDockState(false);
  }

  assistantToggle?.addEventListener("click", () => {
    applyDockState(!assistantDock.classList.contains("is-minimized"));
  });

  assistantPromptButtons.forEach((button) => {
    const state = assistantTopics[button.dataset.assistantTopic];
    bindAssistantHover(button, state);

    button.addEventListener("click", () => {
      assistantPromptButtons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      setAssistantState(state, true);
    });
  });

  if (prefersReducedMotion || window.matchMedia("(pointer: coarse)").matches || !assistantAvatar) {
    return;
  }

  let rafId = 0;
  let pointerX = 0;
  let pointerY = 0;

  window.addEventListener("pointermove", (event) => {
    pointerX = event.clientX;
    pointerY = event.clientY;

    if (rafId) {
      return;
    }

    rafId = window.requestAnimationFrame(() => {
      const rect = assistantAvatar.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const offsetX = Math.max(-4, Math.min(4, ((pointerX - centerX) / rect.width) * 12));
      const offsetY = Math.max(-3, Math.min(3, ((pointerY - centerY) / rect.height) * 10));

      assistantAvatar.style.setProperty("--eye-x", `${offsetX}px`);
      assistantAvatar.style.setProperty("--eye-y", `${offsetY}px`);
      rafId = 0;
    });
  });
}

function setupHeroParallax() {
  if (prefersReducedMotion || window.matchMedia("(pointer: coarse)").matches || !hero) {
    return;
  }

  const layers = hero.querySelectorAll(".parallax-layer");
  let rafId = 0;
  let pointerX = 0;
  let pointerY = 0;

  const updateLayers = () => {
    const rect = hero.getBoundingClientRect();
    const x = ((pointerX - rect.left) / rect.width - 0.5) * 2;
    const y = ((pointerY - rect.top) / rect.height - 0.5) * 2;

    layers.forEach((layer) => {
      const depth = Number(layer.dataset.parallax || 0);
      layer.style.setProperty("--tx", `${x * depth}px`);
      layer.style.setProperty("--ty", `${y * depth * 0.55}px`);
    });
    rafId = 0;
  };

  hero.addEventListener("pointermove", (event) => {
    pointerX = event.clientX;
    pointerY = event.clientY;

    if (rafId) {
      return;
    }

    rafId = window.requestAnimationFrame(updateLayers);
  });

  hero.addEventListener("pointerleave", () => {
    layers.forEach((layer) => {
      layer.style.setProperty("--tx", "0px");
      layer.style.setProperty("--ty", "0px");
    });
  });
}

function setupTilt() {
  if (prefersReducedMotion || window.matchMedia("(pointer: coarse)").matches) {
    return;
  }

  document.querySelectorAll("[data-tilt]").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      const rotateY = (x - 0.5) * 10;
      const rotateX = (0.5 - y) * 10;

      card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}

function setupParticles() {
  if (!canvas || prefersReducedMotion) {
    return;
  }

  const lowPowerDevice =
    window.innerWidth < 1100 || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 6);

  if (lowPowerDevice) {
    canvas.style.display = "none";
    return;
  }

  const context = canvas.getContext("2d");
  const particleCount = 14;
  const connectionDistance = 90;
  let width = 0;
  let height = 0;
  let particles = [];
  let lastFrame = 0;

  const resize = () => {
    const ratio = window.devicePixelRatio || 1;
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);

    particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 0.6
    }));
  };

  const draw = (time = 0) => {
    if (time - lastFrame < 48) {
      requestAnimationFrame(draw);
      return;
    }

    lastFrame = time;
    context.clearRect(0, 0, width, height);

    particles.forEach((particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < 0 || particle.x > width) {
        particle.vx *= -1;
      }

      if (particle.y < 0 || particle.y > height) {
        particle.vy *= -1;
      }

      context.beginPath();
      context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      context.fillStyle = "rgba(110, 231, 244, 0.45)";
      context.fill();
    });

    for (let i = 0; i < particles.length; i += 1) {
      for (let j = i + 1; j < particles.length; j += 1) {
        const a = particles[i];
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectionDistance) {
          context.beginPath();
          context.moveTo(a.x, a.y);
          context.lineTo(b.x, b.y);
          context.strokeStyle = `rgba(110, 231, 244, ${(connectionDistance - distance) / 850})`;
          context.lineWidth = 1;
          context.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  };

  resize();
  requestAnimationFrame(draw);
  window.addEventListener("resize", resize);
}

splitTextOnLoad();
renderSkills();
renderProjects();
renderExperience();
renderBadges();
setAssistantState(assistantPinnedState, true);
setupRevealObserver();
setupCounters();
setupScrollProgress();
setupCursorHalo();
setupNav();
setupModal();
setupContactForm();
setupAssistantDock();
setupHeroParallax();
setupTilt();
setupParticles();
