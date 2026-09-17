export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics?: string[];
  category: "AI" | "Python" | "RAG" | "Agents" | "Security" | "Web" | "Other";
}

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=50`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "Vignesh-Portfolio-App",
      },
    });

    if (!res.ok) {
      console.warn(`GitHub API returned status ${res.status}`);
      return getFallbackRepos();
    }

    let data;
    try {
      data = await res.json();
    } catch {
      return getFallbackRepos();
    }
    if (!Array.isArray(data)) {
      return getFallbackRepos();
    }

    // Filter out worksbot task repositories
    const filteredData = data.filter((repo: any) => {
      const name = (repo.name || "").toLowerCase();
      return !name.includes("worksbot");
    });

    return filteredData.map((repo: any) => {
      const name = repo.name || "";
      const desc = repo.description || getRepoFallbackDescription(name);
      const lang = repo.language || "Python";
      
      let category: GitHubRepo["category"] = "Other";
      const nameLower = name.toLowerCase();
      const descLower = (desc || "").toLowerCase();

      if (nameLower.includes("agent") || descLower.includes("agent")) {
        category = "Agents";
      } else if (nameLower.includes("rag") || descLower.includes("rag") || nameLower.includes("mcp")) {
        category = "RAG";
      } else if (
        nameLower.includes("ids") ||
        nameLower.includes("cyber") ||
        nameLower.includes("security") ||
        descLower.includes("security")
      ) {
        category = "Security";
      } else if (nameLower.includes("ai") || descLower.includes("ai") || descLower.includes("model")) {
        category = "AI";
      } else if (lang.toLowerCase() === "python" || nameLower.includes("python")) {
        category = "Python";
      } else if (
        lang.toLowerCase() === "typescript" ||
        lang.toLowerCase() === "javascript" ||
        lang.toLowerCase() === "html"
      ) {
        category = "Web";
      }

      return {
        id: repo.id,
        name: repo.name,
        full_name: repo.full_name,
        html_url: repo.html_url,
        description: desc,
        language: lang,
        stargazers_count: repo.stargazers_count || 0,
        forks_count: repo.forks_count || 0,
        updated_at: repo.updated_at,
        topics: repo.topics || [],
        category,
      };
    });
  } catch (error) {
    console.error("Failed to fetch GitHub repos:", error);
    return getFallbackRepos();
  }
}

function getRepoFallbackDescription(name: string): string {
  const map: Record<string, string> = {
    "Airline-Call-Center-Agent": "Multi-agent customer service triage system with automated KPI reporting.",
    "AI_Powered_IDS": "Edge cybersecurity intrusion detection system running TFLite ML models.",
    "Building-A-New-MCP-Server": "Model Context Protocol server implementation for external tool integration.",
    "Cyber-Intelligence-Defense-System": "Cyber threat analysis and automated anomaly intelligence suite.",
    "Data-Management-Platform": "Scalable data ingestion and management system for AI pipelines.",
    "Binary-Classification---Sentiment": "Natural language sentiment classification model pipeline.",
  };

  return map[name] || "Repository developed by Vignesh Pandiya G.";
}

export function getFallbackRepos(): GitHubRepo[] {
  return [
    {
      id: 1,
      name: "Airline-Call-Center-Agent",
      full_name: "007VICKY007/Airline-Call-Center-Agent",
      html_url: "https://github.com/007VICKY007/Airline-Call-Center-Agent",
      description: "Multi-agent customer service triage system with automated KPI reporting.",
      language: "Python",
      stargazers_count: 0,
      forks_count: 0,
      updated_at: new Date().toISOString(),
      category: "Agents",
    },
    {
      id: 2,
      name: "AI_Powered_IDS",
      full_name: "007VICKY007/AI_Powered_IDS",
      html_url: "https://github.com/007VICKY007/AI_Powered_IDS",
      description: "Edge cybersecurity intrusion detection system running TFLite ML models.",
      language: "Python",
      stargazers_count: 0,
      forks_count: 0,
      updated_at: new Date().toISOString(),
      category: "Security",
    },
    {
      id: 3,
      name: "Building-A-New-MCP-Server",
      full_name: "007VICKY007/Building-A-New-MCP-Server",
      html_url: "https://github.com/007VICKY007/Building-A-New-MCP-Server",
      description: "Model Context Protocol server implementation for AI agent tool integration.",
      language: "Python",
      stargazers_count: 0,
      forks_count: 0,
      updated_at: new Date().toISOString(),
      category: "RAG",
    },
    {
      id: 4,
      name: "Cyber-Intelligence-Defense-System",
      full_name: "007VICKY007/Cyber-Intelligence-Defense-System",
      html_url: "https://github.com/007VICKY007/Cyber-Intelligence-Defense-System",
      description: "Cyber threat analysis and automated anomaly intelligence suite.",
      language: "Jupyter Notebook",
      stargazers_count: 0,
      forks_count: 0,
      updated_at: new Date().toISOString(),
      category: "Security",
    },
    {
      id: 5,
      name: "Data-Management-Platform",
      full_name: "007VICKY007/Data-Management-Platform",
      html_url: "https://github.com/007VICKY007/Data-Management-Platform",
      description: "Scalable data ingestion and management system for AI pipelines.",
      language: "Python",
      stargazers_count: 0,
      forks_count: 0,
      updated_at: new Date().toISOString(),
      category: "Python",
    },
  ];
}
