export const metadata = {
    title: "Terms of Service — Math2Model",
    description: "Terms of Service for using the Math2Model platform.",
};

export default function TermsPage() {
    return (
        <main className="flex-1 bg-white text-[#172033]">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 py-10 sm:py-16 lg:px-10 lg:py-20">
                <div className="border-b border-slate-200 pb-8">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Legal</span>
                    <h1 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">Terms of Service</h1>
                    <p className="mt-2 text-xs text-slate-500">Last updated: October 2026</p>
                </div>

                <div className="mt-8 space-y-8 text-sm leading-7 text-slate-600">
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-[#172033]">1. Educational Purpose</h2>
                        <p>
                            All content provided on Math2Model—including curriculum notes, paper summaries, code snippets, and mathematical observations—is for educational, educational research, and self-study purposes only.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-[#172033]">2. Intellectual Property</h2>
                        <p>
                            Original mathematical guides, explanations, and site code created by Math2Model belong to the platform. External research paper abstracts and links remain the intellectual property of their respective authors and publishers (e.g., arXiv, NeurIPS, IEEE).
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-[#172033]">3. Disclaimer of Warranty</h2>
                        <p>
                            Content on this site is provided "as is" without warranties of any kind. While we strive for absolute accuracy in mathematical derivations and code implementations, Math2Model is not liable for errors or omissions.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-[#172033]">4. Modifications</h2>
                        <p>
                            We reserve the right to modify or update these terms and our learning materials at any time without prior notice.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}