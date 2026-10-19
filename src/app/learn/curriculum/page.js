import Image from "next/image";
import Link from "next/link";
import { BookOpen, Binary, BrainCircuit, Network, Layers, ExternalLink, Play } from "lucide-react";
import curriculumData from "@/config/curriculum.json";

const iconMap = {
    Code2: BookOpen,
    Binary: Binary,
    BrainCircuit: BrainCircuit,
    Network: Network,
    Layers: Layers,
};

export const metadata = {
    title: "Curriculum — Math2Model",
    description: "Explore structured learning modules covering mathematical foundations, classical machine learning, and modern AI.",
};

export default function CurriculumPage() {
    return (
        <main className="flex-1 bg-white text-[#172033]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-16 lg:px-10 lg:py-20">
                {/* Header */}
                <div className="border-b border-slate-200 pb-10 sm:pb-12">
                    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                        <span className="size-2.5 shrink-0 rounded-xs bg-blue-700" />
                        Curriculum
                    </div>
                    <h1 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-[-0.055em] leading-[1.1]">
                        Structured learning path.
                    </h1>
                    <p className="mt-4 text-base sm:text-[17px] leading-7 text-slate-600 max-w-2xl">
                        A rigorous journey from core programming and mathematics to classical machine learning and modern neural models. Last updated: {curriculumData.lastUpdated}
                    </p>
                </div>

                {/* Modules List */}
                <div className="mt-12 space-y-16">
                    {curriculumData.modules.map((module) => {
                        const IconComponent = iconMap[module.lucideIcon] || BookOpen;

                        return (
                            <section key={module.id} className="border border-slate-200 rounded-lg p-6 sm:p-8 bg-slate-50/50">
                                <div className="grid gap-8 lg:grid-cols-[1fr_2fr] items-start">
                                    {/* Module Info */}
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <span className="font-mono text-sm text-blue-700 font-semibold">
                                                Module 0{module.moduleIndex}
                                            </span>
                                            <IconComponent size={20} className="text-blue-700" />
                                        </div>
                                        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#172033]">
                                            {module.title}
                                        </h2>
                                        <p className="text-sm leading-7 text-slate-600">
                                            {module.description}
                                        </p>
                                        <div className="relative h-48 w-full overflow-hidden rounded-md border border-slate-200">
                                            <Image
                                                src={module.imgUrl}
                                                alt={module.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>

                                    {/* Topics / Subsections */}
                                    <div className="space-y-6">
                                        {module.topics && (
                                            <div className="grid gap-3 sm:grid-cols-2">
                                                {module.topics.map((topic) => (
                                                    <TopicCard key={topic.slug} topic={topic} />
                                                ))}
                                            </div>
                                        )}

                                        {module.subsections && (
                                            <div className="space-y-6">
                                                {module.subsections.map((sub) => (
                                                    <div key={sub.slug} className="space-y-3">
                                                        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-2">
                                                            {sub.title}
                                                        </h3>
                                                        <div className="grid gap-3 sm:grid-cols-2">
                                                            {sub.topics.map((topic) => (
                                                                <TopicCard key={topic.slug} topic={topic} />
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </section>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}

function TopicCard({ topic }) {
    return (
        <div className="flex flex-col justify-between border border-slate-200 bg-white p-4 rounded-md shadow-2xs hover:border-blue-300 transition-colors">
            <div>
                <Link
                    href={topic.href}
                    className="font-semibold text-sm text-slate-800 hover:text-blue-700 transition-colors leading-snug block"
                >
                    {topic.title}
                </Link>
            </div>
            <div className="mt-4 flex items-center gap-3 pt-3 border-t border-slate-100 text-xs">
                {topic.docs_link && (
                    <a
                        href={topic.docs_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-slate-500 hover:text-blue-700 font-medium"
                    >
                        <ExternalLink size={13} /> Docs
                    </a>
                )}
                {topic.yt_link && (
                    <a
                        href={topic.yt_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-slate-500 hover:text-red-600 font-medium"
                    >
                        <Play size={13} /> Watch
                    </a>
                )}
            </div>
        </div>
    );
}