import { User, Settings, Shield, Users, Key, Mail, RefreshCw, EyeOff, Eye } from "lucide-react";

export const USER_AUTH = [
    {
        method: "POST",
        path: "/api/auth/signup",
        description: "Register a new user account",
        auth: false,
        icon: User,
        requestBody: {
            email: "user@example.com",
            password: "password123",
            name: "John Doe"
        },
        responseBody: {
            success: true,
            message: "Account created successfully. Please sign in to continue."
        }
    },
    {
        method: "POST",
        path: "/api/auth/signin",
        description: "Sign in with email and password to receive OTP",
        auth: false,
        rateLimit: "30 requests/hour",
        icon: Key,
        requestBody: {
            email: "user@example.com",
            password: "password123"
        },
        responseBody: {
            success: true,
            message: "Sign-in initiated. Please check your email for the OTP.",
            email: "user@example.com"
        }
    },
    {
        method: "POST",
        path: "/api/auth/verify-otp",
        description: "Verify OTP to complete authentication",
        auth: false,
        icon: Shield,
        requestBody: {
            email: "user@example.com",
            otp: "123456"
        },
        responseBody: {
            success: true,
            message: "OTP verified. You are now signed in.",
            accessToken: "jwt_token_here",
            user: {
                id: "user_id",
                name: "John Doe"
            }
        }
    },
    {
        method: "POST",
        path: "/api/auth/resend-otp",
        description: "Resend OTP to user's email",
        auth: false,
        rateLimit: "30 requests/hour",
        icon: Mail,
        requestBody: {
            email: "user@example.com"
        },
        responseBody: {
            success: true,
            message: "A new OTP has been sent to your email."
        }
    },
    {
        method: "POST",
        path: "/api/auth/oauth-2",
        description: "Authenticate using Firebase OAuth",
        auth: false,
        icon: Shield,
        requestBody: {
            name: "John Doe",
            email: "user@example.com",
            accessToken: "firebase_id_token",
            profile: "https://example.com/profile.jpg"
        },
        responseBody: {
            success: true,
            message: "OAuth Signin Success. You are now signed in.",
            accessToken: "jwt_token_here",
            user: {
                id: "user_id",
                name: "John Doe",
                email: "user@example.com",
                profile: "https://example.com/profile.jpg"
            }
        }
    },
    {
        method: "POST",
        path: "/api/auth/forgot-password",
        description: "Request a password reset link",
        auth: false,
        rateLimit: "30 requests/hour",
        icon: Mail,
        requestBody: {
            email: "user@example.com"
        },
        responseBody: {
            success: true,
            message: "A password reset link has been sent to your email."
        }
    },
    {
        method: "POST",
        path: "/api/auth/reset-password",
        description: "Reset password using OTP and reset link",
        auth: false,
        icon: Key,
        requestBody: {
            email: "user@example.com",
            password: "newpassword123",
            otp: "123456",
            createdDate: "2025-06-12T17:00:00.000Z"
        },
        responseBody: {
            success: true,
            message: "Password reset successfully. Please sign in with your new password."
        }
    },
    {
        method: "POST",
        path: "/api/auth/refresh",
        description: "Refresh access token using refresh token",
        auth: false,
        rateLimit: "30 requests/hour",
        icon: RefreshCw,
        responseBody: {
            success: true,
            message: "Access token refreshed successfully.",
            accessToken: "new_jwt_token_here"
        }
    },
    {
        method: "DELETE",
        path: "/api/auth/logout",
        description: "Logout and clear refresh token",
        auth: false,
        icon: EyeOff,
        responseBody: {
            success: true,
            message: "Successfully logged out."
        }
    }
];

export const USER_PROFILE = [
    {
        method: "GET",
        path: "/api/profile",
        description: "Get current user profile",
        auth: true,
        icon: User,
        responseBody: {
            success: true,
            user: {
                id: "user_id",
                email: "user@example.com",
                name: "John Doe",
                createdAt: "2024-01-01T00:00:00Z"
            }
        }
    },
    {
        method: "PUT",
        path: "/api/profile",
        description: "Update user profile",
        auth: true,
        icon: Settings,
        requestBody: {
            name: "John Smith"
        },
        responseBody: {
            success: true,
            message: "Details Update successfully",
            user: {
                id: "user_id",
                email: "john.smith@example.com",
                name: "John Smith"
            }
        }
    }
];

export const ADMIN_AUTH = [
    {
        method: "POST",
        path: "/api/admin/auth",
        description: "Admin login with credentials",
        auth: false,
        icon: Shield,
        requestBody: {
            email: "admin@example.com",
            password: "admin_password"
        },
        responseBody: {
            success: true,
            message: "Signin Successful.",
            accessToken: "admin_jwt_token_here"
        }
    },
    {
        method: "POST",
        path: "/api/admin/auth/refresh",
        description: "Refresh admin access token",
        auth: false,
        icon: RefreshCw,
        responseBody: {
            success: true,
            message: "Access token refreshed successfully.",
            accessToken: "new_admin_jwt_token_here"
        }
    },
    {
        method: "DELETE",
        path: "/api/admin/auth/logout",
        description: "Admin logout",
        auth: true,
        icon: EyeOff,
        responseBody: {
            success: true,
            message: "Successfully logged out."
        }
    }
];

export const ADMIN_USER = [
    {
        method: "GET",
        path: "/api/admin/user",
        description: "Get all users (admin only)",
        auth: true,
        icon: Users,
        responseBody: {
            success: true,
            users: [
                {
                    id: "user_id_1",
                    email: "user1@example.com",
                    name: "User One",
                    createdAt: "2024-01-01T00:00:00Z",
                    isBlocked: false
                }
            ]
        }
    },
    {
        method: "PUT",
        path: "/api/admin/user/:id",
        description: "Update user details (admin only)",
        auth: true,
        icon: Settings,
        requestBody: {
            name: "Updated Name"
        },
        responseBody: {
            success: true,
            message: "User Profile Updated Successfully",
            user: {
                id: "user_id",
                email: "updated@example.com",
                name: "Updated Name"
            }
        }
    },
    {
        method: "PATCH",
        path: "/api/admin/user/:id",
        description: "Toggle user block status (admin only)",
        auth: true,
        icon: Eye,
        responseBody: {
            success: true,
            message: "Updated User Block Status Successfully"
        }
    }
];
