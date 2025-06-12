import { Badge } from "@/components/ui/badge";
import { Shield, RefreshCw } from "lucide-react";
import { memo } from "react";
//@ts-ignore
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
//@ts-ignore
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface EndpointCardProps {
    method: string;
    path: string;
    description: string;
    auth: boolean;
    rateLimit?: string;
    requestBody?: any;
    responseBody?: any;
    icon: React.ComponentType<{ className?: string; }>;
}

const getMethodColor = (method: string) => {
    switch (method.toUpperCase()) {
        case "GET":
            return "bg-green-100 text-green-800 border-green-200";
        case "POST":
            return "bg-blue-100 text-blue-800 border-blue-200";
        case "PUT":
            return "bg-yellow-100 text-yellow-800 border-yellow-200";
        case "PATCH":
            return "bg-purple-100 text-purple-800 border-purple-200";
        case "DELETE":
            return "bg-red-100 text-red-800 border-red-200";
        default:
            return "bg-gray-100 text-gray-800 border-gray-200";
    }
};
const EndpointCard = ({
    method,
    path,
    description,
    auth,
    rateLimit,
    requestBody,
    responseBody,
    icon: Icon,
}: EndpointCardProps) => (
    <div className="border rounded-lg p-4 space-y-3">
        <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <Badge className={getMethodColor(method)} variant="outline">
                            {method.toUpperCase()}
                        </Badge>
                        <code className="text-sm font-mono bg-muted px-2 py-1 rounded">{path}</code>
                    </div>
                    <p className="text-sm text-muted-foreground">{description}</p>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
                <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    <span className="font-medium">Auth Required:</span>
                    <Badge variant={auth ? "default" : "secondary"} className="text-xs">
                        {auth ? "Yes" : "No"}
                    </Badge>
                </div>
                {rateLimit && (
                    <div className="flex items-center gap-2">
                        <RefreshCw className="h-4 w-4" />
                        <span className="font-medium">Rate Limited:</span>
                        <Badge variant="outline" className="text-xs">{rateLimit}</Badge>
                    </div>
                )}
            </div>

            <div className="space-y-4">
                {requestBody && (
                    <div>
                        <h5 className="font-medium mb-2">Request Body:</h5>
                        <div className="max-h-56 overflow-y-auto rounded-l border border-gray-200">
                            <SyntaxHighlighter
                                language="json"
                                style={vscDarkPlus}
                                customStyle={{ margin: 0, padding: "1rem", fontSize: "0.875rem" }}
                            >
                                {JSON.stringify(requestBody, null, 2)}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                )}
                {responseBody && (
                    <div>
                        <h5 className="font-medium mb-2">Response:</h5>
                        <div className="max-h-56 overflow-y-auto rounded-lg border border-gray-200">
                            <SyntaxHighlighter
                                language="json"
                                style={vscDarkPlus}
                                customStyle={{ margin: 0, padding: "1rem", fontSize: "0.875rem" }}
                            >
                                {JSON.stringify(responseBody, null, 2)}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
);

export default memo(EndpointCard);