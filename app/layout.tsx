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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://nikhilappari.vercel.app"),
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
    url: "https://nikhilappari.vercel.app",
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
        url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFl0lEQVR4nO1Wa2wUVRT+zp2dnd3ttnW7gFRaaKm1FVtLFMPDqCgalfhIjFsfIRijoFFUNGp8ZiTxgSjRxAgJD2ujMbpNfLImPhA1RoWsiZiCL7TaVQpt6e52d9uZvXPn+KO7pEgLGB8khu/PTHLPnO8753znZoBjOIZ/GMxMR5NcFF7JNE1xyOB/C/39/VMSicSpR9qJw6pkZmJm7TDnorOz05tOp6/Tdf22YDCogYh46VL9r4gfM/kRxAgAyGazd+dyuU3JZPJOfvdd428Rj048ODh4uZRybTweP6iaYmeGhoZaLcvamslk3sr09Z0LAD2XXnxeb03Nki5M8xXCj9ycxcS2bc+UUqaZmfP5/JmjxzGK/Gop5bBt231WNrsGAH6aeerKvcGg5GAJ71mwYC4AMCLjjnHM6plZOI7zDo9ASilfKhIXzimXy1UppVLMrKRl7WVm0Vlff39PIMC7gLwd8Dn75pxxIwDwOed4jpgcANLpdINSSjGzYmZWSlnDw8O1hRgdAJRSIwKVYmY+K+b1XvxdwM/bAe4UlE8J4oGJE28b6QDGFDDuFhiGcZUQQgCA67q2EMLQNO0aZiYikpZlXS6EuGQki9h4F9GO47z6a0k7j+GqKd+lAaSZkZL2cQxoALTCc3wBBddzT09Pia7rt4wIR4+U8okRHnElEXEul5ui6/qzAFyl1J40cM/p5aEYhq1Su7HxmfTkqhV5oen7ACQNv48ARUQ2AYqZRdQ0vSiY8s8dEETEoVDoViHE8QBIKfXUwMDAGgBMRDNTqVSdYRhtQogaAELTtPvaS/y3THTknN1V1bH5O3fexft6szYRehmck/a8eEP9yp3h8NO/VVa2dy9cuDxYUVEejUQEA7R/NQqzZ8uyarxe704hhFcp9WsikZhRU1OTd133eyHEiUqp7ZqmNcN1CUJ8uaap6RGjO/GeL+Dvrl62bH5y06bznV+7bs/39p0iGDxR10WoIgR/SeDHQCDYnmus+6gT+rbWjg4FHGgMQUSOUmqZEKK4uw/X1tZaBcNtAVCnaVoLAAUhuD+x+/nBXT89F/IZSU/1tNjAyiffKFFOS5oIwyTYcJXIGL7fS06qX8+10z7Lvfjyp7OEkGDeT0qjZo9MJhMuLS3dAWCSUupDTdMuBKARkZRSLvR4PDEANgADQPQhw2dV+o3FmFq7cdLPu1o9hhGQXu8qva5uVyoeX1Vh22FZWvphJJO5YDyzFz2gERH7/f7lBfKklHIJEbkAXGYmj8ez2XXdLtd1vQB6X7/++kSpIxfnyso/Khvon0le7/vBG244+ao9ex644osvXzi+oiIRJkKYedIW0/REIxGNx7oNi9UPDg5OcBznB6WUlcvlbh7lCzCzBwDylnUHM/Pezs7HVgM9a8tKUy80t6zYcEL1ZUU7tQG+aCSibZ08eeMOEu5Xzc1bvl60qAQjK3WQAIHCbjLzRcwcVkq9GovF1hdNWYhTDNBQb+9LCnjw41mnzW4KBCZXTG94dNa1Nz174+7E21FmzTRNUQM4rR0dKsDOB2VlQeJweKCvqWn8W5CZKR6P68lkcvnQ0NCGRCJRVbjzD1AbLQh9JVS+5POGen5/xow34fEccDa6yq0LFoS3Njb88sn8szvaurp843aAiLiyslJ3Xffb7u7u+6qrq38DACLab1UTEK2Aaj/z/KnBlpZmd/r0V4O1tbey41A0EtFaAVWMJYCZQbM3b97n1J/4uFUe+r5q06clhWoPaoAAgHXr1lnZbHZbY2Njv2maYjQ5AKwAOBqNaqGTpk/VysPfDE+YtGxeLPY7ABT3+QDQSLXp1c+0i7lzX/OmusvGHUFxDIcMAPD56qh/8733nhJfunRCsSuH+8Y0TcHM1NbW5vvbP6vMTEWnj7lO/xWOKvkx/C/xBxrk8Wb09J4GAAAAAElFTkSuQmCC",
        type: "image/png",
      },
      {
        url: "/na-brush-32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
    apple: "/na-brush-192.png",
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
          type="image/png"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFl0lEQVR4nO1Wa2wUVRT+zp2dnd3ttnW7gFRaaKm1FVtLFMPDqCgalfhIjFsfIRijoFFUNGp8ZiTxgSjRxAgJD2ujMbpNfLImPhA1RoWsiZiCL7TaVQpt6e52d9uZvXPn+KO7pEgLGB8khu/PTHLPnO8753znZoBjOIZ/GMxMR5NcFF7JNE1xyOB/C/39/VMSicSpR9qJw6pkZmJm7TDnorOz05tOp6/Tdf22YDCogYh46VL9r4gfM/kRxAgAyGazd+dyuU3JZPJOfvdd428Rj048ODh4uZRybTweP6iaYmeGhoZaLcvamslk3sr09Z0LAD2XXnxeb03Nki5M8xXCj9ycxcS2bc+UUqaZmfP5/JmjxzGK/Gop5bBt231WNrsGAH6aeerKvcGg5GAJ71mwYC4AMCLjjnHM6plZOI7zDo9ASilfKhIXzimXy1UppVLMrKRl7WVm0Vlff39PIMC7gLwd8Dn75pxxIwDwOed4jpgcANLpdINSSjGzYmZWSlnDw8O1hRgdAJRSIwKVYmY+K+b1XvxdwM/bAe4UlE8J4oGJE28b6QDGFDDuFhiGcZUQQgCA67q2EMLQNO0aZiYikpZlXS6EuGQki9h4F9GO47z6a0k7j+GqKd+lAaSZkZL2cQxoALTCc3wBBddzT09Pia7rt4wIR4+U8okRHnElEXEul5ui6/qzAFyl1J40cM/p5aEYhq1Su7HxmfTkqhV5oen7ACQNv48ARUQ2AYqZRdQ0vSiY8s8dEETEoVDoViHE8QBIKfXUwMDAGgBMRDNTqVSdYRhtQogaAELTtPvaS/y3THTknN1V1bH5O3fexft6szYRehmck/a8eEP9yp3h8NO/VVa2dy9cuDxYUVEejUQEA7R/NQqzZ8uyarxe704hhFcp9WsikZhRU1OTd133eyHEiUqp7ZqmNcN1CUJ8uaap6RGjO/GeL+Dvrl62bH5y06bznV+7bs/39p0iGDxR10WoIgR/SeDHQCDYnmus+6gT+rbWjg4FHGgMQUSOUmqZEKK4uw/X1tZaBcNtAVCnaVoLAAUhuD+x+/nBXT89F/IZSU/1tNjAyiffKFFOS5oIwyTYcJXIGL7fS06qX8+10z7Lvfjyp7OEkGDeT0qjZo9MJhMuLS3dAWCSUupDTdMuBKARkZRSLvR4PDEANgADQPQhw2dV+o3FmFq7cdLPu1o9hhGQXu8qva5uVyoeX1Vh22FZWvphJJO5YDyzFz2gERH7/f7lBfKklHIJEbkAXGYmj8ez2XXdLtd1vQB6X7/++kSpIxfnyso/Khvon0le7/vBG244+ao9ex644osvXzi+oiIRJkKYedIW0/REIxGNx7oNi9UPDg5OcBznB6WUlcvlbh7lCzCzBwDylnUHM/Pezs7HVgM9a8tKUy80t6zYcEL1ZUU7tQG+aCSibZ08eeMOEu5Xzc1bvl60qAQjK3WQAIHCbjLzRcwcVkq9GovF1hdNWYhTDNBQb+9LCnjw41mnzW4KBCZXTG94dNa1Nz174+7E21FmzTRNUQM4rR0dKsDOB2VlQeJweKCvqWn8W5CZKR6P68lkcvnQ0NCGRCJRVbjzD1AbLQh9JVS+5POGen5/xow34fEccDa6yq0LFoS3Njb88sn8szvaurp843aAiLiyslJ3Xffb7u7u+6qrq38DACLab1UTEK2Aaj/z/KnBlpZmd/r0V4O1tbey41A0EtFaAVWMJYCZQbM3b97n1J/4uFUe+r5q06clhWoPaoAAgHXr1lnZbHZbY2Njv2maYjQ5AKwAOBqNaqGTpk/VysPfDE+YtGxeLPY7ABT3+QDQSLXp1c+0i7lzX/OmusvGHUFxDIcMAPD56qh/8733nhJfunRCsSuH+8Y0TcHM1NbW5vvbP6vMTEWnj7lO/xWOKvkx/C/xBxrk8Wb09J4GAAAAAElFTkSuQmCC"
        />
        <link rel="icon" sizes="32x32" href="/na-brush-32.png" />
        <link rel="apple-touch-icon" href="/na-brush-192.png" />
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
