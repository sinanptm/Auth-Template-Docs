"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { frontendFolderData, frontendCategories } from "../ff";
//@ts-ignore
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
//@ts-ignore
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

interface FrontendFolderProps {
    getCategoryColor?: (category: string) => string;
}

const FrontendFolder = ({ getCategoryColor }: FrontendFolderProps) => {
    const [selectedFolder, setSelectedFolder] = useState("app");

    const handleFolderClick = (folderKey: string) => {
        setSelectedFolder(folderKey);
    };

    const getDefaultCategoryColor = (category: string) => {
        const categoryInfo = Object.values(frontendCategories).find((cat) => cat.folders.includes(selectedFolder));
        return categoryInfo?.color || "bg-slate-900 text-slate-200";
    };

    const customStyle = {
        ...vscDarkPlus,
        'pre[class*="language-"]': {
            ...vscDarkPlus['pre[class*="language-"]'],
            background: "#1e1e1e",
            margin: 0,
            padding: "12px",
            fontSize: "11px",
            lineHeight: "1.4",
            fontFamily:
                "'Fira Code', 'Cascadia Code', 'JetBrains Mono', 'SF Mono', Monaco, 'Inconsolata', 'Roboto Mono', 'Source Code Pro', monospace",
        },
        'code[class*="language-"]': {
            ...vscDarkPlus['code[class*="language-"]'],
            background: "#1e1e1e",
            fontSize: "11px",
            lineHeight: "1.4",
            fontFamily:
                "'Fira Code', 'Cascadia Code', 'JetBrains Mono', 'SF Mono', Monaco, 'Inconsolata', 'Roboto Mono', 'Source Code Pro', monospace",
        },
    };

    const selectedData = frontendFolderData[selectedFolder];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Folder Structure */}
            <Card className="h-fit">
                <CardHeader className="pb-3">
                    <CardTitle className="text-base">📁 Frontend Structure</CardTitle>
                </CardHeader>
                <CardContent className="p-3">
                    <div className="bg-gray-900 text-gray-100 p-3 rounded-lg font-semibold text-sm overflow-x-auto">
                        <div className="space-y-0.5">
                            <div
                                className={`ml-2 text-blue-400 cursor-pointer hover:bg-gray-800 px-1.5 py-0.5 rounded ${selectedFolder === "app" ? "bg-gray-700" : ""}`}
                                onClick={() => handleFolderClick("app")}
                            >
                                📁 app/
                            </div>
                            <div className="ml-5 text-gray-500 text-xs">
                                <div className="ml-1 text-cyan-400">📄 layout.tsx</div>
                                <div className="ml-1 text-cyan-400">📄 metadata.ts</div>
                                <div className="ml-1 text-yellow-400">📁 (user)/auth/</div>
                                <div className="ml-1 text-yellow-400">📁 admin/</div>
                                <div className="ml-1 text-cyan-400">📄 not-found.tsx</div>
                            </div>

                            <div
                                className={`ml-2 text-green-400 cursor-pointer hover:bg-gray-800 px-1.5 py-0.5 rounded ${selectedFolder === "components" ? "bg-gray-700" : ""}`}
                                onClick={() => handleFolderClick("components")}
                            >
                                📁 components/
                            </div>
                            <div className="ml-5 text-gray-500 text-xs">
                                <div className="ml-1 text-purple-400">📁 ui/</div>
                                <div className="ml-1 text-purple-400">📁 forms/elements/</div>
                                <div className="ml-1 text-purple-400">📁 layout/</div>
                                <div className="ml-1 text-purple-400">📁 dialogs/</div>
                                <div className="ml-1 text-purple-400">📁 user/auth/</div>
                            </div>

                            <div
                                className={`ml-2 text-purple-400 cursor-pointer hover:bg-gray-800 px-1.5 py-0.5 rounded ${selectedFolder === "hooks" ? "bg-gray-700" : ""}`}
                                onClick={() => handleFolderClick("hooks")}
                            >
                                📁 hooks/
                            </div>
                            <div className="ml-5 text-gray-500 text-xs">
                                <div className="ml-1 text-pink-400">📁 api/user/</div>
                                <div className="ml-1 text-pink-400">📁 api/admin/</div>
                                <div className="ml-1 text-pink-400">📁 store/auth/</div>
                                <div className="ml-1 text-cyan-400">📄 useLoading.ts</div>
                            </div>

                            <div
                                className={`ml-2 text-orange-400 cursor-pointer hover:bg-gray-800 px-1.5 py-0.5 rounded ${selectedFolder === "lib" ? "bg-gray-700" : ""}`}
                                onClick={() => handleFolderClick("lib")}
                            >
                                📁 lib/
                            </div>
                            <div className="ml-5 text-gray-500 text-xs">
                                <div className="ml-1 text-indigo-400">📁 api/</div>
                                <div className="ml-1 text-indigo-400">📄 utils.ts</div>
                                <div className="ml-1 text-indigo-400">📄 schema.ts</div>
                                <div className="ml-1 text-indigo-400">📄 fonts.ts</div>
                            </div>

                            <div
                                className={`ml-2 text-red-400 cursor-pointer hover:bg-gray-800 px-1.5 py-0.5 rounded ${selectedFolder === "types" ? "bg-gray-700" : ""}`}
                                onClick={() => handleFolderClick("types")}
                            >
                                📁 types/
                            </div>
                            <div className="ml-5 text-gray-500 text-xs">
                                <div className="ml-1 text-rose-400">📁 api/</div>
                                <div className="ml-1 text-rose-400">📄 form.ts</div>
                                <div className="ml-1 text-rose-400">📄 props.ts</div>
                                <div className="ml-1 text-rose-400">📄 state.ts</div>
                            </div>

                            <div
                                className={`ml-2 text-pink-400 cursor-pointer hover:bg-gray-800 px-1.5 py-0.5 rounded ${selectedFolder === "styles" ? "bg-gray-700" : ""}`}
                                onClick={() => handleFolderClick("styles")}
                            >
                                📁 styles/
                            </div>
                            <div className="ml-5 text-gray-500 text-xs">
                                <div className="ml-1 text-slate-400">📄 globals.css</div>
                            </div>

                            <div
                                className={`ml-2 text-indigo-400 cursor-pointer hover:bg-gray-800 px-1.5 py-0.5 rounded ${selectedFolder === "config" ? "bg-gray-700" : ""}`}
                                onClick={() => handleFolderClick("config")}
                            >
                                📁 config/
                            </div>
                            <div className="ml-5 text-gray-500 text-xs">
                                <div className="ml-1 text-violet-400">📄 index.ts</div>
                            </div>

                            <div
                                className={`ml-2 text-yellow-400 cursor-pointer hover:bg-gray-800 px-1.5 py-0.5 rounded ${selectedFolder === "constants" ? "bg-gray-700" : ""}`}
                                onClick={() => handleFolderClick("constants")}
                            >
                                📁 constants/
                            </div>
                            <div className="ml-5 text-gray-500 text-xs">
                                <div className="ml-1 text-amber-400">📄 index.ts</div>
                            </div>

                            <div
                                className={`ml-2 text-gray-400 cursor-pointer hover:bg-gray-800 px-1.5 py-0.5 rounded ${selectedFolder === "public" ? "bg-gray-700" : ""}`}
                                onClick={() => handleFolderClick("public")}
                            >
                                📁 public/
                            </div>
                            <div className="ml-5 text-gray-500 text-xs">
                                <div className="ml-1 text-slate-400">📁 assets/</div>
                                <div className="ml-1 text-slate-400">📄 google.svg</div>
                                <div className="ml-1 text-slate-400">📄 favicon.ico</div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Folder Details */}
            <Card>
                <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-base">📋 Folder Details</CardTitle>
                        <Badge
                            className={
                                getCategoryColor
                                    ? getCategoryColor(selectedData?.category || "")
                                    : getDefaultCategoryColor(selectedData?.category || "")
                            }
                            variant="secondary"
                        >
                            {selectedData?.category || "Unknown"}
                        </Badge>
                    </div>
                </CardHeader>
                <CardContent className="p-3 space-y-3">
                    {selectedData && (
                        <>
                            <div>
                                <h3 className="text-lg font-bold text-primary mb-1">📁 {selectedData.name}/</h3>
                                <p className="font-medium text-muted-foreground">{selectedData.purpose}</p>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-1">Description</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">{selectedData.description}</p>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-1">Technologies</h4>
                                <div className="flex flex-wrap gap-1">
                                    {selectedData.technologies.map((tech, index) => (
                                        <Badge key={index} variant="outline" className="text-xs px-2 py-0.5">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-1">Example Files</h4>
                                <div className="bg-muted p-2 rounded-lg">
                                    <div className="space-y-0.5 font-mono text-xs">
                                        {selectedData.examples.map((example, index) => (
                                            <div key={index} className="text-muted-foreground">
                                                {example.endsWith("/") ? "📁" : "📄"} {example}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {selectedData.keyFeatures && (
                                <div>
                                    <h4 className="font-semibold mb-1">Key Features</h4>
                                    <div className="space-y-0.5">
                                        {selectedData.keyFeatures.map((feature, index) => (
                                            <div key={index} className="text-xs text-muted-foreground flex items-start">
                                                <span className="text-green-500 mr-1">•</span>
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {selectedData.patterns && (
                                <div>
                                    <h4 className="font-semibold mb-1">Design Patterns</h4>
                                    <div className="flex flex-wrap gap-1">
                                        {selectedData.patterns.map((pattern, index) => (
                                            <Badge key={index} variant="secondary" className="text-xs px-2 py-0.5">
                                                {pattern}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Enhanced Code Example Section */}
                            {selectedData.codeExample && (
                                <div>
                                    <h4 className="text-sm font-semibold mb-1">Code Example</h4>
                                    <div className="bg-[#1e1e1e] rounded-lg overflow-hidden border border-gray-700">
                                        {/* VS Code-like header */}
                                        <div className="flex items-center justify-between px-3 py-2 bg-[#2d2d30] border-b border-gray-600">
                                            <div className="flex items-center space-x-2">
                                                <div className="flex space-x-1">
                                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                                </div>
                                                <span className="text-xs text-gray-300 font-mono ml-2">
                                                    📄 {selectedData.codeExample.filename}
                                                </span>
                                            </div>
                                            <div className="text-xs text-gray-400">TypeScript</div>
                                        </div>

                                        {/* Code content with syntax highlighting */}
                                        <div className="overflow-x-auto">
                                            <SyntaxHighlighter
                                                language="typescript"
                                                style={customStyle}
                                                customStyle={{
                                                    margin: 0,
                                                    background: "#1e1e1e",
                                                    fontSize: "11px",
                                                    lineHeight: "1.4",
                                                }}
                                                showLineNumbers={true}
                                                lineNumberStyle={{
                                                    color: "#858585",
                                                    fontSize: "10px",
                                                    paddingRight: "12px",
                                                    minWidth: "2em",
                                                }}
                                                wrapLines={true}
                                                wrapLongLines={true}
                                            >
                                                {selectedData.codeExample.code}
                                            </SyntaxHighlighter>
                                        </div>

                                        {/* Description */}
                                        <div className="px-3 pb-3 pt-2 border-t border-gray-700 bg-[#252526]">
                                            <p className="text-xs text-gray-400 leading-relaxed">{selectedData.codeExample.description}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default FrontendFolder;
