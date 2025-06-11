import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, ExternalLink, Github, BookOpen, } from "lucide-react";
import { memo } from "react";

const Inspiration = () => {
    const references = [
        {
            title: "Clean Architecture",
            author: "Robert C. Martin (Uncle Bob)",
            url: "https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html",
            description:
                "Core principles of Clean Architecture, emphasizing modular, testable, and maintainable code structures that shaped this project's foundation.",
            icon: <BookOpen aria-hidden="true" className="w-5 h-5" />,
            color: "text-blue-400",
        },
        {
            title: "GitHub Repositories",
            author: "Open Source Community",
            url: "https://github.com",
            description:
                "Studied numerous open-source implementations of Clean Architecture and dependency injection to adopt battle-tested patterns.",
            icon: <Github aria-hidden="true" className="w-5 h-5" />,
            color: "text-gray-400",
        },
        {
            title: "Stack Overflow",
            author: "Developer Community",
            url: "https://stackoverflow.com",
            description:
                "Leveraged community-driven solutions and discussions to refine architecture decisions and solve complex implementation challenges.",
            icon: <Users aria-hidden="true" className="w-5 h-5" />,
            color: "text-orange-400",
        },
    ];

    return (
        <div className="space-y-6">
            {/* Main References Section */}
            <Card className="border-2 border-dashed border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl md:text-2xl font-bold flex items-center justify-center gap-2">
                        📚 References & Community Wisdom
                    </CardTitle>
                    <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
                        This template synthesizes knowledge from industry leaders, open-source projects, and the global developer
                        community to create a robust, production-ready foundation.
                    </p>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {references.map((ref, index) => (
                            <a
                                key={index}
                                href={ref.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block p-4 border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
                            >
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className={`${ref.color}`}>{ref.icon}</div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">
                                                <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">
                                                    {ref.title}
                                                </h4>
                                                <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                            <p className="text-xs text-muted-foreground">{ref.author}</p>
                                        </div>
                                    </div>
                                    <p className="text-xs text-muted-foreground leading-relaxed">{ref.description}</p>
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className="text-center pt-4 border-t border-dashed border-primary/20">
                        <p className="text-xs md:text-sm text-muted-foreground italic">
                            "Standing on the shoulders of giants" - This template combines the best practices from countless hours of
                            research, community discussions, and real-world implementations.
                        </p>
                    </div>
                </CardContent>
            </Card>

        </div>
    );
};

export default memo(Inspiration);
