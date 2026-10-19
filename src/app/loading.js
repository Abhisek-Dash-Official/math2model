export default function Loading() {
    return (
        <main className="flex-1 flex items-center justify-center bg-white px-4 py-20 min-h-[70vh]">
            <div className="flex flex-col items-center gap-4">
                <div className="size-8 animate-spin rounded-full border-2 border-slate-200 border-t-blue-700" />
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Loading content...</p>
            </div>
        </main>
    );
}