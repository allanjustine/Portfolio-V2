import type { Metadata } from "next";
import "./globals.css";
import { AOSProvider } from "@/context/aos-init";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Allan Justine Mascariñas - Full-Stack Web Developer",
  description:
    "Hi, I'm Allan Justine Mascariñas, a passionate full-stack web developer dedicated to building powerful and efficient web applications. My tech stack includes Laravel, Livewire, Next.js, Vue.js, React.js, Nest.js, TypeScript, JavaScript, Tailwind CSS, Bootstrap, HTML, and CSS.",
  authors: [{ name: "Allan Justine Mascariñas" }],
  robots: "index, follow",
  openGraph: {
    title: "Allan Justine Mascariñas - Full-Stack Web Developer",
    description:
      "Hi, I'm Allan Justine Mascariñas, a passionate full-stack web developer dedicated to building powerful and efficient web applications.",
    images: [
      "https://allanjustine.github.io/Portfolio/images/profile-image.jpg",
    ],
    url: "https://allanjustine.github.io/Portfolio/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Allan Justine Mascariñas - Full-Stack Web Developer",
    description:
      "Hi, I'm Allan Justine Mascariñas, a passionate full-stack web developer dedicated to building powerful and efficient web applications.",
    images: [
      "https://allanjustine.github.io/Portfolio/images/profile-image.jpg",
    ],
    site: "https://allanjustine.github.io/Portfolio/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.1/css/all.min.css"
        />
        <link rel="shortcut icon" href="/logo/icon.png" type="image/x-icon" />
      </head>
      <body className="overflow-x-hidden text-gray-800 bg-gray-100">
        <AOSProvider>{children}</AOSProvider>
        <Toaster />
      </body>
    </html>
  );
}
