import { memo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Key, Mail, Shield, Lock, CheckCircle2, AlertCircle, RefreshCcw } from "lucide-react"

const AuthFlow = () => {
    return (
        <div className="space-y-6">
            <Card>
                <CardHeader className="p-4 md:p-6">
                    <CardTitle className="text-2xl md:text-3xl font-bold flex items-center gap-2">
                        🔐 Authentication Flow
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6">
                    <p className="text-muted-foreground mb-6">
                        This template implements a comprehensive authentication system with multiple authentication methods, OTP
                        verification, and secure token management using HTTP-only cookies.
                    </p>

                    {/* Main Auth Flow Diagram */}
                    <div className="relative  p-4 md:p-6 rounded-xl overflow-hidden mb-8">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-5">
                            <div className="absolute top-5 left-10 w-12 h-12 border border-primary/30 rounded-full"></div>
                            <div className="absolute top-8 right-20 w-8 h-8 border border-secondary/30 rounded-full"></div>
                            <div className="absolute bottom-5 left-1/4 w-6 h-6 border border-primary/30 rounded-full"></div>
                            <div className="absolute bottom-3 right-1/3 w-4 h-4 border border-secondary/30 rounded-full"></div>
                        </div>

                        <div className="relative z-10">
                            {/* Entry Point */}
                            <div className="flex flex-col items-center mb-8">
                                <div className="bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-lg p-3 md:p-4 w-full max-w-xs text-center">
                                    <div className="font-bold text-lg mb-1">🔑 Sign In/Up Page</div>
                                    <div className="text-xs text-blue-300">Authentication Entry Point</div>
                                </div>
                                <div className="h-6 w-px bg-gradient-to-b from-blue-400/50 to-transparent"></div>
                                <div className="h-4 w-4 rounded-full border-2 border-blue-400"></div>
                            </div>

                            {/* Authentication Methods */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-8">
                                {/* Email/Password Flow */}
                                <div className="space-y-6">
                                    <div className="bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 rounded-lg p-3 text-center">
                                        <div className="font-bold flex items-center justify-center gap-2 mb-1">
                                            <Mail className="w-4 h-4" /> Email/Password
                                        </div>
                                        <div className="text-xs text-indigo-300">Standard Authentication</div>
                                    </div>

                                    <div className="flex justify-center">
                                        <div className="h-6 w-px bg-gradient-to-b from-indigo-400/50 to-transparent"></div>
                                    </div>

                                    <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-3">
                                        <div className="font-medium text-sm mb-2">📝 Enter Credentials</div>
                                        <div className="text-xs text-muted-foreground">Email & password validation</div>
                                    </div>

                                    <div className="flex justify-center">
                                        <div className="h-6 w-px bg-gradient-to-b from-indigo-400/50 to-transparent"></div>
                                    </div>

                                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3">
                                        <div className="font-medium text-sm mb-2">🔢 Generate OTP</div>
                                        <div className="text-xs text-muted-foreground">One-time password creation</div>
                                    </div>

                                    <div className="flex justify-center">
                                        <div className="h-6 w-px bg-gradient-to-b from-amber-400/50 to-transparent"></div>
                                    </div>

                                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3">
                                        <div className="font-medium text-sm mb-2">📧 Send OTP Email</div>
                                        <div className="text-xs text-muted-foreground">Secure delivery via Nodemailer</div>
                                    </div>

                                    <div className="flex justify-center">
                                        <div className="h-6 w-px bg-gradient-to-b from-amber-400/50 to-transparent"></div>
                                    </div>

                                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3">
                                        <div className="font-medium text-sm mb-2">🔢 OTP Verification</div>
                                        <div className="text-xs text-muted-foreground">Time-limited code validation</div>
                                    </div>
                                </div>

                                {/* OAuth Flow */}
                                <div className="space-y-6">
                                    <div className="bg-orange-500/20 text-orange-400 border border-orange-500/30 rounded-lg p-3 text-center">
                                        <div className="font-bold flex items-center justify-center gap-2 mb-1">
                                            <Shield className="w-4 h-4" /> OAuth (Google/GitHub)
                                        </div>
                                        <div className="text-xs text-orange-300">Firebase Authentication</div>
                                    </div>

                                    <div className="flex justify-center">
                                        <div className="h-6 w-px bg-gradient-to-b from-orange-400/50 to-transparent"></div>
                                    </div>

                                    <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-3">
                                        <div className="font-medium text-sm mb-2">🔥 Firebase OAuth Popup</div>
                                        <div className="text-xs text-muted-foreground">Provider selection interface</div>
                                    </div>

                                    <div className="flex justify-center">
                                        <div className="h-6 w-px bg-gradient-to-b from-orange-400/50 to-transparent"></div>
                                    </div>

                                    <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-3">
                                        <div className="font-medium text-sm mb-2">🎯 Get Firebase Token</div>
                                        <div className="text-xs text-muted-foreground">Secure provider token</div>
                                    </div>

                                    <div className="flex justify-center">
                                        <div className="h-6 w-px bg-gradient-to-b from-orange-400/50 to-transparent"></div>
                                    </div>

                                    <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-3">
                                        <div className="font-medium text-sm mb-2">🔍 Validate Firebase Token</div>
                                        <div className="text-xs text-muted-foreground">Server-side verification</div>
                                    </div>

                                    <div className="flex justify-center">
                                        <div className="h-6 w-px bg-gradient-to-b from-orange-400/50 to-transparent"></div>
                                    </div>

                                    <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-3">
                                        <div className="font-medium text-sm mb-2">👤 Create/Update User</div>
                                        <div className="text-xs text-muted-foreground">User record management</div>
                                    </div>
                                </div>
                            </div>

                            {/* Common Final Steps */}
                            <div className="flex justify-center mb-6">
                                <div className="w-1/2 h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent"></div>
                            </div>

                            <div className="flex flex-col items-center space-y-6 max-w-md mx-auto">
                                <div className="bg-green-500/20 text-green-400 border border-green-500/30 rounded-lg p-3 w-full text-center">
                                    <div className="font-bold flex items-center justify-center gap-2 mb-1">
                                        <Key className="w-4 h-4" /> Generate JWT
                                    </div>
                                    <div className="text-xs text-green-300">Access & refresh tokens</div>
                                </div>

                                <div className="flex justify-center">
                                    <div className="h-6 w-px bg-gradient-to-b from-green-400/50 to-transparent"></div>
                                </div>

                                <div className="bg-green-500/20 text-green-400 border border-green-500/30 rounded-lg p-3 w-full text-center">
                                    <div className="font-bold flex items-center justify-center gap-2 mb-1">
                                        <Lock className="w-4 h-4" /> Set HTTP-Only Cookies
                                    </div>
                                    <div className="text-xs text-green-300">Secure token storage</div>
                                </div>

                                <div className="flex justify-center">
                                    <div className="h-6 w-px bg-gradient-to-b from-green-400/50 to-transparent"></div>
                                </div>

                                <div className="bg-teal-500/20 text-teal-400 border border-teal-500/30 rounded-lg p-3 w-full text-center">
                                    <div className="font-bold flex items-center justify-center gap-2 mb-1">
                                        <CheckCircle2 className="w-4 h-4" /> Authenticated User
                                    </div>
                                    <div className="text-xs text-teal-300">Access to protected routes</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Auth Features */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Card className="bg-slate-900">
                            <CardHeader className="p-4">
                                <CardTitle className="text-base flex items-center gap-2">
                                    <RefreshCcw className="w-4 h-4 text-blue-500" />
                                    Token Refresh
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-4 pt-0">
                                <p className="text-xs text-muted-foreground">
                                    Automatic token refresh when access token expires, using HTTP-only refresh token cookies.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-slate-900">
                            <CardHeader className="p-4">
                                <CardTitle className="text-base flex items-center gap-2">
                                    <AlertCircle className="w-4 h-4 text-amber-500" />
                                    Password Recovery
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-4 pt-0">
                                <p className="text-xs text-muted-foreground">
                                    Secure password reset flow with email verification and OTP validation.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-slate-900">
                            <CardHeader className="p-4">
                                <CardTitle className="text-base flex items-center gap-2">
                                    <Shield className="w-4 h-4 text-purple-500" />
                                    Admin Authentication
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-4 pt-0">
                                <p className="text-xs text-muted-foreground">
                                    Separate admin authentication flow with role-based access control.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="p-4 md:p-6">
                    <CardTitle className="text-xl font-bold">🛡️ Security Features</CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h3 className="font-semibold text-lg">Token Management</h3>
                            <div className="space-y-2">
                                <div className="flex items-start gap-2">
                                    <Badge className="bg-green-500/10 text-green-500 border-green-500/20 mt-0.5">JWT</Badge>
                                    <p className="text-sm text-muted-foreground">
                                        JSON Web Tokens with RS256 algorithm for secure authentication.
                                    </p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20 mt-0.5">HTTP-Only</Badge>
                                    <p className="text-sm text-muted-foreground">
                                        Cookies protected from JavaScript access to prevent XSS attacks.
                                    </p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Badge className="bg-purple-500/10 text-purple-500 border-purple-500/20 mt-0.5">Refresh</Badge>
                                    <p className="text-sm text-muted-foreground">
                                        Short-lived access tokens with automatic refresh mechanism.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-semibold text-lg">Protection Measures</h3>
                            <div className="space-y-2">
                                <div className="flex items-start gap-2">
                                    <Badge className="bg-amber-500/10 text-amber-500 border-amber-500/20 mt-0.5">Rate Limiting</Badge>
                                    <p className="text-sm text-muted-foreground">
                                        Protection against brute force attacks with request throttling.
                                    </p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Badge className="bg-red-500/10 text-red-500 border-red-500/20 mt-0.5">Password Hashing</Badge>
                                    <p className="text-sm text-muted-foreground">
                                        Secure bcrypt hashing with salt rounds for password storage.
                                    </p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Badge className="bg-teal-500/10 text-teal-500 border-teal-500/20 mt-0.5">CORS</Badge>
                                    <p className="text-sm text-muted-foreground">
                                        Cross-Origin Resource Sharing protection for API endpoints.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default memo(AuthFlow);
