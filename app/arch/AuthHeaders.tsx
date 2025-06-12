import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { memo } from "react";

const AuthHeaders = () => (
    <Card>
        <CardHeader className="p-4 md:p-6">
            <CardTitle className="text-lg md:text-xl">🔒 Authentication Headers</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
            <div className="space-y-4">
                <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Bearer Token Authentication</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                        For protected endpoints (e.g., /api/profile, /api/admin/user), include the JWT access token in the Authorization header:
                    </p>
                    <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
                        Authorization: Bearer {`{access_token}`}
                    </pre>
                </div>
                <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Content Type</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                        All POST, PUT, and PATCH requests with JSON payloads (e.g., /api/auth/signup, /api/profile) must include:
                    </p>
                    <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
                        Content-Type: application/json
                    </pre>
                </div>
            </div>
        </CardContent>
    </Card>
);

export default memo(AuthHeaders);