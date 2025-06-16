import { memo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PipelineOverview from "./PipelineOverview";
import WorkflowsSection from "./WorkflowsSection";
import CiCdBenefits from "./CiCdBenefits";
import SampleWorkflow from "./SampleWorkflow";
import SetupInstructions from "./SetupInstructions";
import PipelineStats from "./PipelineStats";
import { GitBranch } from "lucide-react";

const CiCdDocs = () => {
    const [copied, setCopied] = useState("");

    const copyToClipboard = (text: string, section: string) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopied(section);
            setTimeout(() => setCopied(""), 2000);
        });
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <Card>
                <CardHeader className="p-4 md:p-6">
                    <CardTitle className="text-lg md:text-xl flex items-center gap-2">
                        <GitBranch className="h-6 w-6" />
                        CI/CD Pipeline Documentation
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        Our comprehensive CI/CD pipeline ensures code quality, security, and reliability through automated workflows.
                        Built with GitHub Actions, it provides continuous integration, automated testing, security auditing, and dependency management.
                    </p>
                </CardContent>
            </Card>

            {/* Sections */}
            <WorkflowsSection />
            <CiCdBenefits />
            <PipelineOverview />
            <SampleWorkflow copied={copied} copyToClipboard={copyToClipboard} />
            <SetupInstructions />
            <PipelineStats />
        </div>
    );
};

export default memo(CiCdDocs);
