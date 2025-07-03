"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Terminal } from "lucide-react";
import { memo } from "react";
//@ts-ignore
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
//@ts-ignore
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const cliCommandsData = [
    {
        command: "init",
        description: "Initialize new authentication project",
        syntax: "clean-auth init <project-name> [--install]",
        example: "clean-auth init my-auth-project --install",
    },
    {
        command: "config",
        description: "Configure environment variables interactively",
        syntax: "clean-auth config [--skip]",
        example: "clean-auth config",
    },
    {
        command: "clean",
        description: "Remove unnecessary project parts",
        syntax: "clean-auth clean [--server|--web|--opensource]",
        example: "clean-auth clean --server",
    },
];

const CliCommands = () => {
    return (
        <Card>
            <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                    <Terminal className="h-5 w-5 text-cyan-400" />
                    CLI Commands
                </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {cliCommandsData.map((cmd, index) => (
                        <div key={index} className="border rounded-lg p-3">
                            <div className="flex items-center gap-2 mb-2">
                                <Badge className="bg-cyan-900 text-cyan-200 text-xs">{cmd.command}</Badge>
                            </div>
                            <p className="text-xs text-muted-foreground mb-2">{cmd.description}</p>
                            <div className="space-y-1">
                                <SyntaxHighlighter
                                    language="bash"
                                    style={vscDarkPlus}
                                    customStyle={{ margin: 0, fontSize: "11px", padding: "8px 12px" }}
                                >
                                    {cmd.syntax}
                                </SyntaxHighlighter>
                                <SyntaxHighlighter
                                    language="bash"
                                    style={vscDarkPlus}
                                    customStyle={{ margin: 0, fontSize: "11px", color: "gray", padding: "8px 12px" }}
                                >
                                    {`# ${cmd.example}`}
                                </SyntaxHighlighter>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default memo(CliCommands);
