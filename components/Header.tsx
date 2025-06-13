"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, GitBranch, Github, ExternalLink, Code2 } from "lucide-react";
import Link from "next/link";

const Header = () => {
    return (
        <div className="border-b bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/10 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-5 left-10 w-12 h-12 border border-primary/30 rounded-full"></div>
                <div className="absolute top-8 right-20 w-8 h-8 border border-secondary/30 rounded-full"></div>
                <div className="absolute bottom-5 left-1/4 w-6 h-6 border border-primary/30 rounded-full"></div>
                <div className="absolute bottom-3 right-1/3 w-4 h-4 border border-secondary/30 rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 py-8 md:py-12 relative">
                <div className="text-center space-y-4 md:space-y-6">
                    <div className="space-y-3">
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                            <span className="text-amber-50">🚀</span> Full-Stack Authentication Template
                        </h1>

                        <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Production-ready, <span className="font-semibold text-teal-400  decoration-teal-400/50">open-source</span> full-stack template with clean architecture and complete authentication system.
                        </p>
                    </div>

                    {/* GitHub Star CTA */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
                        <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="bg-primary/10 border-primary/30 hover:bg-primary/20 transition-all duration-200"
                        >
                            <a
                                href="https://github.com/sinanptm/fullstack-clean-auth-template"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                            >
                                <Github aria-hidden className="w-4 h-4" />
                                <span>View on GitHub</span>
                                <ExternalLink className="w-3 h-3" />
                            </a>
                        </Button>
                        <Button
                            asChild
                            size="sm"
                            className="bg-yellow-500/20 border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/30 transition-all duration-200"
                            variant="outline"
                        >
                            <a
                                href="https://github.com/sinanptm/fullstack-clean-auth-template"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                            >
                                <Star aria-hidden className="w-4 h-4" />
                                <span>Give it a Star</span>
                            </a>
                        </Button>
                    </div>

                    {/* Technology Badges */}
                    <div className="flex flex-wrap justify-center gap-2">
                        <Badge
                            variant="secondary"
                            className="text-xs px-2 py-1 bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20 transition-colors"
                        >
                            Next.js 15.3.2
                        </Badge>
                        <Badge
                            variant="secondary"
                            className="text-xs px-2 py-1 bg-green-500/10 text-green-400 border-green-500/20 hover:bg-green-500/20 transition-colors"
                        >
                            Express.js 5.1.0
                        </Badge>
                        <Badge
                            variant="secondary"
                            className="text-xs px-2 py-1 bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20 transition-colors"
                        >
                            MongoDB
                        </Badge>
                        <Badge
                            variant="secondary"
                            className="text-xs px-2 py-1 bg-purple-500/10 text-purple-400 border-purple-500/20 hover:bg-purple-500/20 transition-colors"
                        >
                            TypeScript
                        </Badge>
                        <Badge
                            variant="secondary"
                            className="text-xs px-2 py-1 bg-orange-500/10 text-orange-400 border-orange-500/20 hover:bg-orange-500/20 transition-colors"
                        >
                            Firebase OAuth
                        </Badge>
                    </div>

                    {/* Architecture Highlight */}
                    <div className="flex items-center justify-center gap-4 pt-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <GitBranch aria-hidden className="w-4 h-4" />
                            <span>Clean Architecture</span>
                        </div>
                        <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Star aria-hidden className="w-4 h-4" />
                            <span>Industry Best Practices</span>
                        </div>
                        <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Code2 aria-hidden className="w-4 h-4" />
                            <span>Open Source <Link href={'https://github.com/sinanptm/fullstack-clean-auth-template/blob/main/LICENSE'} className="text-blue-500">(MIT License)</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Header;
