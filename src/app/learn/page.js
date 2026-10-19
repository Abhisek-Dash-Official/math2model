import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, FileText, FlaskConical, Code2, ArrowUpRight } from "lucide-react";

const sections = [
    {
        number: "01",
        title: "Curriculum",
        description: "Build a strong foundation in mathematics and understand how its concepts power modern machine learning models.",
        topics: ["Linear Algebra", "Probability & Statistics", "Calculus", "Machine Learning", "Deep Learning"],
        href: "/learn/curriculum",
        icon: BookOpen,
        label: "Structured learning",
    },
    {
        number: "02",
        title: "Research",
        description: "Explore influential research papers, understand their central ideas, and examine the mathematics behind their contributions.",
        topics: ["Paper summaries", "Core methodologies", "Mathematical derivations", "Research insights"],
        href: "/learn/research",
        icon: FileText,
        label: "Published research",
    },
    {
        number: "03",
        title: "Personal Research",
        description: "Document original explorations, mathematical observations, experiments, and ideas developed through independent study.",
        topics: ["Research notes", "Original ideas", "Experiments", "Observations"],
        href: "/learn/personal-research",
        icon: FlaskConical,
        label: "Independent exploration",
    },
    {
        number: "04",
        title: "Implementations",
        description: "Turn mathematical understanding into working code, from fundamental algorithms to modern neural network architectures.",
        topics: ["Python implementations", "Algorithms from scratch", "Neural networks", "Model experiments"],
        href: "/learn/implementations",
        icon: Code2,
        label: "Theory into practice",
    },
];

const principles = [
    { number: "01", title: "Understand the mathematics", description: "Learn the equations, assumptions, and mathematical foundations behind each concept." },
    { number: "02", title: "Connect theory to models", description: "See how mathematical principles translate into machine learning architectures and algorithms." },
    { number: "03", title: "Implement and experiment", description: "Reproduce ideas in code and develop an intuition through practical experiments." },
];

export default function LearnPage() {
    return (
        <main className="flex-1 bg-white text-[#172033] overflow-x-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-16 lg:px-10 lg:py-20">
                {/* Hero Section */}
                <section className="grid items-center gap-10 border-b border-slate-200 pb-12 sm:pb-16 lg:min-h-140 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:pb-20">
                    <div className="min-w-0">
                        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                            <span className="size-2.5 shrink-0 rounded-xs bg-blue-700" />
                            The learning hub
                        </div>

                        <h1 className="mt-5 sm:mt-7 text-3xl sm:text-5xl lg:text-[64px] font-semibold leading-[1.1] tracking-[-0.055em]">
                            Learn the math.
                            <br className="hidden sm:inline" />
                            Understand the model.
                        </h1>

                        <p className="mt-4 sm:mt-6 text-base sm:text-[17px] leading-7 sm:leading-8 text-slate-600 max-w-xl">
                            A structured path through mathematical foundations, machine learning research, independent exploration, and practical implementations.
                        </p>

                        <div className="mt-5 flex items-stretch gap-3">
                            <span className="w-0.5 shrink-0 bg-blue-700" />
                            <p className="text-sm leading-6 text-slate-500 max-w-xl">
                                Mathematics is the foundation. Research provides the insight. Implementation turns understanding into something you can test.
                            </p>
                        </div>

                        <div className="mt-7">
                            <Link
                                href="/learn/curriculum"
                                className="inline-flex w-full sm:w-auto min-h-12 items-center justify-center gap-3 rounded-md bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
                            >
                                Explore the curriculum
                                <ArrowRight size={17} />
                            </Link>
                        </div>
                    </div>

                    <div className="hidden lg:block mx-auto w-full lg:max-w-none">
                        <Image
                            src="/images/math-hero.png"
                            alt="Mathematical concepts and equations connecting to a neural network"
                            width={720}
                            height={600}
                            priority
                            sizes="45vw"
                            className="h-auto w-full object-contain"
                        />
                    </div>
                </section>

                {/* Main Sections  */}
                <section className="py-12 sm:py-16">
                    <div className="flex flex-col gap-4">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
                                Explore Math2Model
                            </p>
                            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-[42px] font-semibold tracking-[-0.045em] leading-tight">
                                Four ways to understand modern AI.
                            </h2>
                        </div>

                        <p className="text-sm leading-7 text-slate-500 max-w-xl">
                            Learn the theory, explore the research, examine original work, and implement the ideas yourself.
                        </p>
                    </div>

                    <div className="mt-8 sm:mt-9 grid gap-5 sm:grid-cols-2">
                        {sections.map((section) => {
                            const Icon = section.icon;

                            return (
                                <Link
                                    key={section.number}
                                    href={section.href}
                                    className="group flex flex-col justify-between border border-slate-200 p-5 sm:p-8 transition-colors hover:border-blue-300"
                                >
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <span className="font-mono text-sm text-slate-400">
                                                {section.number} / 04
                                            </span>
                                            <Icon size={22} strokeWidth={1.6} className="text-blue-700" />
                                        </div>

                                        <p className="mt-6 sm:mt-8 text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-700">
                                            {section.label}
                                        </p>

                                        <h3 className="mt-2 text-xl sm:text-[28px] font-semibold tracking-[-0.04em] leading-snug">
                                            {section.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-6 sm:leading-7 text-slate-600">
                                            {section.description}
                                        </p>

                                        <div className="mt-5 flex flex-wrap gap-2">
                                            {section.topics.map((topic) => (
                                                <span
                                                    key={topic}
                                                    className="border border-slate-200 px-2.5 py-1 text-xs text-slate-600 rounded-xs"
                                                >
                                                    {topic}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                                        <span className="text-sm font-semibold text-slate-700 transition-colors group-hover:text-blue-700">
                                            Explore section
                                        </span>
                                        <ArrowUpRight
                                            size={17}
                                            className="text-slate-400 transition-colors group-hover:text-blue-700"
                                        />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </section>

                {/* Learning Principles */}
                <section className="border-t border-slate-200 py-12 sm:py-16">
                    <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
                                How to approach learning
                            </p>
                            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-[40px] font-semibold leading-tight tracking-[-0.045em]">
                                From first principles to working models.
                            </h2>
                            <p className="mt-4 sm:mt-5 text-sm leading-7 text-slate-600 max-w-xl">
                                The goal is not just to use machine learning tools. It is to understand why they work and how their underlying ideas fit together.
                            </p>
                        </div>

                        <div className="divide-y divide-slate-200 border-y border-slate-200">
                            {principles.map((principle) => (
                                <div key={principle.number} className="grid gap-2 sm:gap-3 py-6 sm:grid-cols-[56px_1fr]">
                                    <span className="font-mono text-sm text-blue-700">
                                        {principle.number}
                                    </span>
                                    <div>
                                        <h3 className="text-lg font-semibold tracking-tight">
                                            {principle.title}
                                        </h3>
                                        <p className="mt-2 text-sm leading-7 text-slate-600">
                                            {principle.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Banner */}
                <section className="bg-[#172033] px-6 py-8 sm:px-10 sm:py-12 text-white rounded-lg sm:rounded-none">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">
                                Start with the foundations
                            </p>
                            <h2 className="mt-2 sm:mt-3 text-xl sm:text-3xl font-semibold tracking-[-0.04em] leading-snug">
                                Build understanding, one concept at a time.
                            </h2>
                            <p className="mt-2 sm:mt-3 text-sm leading-7 text-slate-300 max-w-xl">
                                Begin with the mathematics, then follow the connections to machine learning and modern AI.
                            </p>
                        </div>

                        <Link
                            href="/learn/curriculum"
                            className="inline-flex w-full sm:w-auto shrink-0 items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#172033] transition-colors hover:bg-slate-100"
                        >
                            Start learning <ArrowUpRight size={16} />
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
}