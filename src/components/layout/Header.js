import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const navigation = [
    { label: "Curriculum", href: "/learn/curriculum" },
    { label: "Research", href: "/learn/research" },
    { label: "Personal research", href: "/learn/personal-research" },
    { label: "Implementations", href: "/learn/implementations" },
];

export default function Header() {
    return (
        <header className="relative z-10 border-b border-slate-200 bg-white">
            <div className="mx-auto flex h-16 max-w-310 items-center justify-between gap-6 px-6 lg:px-10">
                <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Math2Model home">
                    <Image src="/logo.png" alt="#" width={36} height={36} priority className="h-9 w-9 rounded-md object-contain" />
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

                <Link href="/learn" className="inline-flex shrink-0 items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2.5 text-[12px] font-semibold text-slate-700 transition-colors hover:border-blue-700 hover:bg-blue-700 hover:text-white">
                    Start learning <ArrowUpRight size={14} />
                </Link>
            </div>
        </header>
    );
}