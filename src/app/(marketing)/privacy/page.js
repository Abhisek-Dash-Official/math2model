export const metadata = {
    title: "Privacy Policy — Math2Model",
    description: "Privacy Policy for Math2Model educational platform.",
};

export default function PrivacyPage() {
    return (
        <main className="flex-1 bg-white text-[#172033]">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 py-10 sm:py-16 lg:px-10 lg:py-20">
                <div className="border-b border-slate-200 pb-8">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Legal</span>
                    <h1 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">Privacy Policy</h1>
                    <p className="mt-2 text-xs text-slate-500">Last updated: October 2026</p>
                </div>

                <div className="mt-8 space-y-8 text-sm leading-7 text-slate-600">
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-[#172033]">1. Information We Collect</h2>
                        <p>
                            Math2Model is designed with privacy in mind. We do not require account registration to view curriculum, research papers, or documentation. We may collect minimal non-personally identifiable technical information such as browser type, page views, and referrer URLs purely for website analytics and performance improvements.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-[#172033]">2. Use of Information</h2>
                        <p>
                            Any analytics data collected is strictly used to monitor site stability, understand popular learning paths, and optimize our educational user interface. We do not sell, rent, or share user data with third parties or advertisers.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-[#172033]">3. Cookies</h2>
                        <p>
                            We use essential functional cookies or local storage strictly required for website operations (such as saving theme preferences or navigation state).
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-[#172033]">4. External Links</h2>
                        <p>
                            Our platform includes direct links to external documentation (e.g., Python docs, arXiv papers, NumPy guides). Math2Model is not responsible for the privacy practices or content of third-party websites.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-[#172033]">5. Contact</h2>
                        <p>
                            For questions regarding this Privacy Policy, feel free to contact us at <a href="mailto:contact@math2model.com" className="text-blue-700 underline">contact@math2model.com</a>.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}