import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GitBranch, Shield, RefreshCw } from "lucide-react";
import { Badge } from "../ui/badge";

const WorkflowsSection = () => {
    const workflows = [
        {
            name: "CI/CD Pipeline",
            file: "ci-cd.yml",
            trigger: "Push to main/develop, Pull Requests",
            purpose: "Automated testing, building, and quality assurance",
            icon: <GitBranch className="h-5 w-5" />,
            color: "bg-blue-900 text-blue-200",
        },
        {
            name: "Security Audit",
            file: "security.yml",
            trigger: "Weekly schedule (Mondays 2 AM), Push/PR to main",
            purpose: "Vulnerability scanning and dependency security checks",
            icon: <Shield className="h-5 w-5" />,
            color: "bg-red-900 text-red-200",
        },
        {
            name: "Update Dependencies",
            file: "update-deps.yml",
            trigger: "Weekly schedule (Sundays midnight), Manual dispatch",
            purpose: "Automated dependency updates with PR creation",
            icon: <RefreshCw className="h-5 w-5" />,
            color: "bg-green-900 text-green-200",
        },
    ];

    return (
        <Card>
            <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-lg md:text-xl">⚙️ GitHub Actions Workflows</CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
                {workflows.map((workflow, index) => (
                    <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                                {workflow.icon}
                                <h3 className="text-lg font-bold">{workflow.name}</h3>
                            </div>
                            <Badge className={workflow.color} variant="secondary">
                                {workflow.file}
                            </Badge>
                        </div>

                        <div className="space-y-3">
                            <div>
                                <h4 className="font-semibold text-sm mb-1">Trigger</h4>
                                <p className="text-xs text-muted-foreground">{workflow.trigger}</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-sm mb-1">Purpose</h4>
                                <p className="text-xs text-muted-foreground">{workflow.purpose}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};

export default WorkflowsSection;
