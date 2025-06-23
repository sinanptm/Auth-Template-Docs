"use client";

import { memo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Terminal, Zap } from "lucide-react";
//@ts-ignore
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
//@ts-ignore
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "./CopyButton";

const cliCommands = {
    install: "npm install -g clean-auth",
    npxInit: "npx clean-auth init my-auth-project --install",
    init: "clean-auth init my-auth-project --install",
    config: "clean-auth auth-config",
    dev: "pnpm dev",
};

const QuickStart = ({ copied, setCopied }: { copied: string; setCopied: (id: string) => void; }) => {
    return (
        <Card>
            <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                    <Zap className="h-5 w-5 text-green-400" />
                    Quick Start (Recommended)
                </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 space-y-3">
                <p className="text-sm text-muted-foreground">Use our CLI tool for automatic setup and configuration.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="text-xs">1</Badge>
                            <span className="font-medium text-sm">Install CLI</span>
                        </div>
                        <div className="bg-[#1e1e1e] rounded-lg overflow-hidden">
                            <div className="flex items-center justify-between px-3 py-1.5 bg-[#2d2d30] border-b border-gray-600">
                                <span className="text-xs text-gray-300">Terminal</span>
                                <CopyButton text={cliCommands.install} id="install" copied={copied} setCopied={setCopied} />
                            </div>
                            <SyntaxHighlighter
                                language="bash"
                                style={vscDarkPlus}
                                customStyle={{ margin: 0, background: "#1e1e1e", fontSize: "11px", padding: "8px 12px" }}
                            >
                                {cliCommands.install}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="text-xs">2</Badge>
                            <span className="font-medium text-sm">Create Project</span>
                        </div>
                        <div className="bg-[#1e1e1e] rounded-lg overflow-hidden">
                            <div className="flex items-center justify-between px-3 py-1.5 bg-[#2d2d30] border-b border-gray-600">
                                <span className="text-xs text-gray-300">With CLI</span>
                                <CopyButton text={cliCommands.init} id="init" copied={copied} setCopied={setCopied} />
                            </div>
                            <SyntaxHighlighter
                                language="bash"
                                style={vscDarkPlus}
                                customStyle={{ margin: 0, background: "#1e1e1e", fontSize: "11px", padding: "8px 12px" }}
                            >
                                {cliCommands.init}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="text-xs">3</Badge>
                            <span className="font-medium text-sm">Configure</span>
                        </div>
                        <div className="bg-[#1e1e1e] rounded-lg overflow-hidden">
                            <div className="flex items-center justify-between px-3 py-1.5 bg-[#2d2d30] border-b border-gray-600">
                                <span className="text-xs text-gray-300">Interactive setup</span>
                                <CopyButton text={cliCommands.config} id="config" copied={copied} setCopied={setCopied} />
                            </div>
                            <SyntaxHighlighter
                                language="bash"
                                style={vscDarkPlus}
                                customStyle={{ margin: 0, background: "#1e1e1e", fontSize: "11px", padding: "8px 12px" }}
                            >
                                {cliCommands.config}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="text-xs">4</Badge>
                            <span className="font-medium text-sm">Start Development</span>
                        </div>
                        <div className="bg-[#1e1e1e] rounded-lg overflow-hidden">
                            <div className="flex items-center justify-between px-3 py-1.5 bg-[#2d2d30] border-b border-gray-600">
                                <span className="text-xs text-gray-300">Both servers</span>
                                <CopyButton text={cliCommands.dev} id="dev" copied={copied} setCopied={setCopied} />
                            </div>
                            <SyntaxHighlighter
                                language="bash"
                                style={vscDarkPlus}
                                customStyle={{ margin: 0, background: "#1e1e1e", fontSize: "11px", padding: "8px 12px" }}
                            >
                                {cliCommands.dev}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
                <div className="mt-3 p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                        <Terminal className="h-4 w-4 text-blue-400" />
                        <span className="font-medium text-sm">Or use npx (no global install)</span>
                    </div>
                    <div className="bg-[#1e1e1e] rounded-lg overflow-hidden">
                        <div className="flex items-center justify-between px-3 py-1.5 bg-[#2d2d30] border-b border-gray-600">
                            <span className="text-xs text-gray-300">One command</span>
                            <CopyButton text={cliCommands.npxInit} id="npxInit" copied={copied} setCopied={setCopied} />
                        </div>
                        <SyntaxHighlighter
                            language="bash"
                            style={vscDarkPlus}
                            customStyle={{ margin: 0, background: "#1e1e1e", fontSize: "11px", padding: "8px 12px" }}
                        >
                            {cliCommands.npxInit}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default memo(QuickStart);
