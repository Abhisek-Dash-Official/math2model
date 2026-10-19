"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs() {
    const pathname = usePathname();

    if (!pathname || pathname === "/") return null;
    const segments = pathname.split("/").filter(Boolean);

    return (
        <nav aria-label="Breadcrumb" className="border-b border-slate-100 bg-slate-50/50">
            <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 text-xs text-slate-500 sm:px-6 lg:px-10 overflow-x-auto">
                <Link
                    href="/"
                    className="inline-flex items-center gap-1 text-slate-400 hover:text-blue-700 transition-colors shrink-0"
                >
                    <Home size={13} />
                    <span>Home</span>
                </Link>

                {segments.map((segment, index) => {
                    const href = `/${segments.slice(0, index + 1).join("/")}`;
                    const isLast = index === segments.length - 1;

                    const formattedTitle = segment
                        .replace(/-/g, " ")
                        .replace(/^\w/, (c) => c.toUpperCase());

                    return (
                        <div key={href} className="flex items-center gap-2 shrink-0">
                            <ChevronRight size={13} className="text-slate-300" />
                            {isLast ? (
                                <span className="font-medium text-slate-800 capitalize">
                                    {formattedTitle}
                                </span>
                            ) : (
                                <Link
                                    href={href}
                                    className="hover:text-blue-700 transition-colors capitalize"
                                >
                                    {formattedTitle}
                                </Link>
                            )}
                        </div>
                    );
                })}
            </div>
        </nav>
    );
}