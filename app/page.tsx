"use client"

import { memo } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Footer from "../components/Footer";
import Overview from "@/components/overview/Overview";
import Server from "@/components/server/Server";
import Frontend from "@/components/web/Web";
import TechStack from "@/components/tech-stack/TechStack";
import { ChevronDown } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Testing from "@/components/testing/Testing";
import { useQueryState } from "nuqs"
import ApiDocs from "@/components/docs/ApiDocs";
import useMobile from "@/lib/useMobile";
import Header from "../components/Header";

const ArchitecturePage = () => {
    const [activeTab, setActiveTab] = useQueryState("tab", { defaultValue: "overview" });
    const { isMobile } = useMobile()

    const tabItems = [
        { value: "overview", label: "Template Overview" },
        { value: "server", label: "Server" },
        { value: "web-next", label: "Web" },
        { value: "testing", label: "Testing" },
        { value: "api-docs", label: "Api Docs" },
        { value: "tech-stack", label: "Tech Stack" },
    ]

    const renderTabContent = () => {
        switch (activeTab) {
            case "overview":
                return <Overview />;
            case "server":
                return <Server />;
            case "web-next":
                return <Frontend />;
            case "testing":
                return <Testing />;
            case "api-docs":
                return <ApiDocs />;
            case "tech-stack":
                return <TechStack />;
            default:
                return <Overview />;
        }
    }

    return (
        <div className="min-h-screen bg-background">
            <Header />

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