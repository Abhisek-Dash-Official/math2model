"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main className="flex-1 flex items-center justify-center bg-white text-[#172033] px-4 py-20 min-h-[70vh]">
            <div className="max-w-md text-center space-y-6">
                <div className="mx-auto inline-flex size-16 items-center justify-center rounded-full bg-red-50 text-red-600">
                    <AlertTriangle size={32} strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-red-600">System Error</span>
                    <h1 className="text-3xl font-semibold tracking-tight">Something went wrong</h1>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        An unexpected error occurred while rendering this component or fetching mathematical content.
                    </p>
                </div>
                <div className="flex items-center justify-center gap-3">
                    <button
                        onClick={() => reset()}
                        className="inline-flex items-center gap-2 rounded-md bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
                    >
                        <RotateCcw size={15} /> Try again
                    </button>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                    >
                        <Home size={15} /> Home
                    </Link>
                </div>
            </div>
        </main>
    );
}