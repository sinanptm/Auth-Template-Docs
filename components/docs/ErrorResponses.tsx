import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { memo } from "react";

const ErrorResponses = () => (
    <Card>
        <CardHeader className="p-4 md:p-6">
            <CardTitle className="text-lg md:text-xl">⚠️ Error Responses</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
            <div className="space-y-4">
                <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-red-600">400 - Bad Request</h4>
                    <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
                        {JSON.stringify({
                            message: "Invalid email format"
                        }, null, 2)}
                    </pre>
                </div>
                <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-red-600">401 - Unauthorized</h4>
                    <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
                        {JSON.stringify({
                            message: "Authentication failed: Invalid or expired token"
                        }, null, 2)}
                    </pre>
                </div>
                <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-red-600">403 - Forbidden</h4>
                    <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
                        {JSON.stringify({
                            message: "Access denied: Admin role required"
                        }, null, 2)}
                    </pre>
                </div>
                <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-red-600">404 - Not Found</h4>
                    <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
                        {JSON.stringify({
                            message: "User not found"
                        }, null, 2)}
                    </pre>
                </div>
                <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-red-600">Conflict</h4>
                    <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
                        {JSON.stringify({
                            message: "User with this email already exists"
                        }, null, 2)}
                    </pre>
                </div>
                <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-red-600">429 - Too Many Requests</h4>
                    <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
                        {JSON.stringify({
                            message: "Rate limit exceeded. Please try again later."
                        }, null, 2)}
                    </pre>
                </div>
                <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-red-600">500 - Internal Server Error</h4>
                    <pre className="bg-muted rounded text-sm overflow-x-auto">
                        {JSON.stringify({
                            message: "Internal server error"
                        }, null, 2)}
                    </pre>
                </div>
            </div>
        </CardContent>
    </Card>
);

export default memo(ErrorResponses);