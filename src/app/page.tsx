"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import ScrollProgress from "@/components/ScrollProgress";
import Contact from "@/components/Contact";
import { FiDownload } from "react-icons/fi";
import { useState } from "react";
import { PDFTemplate } from "@/components/PDFTemplate";
import { pdf } from "@react-pdf/renderer";

export default function Home() {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const handleDownloadPDF = async () => {
    try {
      setIsGeneratingPDF(true);
      // projects 데이터를 Projects 컴포넌트에서 가져와서 사용
      const { projects } = await import("@/components/Projects");
      const blob = await pdf(
        <PDFTemplate isFullPortfolio projects={projects} />
      ).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = "portfolio.pdf";
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to generate PDF:", error);
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <main className="relative">
      <ScrollProgress />
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={handleDownloadPDF}
          disabled={isGeneratingPDF}
          className="flex items-center gap-2 rounded-full bg-purple-600 px-4 py-2 text-sm text-white hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FiDownload />
          {isGeneratingPDF ? "Generating..." : "Download Portfolio"}
        </button>
      </div>
      <div id="portfolio-content" className="flex flex-col">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
