import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { Calendar, User, FileText, Download } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import researchPapers from "@/config/personal-research-papers.json";

export async function generateStaticParams() {
    return researchPapers.map((paper) => ({
        id: paper.id,
    }));
}

const mdxComponents = {
    table: ({ children }) => (
        <div className="my-8 w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs">
            <table className="w-full text-left border-collapse text-sm">{children}</table>
        </div>
    ),
    thead: ({ children }) => (
        <thead className="bg-slate-50/80 text-slate-900 border-b border-slate-200 font-semibold">{children}</thead>
    ),
    tbody: ({ children }) => (
        <tbody className="divide-y divide-slate-100 text-slate-700">{children}</tbody>
    ),
    tr: ({ children }) => (
        <tr className="hover:bg-slate-50/50 transition-colors">{children}</tr>
    ),
    th: ({ children }) => (
        <th className="px-5 py-3.5 text-xs uppercase tracking-wider text-slate-600 font-semibold">{children}</th>
    ),
    td: ({ children }) => (
        <td className="px-5 py-3.5 text-slate-700 whitespace-nowrap">{children}</td>
    ),
    pre: ({ children }) => (
        <pre className="my-6 overflow-x-auto rounded-xl bg-slate-900 p-5 text-slate-100 text-xs sm:text-sm font-mono shadow-inner">{children}</pre>
    ),
    code: ({ children, className }) => {
        if (!className) {
            return <code className="bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded text-xs font-mono border border-slate-200">{children}</code>;
        }
        return <code className={className}>{children}</code>;
    },
};

export default async function PersonalResearchDetailPage({ params }) {
    const resolvedParams = await params;
    const paper = researchPapers.find((p) => p.id === resolvedParams.id);

    if (!paper) {
        notFound();
    }

    let mdxSource = "";
    try {
        const filePath = path.join(process.cwd(), "src", paper.filepath);
        if (fs.existsSync(filePath)) {
            mdxSource = fs.readFileSync(filePath, "utf8");
        } else {
            mdxSource = "# Content Not Found\n\nCould not locate file at: `" + paper.filepath + "`";
        }
    } catch (e) {
        mdxSource = "Error loading research content.";
    }

    let sourceFiles = [];
    try {
        const sourceDirPath = path.join(process.cwd(), "src", paper.source_dir);
        if (fs.existsSync(sourceDirPath)) {
            const files = fs.readdirSync(sourceDirPath);
            sourceFiles = files.filter((file) => !file.startsWith("."));
        }
    } catch (e) {
        sourceFiles = [];
    }

    return (
        <main className="flex-1 bg-gradient-to-b from-slate-50/50 to-white text-[#172033] w-full overflow-x-hidden min-h-screen">
            <style dangerouslySetInnerHTML={{
                __html: `
                .katex-display {
                    overflow-x: auto;
                    overflow-y: hidden;
                    padding: 0.75rem 0;
                    margin: 1.5rem 0;
                    scrollbar-width: thin;
                }
                .katex {
                    font-size: 1.05em;
                }
            ` }} />

            <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8 py-10 sm:py-16 lg:py-20">
                <div className="bg-white border border-slate-200/80 shadow-xs rounded-2xl p-6 sm:p-10 space-y-6">
                    <div className="flex flex-wrap gap-2">
                        {paper.tags.map((tag) => (
                            <span
                                key={tag}
                                className="bg-blue-50 text-blue-700 text-[11px] font-semibold px-3 py-1 rounded-full border border-blue-100/60"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
                        {paper.title}
                    </h1>

                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                        {paper.description}
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-100 text-xs text-slate-500">
                        <div className="flex flex-wrap items-center gap-6">
                            <span className="flex items-center gap-1.5 font-medium">
                                <Calendar size={14} className="text-blue-600 shrink-0" /> {paper.date_published}
                            </span>
                            <span className="flex items-center gap-1.5 font-medium">
                                <User size={14} className="text-blue-600 shrink-0" /> {paper.authors.join(", ")}
                            </span>
                        </div>
                        <span className="hidden lg:flex items-center gap-1.5 font-mono text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200">
                            <FileText size={13} className="shrink-0" /> {paper.filepath}
                        </span>
                    </div>
                </div>

                {sourceFiles.length > 0 && (
                    <div className="mt-8 border border-blue-100 bg-blue-50/40 p-6 rounded-2xl space-y-4 shadow-xs">
                        <h2 className="text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center gap-2">
                            <Download size={16} className="text-blue-600" /> Research Artifacts & Source PDFs
                        </h2>
                        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2">
                            {sourceFiles.map((file) => {
                                const fileDownloadPath = `/${paper.source_dir}${file}`;
                                return (
                                    <a
                                        key={file}
                                        href={fileDownloadPath}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between p-3.5 bg-white border border-slate-200/80 rounded-xl text-xs font-medium text-slate-700 hover:border-blue-500 hover:shadow-xs hover:text-blue-700 transition-all group"
                                    >
                                        <span className="truncate pr-2 font-mono text-slate-600 group-hover:text-blue-700">{file}</span>
                                        <Download size={15} className="shrink-0 text-slate-400 group-hover:text-blue-600 transition-colors" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                )}

                <article className="mt-12 text-base text-slate-700 leading-8 break-words bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-12 shadow-xs">
                    <MDXRemote
                        source={mdxSource}
                        components={mdxComponents}
                        options={{
                            mdxOptions: {
                                remarkPlugins: [remarkMath, remarkGfm],
                                rehypePlugins: [rehypeKatex],
                            },
                        }}
                    />
                </article>
            </div>
        </main>
    );
}