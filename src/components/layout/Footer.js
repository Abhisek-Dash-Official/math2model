import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const links = [
    { label: "Curriculum", href: "/learn/curriculum" },
    { label: "Research", href: "/learn/research" },
    { label: "Personal research", href: "/learn/personal-research" },
    { label: "Implementations", href: "/learn/implementations" },
];

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                <div className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-16 lg:py-12">
                    <div>
                        <Link href="/" className="inline-flex items-center gap-3">
                            <Image src="/logo.png" alt="Math2Model Logo" width={36} height={36} priority className="h-9 w-9 rounded-md object-contain" />
                            <span className="text-[18px] font-bold tracking-[-0.045em] text-[#172033]">
                                Math2Model<span className="text-blue-700">.</span>
                            </span>
                        </Link>
                        <p className="mt-4 max-w-sm text-[13px] leading-6 text-slate-500">
                            Connecting mathematical foundations with machine learning, modern AI research, and practical implementations.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-900">Explore</h3>
                        <div className="mt-4 flex flex-col items-start gap-3">
                            {links.map((item) => (
                                <Link key={item.href} href={item.href} className="text-[12px] text-slate-500 transition-colors hover:text-blue-700">
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-900">The idea</h3>
                        <p className="mt-4 max-w-xs text-[12px] leading-6 text-slate-500">
                            Understand the mathematics. Follow the research. Build the models.
                        </p>
                        <Link href="/learn" className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold text-blue-700 transition-colors hover:text-blue-900">
                            Start exploring <ArrowUpRight size={14} />
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col gap-3 border-t border-slate-200 py-5 text-[11px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                    <span>© {new Date().getFullYear()} Math2Model. All rights reserved.</span>
                    <span>Mathematics · Machine Learning · Research</span>
                </div>
            </div>
        </footer>
    );
}