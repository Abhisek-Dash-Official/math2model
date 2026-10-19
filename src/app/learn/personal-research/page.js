import Link from "next/link";
import { FlaskConical, ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Personal Research — Under Construction",
    description: "Original explorations and mathematical observations.",
};

export default function PersonalResearchPage() {
    return (
        <main className="flex-1 flex items-center justify-center bg-white text-[#172033] px-4 py-20">
            <div className="max-w-md text-center space-y-6">
                <div className="mx-auto inline-flex size-16 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                    <FlaskConical size={32} strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Personal Research</span>
                    <h1 className="text-3xl font-semibold tracking-tight">Under Construction</h1>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        Documenting original mathematical explorations, experimental notes, and independent observations. This section is currently being compiled.
                    </p>
                </div>
                <div>
                    <Link
                        href="/learn"
                        className="inline-flex items-center gap-2 rounded-md bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
                    >
                        <ArrowLeft size={16} /> Back to Learning Hub
                    </Link>
                </div>
            </div>
        </main>
    );
}