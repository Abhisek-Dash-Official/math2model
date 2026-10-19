import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, Play, FileText, Clock, BarChart } from "lucide-react";
import curriculumData from "@/config/curriculum.json";

function findCurriculumItem(slugs) {
    const [moduleSlug, secondSlug, thirdSlug] = slugs;

    const module = curriculumData.modules.find((m) => moduleSlug && moduleSlug.includes(m.slug));
    if (!module) return null;

    if (!secondSlug) {
        return { type: "module", data: module };
    }

    if (module.topics) {
        const topic = module.topics.find((t) => t.slug === secondSlug);
        if (topic) return { type: "topic", data: topic, module };
    }

    if (module.subsections) {
        const subsection = module.subsections.find((sub) => sub.slug === secondSlug);
        if (subsection) {
            if (thirdSlug) {
                const topic = subsection.topics.find((t) => t.slug === thirdSlug);
                if (topic) return { type: "topic", data: topic, module, subsection };
            } else {
                return { type: "subsection", data: subsection, module };
            }
        }
    }

    return null;
}

export default async function CurriculumDynamicPage({ params }) {
    const resolvedParams = await params;
    const slugs = resolvedParams.slug || [];
    const result = findCurriculumItem(slugs);

    if (!result) {
        notFound();
    }

    if (result.type === "module") {
        const module = result.data;
        return (
            <main className="flex-1 bg-white text-[#172033]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-16 lg:px-10 lg:py-20">
                    <div className="border-b border-slate-200 pb-8">
                        <span className="font-mono text-xs text-blue-700 font-semibold uppercase tracking-wider">Module 0{module.moduleIndex}</span>
                        <h1 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight">{module.title}</h1>
                        <p className="mt-3 text-sm text-slate-600 max-w-2xl leading-relaxed">{module.description}</p>
                    </div>

                    <div className="mt-12 space-y-10">
                        {module.topics && (
                            <div className="space-y-4">
                                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">Topics</h2>
                                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                    {module.topics.map((topic) => (
                                        <TopicCard key={topic.slug} topic={topic} />
                                    ))}
                                </div>
                            </div>
                        )}

                        {module.subsections && (
                            module.subsections.map((sub) => (
                                <div key={sub.slug} className="space-y-4">
                                    <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                                        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">{sub.title}</h2>
                                        <Link href={`/learn/curriculum/${module.slug}/${sub.slug}`} className="text-xs font-semibold text-blue-700 hover:underline">
                                            View all →
                                        </Link>
                                    </div>
                                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                        {sub.topics.slice(0, 3).map((topic) => (
                                            <TopicCard key={topic.slug} topic={topic} />
                                        ))}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </main>
        );
    }

    if (result.type === "subsection") {
        const subsection = result.data;
        return (
            <main className="flex-1 bg-white text-[#172033]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-16 lg:px-10 lg:py-20">
                    <div className="border-b border-slate-200 pb-8">
                        <span className="font-mono text-xs text-blue-700 font-semibold uppercase tracking-wider">{result.module.title}</span>
                        <h1 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight">{subsection.title}</h1>
                    </div>

                    <div className="mt-12 space-y-4">
                        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">Topics in {subsection.title}</h2>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {subsection.topics.map((topic) => (
                                <TopicCard key={topic.slug} topic={topic} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    if (result.type === "topic") {
        const topicMeta = result.data;
        let topicData = null;

        try {
            const filePath = path.join(process.cwd(), "src", topicMeta.filePath);
            if (fs.existsSync(filePath)) {
                const fileContent = fs.readFileSync(filePath, "utf8");
                topicData = JSON.parse(fileContent);
            }
        } catch (e) {
            console.error("Error reading topic file:", e);
        }

        return (
            <main className="flex-1 bg-white text-[#172033]">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 py-10 sm:py-16 lg:px-10 lg:py-20">
                    <div className="border-b border-slate-200 pb-8 space-y-3">
                        <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                            <span>{result.module.title}</span>
                            {result.subsection && <><span>/</span><span>{result.subsection.title}</span></>}
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">{topicMeta.title}</h1>

                        {topicData && (
                            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-500">
                                {topicData.difficulty && (
                                    <span className="inline-flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded font-medium">
                                        <BarChart size={13} /> {topicData.difficulty}
                                    </span>
                                )}
                                {topicData.estimatedHours && (
                                    <span className="inline-flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded font-medium">
                                        <Clock size={13} /> {topicData.estimatedHours} hours
                                    </span>
                                )}
                                <span className="inline-flex items-center gap-1 font-mono text-slate-400">
                                    <FileText size={13} /> {topicMeta.filePath}
                                </span>
                            </div>
                        )}
                    </div>

                    <div className="mt-8 space-y-8 text-sm leading-7 text-slate-700">
                        <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg space-y-4">
                            <h2 className="text-base font-semibold text-[#172033]">Quick Resources</h2>
                            <div className="flex flex-wrap gap-4">
                                {topicMeta.docs_link && (
                                    <Link href={topicMeta.docs_link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-md bg-white border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-700 hover:border-blue-700 hover:text-blue-700 transition-colors">
                                        <ExternalLink size={14} /> Official Documentation
                                    </Link>
                                )}
                                {topicMeta.yt_link && (
                                    <Link href={topicMeta.yt_link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-md bg-red-50 border border-red-200 px-4 py-2 text-xs font-semibold text-red-600 hover:bg-red-100 transition-colors">
                                        <Play size={14} /> Video Explanation
                                    </Link>
                                )}
                            </div>
                        </div>

                        {topicData?.description && (
                            <div className="border border-slate-200 p-6 rounded-lg bg-white">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">Overview</h3>
                                <p className="text-slate-600">{topicData.description}</p>
                            </div>
                        )}

                        {topicData?.learningObjectives && (
                            <div className="border border-slate-200 p-6 rounded-lg bg-white space-y-3">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">Learning Objectives</h3>
                                <ul className="list-disc pl-5 space-y-1.5 text-slate-600 text-xs sm:text-sm">
                                    {topicData.learningObjectives.map((obj, i) => (
                                        <li key={i}>{obj}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {topicData?.sections && topicData.sections.map((section) => (
                            <div key={section.id} className="border border-slate-200 p-6 rounded-lg bg-white space-y-4">
                                <h3 className="text-lg font-semibold text-[#172033] border-b border-slate-100 pb-2">{section.title}</h3>
                                <div className="space-y-4">
                                    {section.content.map((block, idx) => {
                                        if (block.type === "text") {
                                            return <p key={idx} className="text-slate-600 text-sm leading-relaxed">{block.value}</p>;
                                        }
                                        if (block.type === "code") {
                                            return (
                                                <div key={idx} className="rounded-md bg-slate-900 p-4 font-mono text-xs text-slate-100 overflow-x-auto shadow-sm">
                                                    <pre>{block.value}</pre>
                                                </div>
                                            );
                                        }
                                        if (block.type === "math") {
                                            return (
                                                <div key={idx} className="my-3 rounded-md bg-slate-50 border border-slate-200 p-3 text-center font-mono text-blue-700 text-sm overflow-x-auto">
                                                    {block.value}
                                                </div>
                                            );
                                        }
                                        return null;
                                    })}
                                </div>
                                {section.keyTakeaways && section.keyTakeaways.length > 0 && (
                                    <div className="mt-4 bg-blue-50/50 border border-blue-100 p-4 rounded-md space-y-2">
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900">Key Takeaways</h4>
                                        <ul className="list-disc pl-5 space-y-1 text-xs text-blue-900">
                                            {section.keyTakeaways.map((takeaway, tIdx) => (
                                                <li key={tIdx}>{takeaway}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}

                        {topicData?.exercises && topicData.exercises.length > 0 && (
                            <div className="border border-slate-200 p-6 rounded-lg bg-slate-50/50 space-y-6">
                                <h3 className="text-lg font-semibold text-[#172033]">Exercises & Practice</h3>
                                <div className="space-y-4">
                                    {topicData.exercises.map((ex, eIdx) => (
                                        <div key={ex.id || eIdx} className="border border-slate-200 bg-white p-5 rounded-md space-y-3">
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs font-bold text-blue-700 uppercase">Exercise {eIdx + 1}</span>
                                                <span className="text-xs font-mono text-slate-400 capitalize">{ex.difficulty}</span>
                                            </div>
                                            <p className="text-sm font-medium text-slate-800">{ex.problem || ex.question}</p>
                                            {ex.solution && (
                                                <div className="mt-3 pt-3 border-t border-slate-100">
                                                    <span className="text-xs font-semibold text-slate-700 block mb-1">Solution / Hint:</span>
                                                    <pre className="bg-slate-900 text-slate-100 p-3 rounded text-xs font-mono overflow-x-auto">{ex.solution}</pre>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        );
    }
}

function TopicCard({ topic }) {
    return (
        <div className="flex flex-col justify-between border border-slate-200 bg-white p-5 rounded-lg shadow-2xs hover:border-blue-300 transition-colors">
            <div>
                <Link href={topic.href} className="font-semibold text-sm text-slate-800 hover:text-blue-700 transition-colors leading-snug block">
                    {topic.title}
                </Link>
            </div>
            <div className="mt-4 flex items-center gap-3 pt-3 border-t border-slate-100 text-xs">
                {topic.docs_link && (
                    <Link href={topic.docs_link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-slate-500 hover:text-blue-700 font-medium">
                        <ExternalLink size={13} /> Docs
                    </Link>
                )}
                {topic.yt_link && (
                    <Link href={topic.yt_link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-slate-500 hover:text-red-600 font-medium">
                        <Play size={13} /> Watch
                    </Link>
                )}
            </div>
        </div>
    );
}