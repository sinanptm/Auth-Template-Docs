import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Shield, RefreshCw, AlertTriangle, Clock, GitBranch } from "lucide-react";

const CiCdBenefits = () => {
    const cicdBenefits = [
        { icon: <CheckCircle className="h-4 w-4" />, title: "Automated Testing", description: "Every code change is automatically tested" },
        { icon: <Shield className="h-4 w-4" />, title: "Security First", description: "Regular vulnerability scans and dependency audits" },
        { icon: <RefreshCw className="h-4 w-4" />, title: "Stay Updated", description: "Automated dependency management with PR workflow" },
        { icon: <AlertTriangle className="h-4 w-4" />, title: "Quality Gates", description: "Code quality checks prevent broken deployments" },
        { icon: <Clock className="h-4 w-4" />, title: "Fast Feedback", description: "Quick detection of issues in development cycle" },
        { icon: <GitBranch className="h-4 w-4" />, title: "Branch Protection", description: "Enforced checks on main and develop branches" },
    ];

    return (
        <Card>
            <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-lg md:text-xl">✨ CI/CD Benefits</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cicdBenefits.map((benefit, index) => (
                        <div key={index} className="border rounded-lg p-3">
                            <div className="flex items-start gap-2 mb-2">
                                <div className="text-primary mt-0.5">
                                    {benefit.icon}
                                </div>
                                <h4 className="font-semibold text-sm">{benefit.title}</h4>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default CiCdBenefits;
