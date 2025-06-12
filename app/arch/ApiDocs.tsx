import { memo } from "react";
import ApiOverview from "./ApiOverview";
import AuthHeaders from "./AuthHeaders";
import ErrorResponses from "./ErrorResponses";
import SectionCard from "./SectionCard";
import { Database, User, Settings, Shield, Users } from "lucide-react";
import { USER_AUTH, ADMIN_AUTH, ADMIN_USER, USER_PROFILE } from "../api";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { useQueryState } from "nuqs";

const ApiDocs = () => {
    const [api, setApi] = useQueryState("api", { defaultValue: "health-check" });

    return (
        <div className="space-y-6">
            <ApiOverview />
            <Accordion
                type="single"
                collapsible
                value={api}
                onValueChange={(v) => setApi(v)}
                className="space-y-2 mb-5"
            >
                <AccordionItem value="health-check" className="border rounded-lg">
                    <AccordionTrigger className="px-4 py-3 md:px-6 md:py-4 hover:no-underline">
                        <div className="flex items-center gap-2 text-lg md:text-xl font-semibold">
                            <Database className="h-5 w-5" />
                            Health Check
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 md:px-6 md:pb-6">
                        <SectionCard
                            title="Health Check"
                            icon={Database}
                            endpoints={[
                                {
                                    method: "GET",
                                    path: "/api/health",
                                    description: "Check API health status",
                                    auth: false,
                                    icon: Database,
                                    responseBody: { status: "OK ✅" }
                                }
                            ]}
                        />
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="user-auth" className="border rounded-lg">
                    <AccordionTrigger className="px-4 py-3 md:px-6 md:py-4 hover:no-underline">
                        <div className="flex items-center gap-2 text-lg md:text-xl font-semibold">
                            <User className="h-5 w-5" />
                            User Authentication
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 md:px-6 md:pb-6">
                        <SectionCard title="User Authentication" icon={User} endpoints={USER_AUTH} />
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="user-profile" className="border rounded-lg">
                    <AccordionTrigger className="px-4 py-3 md:px-6 md:py-4 hover:no-underline">
                        <div className="flex items-center gap-2 text-lg md:text-xl font-semibold">
                            <Settings className="h-5 w-5" />
                            User Profile
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 md:px-6 md:pb-6">
                        <SectionCard title="User Profile" icon={Settings} endpoints={USER_PROFILE} />
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="admin-auth" className="border rounded-lg">
                    <AccordionTrigger className="px-4 py-3 md:px-6 md:py-4 hover:no-underline">
                        <div className="flex items-center gap-2 text-lg md:text-xl font-semibold">
                            <Shield className="h-5 w-5" />
                            Admin Authentication
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 md:px-6 md:pb-6">
                        <SectionCard title="Admin Authentication" icon={Shield} endpoints={ADMIN_AUTH} />
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="admin-user" className="border rounded-lg">
                    <AccordionTrigger className="px-4 py-3 md:px-6 md:py-4 hover:no-underline">
                        <div className="flex items-center gap-2 text-lg md:text-xl font-semibold">
                            <Users className="h-5 w-5" />
                            Admin User Management
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 md:px-6 md:pb-6">
                        <SectionCard title="Admin User Management" icon={Users} endpoints={ADMIN_USER} />
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="auth-headers" className="border rounded-lg">
                    <AccordionTrigger className="px-4 py-3 md:px-6 md:py-4 hover:no-underline">
                        <div className="flex items-center gap-2 text-lg md:text-xl font-semibold">
                            🔒 Authentication Headers
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 md:px-6 md:pb-6">
                        <AuthHeaders />
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="error-responses" className="border rounded-lg">
                    <AccordionTrigger className="px-4 py-3 md:px-6 md:py-4 hover:no-underline">
                        <div className="flex items-center gap-2 text-lg md:text-xl font-semibold">
                            ⚠️ Error Responses
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 md:px-6 md:pb-6">
                        <ErrorResponses />
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default memo(ApiDocs);