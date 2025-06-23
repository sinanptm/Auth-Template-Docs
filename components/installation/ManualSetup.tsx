"use client";

import { memo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GitBranch } from "lucide-react";
//@ts-ignore
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
//@ts-ignore
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "./CopyButton";


const manualCommands = {
    clone: "git clone https://github.com/sinanptm/fullstack-clean-auth-template.git \ncd fullstack-clean-auth-template",
    install: "pnpm install",
    dev: "pnpm dev",
};

const ManualSetup = ({ copied, setCopied }: { copied: string; setCopied: (id: string) => void; }) => {
    return (
        <Card>
            <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                    <GitBranch className="h-5 w-5 text-yellow-400" />
                    Manual Setup
                </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-3">Alternative setup without CLI tool:</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">1</Badge>
                            <span className="font-medium text-sm">Clone</span>
                        </div>
                        <div className="bg-[#1e1e1e] rounded-lg overflow-hidden">
                            <div className="flex items-center justify-between px-3 py-1.5 bg-[#2d2d30] border-b border-gray-600">
                                <span className="text-xs text-gray-300">Git</span>
                                <CopyButton text={manualCommands.clone} id="clone" copied={copied} setCopied={setCopied} />
                            </div>
                            <SyntaxHighlighter
                                language="bash"
                                style={vscDarkPlus}
                                customStyle={{ margin: 0, background: "#1e1e1e", fontSize: "11px", padding: "8px 12px" }}
                            >
                                {manualCommands.clone}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">2</Badge>
                            <span className="font-medium text-sm">Install</span>
                        </div>
                        <div className="bg-[#1e1e1e] rounded-lg overflow-hidden">
                            <div className="flex items-center justify-between px-3 py-1.5 bg-[#2d2d30] border-b border-gray-600">
                                <span className="text-xs text-gray-300">Dependencies</span>
                                <CopyButton text={manualCommands.install} id="manualInstall" copied={copied} setCopied={setCopied} />
                            </div>
                            <SyntaxHighlighter
                                language="bash"
                                style={vscDarkPlus}
                                customStyle={{ margin: 0, background: "#1e1e1e", fontSize: "11px", padding: "8px 12px" }}
                            >
                                {manualCommands.install}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">3</Badge>
                            <span className="font-medium text-sm">Start</span>
                        </div>
                        <div className="bg-[#1e1e1e] rounded-lg overflow-hidden">
                            <div className="flex items-center justify-between px-3 py-1.5 bg-[#2d2d30] border-b border-gray-600">
                                <span className="text-xs text-gray-300">Development</span>
                                <CopyButton text={manualCommands.dev} id="manualDev" copied={copied} setCopied={setCopied} />
                            </div>
                            <SyntaxHighlighter
                                language="bash"
                                style={vscDarkPlus}
                                customStyle={{ margin: 0, background: "#1e1e1e", fontSize: "11px", padding: "8px 12px" }}
                            >
                                {manualCommands.dev}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default memo(ManualSetup);
