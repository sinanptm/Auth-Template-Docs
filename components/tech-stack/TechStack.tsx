import { memo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Database, Globe, Server } from "lucide-react";
import { Badge } from "@/components/ui/badge";
//@ts-ignore
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
//@ts-ignore
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

const TechStack = () => {
    const [copied, setCopied] = useState({ dev: "", prod: "" });

    const copyToClipboard = (text: string, section: string) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopied((prev) => ({ ...prev, [section]: text }));
            setTimeout(() => setCopied((prev) => ({ ...prev, [section]: "" })), 2000);
        });
    };

    const devCommands = `
pnpm dev # Start both servers
pnpm --prefix server dev # Backend only
pnpm --prefix web dev # Frontend only
pnpm format # Format code
pnpm test # Run tests
  `.trim();

    const prodCommands = `
pnpm test # Run tests
pnpm --prefix server test # Run tests
pnpm --prefix server build # Build backend
pnpm --prefix web build # Build frontend
pnpm --prefix server start # Start production
  `.trim();
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <Card>
                    <CardHeader className="p-4 md:p-6">
                        <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                            <Globe className="h-5 w-5" />
                            Frontend Technologies
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="border rounded-lg p-3">
                                <h4 className="font-semibold text-blue-600 text-sm md:text-base">Next.js 15.3.2</h4>
                                <p className="text-xs text-muted-foreground">React framework with App Router</p>
                            </div>
                            <div className="border rounded-lg p-3">
                                <h4 className="font-semibold text-cyan-600 text-sm md:text-base">React 19</h4>
                                <p className="text-xs text-muted-foreground">Latest React with concurrent features</p>
                            </div>
                            <div className="border rounded-lg p-3">
                                <h4 className="font-semibold text-purple-600 text-sm md:text-base">TypeScript</h4>
                                <p className="text-xs text-muted-foreground">Type-safe development</p>
                            </div>
                            <div className="border rounded-lg p-3">
                                <h4 className="font-semibold text-teal-600 text-sm md:text-base">Tailwind CSS</h4>
                                <p className="text-xs text-muted-foreground">Utility-first CSS framework</p>
                            </div>
                        </div>

                        <Separator />

                        <div>
                            <h4 className="font-semibold mb-2 text-sm md:text-base">UI & Components</h4>
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="outline" className="text-xs">
                                    Shadcn/ui
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                    Radix UI
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                    Lucide Icons
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                    Framer Motion
                                </Badge>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-2 text-sm md:text-base">State & Forms</h4>
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="outline" className="text-xs">
                                    Zustand
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                    React Query
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                    React Hook Form
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                    Zod Validation
                                </Badge>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="p-4 md:p-6">
                        <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                            <Server className="h-5 w-5" />
                            Backend Technologies
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="border rounded-lg p-3">
                                <h4 className="font-semibold text-green-600 text-sm md:text-base">Express.js 5.1.0</h4>
                                <p className="text-xs text-muted-foreground">Fast, minimalist web framework</p>
                            </div>
                            <div className="border rounded-lg p-3">
                                <h4 className="font-semibold text-blue-600 text-sm md:text-base">Node.js</h4>
                                <p className="text-xs text-muted-foreground">JavaScript runtime</p>
                            </div>
                            <div className="border rounded-lg p-3">
                                <h4 className="font-semibold text-purple-600 text-sm md:text-base">TypeScript</h4>
                                <p className="text-xs text-muted-foreground">Strongly typed backend</p>
                            </div>
                            <div className="border rounded-lg p-3">
                                <h4 className="font-semibold text-orange-600 text-sm md:text-base">Inversify</h4>
                                <p className="text-xs text-muted-foreground">Dependency injection</p>
                            </div>
                        </div>

                        <Separator />

                        <div>
                            <h4 className="font-semibold mb-2 text-sm md:text-base">Authentication & Security</h4>
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="outline" className="text-xs">
                                    JWT
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                    bcryptjs
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                    Firebase Admin
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                    Rate Limiting
                                </Badge>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-2 text-sm md:text-base">Validation & Utils</h4>
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="outline" className="text-xs">
                                    Joi
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                    Nodemailer
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                    Winston Logger
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                    CORS
                                </Badge>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader className="p-4 md:p-6">
                    <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                        <Database className="h-5 w-5" />
                        Database & Infrastructure
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                        <div className="border rounded-lg p-3 md:p-4">
                            <h4 className="font-semibold text-green-600 mb-1 md:mb-2 text-sm md:text-base">MongoDB</h4>
                            <ul className="text-xs md:text-sm text-muted-foreground space-y-1">
                                <li>• Document-based NoSQL</li>
                                <li>• Mongoose ODM</li>
                                <li>• Schema validation</li>
                                <li>• Indexing support</li>
                            </ul>
                        </div>
                        <div className="border rounded-lg p-3 md:p-4">
                            <h4 className="font-semibold text-orange-600 mb-1 md:mb-2 text-sm md:text-base">Firebase</h4>
                            <ul className="text-xs md:text-sm text-muted-foreground space-y-1">
                                <li>• OAuth providers</li>
                                <li>• Token verification</li>
                                <li>• Admin SDK</li>
                                <li>• User management</li>
                            </ul>
                        </div>
                        <div className="border rounded-lg p-3 md:p-4">
                            <h4 className="font-semibold text-blue-600 mb-1 md:mb-2 text-sm md:text-base">Development</h4>
                            <ul className="text-xs md:text-sm text-muted-foreground space-y-1">
                                <li>• Jest testing</li>
                                <li>• Nodemon dev server</li>
                                <li>• TypeScript compilation</li>
                                <li>• ESLint & Prettier</li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="p-4 md:p-6">
                    <CardTitle className="text-lg md:text-xl text-muted-foreground">🚀 Development & Deployment</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div>
                            <div className="flex justify-between items-center mb-2 md:mb-3">
                                <h4 className="font-semibold text-sm md:text-base text-muted-foreground">Development Commands</h4>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => copyToClipboard(devCommands, "dev")}
                                    className="text-xs cursor-pointer"
                                >
                                    {copied.dev === devCommands ? "Copied!" : <Copy className="h-4 w-4" />}
                                </Button>
                            </div>
                            <SyntaxHighlighter
                                language="bash"
                                style={vscDarkPlus}
                                customStyle={{
                                    padding: "12px",
                                    borderRadius: "8px",
                                    fontSize: "0.75rem",
                                    lineHeight: "1.5",
                                }}
                            >
                                {devCommands}
                            </SyntaxHighlighter>
                        </div>
                        <div>
                            <div className="flex justify-between items-center mb-2 md:mb-3">
                                <h4 className="font-semibold text-sm md:text-base text-muted-foreground">Production Commands</h4>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => copyToClipboard(prodCommands, "prod")}
                                    className="text-xs cursor-pointer"
                                >
                                    {copied.prod === prodCommands ? "Copied!" : <Copy className="h-4 w-4" />}
                                </Button>
                            </div>
                            <SyntaxHighlighter
                                language="bash"
                                style={vscDarkPlus}
                                customStyle={{
                                    padding: "12px",
                                    borderRadius: "8px",
                                    fontSize: "0.75rem",
                                    lineHeight: "1.5",
                                }}
                            >
                                {prodCommands}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default memo(TechStack);
