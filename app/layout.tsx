import type { Metadata, Viewport } from "next";
import "./globals.css";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#07080a",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://nikhilappari.dev"),
  title: `${PERSONAL_INFO.name} — ${PERSONAL_INFO.role}`,
  description:
    "Artificial Intelligence & Machine Learning student passionate about building practical AI solutions, machine learning, backend systems, and modern web applications.",
  keywords: [
    "AI Software Engineer",
    "AI Engineer",
    "Generative AI Engineer",
    "LLM Engineer",
    "RAG Engineer",
    "AI/ML Engineer",
    "Full Stack AI Engineer",
    "FastAPI",
    "Python",
    "LangChain",
    "Nikhil Appari",
  ],
  authors: [{ name: PERSONAL_INFO.name, url: PERSONAL_INFO.github }],
  openGraph: {
    title: `${PERSONAL_INFO.name} — ${PERSONAL_INFO.role}`,
    description:
      "Artificial Intelligence & Machine Learning student passionate about building practical AI solutions, machine learning, backend systems, and modern web applications.",
    url: "https://nikhilappari.dev",
    siteName: `${PERSONAL_INFO.name} Portfolio`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/landing-hoodie.png",
        width: 1200,
        height: 630,
        alt: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL_INFO.name} — ${PERSONAL_INFO.role}`,
    description:
      "Software engineer building reliable AI products, fast backend services, and clean web apps.",
    images: ["/images/landing-hoodie.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: `data:image/svg+xml,${encodeURIComponent(
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64"><rect width="64" height="64" rx="14" fill="#07080a"/><rect width="60" height="60" x="2" y="2" rx="12" fill="none" stroke="#ff2a3b" stroke-width="3" stroke-opacity="0.9"/><text x="12" y="44" font-family="system-ui, -apple-system, sans-serif" font-size="32" font-weight="900" fill="#ffffff" letter-spacing="-1">N</text><text x="34" y="44" font-family="system-ui, -apple-system, sans-serif" font-size="32" font-weight="900" fill="#ff2a3b" letter-spacing="-1">A</text><circle cx="53" cy="42" r="3" fill="#ff2a3b"/></svg>'
        )}`,
        type: "image/svg+xml",
      },
    ],
    shortcut: `data:image/svg+xml,${encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64"><rect width="64" height="64" rx="14" fill="#07080a"/><rect width="60" height="60" x="2" y="2" rx="12" fill="none" stroke="#ff2a3b" stroke-width="3" stroke-opacity="0.9"/><text x="12" y="44" font-family="system-ui, -apple-system, sans-serif" font-size="32" font-weight="900" fill="#ffffff" letter-spacing="-1">N</text><text x="34" y="44" font-family="system-ui, -apple-system, sans-serif" font-size="32" font-weight="900" fill="#ff2a3b" letter-spacing="-1">A</text><circle cx="53" cy="42" r="3" fill="#ff2a3b"/></svg>'
    )}`,
    apple: `data:image/svg+xml,${encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64"><rect width="64" height="64" rx="14" fill="#07080a"/><rect width="60" height="60" x="2" y="2" rx="12" fill="none" stroke="#ff2a3b" stroke-width="3" stroke-opacity="0.9"/><text x="12" y="44" font-family="system-ui, -apple-system, sans-serif" font-size="32" font-weight="900" fill="#ffffff" letter-spacing="-1">N</text><text x="34" y="44" font-family="system-ui, -apple-system, sans-serif" font-size="32" font-weight="900" fill="#ff2a3b" letter-spacing="-1">A</text><circle cx="53" cy="42" r="3" fill="#ff2a3b"/></svg>'
    )}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PERSONAL_INFO.name,
    jobTitle: PERSONAL_INFO.role,
    address: {
      "@type": "PostalAddress",
      addressRegion: "Andhra Pradesh",
      addressCountry: "India",
    },
    email: PERSONAL_INFO.email,
    sameAs: [PERSONAL_INFO.github, PERSONAL_INFO.linkedin],
    knowsAbout: [
      "Artificial Intelligence",
      "Generative AI",
      "Large Language Models (LLMs)",
      "Retrieval-Augmented Generation (RAG)",
      "FastAPI",
      "Python",
      "Vector Databases",
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          href={`data:image/svg+xml,${encodeURIComponent(
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64"><rect width="64" height="64" rx="14" fill="#07080a"/><rect width="60" height="60" x="2" y="2" rx="12" fill="none" stroke="#ff2a3b" stroke-width="2.5" stroke-opacity="0.8"/><text x="12" y="44" font-family="system-ui, -apple-system, sans-serif" font-size="32" font-weight="900" fill="#ffffff" letter-spacing="-1">N</text><text x="34" y="44" font-family="system-ui, -apple-system, sans-serif" font-size="32" font-weight="900" fill="#ff2a3b" letter-spacing="-1">A</text><circle cx="53" cy="42" r="3" fill="#ff2a3b"/></svg>'
          )}`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#07080a] text-white antialiased selection:bg-[#ff2a3b] selection:text-white">
        {children}
      </body>
    </html>
  );
}
