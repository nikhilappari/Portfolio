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
        url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAExUlEQVR4nO1WXWxURRT+zsy9+3N329JasBAIERJAFBGLJL6Ut4bog5LYmvTFB4xEgVcLMbhBkvKjQIGGWBIkGIyyxGAMagRDW1P5iRgiCWisBVtcBIqw/dmyezv3fj50V5fSwjb6wEO/ZHKTOzNnvvOdM2cOMIEJPCwgqUjqEUPGaycGqP+b2LhJECh4j5U9QANYZIyZZFlWP/714ryIDJAUEWEhBttnzJgtV650Fs6WFJKW67qLPc87wzx4ntdC0npQOAgoAtJaVvb4uUDg0uWZMycRkPEokSNjk2zNnu9mv/uyc9ZY++KAhgiOBcMH/oDwUij0DgC0AGPuGfVwAHBdt5Lkbc+YQXqeR5LGmPqxSMSHw4fT5eWVbcoy7VBDv2url+XlU7Mq3Dcp8ye9bDgynjFXlNbLoVQGxlBrvZnkSyJiRlVCBP0DqQYDqpRoT1MVX+8bWC8A8YAw3MVORIhUSmnLUh0i0/uPH98Cy3LpefCBgyQXZknonPe1gPeF49SlIAN9TnRdQEmwQ2nT5/kresvL5wDw76fCvROuCwBudN48019dXe319m4SramAiO/7n5OcDMCPx+P6AkDW1Oibnl8/qGXDjbpXtt9Q8lcSviRFBRJ9qY0C8HAhyUhSAUAmk3nCZDJdCAaRDEe29AI/kNyRdzPaWlparLPNzTZE8K7jrN/sOAdzdvY50bcPa5ufWiH3lBXyu4sfeTanVmEKABDLMoldu5xJ6cF6HXK8XpFFAD4BAKVUVVVV1d7FK1cOfbR1ayQdicy/FQqtze0dmFax+5aS6yka1QNKV3qwAVLAbcxXwPO8Tp48GSYgyerqssuW3f9TNPI1yRM5JYwx6wAAlgWxLJCUWCxmQSlsKy5evV9Z3KNt9ysd4Lni4ur7qTA6ATKYKyTfVVQsbRPhkdmzvyF5Ma9WPf868NwHU6Z0HygpvfqtU5S4bQf/vFVUtGdbMPjLXmV5HyvbPxEI/shYTI2WjKOGgByuugKwubLSrrp2re3X0pJYR2dndeOSJQMAbmSXTtVAY086nR7y/DeHyDV3RK2JkodsK7BHCVSfkqGAh2e63t9eJ4A/ZnHKU2CB53ndiUTCyf4XZqX9sK7ueGdbGzPp9E2Sp96aPPnVdY7D+rlzF4y011xZ6ey0g937tO0dtULez1awi089GsmV7dEI5J7g50jeSSaTZbk3IPtUC8kKklez8q9YDXSvnT59EwDEgEAc0AR0HAgAQFO0+I0Dls1Ddjj9mwryejC8EQDOAvZoBAQAjDExkh7JmnxlcsWnr6fnRZKnt0yb1rDeiXwPpRAbljXfK4kBav/SpaEmO3DpMx0YOqXDd27qQKq/tPRJAGB+Qma9c4wxq/ISzBhjakkGcuQYiykAONPU9HRDNHrsvVmzpsTGkDRLCruj0de+VJpnxGYGmhltXestKpqTey2FpCSTyRLHcV7WWr8gIi4AH8O9Al3XPRIOh48CGDhcW6suzJ/P0sbG5XY02rEqkTgfA9SG4fUjIQCwc9myQKS1ddcc3y95DGKm0g8NhZyLmYULdpS0tyfvkn8s5M/Ha2r00bq60qyXhbdfI064RzURyU/Ef8aYpApvNiSXnHnjP/eN4+4TJzCBhxZ/A3oN5s7HwV6mAAAAAElFTkSuQmCC",
        type: "image/png",
      },
      {
        url: "/na-icon-32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
    apple: "/na-icon-192.png",
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
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAExUlEQVR4nO1WXWxURRT+zsy9+3N329JasBAIERJAFBGLJL6Ut4bog5LYmvTFB4xEgVcLMbhBkvKjQIGGWBIkGIyyxGAMagRDW1P5iRgiCWisBVtcBIqw/dmyezv3fj50V5fSwjb6wEO/ZHKTOzNnvvOdM2cOMIEJPCwgqUjqEUPGaycGqP+b2LhJECh4j5U9QANYZIyZZFlWP/714ryIDJAUEWEhBttnzJgtV650Fs6WFJKW67qLPc87wzx4ntdC0npQOAgoAtJaVvb4uUDg0uWZMycRkPEokSNjk2zNnu9mv/uyc9ZY++KAhgiOBcMH/oDwUij0DgC0AGPuGfVwAHBdt5Lkbc+YQXqeR5LGmPqxSMSHw4fT5eWVbcoy7VBDv2url+XlU7Mq3Dcp8ye9bDgynjFXlNbLoVQGxlBrvZnkSyJiRlVCBP0DqQYDqpRoT1MVX+8bWC8A8YAw3MVORIhUSmnLUh0i0/uPH98Cy3LpefCBgyQXZknonPe1gPeF49SlIAN9TnRdQEmwQ2nT5/kresvL5wDw76fCvROuCwBudN48019dXe319m4SramAiO/7n5OcDMCPx+P6AkDW1Oibnl8/qGXDjbpXtt9Q8lcSviRFBRJ9qY0C8HAhyUhSAUAmk3nCZDJdCAaRDEe29AI/kNyRdzPaWlparLPNzTZE8K7jrN/sOAdzdvY50bcPa5ufWiH3lBXyu4sfeTanVmEKABDLMoldu5xJ6cF6HXK8XpFFAD4BAKVUVVVV1d7FK1cOfbR1ayQdicy/FQqtze0dmFax+5aS6yka1QNKV3qwAVLAbcxXwPO8Tp48GSYgyerqssuW3f9TNPI1yRM5JYwx6wAAlgWxLJCUWCxmQSlsKy5evV9Z3KNt9ysd4Lni4ur7qTA6ATKYKyTfVVQsbRPhkdmzvyF5Ma9WPf868NwHU6Z0HygpvfqtU5S4bQf/vFVUtGdbMPjLXmV5HyvbPxEI/shYTI2WjKOGgByuugKwubLSrrp2re3X0pJYR2dndeOSJQMAbmSXTtVAY086nR7y/DeHyDV3RK2JkodsK7BHCVSfkqGAh2e63t9eJ4A/ZnHKU2CB53ndiUTCyf4XZqX9sK7ueGdbGzPp9E2Sp96aPPnVdY7D+rlzF4y011xZ6ey0g937tO0dtULez1awi089GsmV7dEI5J7g50jeSSaTZbk3IPtUC8kKklez8q9YDXSvnT59EwDEgEAc0AR0HAgAQFO0+I0Dls1Ddjj9mwryejC8EQDOAvZoBAQAjDExkh7JmnxlcsWnr6fnRZKnt0yb1rDeiXwPpRAbljXfK4kBav/SpaEmO3DpMx0YOqXDd27qQKq/tPRJAGB+Qma9c4wxq/ISzBhjakkGcuQYiykAONPU9HRDNHrsvVmzpsTGkDRLCruj0de+VJpnxGYGmhltXestKpqTey2FpCSTyRLHcV7WWr8gIi4AH8O9Al3XPRIOh48CGDhcW6suzJ/P0sbG5XY02rEqkTgfA9SG4fUjIQCwc9myQKS1ddcc3y95DGKm0g8NhZyLmYULdpS0tyfvkn8s5M/Ha2r00bq60qyXhbdfI064RzURyU/Ef8aYpApvNiSXnHnjP/eN4+4TJzCBhxZ/A3oN5s7HwV6mAAAAAElFTkSuQmCC"
        />
        <link rel="icon" sizes="32x32" href="/na-icon-32.png" />
        <link rel="apple-touch-icon" href="/na-icon-192.png" />
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
