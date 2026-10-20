import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowUpRight } from "lucide-react";
import researchPapers from "@/config/personal-research-papers.json";

export const metadata = {
    title: "Personal Research — Math2Model",
    description: "Explore independent research papers, empirical studies, and explorations in AI, machine learning, and multi-agent systems.",
};

export default function PersonalResearchPage() {
    return (
        <main className="flex-1 bg-white text-[#172033]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-16 lg:px-10 lg:py-20">
                <div className="border-b border-slate-200 pb-10 sm:pb-12">
                    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                        <span className="size-2.5 shrink-0 rounded-xs bg-blue-700" />
                        Independent Research
                    </div>
                    <h1 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-[-0.055em] leading-[1.1]">
                        Personal research & explorations.
                    </h1>
                    <p className="mt-4 text-base sm:text-[17px] leading-7 text-slate-600 max-w-2xl">
                        Original empirical investigations, experimental notes, and technical studies focusing on AI safety, retrieval systems, and multi-agent architectures.
                    </p>
                </div>

                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
                    {researchPapers.map((paper) => (
                        <article
                            key={paper.id}
                            className="flex flex-col justify-between border border-slate-200 rounded-lg bg-white overflow-hidden hover:border-blue-300 transition-colors"
                        >
                            <div>
                                <div className="relative h-48 w-full overflow-hidden bg-slate-100 border-b border-slate-200">
                                    <Image
                                        src={paper.img_url}
                                        alt={paper.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="p-6 space-y-4">
                                    <div className="flex flex-wrap gap-1.5">
                                        {paper.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="inline-block bg-slate-100 text-slate-700 text-[11px] font-semibold px-2 py-0.5 rounded"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h2 className="text-xl font-semibold text-[#172033] tracking-tight leading-snug">
                                        {paper.title}
                                    </h2>

                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        {paper.description}
                                    </p>
                                </div>
                            </div>

                            <div className="px-6 pb-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                                <div className="flex items-center gap-4">
                                    <span className="flex items-center gap-1">
                                        <Calendar size={13} /> {paper.date_published}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <User size={13} /> {paper.authors.join(", ")}
                                    </span>
                                </div>

                                <Link
                                    href={`/learn/personal-research/${paper.id}`}
                                    className="inline-flex items-center gap-1 font-semibold text-blue-700 hover:text-blue-900 transition-colors"
                                >
                                    Read Paper <ArrowUpRight size={14} />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}