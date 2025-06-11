import { memo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layers, Lock, Settings, Shield, Users, Zap } from "lucide-react";
import Customize from "./Customize";
import Inspiration from "./Inspiration";

const Overview = () => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <Card>
                    <CardHeader className="p-4 md:p-6">
                        <CardTitle className="flex items-center gap-2 text-sm md:text-base">
                            <Layers className="h-4 w-4 md:h-5 md:w-5" />
                            Clean Architecture
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                        <p className="text-xs md:text-sm text-muted-foreground">
                            Domain-driven structure makes adding/removing features effortless with clear separation of concerns.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="p-4 md:p-6">
                        <CardTitle className="flex items-center gap-2 text-sm md:text-base">
                            <Settings className="h-4 w-4 md:h-5 md:w-5" />
                            Highly Customizable
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                        <p className="text-xs md:text-sm text-muted-foreground">
                            Modular components and services for easy adaptation to your specific needs.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="p-4 md:p-6">
                        <CardTitle className="flex items-center gap-2 text-sm md:text-base">
                            <Shield className="h-4 w-4 md:h-5 md:w-5" />
                            Complete Authentication
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                        <p className="text-xs md:text-sm text-muted-foreground">
                            Email/Password with OTP verification, OAuth (Google, GitHub), and Admin authentication.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="p-4 md:p-6">
                        <CardTitle className="flex items-center gap-2 text-sm md:text-base">
                            <Users className="h-4 w-4 md:h-5 md:w-5" />
                            Role-Based Access
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                        <p className="text-xs md:text-sm text-muted-foreground">
                            Secure user and admin roles with protected routes and middleware.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="p-4 md:p-6">
                        <CardTitle className="flex items-center gap-2 text-sm md:text-base">
                            <Zap className="h-4 w-4 md:h-5 md:w-5" />
                            Modern Tech Stack
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                        <p className="text-xs md:text-sm text-muted-foreground">
                            Next.js 15, Express.js 5, MongoDB, TypeScript, Firebase OAuth for cutting-edge development.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="p-4 md:p-6">
                        <CardTitle className="flex items-center gap-2 text-sm md:text-base">
                            <Lock className="h-4 w-4 md:h-5 md:w-5" />
                            Security-First
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                        <p className="text-xs md:text-sm text-muted-foreground">
                            JWT tokens, HTTP-only cookies, rate limiting, bcrypt hashing, and comprehensive validation.
                        </p>
                    </CardContent>
                </Card>
            </div>

            <Customize />

            <Card>
                <CardHeader className="p-4 md:p-6">
                    <CardTitle className="text-lg md:text-xl">🛡️ Security Features</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                        <div className="border rounded-lg p-3">
                            <h4 className="font-semibold text-green-600 text-sm md:text-base">JWT Authentication</h4>
                            <p className="text-xs md:text-sm text-muted-foreground">Access & refresh tokens with automatic refresh</p>
                        </div>
                        <div className="border rounded-lg p-3">
                            <h4 className="font-semibold text-blue-600 text-sm md:text-base">HTTP-Only Cookies</h4>
                            <p className="text-xs md:text-sm text-muted-foreground">Secure token storage preventing XSS attacks</p>
                        </div>
                        <div className="border rounded-lg p-3">
                            <h4 className="font-semibold text-orange-600 text-sm md:text-base">Rate Limiting</h4>
                            <p className="text-xs md:text-sm text-muted-foreground">Protection against brute force attacks</p>
                        </div>
                        <div className="border rounded-lg p-3">
                            <h4 className="font-semibold text-purple-600 text-sm md:text-base">Password Hashing</h4>
                            <p className="text-xs md:text-sm text-muted-foreground">bcrypt with 10 rounds for secure storage</p>
                        </div>
                        <div className="border rounded-lg p-3">
                            <h4 className="font-semibold text-red-600 text-sm md:text-base">Input Validation</h4>
                            <p className="text-xs md:text-sm text-muted-foreground">Comprehensive Joi schemas for all endpoints</p>
                        </div>
                        <div className="border rounded-lg p-3">
                            <h4 className="font-semibold text-indigo-600 text-sm md:text-base">CORS Protection</h4>
                            <p className="text-xs md:text-sm text-muted-foreground">Configured origins and credentials handling</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Inspiration />
        </div>
    );
};

export default memo(Overview);
