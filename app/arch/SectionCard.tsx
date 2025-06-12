import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EndpointCard from "./EndpointCard";
import { memo } from "react";

interface SectionCardProps {
    title: string;
    icon: React.ComponentType<{ className?: string; }>;
    endpoints: Array<{
        method: string;
        path: string;
        description: string;
        auth: boolean;
        rateLimit?: string;
        requestBody?: any;
        responseBody?: any;
        icon: React.ComponentType<{ className?: string; }>;
    }>;
}

const SectionCard = ({ title, icon: Icon, endpoints }: SectionCardProps) => (
    <Card>
        <CardHeader className="p-4 md:p-6">
            <CardTitle className="flex items-center gap-2">
                <Icon className="h-5 w-5" />
                {title}
            </CardTitle>
        </CardHeader>
        <CardContent className="p-4 space-y-4">
            {endpoints.map((endpoint, index) => (
                <EndpointCard key={index} {...endpoint} />
            ))}
        </CardContent>
    </Card>
);

export default memo(SectionCard);