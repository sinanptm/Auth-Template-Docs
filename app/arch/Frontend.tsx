import { memo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FrontendFolder from "./FrontendFolder";

const Frontend = () => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <Card>
                    <CardHeader className="p-4 md:p-6">
                        <CardTitle className="text-lg md:text-xl">🎨 UI Components</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 space-y-3">
                        <div className="border rounded-lg p-3">
                            <h4 className="font-semibold text-sm md:text-base">Shadcn/ui Components</h4>
                            <p className="text-xs md:text-sm text-muted-foreground">Modern, accessible UI components with Tailwind CSS</p>
                        </div>
                        <div className="border rounded-lg p-3">
                            <h4 className="font-semibold text-sm md:text-base">Custom Form Elements</h4>
                            <p className="text-xs md:text-sm text-muted-foreground">Reusable form components with validation</p>
                        </div>
                        <div className="border rounded-lg p-3">
                            <h4 className="font-semibold text-sm md:text-base">Loading States</h4>
                            <p className="text-xs md:text-sm text-muted-foreground">Global loading overlay with Framer Motion</p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="p-4 md:p-6">
                        <CardTitle className="text-lg md:text-xl">🔄 State Management</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 space-y-3">
                        <div className="border rounded-lg p-3">
                            <h4 className="font-semibold text-sm md:text-base">Zustand Stores</h4>
                            <p className="text-xs md:text-sm text-muted-foreground">Lightweight state management for auth and UI state</p>
                        </div>
                        <div className="border rounded-lg p-3">
                            <h4 className="font-semibold text-sm md:text-base">React Query</h4>
                            <p className="text-xs md:text-sm text-muted-foreground">Server state management with caching and synchronization</p>
                        </div>
                        <div className="border rounded-lg p-3">
                            <h4 className="font-semibold text-sm md:text-base">Local Storage</h4>
                            <p className="text-xs md:text-sm text-muted-foreground">Persistent auth state with hydration handling</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <FrontendFolder />

            <Card>
                <CardHeader className="p-4 md:p-6">
                    <CardTitle className="text-lg md:text-xl">🔐 Authentication Architecture</CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-4">
                    <div className="border rounded-lg p-4">
                        <h4 className="font-semibold text-lg mb-3 text-blue-500">Authentication Flow</h4>
                        <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                                    1
                                </div>
                                <div>
                                    <h5 className="font-medium text-sm">User Authentication</h5>
                                    <p className="text-xs text-muted-foreground">
                                        When user successfully authenticates, access token is stored in localStorage and Zustand store
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                                    2
                                </div>
                                <div>
                                    <h5 className="font-medium text-sm">API Request Authorization</h5>
                                    <p className="text-xs text-muted-foreground">
                                        For every API request, token is retrieved from localStorage and attached as Bearer token in
                                        Authorization header
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                                    3
                                </div>
                                <div>
                                    <h5 className="font-medium text-sm">Token Refresh Mechanism</h5>
                                    <p className="text-xs text-muted-foreground">
                                        If token expires, automatic refresh is triggered using axios-auth-refresh interceptor
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                                    4
                                </div>
                                <div>
                                    <h5 className="font-medium text-sm">Layout-Based Protection</h5>
                                    <p className="text-xs text-muted-foreground">
                                        Next.js layouts check authentication status and control page access in real-time
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border rounded-lg p-3">
                            <h4 className="font-semibold text-sm md:text-base text-green-700">✅ Authentication Benefits</h4>
                            <ul className="text-xs md:text-sm text-muted-foreground mt-2 space-y-1">
                                <li>• Fast background authentication checks</li>
                                <li>• Automatic token refresh without user intervention</li>
                                <li>• SSR-compatible with hydration handling</li>
                                <li>• Role-based access control (User/Admin)</li>
                                <li>• Seamless user experience</li>
                            </ul>
                        </div>
                        <div className="border rounded-lg p-3">
                            <h4 className="font-semibold text-sm md:text-base text-blue-700">🛡️ Security Features</h4>
                            <ul className="text-xs md:text-sm text-muted-foreground mt-2 space-y-1">
                                <li>• Bearer token authentication</li>
                                <li>• Automatic logout on token failure</li>
                                <li>• Protected routes with layout guards</li>
                                <li>• Secure token storage in localStorage</li>
                                <li>• Request/response interceptors</li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>


            <Card>
                <CardHeader className="p-4 md:p-6">
                    <CardTitle className="text-lg md:text-xl">🎯 Custom Hooks</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                        <div className="border rounded-lg p-3">
                            <h4 className="font-semibold text-blue-600 text-sm md:text-base">Authentication Hooks</h4>
                            <ul className="text-xs md:text-sm text-muted-foreground mt-1 space-y-1">
                                <li>• useAuthUser</li>
                                <li>• useAuthAdmin</li>
                                <li>• useSignin</li>
                                <li>• useSignup</li>
                            </ul>
                        </div>
                        <div className="border rounded-lg p-3">
                            <h4 className="font-semibold text-green-600 text-sm md:text-base">API Hooks</h4>
                            <ul className="text-xs md:text-sm text-muted-foreground mt-1 space-y-1">
                                <li>• useGetProfile</li>
                                <li>• useUpdateProfile</li>
                                <li>• useVerifyOtp</li>
                                <li>• useResetPassword</li>
                            </ul>
                        </div>
                        <div className="border rounded-lg p-3">
                            <h4 className="font-semibold text-orange-600 text-sm md:text-base">Utility Hooks</h4>
                            <ul className="text-xs md:text-sm text-muted-foreground mt-1 space-y-1">
                                <li>• useLoading</li>
                                <li>• useMailSetter</li>
                                <li>• useAuthRedirectToast</li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default memo(Frontend);
