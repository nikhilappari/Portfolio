import { NextResponse } from "next/server";
import { fetchGitHubRepos } from "@/lib/github";
import { PERSONAL_INFO } from "@/data/portfolioData";

export async function GET() {
  try {
    const repos = await fetchGitHubRepos(PERSONAL_INFO.githubUsername);
    return NextResponse.json({ success: true, repos });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch repositories" }, { status: 500 });
  }
}
