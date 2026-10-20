import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { Calendar, User, Download } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import researchPapers from "@/config/personal-research-papers.json";

export async function generateStaticParams() {
    return researchPapers.map((paper) => ({ id: paper.id }));
}

const mdxComponents = {
    table: ({ children }) => (
        <div className="my-8 w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs">
            <table className="w-full border-collapse text-left text-sm">{children}</table>
        </div>
    ),
    thead: ({ children }) => (
        <thead className="border-b border-slate-200 bg-slate-100/80 font-semibold text-slate-900">{children}</thead>
    ),
    tbody: ({ children }) => (
        <tbody className="divide-y divide-slate-100 text-slate-700">{children}</tbody>
    ),
    tr: ({ children }) => (
        <tr className="transition-colors hover:bg-slate-50">{children}</tr>
    ),
    th: ({ children }) => (
        <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-700">{children}</th>
    ),
    td: ({ children }) => (
        <td className="whitespace-nowrap px-5 py-3.5 text-slate-700">{children}</td>
    ),
    pre: ({ children }) => (
        <pre className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-900 p-5 font-mono text-xs text-slate-100 shadow-inner sm:text-sm">{children}</pre>
    ),
};

export default async function PersonalResearchDetailPage({ params }) {
    const resolvedParams = await params;
    const paper = researchPapers.find((p) => p.id === resolvedParams.id);

    if (!paper) notFound();

    let mdxSource = "";

    try {
        const filePath = path.join(process.cwd(), "src", paper.filepath);
        mdxSource = fs.existsSync(filePath)
            ? fs.readFileSync(filePath, "utf8")
            : `# Content Not Found\n\nCould not locate file at: \`${paper.filepath}\``;
    } catch {
        mdxSource = "Error loading research content.";
    }

    let sourceFiles = [];

    try {
        const sourceDirPath = path.join(process.cwd(), "src", paper.source_dir);

        if (fs.existsSync(sourceDirPath)) {
            sourceFiles = fs.readdirSync(sourceDirPath).filter((file) => !file.startsWith("."));
        }
    } catch {
        sourceFiles = [];
    }

    return (
        <main className="min-h-screen w-full flex-1 bg-[#f8fafc] py-10 text-slate-900 lg:py-16">
            <style dangerouslySetInnerHTML={{
                __html: `
                    article p {
                        text-align: justify;
                        text-justify: inter-word;
                        margin-bottom: 1.25rem;
                        line-height: 1.8;
                    }

                    article .katex {
                        font-size: 1.05em;
                    }

                    article .katex-display,
                    article p:has(> .katex:only-child) {
                        display: block;
                        width: 100%;
                        max-width: 100%;
                        box-sizing: border-box;
                        overflow-x: auto;
                        overflow-y: hidden;
                        padding: 1.25rem 1.5rem;
                        margin: 1.75rem 0;
                        background: #f8fafc;
                        border: 1px solid #e2e8f0;
                        border-left: 4px solid #3b82f6;
                        border-radius: 0.75rem;
                        text-align: left;
                        scrollbar-width: thin;
                        scrollbar-color: #cbd5e1 transparent;
                    }

                    article .katex-display > .katex,
                    article p:has(> .katex:only-child) > .katex {
                        display: inline-block;
                        white-space: nowrap;
                        color: #0f172a;
                        font-size: 1.12em;
                        line-height: 1.8;
                        vertical-align: middle;
                    }

                    article .katex-display::-webkit-scrollbar,
                    article p:has(> .katex:only-child)::-webkit-scrollbar {
                        height: 5px;
                    }

                    article .katex-display::-webkit-scrollbar-track,
                    article p:has(> .katex:only-child)::-webkit-scrollbar-track {
                        background: transparent;
                    }

                    article .katex-display::-webkit-scrollbar-thumb,
                    article p:has(> .katex:only-child)::-webkit-scrollbar-thumb {
                        background: #cbd5e1;
                        border-radius: 4px;
                    }

                    article img {
                        max-width: 100%;
                        height: auto;
                        border-radius: 0.75rem;
                    }

                    article :not(pre) > code {
                        padding: 0.15rem 0.4rem;
                        background: #f1f5f9;
                        border: 1px solid #e2e8f0;
                        border-radius: 0.375rem;
                        font-size: 0.875em;
                    }
                `
            }} />

            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-10">
                    <div className="flex flex-wrap gap-2">
                        {paper.tags.map((tag) => (
                            <span key={tag} className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-700">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                        {paper.title}
                    </h1>

                    <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                        {paper.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-6 border-t border-slate-100 pt-6 text-xs text-slate-500 font-medium">
                        <span className="flex items-center gap-1.5">
                            <Calendar size={14} className="shrink-0 text-blue-600" />
                            Published: {paper.date_published}
                        </span>

                        <span className="flex items-center gap-1.5">
                            <User size={14} className="shrink-0 text-blue-600" />
                            {paper.authors.join(", ")}
                        </span>
                    </div>
                </div>

                {sourceFiles.length > 0 && (
                    <div className="mt-8 space-y-4 rounded-2xl border border-blue-100 bg-blue-50/40 p-6 shadow-xs">
                        <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-900">
                            <Download size={16} className="text-blue-600" />
                            Research Artifacts & Source PDFs
                        </h2>

                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {sourceFiles.map((file) => {
                                const fileDownloadPath = `/${paper.source_dir}${file}`;

                                return (
                                    <a
                                        key={file}
                                        href={fileDownloadPath}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center justify-between rounded-xl border border-slate-200/80 bg-white p-3.5 text-xs font-medium text-slate-700 transition-colors hover:border-blue-500 hover:text-blue-700"
                                    >
                                        <span className="truncate pr-2 font-mono text-slate-600 group-hover:text-blue-700">
                                            {file}
                                        </span>
                                        <Download size={15} className="shrink-0 text-slate-400 transition-colors group-hover:text-blue-600" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                )}

                <article className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 text-base leading-8 text-slate-700 shadow-xs sm:p-12">
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