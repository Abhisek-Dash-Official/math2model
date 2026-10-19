import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight, BookOpen, Braces, ChartNoAxesCombined, Code2, FileText, Layers3, MoveUpRight } from "lucide-react";

const sections = [
  { number: "01", title: "Curriculum", description: "Build mathematical foundations, understand the algorithms, and discover how modern AI models work.", href: "/learn/curriculum", label: "Explore curriculum", icon: BookOpen, topics: ["Linear algebra", "Calculus", "Optimization", "Deep learning"] },
  { number: "02", title: "Research", description: "Explore influential research papers and understand the ideas behind advances in machine learning.", href: "/learn/research", label: "Read research", icon: FileText, topics: ["Research papers", "Paper explanations", "Related concepts"] },
  { number: "03", title: "Personal research", description: "Read original research, technical explorations, and mathematical ideas developed for Math2Model.", href: "/learn/personal-research", label: "View publications", icon: Layers3, topics: ["Original work", "Mathematical analysis", "Technical notes"] },
  { number: "04", title: "Implementations", description: "Turn mathematical understanding into working Python code through practical implementations.", href: "/learn/implementations", label: "Explore implementations", icon: Code2, topics: ["Python", "From-scratch models", "Practical experiments"] },
];

const foundations = [
  { title: "Linear Algebra", subtitle: "Vectors, matrices & transformations", tag: "MATHEMATICS", href: "/learn/curriculum/linear-algebra", symbol: "A·x = b" },
  { title: "Calculus", subtitle: "Derivatives, gradients & learning", tag: "MATHEMATICS", href: "/learn/curriculum/calculus", symbol: "∂L / ∂θ" },
  { title: "Optimization", subtitle: "Loss functions & gradient descent", tag: "MACHINE LEARNING", href: "/learn/curriculum/optimization", symbol: "θ − η∇L" },
  { title: "Transformers", subtitle: "Attention mechanisms & architectures", tag: "MODERN AI", href: "/learn/curriculum/transformers", symbol: "Attention(Q,K,V)" },
];

function SectionLabel({ children }) {
  return (
    <div className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700">
      <span className="h-2 w-2 rounded-xs bg-blue-700" />
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-[#172033] selection:bg-blue-100 selection:text-blue-950">
      <section className="relative overflow-hidden border-b border-slate-200">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage: "linear-gradient(to right, #e8edf5 1px, transparent 1px), linear-gradient(to bottom, #e8edf5 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "linear-gradient(to bottom, black, transparent 90%)",
          }}
        />

        <div className="relative mx-auto grid max-w-310 items-center gap-10 px-6 py-12 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-10 lg:py-16">
          <div>
            <SectionLabel>Mathematics · Machine learning · Research</SectionLabel>
            <h1 className="max-w-167.5 text-[clamp(42px,5.4vw,72px)] font-semibold leading-[1.07] tracking-[-0.065em] text-[#111a2e]">
              Understand the math. <span className="text-blue-700">Understand the model.</span>
            </h1>
            <p className="mt-7 max-w-132.5 text-[16px] leading-7 text-slate-600">
              Go beyond using AI. Learn the mathematical foundations behind algorithms, neural networks, and modern machine learning models—from equations to implementation.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/learn/curriculum" className="inline-flex items-center gap-3 rounded-md bg-blue-700 px-5 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-blue-800">
                Explore the curriculum <ArrowRight size={16} />
              </Link>
              <Link href="/learn/research" className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-5 py-3.5 text-[13px] font-semibold text-slate-700 transition-colors hover:border-slate-500">
                Discover research <ArrowUpRight size={15} />
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-slate-200 pt-5 text-[11px] font-medium uppercase tracking-[0.12em] text-slate-500">
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-700" /> Mathematics first</span>
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-700" /> Research driven</span>
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-700" /> Code grounded</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-130">
            <div className="rounded-md border border-slate-300 bg-white">
              <div className="flex items-center justify-between border-b border-slate-200 px-5 py-3.5">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">From mathematics to models</span>
                <span className="font-mono text-[10px] text-blue-700">FIG. 01</span>
              </div>

              <div className="p-5 sm:p-7">
                <div className="grid grid-cols-[1fr_28px_1fr] items-center gap-2">
                  <div className="rounded-md border border-slate-200 p-3 sm:p-4">
                    <div className="text-[10px] uppercase tracking-wider text-slate-500">Input</div>
                    <div className="mt-3 font-mono text-[19px] text-blue-800 sm:text-[23px]">x ∈ ℝⁿ</div>
                    <div className="mt-2 text-[11px] text-slate-500">Data & features</div>
                  </div>
                  <ArrowRight className="mx-auto text-slate-400" size={18} />
                  <div className="rounded-md border border-blue-200 bg-blue-50/70 p-3 sm:p-4">
                    <div className="text-[10px] uppercase tracking-wider text-blue-700">Transform</div>
                    <div className="mt-3 font-mono text-[19px] text-blue-800 sm:text-[23px]">fθ(x)</div>
                    <div className="mt-2 text-[11px] text-slate-500">Model function</div>
                  </div>
                </div>

                <div className="relative my-5 flex justify-center">
                  <div className="absolute left-1/2 top-0 h-full border-l border-dashed border-slate-300" />
                  <span className="relative bg-white px-3 font-mono text-[10px] text-slate-500">LEARNABLE PARAMETERS θ</span>
                </div>

                <div className="rounded-md border border-slate-200 p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider text-slate-500">Inside the model</span>
                    <span className="font-mono text-[10px] text-slate-400">ILLUSTRATION</span>
                  </div>
                  <svg viewBox="0 0 440 148" className="h-auto w-full" role="img" aria-label="A neural network with connected input, hidden, and output nodes">
                    {[0, 1, 2].map((layer) => {
                      const xs = [42, 220, 398][layer];
                      const counts = [4, 5, 3][layer];
                      return Array.from({ length: counts }, (_, i) => ({ x: xs, y: (148 - (counts - 1) * 25) / 2 + i * 25, layer, i }));
                    }).flat().map((node, i, nodes) => {
                      const nextLayer = nodes.filter((n) => n.layer === node.layer + 1);
                      return nextLayer.map((next, j) => <line key={`${i}-${j}`} x1={node.x} y1={node.y} x2={next.x} y2={next.y} stroke="#cbd5e1" strokeWidth="1" />);
                    })}
                    {[0, 1, 2].map((layer) => {
                      const xs = [42, 220, 398][layer];
                      const counts = [4, 5, 3][layer];
                      return Array.from({ length: counts }, (_, i) => {
                        const y = (148 - (counts - 1) * 25) / 2 + i * 25;
                        return <g key={`${layer}-${i}`}><circle cx={xs} cy={y} r="7" fill={layer === 1 ? "#2563eb" : "#fff"} stroke={layer === 1 ? "#2563eb" : "#64748b"} strokeWidth="1.5" /><circle cx={xs} cy={y} r="2" fill={layer === 1 ? "#fff" : "#2563eb"} /></g>;
                      });
                    })}
                    <text x="42" y="142" textAnchor="middle" fill="#64748b" fontSize="9">INPUT</text>
                    <text x="220" y="142" textAnchor="middle" fill="#64748b" fontSize="9">HIDDEN LAYERS</text>
                    <text x="398" y="142" textAnchor="middle" fill="#64748b" fontSize="9">OUTPUT</text>
                  </svg>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-md border border-slate-200 p-3">
                    <div className="text-[10px] text-slate-500">Objective</div>
                    <div className="mt-1 font-mono text-[15px] text-slate-800">min L(θ)</div>
                  </div>
                  <div className="rounded-md border border-slate-200 p-3">
                    <div className="text-[10px] text-slate-500">Update rule</div>
                    <div className="mt-1 font-mono text-[15px] text-slate-800">θ ← θ − η∇L</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-b-md border-t border-slate-200 bg-slate-50 px-5 py-3">
                <span className="text-[10px] text-slate-500">Mathematical foundations → learning systems</span>
                <span className="font-mono text-[10px] text-blue-700">M2M / 001</span>
              </div>
            </div>
            <div className="absolute -right-2 -top-2 -z-10 h-full w-full rounded-md border border-blue-200 sm:-right-3 sm:-top-3" />
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200">
        <div className="mx-auto grid max-w-310 gap-7 px-6 py-12 sm:grid-cols-3 lg:px-10">
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-slate-200 text-blue-700"><ChartNoAxesCombined size={19} /></div>
            <div><h3 className="text-[14px] font-semibold">Mathematical foundations</h3><p className="mt-1.5 text-[13px] leading-5 text-slate-500">Understand the principles behind the algorithms.</p></div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-slate-200 text-blue-700"><FileText size={19} /></div>
            <div><h3 className="text-[14px] font-semibold">Research connections</h3><p className="mt-1.5 text-[13px] leading-5 text-slate-500">Connect concepts to papers and new ideas.</p></div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-slate-200 text-blue-700"><Braces size={19} /></div>
            <div><h3 className="text-[14px] font-semibold">Practical implementation</h3><p className="mt-1.5 text-[13px] leading-5 text-slate-500">Move from equations to working Python code.</p></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-310 px-6 py-20 lg:px-10 lg:py-24">
        <div className="flex flex-col gap-4">
          <div>
            <SectionLabel>Explore Math2Model</SectionLabel>
            <h2 className="max-w-250 text-3xl font-semibold tracking-[-0.045em] sm:text-[42px]">
              Four ways to understand modern AI.
            </h2>
          </div>
          <p className="max-w-155 text-sm leading-7 text-slate-500">
            Learn the theory, explore the research, examine original work, and implement the ideas yourself.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <Link key={section.number} href={section.href} className="group flex min-h-71.25 flex-col rounded-md border border-slate-200 bg-white p-6 transition-colors hover:bg-slate-50 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-slate-400">{section.number} / 04</span>
                  <Icon size={19} strokeWidth={1.5} className="text-blue-700" />
                </div>
                <h3 className="mt-8 text-[23px] font-semibold tracking-[-0.04em]">{section.title}</h3>
                <p className="mt-3 max-w-110 text-[13px] leading-6 text-slate-600">{section.description}</p>
                <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                  {section.topics.map((topic) => <span key={topic} className="text-[10px] text-slate-500">{topic}</span>)}
                </div>
                <div className="mt-auto flex items-center justify-between border-t border-slate-200 pt-5">
                  <span className="text-[12px] font-semibold text-blue-700">{section.label}</span>
                  <ArrowUpRight size={16} className="text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-700" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#f8fafc]">
        <div className="mx-auto max-w-310 px-6 py-20 lg:px-10 lg:py-24">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <SectionLabel>Start with the foundations</SectionLabel>
              <h2 className="text-3xl font-semibold tracking-[-0.045em] sm:text-[40px]">Follow the mathematics.</h2>
              <p className="mt-3 max-w-127.5 text-[13px] leading-6 text-slate-500">Explore the concepts that connect mathematical reasoning to modern learning systems.</p>
            </div>
            <Link href="/learn/curriculum" className="inline-flex items-center gap-2 self-start text-[12px] font-semibold text-blue-700 hover:text-blue-900 sm:self-auto">View full curriculum <ArrowRight size={15} /></Link>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {foundations.map((item, index) => (
              <Link key={item.title} href={item.href} className="group flex min-h-51.25 flex-col rounded-md border border-slate-200 bg-white p-5 transition-colors hover:bg-blue-50/40 sm:p-6">
                <span className="text-[9px] font-semibold tracking-[0.15em] text-slate-400">{item.tag}</span>
                <div className="my-6 flex min-h-10.5 items-center justify-center rounded-sm border-y border-slate-100 py-3 font-mono text-[18px] text-blue-700">{item.symbol}</div>
                <h3 className="text-[15px] font-semibold">{item.title}</h3>
                <p className="mt-1.5 text-[11px] leading-5 text-slate-500">{item.subtitle}</p>
                <div className="mt-auto flex items-center justify-between pt-5 text-[11px] text-slate-400"><span>Module 0{index + 1}</span><MoveUpRight size={14} className="transition-colors group-hover:text-blue-700" /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-310 px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <SectionLabel>Theory meets code</SectionLabel>
            <h2 className="text-3xl font-semibold leading-tight tracking-tighter sm:text-[42px]">Don&apos;t just use the model. Understand how it learns.</h2>
            <p className="mt-5 max-w-115 text-[13px] leading-6 text-slate-600">Explore practical implementations that reveal how mathematical ideas become algorithms. Work through the logic, examine the equations, and understand the code behind the results.</p>
            <Link href="/learn/implementations" className="mt-7 inline-flex items-center gap-2 text-[12px] font-semibold text-blue-700 hover:text-blue-900">Explore implementations <ArrowRight size={15} /></Link>
          </div>

          <div className="rounded-md border border-slate-300 bg-white">
            <div className="flex items-center justify-between rounded-t-md border-b border-slate-200 bg-slate-50 px-5 py-3">
              <div className="flex items-center gap-2"><Code2 size={15} className="text-blue-700" /><span className="text-[11px] font-medium">gradient_descent.py</span></div>
              <span className="font-mono text-[10px] text-slate-400">PYTHON</span>
            </div>
            <div className="overflow-x-auto p-5 font-mono text-[12px] leading-[2.1] sm:p-7 sm:text-[13px]">
              <div><span className="text-slate-400">01</span> <span className="text-purple-700">def</span> <span className="text-blue-800">gradient_descent</span>(f, grad_f, x, lr, steps):</div>
              <div><span className="text-slate-400">02</span> &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-700">for</span> _ <span className="text-purple-700">in</span> range(steps):</div>
              <div><span className="text-slate-400">03</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x = x - lr * grad_f(x)</div>
              <div><span className="text-slate-400">04</span> &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-700">return</span> x</div>
              <div className="mt-4 border-t border-slate-200 pt-4 text-[11px] leading-5 text-slate-500">Mathematical idea: update parameters in the direction opposite to the gradient to reduce the objective function.</div>
            </div>
            <div className="rounded-b-md border-t border-slate-200 px-5 py-3 text-[10px] text-slate-500">A conceptual example · Illustrative code</div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white text-[#172033]">
        <div className="mx-auto flex max-w-310 flex-col justify-between gap-8 px-6 py-14 sm:flex-row sm:items-center lg:px-10 lg:py-16">
          <div>
            <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">Your learning starts here</div>
            <h2 className="max-w-150 text-3xl font-semibold tracking-[-0.045em] sm:text-[38px]">Build understanding, one concept at a time.</h2>
            <p className="mt-3 max-w-125 text-[13px] leading-6 text-slate-500">Start with the mathematics. Follow the ideas. Explore the models.</p>
          </div>
          <Link href="/learn/curriculum" className="inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-md border border-slate-300 px-5 py-3.5 text-[12px] font-semibold text-blue-700 transition-colors hover:border-blue-700 hover:bg-blue-700 hover:text-white sm:self-auto">
            Explore the curriculum <ArrowDownRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}