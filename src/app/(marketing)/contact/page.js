import { Mail, BookOpen } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Contact — Math2Model",
    description: "Get in touch with Math2Model for questions, feedback, or research collaboration.",
};

function GithubIcon({ className = "size-5" }) {
    return (
        <svg
            className={className}
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
        </svg>
    );
}

export default function ContactPage() {
    return (
        <main className="flex-1 bg-white text-[#172033]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-16 lg:px-10 lg:py-20">
                {/* Header */}
                <div className="border-b border-slate-200 pb-10 sm:pb-12">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Contact & Connect</span>
                    <h1 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-[-0.055em] leading-[1.1]">
                        Get in touch.
                    </h1>
                    <p className="mt-4 text-base sm:text-[17px] leading-7 text-slate-600 max-w-2xl">
                        Have questions about the curriculum, feedback on derivations, or interested in research collaboration? Reach out through our primary channels.
                    </p>
                </div>

                {/* Contact Cards Grid */}
                <div className="py-12 sm:py-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Direct Email */}
                    <div className="border border-slate-200 p-6 sm:p-8 rounded-lg bg-white space-y-4 hover:border-blue-300 transition-colors">
                        <div className="p-3 bg-blue-50 text-blue-700 rounded-md w-fit">
                            <Mail size={22} />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold tracking-tight">Direct Email</h2>
                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                For inquiries, academic questions, and research discussions.
                            </p>
                            <Link
                                href="mailto:contact@math2model.com"
                                className="mt-4 text-sm font-medium text-blue-700 hover:underline block"
                            >
                                contact@math2model.com
                            </Link>
                        </div>
                    </div>

                    {/* GitHub Repository */}
                    <div className="border border-slate-200 p-6 sm:p-8 rounded-lg bg-white space-y-4 hover:border-blue-300 transition-colors">
                        <div className="p-3 bg-blue-50 text-blue-700 rounded-md w-fit">
                            <GithubIcon size={22} />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold tracking-tight">GitHub Repository</h2>
                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                Explore source code, report issues, or contribute to curriculum content.
                            </p>
                            <Link
                                href="https://github.com/Abhisek-Dash-Official/math2model"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 text-sm font-medium text-blue-700 hover:underline block font-mono"
                            >
                                github.com/Abhisek-Dash-Official/math2model
                            </Link>
                        </div>
                    </div>

                    {/* Curriculum & Research Feedback */}
                    <div className="border border-slate-200 p-6 sm:p-8 rounded-lg bg-white space-y-4 hover:border-blue-300 transition-colors sm:col-span-2 lg:col-span-1">
                        <div className="p-3 bg-blue-50 text-blue-700 rounded-md w-fit">
                            <BookOpen size={22} />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold tracking-tight">Open Research</h2>
                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                All mathematical models, implementations, and derivations are open-access.
                            </p>
                            <Link
                                href="/learn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 text-sm font-medium text-blue-700 hover:underline block font-mono"
                            >
                                Math2Model Open Hub
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}