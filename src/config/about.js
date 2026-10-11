const about = {
    aboutUs: {
        name: "Math2Model",

        description:
            "Math2Model is an educational platform designed to bridge the gap between mathematical theory and practical artificial intelligence. It helps learners understand how mathematical concepts evolve into algorithms, architectures, and working AI models.",

        story:
            "Understanding artificial intelligence requires more than knowing how to use existing tools. It requires understanding the mathematics, theoretical foundations, research, and implementation behind them. Math2Model brings these pieces together in one structured learning environment.",

        mission:
            "Make the mathematical and theoretical foundations of artificial intelligence accessible through structured learning, research exploration, and practical implementations.",

        vision:
            "Build a comprehensive learning hub where anyone can explore the journey from mathematical foundations to modern AI systems.",

    },

    sections: [
        {
            id: "curriculum",
            title: "AI Curriculum",
            description:
                "Follow a structured learning path through mathematical foundations, linear algebra, calculus, optimization, neural networks, Transformers, State-Space Models, and other important AI concepts.",
            features: [
                "Structured learning paths",
                "Mathematical explanations",
                "AI theory and model architectures",
                "Connections between concepts",
            ],
        },

        {
            id: "external-research",
            title: "External Research Papers",
            description:
                "Explore important AI research papers and understand the ideas, mathematical foundations, architectures, and innovations behind modern artificial intelligence.",
            features: [
                "Research paper discovery",
                "Architecture explanations",
                "Research contributions and insights",
                "Connections to the AI curriculum",
            ],
        },

        {
            id: "personal-research",
            title: "Personal Research Papers",
            description:
                "A dedicated space for original research papers and research work published or shared by the Math2Model creator.",
            features: [
                "Original research",
                "Detailed technical explanations",
                "Research-driven learning",
            ],
        },

        {
            id: "implementations",
            title: "Practical Implementations",
            description:
                "Connect theory with practice through code walkthroughs that demonstrate how mathematical ideas and research concepts can be implemented in Python.",
            features: [
                "Step-by-step implementations",
                "Python code walkthroughs",
                "Model architecture exploration",
                "Theory-to-code explanations",
            ],
        },
    ],

    access: {
        curriculum: "login-required",
        externalResearchPapers: "login-required",
        personalResearchPapers: "login-required",
        donations: "public",
    },

    contribution: {
        title: "Support Math2Model",
        description:
            "Help support the development of an educational platform dedicated to understanding the mathematics, theory, and research behind artificial intelligence.",
        cta: "Support the Project",
        href: "/donate",
    },

    teamMembers: [
        {
            id: "founder",
            name: "Abhisek Dash",
            role: "Founder & Creator",
            image: "/images/team/founder.png",
            bio: "Building Math2Model to bridge the gap between mathematical foundations and practical artificial intelligence.",
            socialLinks: {
                github: "https://github.com/Abhisek-Dash-Official/",
                linkedin: "https://www.linkedin.com/in/abhisek-dash-49904a371/",
            },
        },
        {
            id: "team-member-2",
            name: "Jishan Panigrahi",
            role: "AI Researcher",
            image: "/images/team/j.png",
            bio: "Interested in machine learning, mathematical foundations, and AI research.",
            socialLinks: {
                github: "",
                linkedin: "",
            },
        },
    ],
};

export default about;