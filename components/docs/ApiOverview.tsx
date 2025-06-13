import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { memo } from "react";

const ApiOverview = () => (
    <Card>
        <CardHeader className="p-4 md:p-6">
            <CardTitle className="text-2xl md:text-3xl font-bold flex items-center gap-2">
                📚 API Overview
            </CardTitle>
        </CardHeader>
        <CardContent className="p-4 md:p-6 space-y-6">
            <section>
                <h3 className="text-lg font-semibold mb-2">Introduction</h3>
                <p className="text-sm text-muted-foreground">
                    Welcome to the API documentation! This API provides a robust set of endpoints for user
                    authentication, profile management, and admin operations. It supports both standard
                    email/password authentication with OTP verification and Firebase OAuth, making it versatile
                    for various applications. Whether you're building a user-facing app or an admin dashboard,
                    this API has you covered.
                </p>
            </section>

            <section>
                <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>User authentication via email/password with OTP or Firebase OAuth.</li>
                    <li>User profile management for updating personal details.</li>
                    <li>Admin authentication and user management, including blocking/unblocking users.</li>
                    <li>Health check endpoint to monitor API status.</li>
                    <li>Secure JWT-based authentication with refresh tokens.</li>
                    <li>Rate limiting (111 requests/hour) to ensure fair usage.</li>
                </ul>
            </section>

            <section>
                <h3 className="text-lg font-semibold mb-2">Authentication</h3>
                <p className="text-sm text-muted-foreground">
                    Most endpoints require authentication using a JWT Bearer token, except for public endpoints
                    like <code className="bg-muted px-1 rounded">/api/health</code> and authentication routes
                    (e.g., <code className="bg-muted px-1 rounded">/api/auth/signin</code>). Obtain an access
                    token via <code className="bg-muted px-1 rounded">/api/auth/signin</code> or
                    <code className="bg-muted px-1 rounded">/api/auth/oauth-2</code>, and include it in the
                    <code className="bg-muted px-1 rounded">Authorization</code> header. See the
                    <strong> Authentication Headers</strong> section for details.
                </p>
            </section>

            <section>
                <h3 className="text-lg font-semibold mb-2">Getting Started</h3>
                <p className="text-sm text-muted-foreground mb-3">
                    Try the API with a simple health check request to verify connectivity:
                </p>
                <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
                    {`curl -X GET https://your-api-base-url/api/health`}
                </pre>
                <p className="text-sm text-muted-foreground mt-2">
                    Expected response:
                </p>
                <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
                    {JSON.stringify({ status: "OK ✅" }, null, 2)}
                </pre>
                <p className="text-sm text-muted-foreground mt-2">
                    Next, explore the <strong>User Authentication</strong> section to register or sign in, or
                    jump to <strong>Admin User Management</strong> for admin-specific operations.
                </p>
            </section>

            <section>
                <h3 className="text-lg font-semibold mb-2">Rate Limiting</h3>
                <p className="text-sm text-muted-foreground">
                    To ensure fair usage, the API enforces a rate limit of 111 requests per hour per IP address
                    on certain endpoints (e.g., <code className="bg-muted px-1 rounded">/api/auth/signin</code>
                    ). Exceeding this limit returns a 429 error. See the <strong>Error Responses</strong> section
                    for details.
                </p>
            </section>
        </CardContent>
    </Card>
);

export default memo(ApiOverview);