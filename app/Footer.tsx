import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { memo, useState } from "react";
//@ts-ignore
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
//@ts-ignore
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { Copy, Check } from "lucide-react";

const Footer = () => {
    const [copied, setCopied] = useState(false);

    const draculaTheme = {
        'pre[class*="language-"]': {
            background: "#282a36",
            margin: 0,
            padding: "20px",
            fontSize: "14px",
            lineHeight: "1.6",
            fontFamily:
                "'Fira Code', 'Cascadia Code', 'JetBrains Mono', 'SF Mono', Monaco, 'Inconsolata', 'Roboto Mono', 'Source Code Pro', monospace",
            borderRadius: "0.5rem",
        },
        'code[class*="language-"]': {
            background: "#282a36",
            color: "#f8f8f2",
            fontSize: "14px",
            lineHeight: "1.6",
            fontFamily:
                "'Fira Code', 'Cascadia Code', 'JetBrains Mono', 'SF Mono', Monaco, 'Inconsolata', 'Roboto Mono', 'Source Code Pro', monospace",
        },
        'token.comment': {
            color: "#8be9fd",
            fontStyle: "italic",
        },
        'token.string': {
            color: "#f1fa8c",
        },
        'token.keyword': {
            color: "#ff5555",
            fontWeight: "bold",
        },
        'token.function': {
            color: "#50fa7b",
        },
        'token.parameter': {
            color: "#ffb86c",
        },
        'token.punctuation': {
            color: "#bd93f9",
        },
        'token.operator': {
            color: "#ff79c6",
        },
        'token.builtin': {
            color: "#f1fa8c",
        },
    };


    const setupCode = `git clone https://github.com/sinanptm/fullstack-clean-auth-template.git
cd fullstack-clean-auth-template
pnpm install
pnpm run dev`;

    const handleCopy = () => {
        navigator.clipboard.writeText(setupCode).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <div className="space-y-6 mt-12">
            <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border-primary/20">
                <CardContent className="text-center py-8 md:py-12">
                    <div className="space-y-4 md:space-y-6">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                <span className="text-amber-100">🎯</span> Ready to build your next project?
                            </h3>
                        </div>
                        <div className="pt-4 border-primary/20 mt-6">
                            <div className="mb-4 max-w-2xl mx-auto">
                                <div className="bg-[#1e1e1e] rounded-lg overflow-hidden border border-gray-700 relative">
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="absolute top-2 right-2 text-gray-100 hover:bg-gray-700"
                                        onClick={handleCopy}
                                    >
                                        {copied ? (
                                            <Check className="w-4 h-4" />
                                        ) : (
                                            <Copy className="w-4 h-4" />
                                        )}
                                    </Button>
                                    <div className="overflow-x-auto">
                                        <SyntaxHighlighter
                                            language="bash"
                                            style={draculaTheme}
                                            customStyle={{
                                                margin: 0,
                                                background: "#1e1e1e",
                                                fontSize: "14px",
                                                lineHeight: "1.6",
                                            }}
                                            showLineNumbers={true}
                                            lineNumberStyle={{
                                                color: "#858585",
                                                fontSize: "13px",
                                                paddingRight: "12px",
                                                minWidth: "2em",
                                            }}
                                            wrapLines={true}
                                            wrapLongLines={true}
                                        >
                                            {setupCode}
                                        </SyntaxHighlighter>
                                    </div>
                                </div>
                            </div>
                            <p className="text-[0.65rem] md:text-xs text-muted-foreground">
                                Crafted with ❤️ by <Link href={'https://www.muhammedsinan.space'} className="text-blue-400">Sinan</Link>. Inspired by developer community best practices.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default memo(Footer);