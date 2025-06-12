"use client"

import { memo, useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Footer from "./Footer";
import Overview from "./arch/Overview";
import Backend from "./arch/Backend";
import Frontend from "./arch/Frontend";
import AuthFlow from "./arch/AuthFlow";
import TechStack from "./arch/TechStack";
import { ChevronDown, Star, GitBranch, Github, ExternalLink } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Testing from "./arch/Testing";
import { useQueryState } from "nuqs"

const ArchitecturePage = () => {
    const [activeTab, setActiveTab] = useQueryState("tab", { defaultValue: "overview" });
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        }

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize)

        return () => {
          window.removeEventListener("resize", checkScreenSize);
      };
    }, [])

    const tabItems = [
        { value: "overview", label: "Template Overview" },
        { value: "backend", label: "Backend" },
        { value: "frontend", label: "Frontend" },
        { value: "testing", label: "Testing" },
        { value: "auth-flow", label: "Auth Flow" },
        { value: "tech-stack", label: "Tech Stack" },
    ]

    const renderTabContent = () => {
        switch (activeTab) {
            case "overview":
                return <Overview />;
            case "backend":
                return <Backend />;
            case "frontend":
                return <Frontend />;
            case "testing":
                return <Testing />;
            case "auth-flow":
                return <AuthFlow />;
            case "tech-stack":
                return <TechStack />;
            default:
                return <Overview />;
        }
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Compact Header */}
            <div className="border-b bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/10 relative overflow-hidden">
                {/* Background Pattern */}
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
                                Production-ready full-stack template with clean architecture and complete authentication system.
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
                                    <Github className="w-4 h-4" />
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
                                    <Star className="w-4 h-4" />
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
                                <GitBranch className="w-4 h-4" />
                                <span>Clean Architecture</span>
                            </div>
                            <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Star className="w-4 h-4" />
                                <span>Industry Best Practices</span>
                            </div>
                            <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <span>🧪</span>
                                <span>Battle Tested</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-6 md:py-8">
                {isMobile ? (
                    <div className="mb-6">
                        <DropdownMenu>
                            <DropdownMenuTrigger className="w-full flex items-center justify-between p-3 border rounded-md hover:border-primary/50 transition-colors">
                                <span className="font-medium">{tabItems.find((tab) => tab.value === activeTab)?.label}</span>
                                <ChevronDown className="h-4 w-4 opacity-50" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-full" align="start">
                                {tabItems.map((tab) => (
                                    <DropdownMenuItem
                                        key={tab.value}
                                        onClick={() => setActiveTab(tab.value)}
                                        className={activeTab === tab.value ? "bg-muted" : ""}
                                    >
                                        {tab.label}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                ) : (
                    <Tabs value={activeTab!} onValueChange={setActiveTab} className="space-y-8">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-12 p-1 bg-muted/50">
                                {tabItems.map((tab) => (
                                  <TabsTrigger
                                      key={tab.value}
                                      value={tab.value}
                                      className="text-sm font-medium data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all"
                                  >
                                      {tab.label}
                                  </TabsTrigger>
                              ))}
                        </TabsList>
                    </Tabs>
                )}

                <div className="mt-8">{renderTabContent()}</div>

                <Footer />
            </div>
        </div>
    );
}

export default memo(ArchitecturePage);
