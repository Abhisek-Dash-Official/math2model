"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navigation = [
    { label: "Curriculum", href: "/learn/curriculum" },
    { label: "Research", href: "/learn/research" },
    { label: "Personal research", href: "/learn/personal-research" },
    { label: "Implementations", href: "/learn/implementations" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="relative z-50 border-b border-slate-200 bg-white">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
                <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Math2Model home">
                    <Image src="/logo.png" alt="Math2Model Logo" width={36} height={36} priority className="h-9 w-9 rounded-md object-contain" />
                    <span className="text-[18px] font-bold tracking-[-0.045em] text-[#172033]">
                        Math2Model<span className="text-blue-700">.</span>
                    </span>
                </Link>

                <nav className="hidden items-center gap-6 text-[13px] font-medium text-slate-600 lg:flex xl:gap-8">
                    {navigation.map((item) => (
                        <Link key={item.href} href={item.href} className="whitespace-nowrap transition-colors hover:text-blue-700">
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <Link href="/learn" className="hidden sm:inline-flex shrink-0 items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-[12px] font-semibold text-slate-700 transition-colors hover:border-blue-700 hover:bg-blue-700 hover:text-white">
                        Start learning <ArrowUpRight size={14} />
                    </Link>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
                        aria-label="Toggle navigation menu"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="border-b border-slate-200 bg-white px-4 pb-6 pt-2 lg:hidden">
                    <nav className="flex flex-col gap-3">
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="py-2 text-sm font-medium text-slate-700 hover:text-blue-700"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            href="/learn"
                            onClick={() => setIsOpen(false)}
                            className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-blue-700 px-4 py-2.5 text-xs font-semibold text-white sm:hidden"
                        >
                            Start learning <ArrowUpRight size={14} />
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}