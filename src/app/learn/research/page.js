import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Download } from "lucide-react";
import researchData from "@/content/research/external-research-papers.json";

export const metadata = {
    title: "Research Papers — Math2Model",
    description: "Explore foundational machine learning and AI research papers, core methodologies, and mathematical ideas.",
};

export default function ResearchPage() {
    return (
        <main className="flex-1 bg-white text-[#172033]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-16 lg:px-10 lg:py-20">
                {/* Header */}
                <div className="border-b border-slate-200 pb-10 sm:pb-12">
                    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                        <span className="size-2.5 shrink-0 rounded-xs bg-blue-700" />
                        Research Hub
                    </div>
                    <h1 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-[-0.055em] leading-[1.1]">
                        Landmark research papers.
                    </h1>
                    <p className="mt-4 text-base sm:text-[17px] leading-7 text-slate-600 max-w-2xl">
                        Explore influential AI papers, core methodologies, and the structural mathematics behind modern machine learning breakthroughs. Version {researchData.version} (Updated: {researchData.lastUpdated})
                    </p>
                </div>

                {/* Papers Grid */}
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {researchData.papers.map((paper) => (
                        <div
                            key={paper.id}
                            className="flex flex-col justify-between border border-slate-200 rounded-lg overflow-hidden bg-white hover:border-blue-300 transition-colors shadow-2xs"
                        >
                            <div>
                                <div className="relative h-44 w-full bg-slate-100 border-b border-slate-200">
                                    <Image
                                        src={paper.imageUrl}
                                        alt={paper.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 text-[11px] font-semibold text-blue-700 rounded-xs">
                                        {paper.publisher} · {paper.year}
                                    </div>
                                </div>

                                <div className="p-6 space-y-3">
                                    <h2 className="text-xl font-semibold tracking-tight text-[#172033] leading-snug">
                                        {paper.title}
                                    </h2>
                                    <p className="text-xs font-medium text-slate-500">
                                        {paper.authors.join(", ")}
                                    </p>
                                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                                        {paper.abstract}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5 pt-2">
                                        {paper.categories.map((cat) => (
                                            <span
                                                key={cat}
                                                className="border border-slate-200 px-2 py-0.5 text-[11px] text-slate-600 rounded-xs bg-slate-50"
                                            >
                                                {cat}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/50 text-xs font-semibold">
                                <Link
                                    href={paper.paperUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-blue-700 hover:text-blue-900"
                                >
                                    Paper link <ExternalLink size={14} />
                                </Link>
                                {paper.pdfUrl && (
                                    <Link
                                        href={paper.pdfUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-slate-700 hover:text-slate-900"
                                    >
                                        PDF <Download size={14} />
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}