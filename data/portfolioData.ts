export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  architecture: {
    problem: string;
    solution: string;
    diagramSteps: string[];
    myRole: string;
    keyResult: string;
  };
}

export interface ExperienceItem {
  company: string;
  role: string;
  period?: string;
  location?: string;
  highlights: string[];
  techUsed: string[];
}

export interface SkillCategory {
  category: string;
  title?: string;
  description: string;
  footerHighlight?: string;
  skills: { name: string; tag?: string; level?: string }[];
}

export interface Certification {
  title: string;
  issuer: string;
  iconName?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  score?: string;
}

export const PERSONAL_INFO = {
  name: "Nikhil Appari",
  role: "AI & ML Enthusiast",
  location: "Andhra Pradesh, India",
  email: "nikhilappari2006@gmail.com",
  github: "https://github.com/nikhilappari",
  linkedin: "https://www.linkedin.com/in/nikhil-appari-365810309/",
  githubUsername: "nikhilappari",
  resumeUrl: "/resume/Nikhil_Appari_Resume.pdf",
  summary:
    "Artificial Intelligence & Machine Learning student passionate about building practical AI solutions. Working across machine learning, software development, backend systems, and modern development tools to turn ideas into useful applications.",
  targetRoles: [
    "AI Software Engineer",
    "Full-Stack AI Developer",
    "Python Backend Engineer",
    "AI Agents & Automation Engineer",
  ],
};

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "artist-portfolio",
    number: "01",
    title: "ARTIST PORTFOLIO",
    subtitle: "Artwork showcase & custom sketch commission platform",
    description:
      "A personal portfolio website developed to showcase my sketching and artwork. It also allows visitors to explore artworks and place sketch commission requests.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/nikhilappari/aesthetic_by_nikhil",
    architecture: {
      problem:
        "Artists need an accessible, distraction-free space to display visual artwork portfolios and allow art enthusiasts to explore pieces and request custom sketch commissions.",
      solution:
        "Designed and implemented a responsive web application featuring interactive artwork galleries, detailed previews, and a clean commission request workflow.",
      diagramSteps: [
        "Visitor explores categorized sketch galleries",
        "Interactive viewer displays high-resolution sketch details",
        "Client selects artwork style or fills commission request form",
        "Form validation verifies request specifics and contact information",
        "Artist receives commission details and inquiry notification",
      ],
      myRole:
        "Developed the entire frontend using semantic HTML, custom responsive CSS layouts, and vanilla JavaScript for dynamic interactions.",
      keyResult:
        "Delivered an elegant, fast-loading art showcase platform with seamless commission inquiry capabilities.",
    },
  },
  {
    id: "land-records-digitization",
    number: "02",
    title: "LAND RECORDS DIGITIZATION & VALIDATION",
    subtitle: "AI-based document digitization and automated verification pipeline",
    description:
      "An AI-based system for digitizing land records from scanned documents and validating extracted information to improve accuracy and reduce manual effort.",
    technologies: ["Python", "OCR", "Machine Learning", "Data Processing"],
    githubUrl: "https://github.com/nikhilappari/LandSure",
    architecture: {
      problem:
        "Legacy land registration deeds and physical records are difficult to preserve, slow to search through, and prone to human errors during manual digitization.",
      solution:
        "Built an intelligent document processing pipeline that extracts text from scanned land deeds using OCR and validates key entities with automated verification checks.",
      diagramSteps: [
        "Scan or photograph physical land record document",
        "Image preprocessing cleans noise and corrects document orientation",
        "OCR engine extracts structured text, survey numbers, and ownership data",
        "Validation algorithms cross-check boundaries, parcel IDs, and owner names",
        "Digitized, verified records stored for instant search and retrieval",
      ],
      myRole:
        "Engineered the Python document processing workflow, OCR extraction logic, and automated data validation rules.",
      keyResult:
        "Significantly reduced manual data entry time while ensuring high extraction accuracy for complex document formats.",
    },
  },
  {
    id: "land-acquisition-delay-governance",
    number: "03",
    title: "LAND ACQUISITION DELAY GOVERNANCE",
    subtitle: "Predictive analytics platform identifying delay factors in acquisition projects",
    description:
      "A predictive analytics platform designed to analyze land acquisition data and identify factors contributing to acquisition delays, supporting data-driven monitoring and decision-making.",
    technologies: ["Python", "Machine Learning", "Data Analytics", "Pandas", "Scikit-learn"],
    githubUrl: "https://github.com/nikhilappari/DelayLands",
    architecture: {
      problem:
        "Public and infrastructure projects often face prolonged, unanticipated delays in land acquisition without early indicators or visibility into bottlenecks.",
      solution:
        "Developed a predictive analytics engine that analyzes historical land acquisition timelines, dispute metrics, and regulatory milestones to forecast delays and highlight critical path risks.",
      diagramSteps: [
        "Historical acquisition project milestones and dispute datasets collected",
        "Feature engineering captures regulatory stages, compensation issues, and litigation variables",
        "Machine learning models evaluate delay probabilities across project phases",
        "Dashboard highlights risk severity and bottleneck alerts for project managers",
        "Decision-makers receive actionable insights to intervene early and mitigate timeline overruns",
      ],
      myRole:
        "Processed multi-variable project datasets, implemented predictive machine learning models, and developed analytical visualization summaries.",
      keyResult:
        "Enabled proactive monitoring of land acquisition bottlenecks through data-driven predictive scoring.",
    },
  },
  {
    id: "attendance-system",
    number: "04",
    title: "ATTENDANCE SYSTEM",
    subtitle: "C++ console-based application with persistent file handling",
    description:
      "A C++ console-based application for recording and managing student attendance using file handling.",
    technologies: ["C++", "File Handling", "Data Structures"],
    githubUrl: "https://github.com/nikhilappari/Attendance-System",
    architecture: {
      problem:
        "Managing classroom or institutional attendance without heavy database dependencies requires a lightweight, reliable, and persistent offline solution.",
      solution:
        "Developed a structured C++ console application utilizing object-oriented programming principles and robust binary/text file streams to record, update, and manage student attendance.",
      diagramSteps: [
        "Faculty or admin launches console application with role authentication",
        "Interactive menu provides options to mark, view, or update attendance",
        "Student records verified and processed in memory using data structures",
        "File handling streams commit records persistently to local storage",
        "System calculates attendance percentages and generates student status reports",
      ],
      myRole:
        "Designed the C++ classes, implemented structured file I/O operations, and ensured error handling for data consistency.",
      keyResult:
        "Built a fast, dependable attendance management tool operating with zero external runtime dependencies.",
    },
  },
  {
    id: "loan-risk-analysis",
    number: "05",
    title: "LOAN RISK ANALYSIS",
    subtitle: "Machine learning model predicting borrower default and risk assessment",
    description:
      "A machine learning system that analyzes financial and borrower information to assess loan risk and predict the likelihood of loan-related risk.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Machine Learning"],
    githubUrl: "https://github.com/nikhilappari",
    architecture: {
      problem:
        "Lending institutions need automated, objective risk profiling to evaluate loan applicants accurately, identify default factors, and minimize non-performing assets.",
      solution:
        "Trained and evaluated supervised machine learning classifiers on financial, income, and credit history data to predict loan approval risk and default probability.",
      diagramSteps: [
        "Borrower financial profiles and credit history dataset loaded",
        "Data cleaning, missing value handling, and categorical encoding performed",
        "Exploratory data analysis identifies highest correlations with loan default",
        "Scikit-learn algorithms (Logistic Regression, Random Forest) trained and evaluated",
        "Model outputs risk probability scores and classification reports",
      ],
      myRole:
        "Handled end-to-end data preprocessing, exploratory data analysis, model training, performance evaluation (ROC-AUC, F1-Score), and risk factor analysis.",
      keyResult:
        "Delivered a dependable predictive risk classifier identifying high-risk borrower profiles effectively.",
    },
  },
  {
    id: "ecommerce-web-application",
    number: "06",
    title: "E-COMMERCE WEB APPLICATION",
    subtitle: "Full-stack online shopping platform with product catalog and cart",
    description:
      "A web-based e-commerce application that provides functionality for browsing products and managing an online shopping experience.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    githubUrl: "https://github.com/nikhilappari",
    architecture: {
      problem:
        "Digital storefronts require an intuitive interface for browsing product inventories, managing customer carts, and processing online orders reliably.",
      solution:
        "Architected a full-stack web application with responsive UI views, RESTful API endpoints for product CRUD operations, dynamic cart state management, and persistent MongoDB storage.",
      diagramSteps: [
        "Customer browses product catalog with search and category filters",
        "Selected items added to shopping cart with real-time price calculations",
        "Checkout order details submitted securely via RESTful API routes",
        "Node.js and Express backend validates cart items and processes order",
        "MongoDB database records purchase history and updates inventory stock",
      ],
      myRole:
        "Developed frontend responsive layouts, implemented backend API routes in Express, and designed schema models in MongoDB.",
      keyResult:
        "Delivered a complete, responsive online shopping experience from item discovery to order placement.",
    },
  },
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    company: "Technical Hub",
    role: "Full Stack Development Intern",
    period: "2-Month Internship",
    highlights: [
      "Gained hands-on experience in full-stack web development.",
      "Worked with frontend, backend, APIs, and database concepts.",
      "Developed and improved web application features as part of the internship.",
    ],
    techUsed: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB"],
  },
  {
    company: "Future Interns",
    role: "Prompt Engineering Intern",
    period: "1-Month Internship",
    highlights: [
      "Worked on prompt engineering and explored practical applications of generative AI.",
      "Designed and refined prompts to improve the quality and relevance of AI-generated responses.",
      "Gained practical experience working with AI tools and prompt-based workflows.",
    ],
    techUsed: ["Prompt Engineering", "Generative AI", "AI Tools", "LLMs"],
  },
  {
    company: "LeetCode & CodeChef",
    role: "DSA & Competitive Programming",
    highlights: [
      "Solved 400+ DSA problems using C++.",
      "Regularly practice Data Structures & Algorithms and problem-solving patterns.",
      "Participated in 35+ CodeChef contests.",
    ],
    techUsed: ["C++", "DSA", "LeetCode", "CodeChef", "Problem Solving"],
  },
  {
    company: "Academic & Personal Projects",
    role: "AI & ML Project Development",
    highlights: [
      "Developed projects involving Machine Learning, data analysis, OCR, and predictive analytics.",
      "Worked on Loan Risk Analysis, Land Records Digitization & Validation, and Land Acquisition Delay Prediction.",
      "Continuously improving skills in Python, Machine Learning, and AI through practical projects.",
    ],
    techUsed: ["Python", "Machine Learning", "Scikit-learn", "OCR", "Pandas"],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "AI & ML",
    title: "AI & MACHINE LEARNING",
    description: "Tools and concepts I use to build practical machine learning applications.",
    footerHighlight: "Practical AI & ML",
    skills: [
      { name: "Python", tag: "Primary" },
      { name: "Machine Learning", tag: "Primary" },
      { name: "Scikit-learn" },
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "Matplotlib" },
      { name: "Data Preprocessing" },
      { name: "Feature Engineering" },
      { name: "Model Evaluation" },
    ],
  },
  {
    category: "PROGRAMMING",
    title: "PROGRAMMING & DSA",
    description: "Developing strong programming and problem-solving skills through DSA and competitive programming.",
    footerHighlight: "400+ DSA PROBLEMS",
    skills: [
      { name: "C++", tag: "Primary" },
      { name: "Python", tag: "Primary" },
      { name: "Java" },
      { name: "C" },
      { name: "Data Structures" },
      { name: "Algorithms" },
      { name: "Problem Solving" },
      { name: "LeetCode" },
      { name: "CodeChef" },
    ],
  },
  {
    category: "WEB DEVELOPMENT",
    title: "WEB DEVELOPMENT",
    description: "Building responsive web applications using frontend and backend technologies.",
    footerHighlight: "Full Stack Ready",
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Spring Boot" },
      { name: "REST APIs" },
      { name: "Axios / Fetch" },
    ],
  },
  {
    category: "DATABASES",
    title: "DATABASES & DATA",
    description: "Working with databases and data analysis tools for application and ML projects.",
    footerHighlight: "Data & Storage",
    skills: [
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Pandas" },
      { name: "Microsoft Excel" },
      { name: "Power BI" },
    ],
  },
  {
    category: "TOOLS",
    title: "TOOLS & PLATFORMS",
    description: "Development tools and platforms used throughout my projects and learning.",
    footerHighlight: "Development & Systems",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Jupyter Notebook" },
      { name: "Weka" },
      { name: "Linux" },
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    institution: "Aditya University, Surampalem",
    degree: "B.Tech — Artificial Intelligence & Machine Learning",
    period: "2024 – Present",
    score: "CGPA: 8.9",
  },
  {
    institution: "Aditya Junior College, Amalapuram",
    degree: "Class XII (Intermediate Science)",
    period: "2022 – 2024",
    score: "93.6%",
  },
  {
    institution: "Aditya EM School",
    degree: "Secondary School Education",
    period: "2022",
  },
];

export const CERTIFICATIONS: Certification[] = [
  { title: "Microsoft Excel", issuer: "Microsoft" },
  { title: "Microsoft Power BI", issuer: "Microsoft" },
  { title: "Red Hat Linux Administrator", issuer: "Red Hat" },
  { title: "C Programming", issuer: "Cisco" },
  { title: "C++ Programming", issuer: "Cisco" },
  { title: "Java", issuer: "Certification / Course" },
  { title: "Python", issuer: "Certification / Course" },
  { title: "Machine Learning", issuer: "Certification / Course" },
  { title: "Artificial Intelligence", issuer: "Coursera" },
  { title: "Machine Learning", issuer: "Coursera" },
  { title: "Agile", issuer: "Coursera" },
];

export const ACHIEVEMENTS = [
  {
    title: "CodeChef Contest Participant",
    description:
      "Participated in 35+ CodeChef contests, gaining experience in competitive programming and algorithmic problem solving.",
  },
  {
    title: "LeetCode Problem Solving",
    description:
      "400+ problems solved across different DSA topics, regularly practicing Data Structures & Algorithms to improve problem-solving and coding skills.",
  },
  {
    title: "AI & ML Projects",
    description:
      "Built practical machine learning and software projects focused on solving real-world problems using data and AI.",
  },
  {
    title: "Typing Speed & Productivity",
    description:
      "Achieved a typing speed of 60+ WPM, supporting fast and efficient coding, documentation, and development workflows.",
  },
];
