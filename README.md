# Math2Model

Math2Model is a static, frontend-only educational platform designed to bridge the gap between artificial intelligence theory and practical implementation. It provides a comprehensive guide structured around three core pillars: mathematical and theoretical curriculum, in-depth research paper breakdowns, and step-by-step code implementations.

The platform is built to parse and render complex Markdown content, specifically focusing on mathematical equations (LaTeX) and high-fidelity code syntax highlighting.

## Core Features

- Curriculum: Structured learning paths covering foundations, linear algebra, calculus, and advanced architectures like Transformers and State-Space Models.
- Research Papers: Detailed analysis of architectures, optimizations, and evaluation benchmarks.
- Implementation: Complete Python code walkthroughs and explanations for building and training AI models.
- Advanced Markdown Rendering: Native support for complex mathematical formulas using KaTeX and server-side syntax highlighting for code blocks.

## Tech Stack

- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Content Processing: react-markdown, remark-gfm
- Math Rendering: remark-math, rehype-katex
- Code Highlighting: rehype-pretty-code, shiki
- Metadata Parsing: gray-matter
- Icons: lucide-react

## Getting Started

To run this project locally:

1. Clone the repository:
   git clone https://github.com/Abhisek-Dash-Official/math2model.git
   cd math2model

2. Install the dependencies:
   npm install

3. Start the development server:
   npm run dev

4. Open http://localhost:3000 in your browser to view the application.

## Content Management

Content is managed via Markdown files located in the content directory. Each file utilizes frontmatter for metadata (title, category, prerequisites) and supports standard Markdown, GFM, LaTeX equations, and highlighted code blocks.

<!-- TODO: Project Structure -->

## Project Structure

<!-- TODO: Map out the final directory tree here once the Next.js routing and component hierarchy are fully implemented. -->

<!-- TODO: Screenshots -->

## Screenshots

<!-- TODO: Add high-resolution screenshots of the user interface, specifically showcasing the LaTeX math rendering, syntax-highlighted code blocks, and sidebar navigation. -->

<!-- TODO: Key Learnings -->

## Key Learnings

<!-- TODO: Document the technical challenges faced and solutions implemented during the development of this platform, particularly regarding Next.js server components and MDX/Markdown parsing. -->

## License

This project is open-source and available under the MIT License.
