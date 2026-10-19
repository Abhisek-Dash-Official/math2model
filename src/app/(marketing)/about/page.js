import Link from "next/link";
import { ArrowUpRight, BookOpen, BrainCircuit, Code2, FlaskConical } from "lucide-react";

export const metadata = {
    title: "About — Math2Model",
    description: "Learn about Math2Model's mission to bridge mathematical theory and practical AI execution.",
};

const pillars = [
    {
        icon: BookOpen,
        title: "Rigorous Mathematics",
        description: "We focus on the exact linear algebra, calculus, and probability behind AI rather than treating models like black boxes.",
    },
    {
        icon: BrainCircuit,
        title: "Research Insights",
        description: "We dissect seminal papers to trace how theoretical mathematical concepts translate into modern AI breakthroughs.",
    },
    {
        icon: Code2,
        title: "First-Principles Code",
        description: "Implementation turns theory into intuition. We emphasize writing models and algorithms from scratch in Python.",
    },
    {
        icon: FlaskConical,
        title: "Independent Exploration",
        description: "Encouraging continuous curiosity, experimentation, and original observations in machine learning research.",
    },
];

export default function AboutPage() {
    return (
        <main className="flex-1 bg-white text-[#172033]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-16 lg:px-10 lg:py-20">
                {/* Header */}
                <div className="border-b border-slate-200 pb-10 sm:pb-12">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">About Math2Model</span>
                    <h1 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-[-0.055em] leading-[1.1] max-w-3xl">
                        Bridging pure mathematics and machine learning.
                    </h1>
                    <p className="mt-4 text-base sm:text-[17px] leading-7 text-slate-600 max-w-2xl">
                        Math2Model is an open educational and research initiative designed to make the mathematical foundations of modern artificial intelligence structured, accessible, and actionable.
                    </p>
                </div>

                {/* Mission Section */}
                <div className="py-12 sm:py-16 grid gap-10 lg:grid-cols-2 items-start">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Our Core Mission</h2>
                        <p className="mt-4 text-sm leading-7 text-slate-600">
                            Modern machine learning frameworks allow anyone to build neural networks in a few lines of code. However, true innovation requires understanding <i>why</i> these models work, <i>how</i> optimization functions behave, and <i>where</i> mathematical assumptions hold or break.
                        </p>
                        <p className="mt-4 text-sm leading-7 text-slate-600">
                            Math2Model provides a clear, step-by-step path connecting linear algebra, multivariate calculus, and probability directly to neural network architectures and research literature.
                        </p>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-lg space-y-4">
                        <h3 className="text-lg font-semibold text-[#172033]">The Math2Model Philosophy</h3>
                        <ul className="space-y-3 text-sm text-slate-600">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-700 font-bold">•</span>
                                <span><strong>Theory first:</strong> Never skip the derivation or foundational assumptions.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-700 font-bold">•</span>
                                <span><strong>Code second:</strong> Verify mathematical understanding through clean Python implementations.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-700 font-bold">•</span>
                                <span><strong>Research continuously:</strong> Stay grounded in original academic literature and paper analyses.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Pillars Grid */}
                <div className="border-t border-slate-200 pt-12 sm:pt-16">
                    <h2 className="text-2xl font-semibold tracking-tight mb-8">What We Offer</h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {pillars.map((pillar) => {
                            const Icon = pillar.icon;
                            return (
                                <div key={pillar.title} className="border border-slate-200 p-6 rounded-lg bg-white">
                                    <Icon size={24} className="text-blue-700 mb-4" />
                                    <h3 className="text-base font-semibold text-[#172033]">{pillar.title}</h3>
                                    <p className="mt-2 text-xs leading-6 text-slate-600">{pillar.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 bg-[#172033] text-white p-8 sm:p-12 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div>
                        <h3 className="text-2xl font-semibold">Ready to start learning?</h3>
                        <p className="mt-2 text-sm text-slate-300">Explore our structured curriculum covering foundations to deep learning.</p>
                    </div>
                    <Link
                        href="/learn/curriculum"
                        className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-[#172033] transition-colors hover:bg-slate-100 shrink-0"
                    >
                        Explore Curriculum <ArrowUpRight size={16} />
                    </Link>
                </div>
            </div>
        </main>
    );
}