import Link from "next/link";
import { FileQuestion, ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Page Not Found — Math2Model",
    description: "The page you are looking for does not exist.",
};

export default function NotFound() {
    return (
        <main className="flex-1 flex items-center justify-center bg-white text-[#172033] px-4 py-20 min-h-[70vh]">
            <div className="max-w-md text-center space-y-6">
                <div className="mx-auto inline-flex size-16 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                    <FileQuestion size={32} strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">404 Error</span>
                    <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        The mathematical proof or research page you are looking for might have been moved or doesn't exist.
                    </p>
                </div>
                <div>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-md bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
                    >
                        <ArrowLeft size={16} /> Back to Home
                    </Link>
                </div>
            </div>
        </main>
    );
}