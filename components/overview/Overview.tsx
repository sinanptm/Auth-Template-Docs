import { memo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bug, Layers, Lock, Settings, Shield, Zap } from "lucide-react";
import Customize from "./Customize";
import Inspiration from "./Inspiration";

const features = [
    {
        Icon: Layers,
        title: "Clean Architecture",
        description: "Domain-driven structure with clear separation of concerns for effortless feature management.",
    },
    {
        Icon: Settings,
        title: "Highly Customizable",
        description: "Modular components and services for seamless adaptation to specific needs.",
    },
    {
        Icon: Shield,
        title: "Complete Authentication",
        description: "Email/Password with OTP, OAuth (Google, GitHub), Admin authentication, and role-based access control.",
    },
    {
        Icon: Bug,
        title: "CI/CD & Testing",
        description: "Jest-powered testing with Clean Architecture for isolated unit tests and CI/CD pipelines for automated workflows.",
    },
    {
        Icon: Zap,
        title: "Modern Tech Stack",
        description: "Next.js 15, Express.js 5, MongoDB, TypeScript, and Firebase OAuth for cutting-edge development.",
    },
    {
        Icon: Lock,
        title: "Security-First",
        description: "JWT tokens, HTTP-only cookies, rate limiting, bcrypt hashing, and comprehensive validation.",
    },
];

const securityFeatures = [
    { title: "JWT Authentication", description: "Access & refresh tokens with automatic refresh.", color: "text-green-500" },
    { title: "HTTP-Only Cookies", description: "Secure token storage to prevent XSS attacks.", color: "text-blue-400" },
    { title: "Rate Limiting", description: "Protects against brute force attacks.", color: "text-orange-500" },
    { title: "Password Hashing", description: "bcrypt with 10 rounds for secure storage.", color: "text-purple-400" },
    { title: "Input Validation", description: "Joi schemas for robust endpoint validation.", color: "text-red-500" },
    { title: "CORS Protection", description: "Configured origins and credentials handling.", color: "text-indigo-400" },
];

const Overview = () => {
    return (
        <div className="space-y-6">
            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {features.map(({ Icon, title, description }, index) => (
                    <Card key={index} className="transition-shadow hover:shadow-md">
                        <CardHeader className="p-3 md:px-5 md:py-2.5">
                            <CardTitle className="flex items-center gap-2 text-sm md:text-base">
                                <Icon aria-hidden="true" className="h-4 w-4 md:h-5 md:w-5" />
                                {title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4">
                            <p className="text-xs md:text-sm text-muted-foreground">{description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Security Features */}
            <Card>
                <CardHeader className="p-4 md:p-6">
                    <CardTitle className="text-lg md:text-xl">🛡️ Security Features</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                        {securityFeatures.map(({ title, description, color }, index) => (
                            <div key={index} className="border rounded-lg p-3">
                                <h4 className={`font-semibold text-sm md:text-base ${color}`}>{title}</h4>
                                <p className="text-xs md:text-sm text-muted-foreground">{description}</p>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* External Components */}
            <Customize />
            <Inspiration />
        </div>
    );
};

export default memo(Overview);