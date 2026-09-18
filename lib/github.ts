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
        "User-Agent": "Nikhil-Portfolio-App",
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
    "LandSure": "AI-based system for digitizing land records from scanned documents and automated validation.",
    "DelayLands": "Predictive analytics platform identifying delay factors in acquisition projects.",
    "Attendance-System": "C++ console-based application for recording and managing student attendance using file handling.",
    "aesthetic_by_nikhil": "Personal artwork showcase and custom sketch commission platform.",
    "Portfolio": "Modern cinematic developer portfolio built with Next.js, TypeScript, and Tailwind CSS.",
  };

  return map[name] || "Repository developed by Nikhil Appari.";
}

export function getFallbackRepos(): GitHubRepo[] {
  return [
    {
      id: 1,
      name: "LandSure",
      full_name: "nikhilappari/LandSure",
      html_url: "https://github.com/nikhilappari/LandSure",
      description: "AI-based system for digitizing land records from scanned documents and automated validation.",
      language: "Python",
      stargazers_count: 0,
      forks_count: 0,
      updated_at: new Date().toISOString(),
      category: "AI",
    },
    {
      id: 2,
      name: "DelayLands",
      full_name: "nikhilappari/DelayLands",
      html_url: "https://github.com/nikhilappari/DelayLands",
      description: "Predictive analytics platform analyzing land acquisition data and identifying delay factors.",
      language: "Python",
      stargazers_count: 0,
      forks_count: 0,
      updated_at: new Date().toISOString(),
      category: "Python",
    },
    {
      id: 3,
      name: "Attendance-System",
      full_name: "nikhilappari/Attendance-System",
      html_url: "https://github.com/nikhilappari/Attendance-System",
      description: "C++ console-based application for recording and managing student attendance using file handling.",
      language: "C++",
      stargazers_count: 0,
      forks_count: 0,
      updated_at: new Date().toISOString(),
      category: "Other",
    },
    {
      id: 4,
      name: "aesthetic_by_nikhil",
      full_name: "nikhilappari/aesthetic_by_nikhil",
      html_url: "https://github.com/nikhilappari/aesthetic_by_nikhil",
      description: "Personal artwork showcase & custom sketch commission platform.",
      language: "JavaScript",
      stargazers_count: 0,
      forks_count: 0,
      updated_at: new Date().toISOString(),
      category: "Web",
    },
    {
      id: 5,
      name: "Portfolio",
      full_name: "nikhilappari/Portfolio",
      html_url: "https://github.com/nikhilappari/Portfolio",
      description: "Modern cinematic developer portfolio built with Next.js, TypeScript, and Tailwind CSS.",
      language: "TypeScript",
      stargazers_count: 0,
      forks_count: 0,
      updated_at: new Date().toISOString(),
      category: "Web",
    },
  ];
}
