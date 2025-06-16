import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SetupInstructions = () => {
    const steps = [
        {
            number: "1",
            title: "Repository Setup",
            description: "Ensure your repository has the workflow files in <code className='bg-muted px-1 rounded'>.github/workflows/</code>"
        },
        {
            number: "2",
            title: "Branch Protection",
            description: "Configure branch protection rules for <code className='bg-muted px-1 rounded'>main</code> and <code className='bg-muted px-1 rounded'>develop</code> branches"
        },
        {
            number: "3",
            title: "Required Checks",
            description: "Enable 'Require status checks to pass before merging' with all CI jobs as required"
        },
        {
            number: "4",
            title: "Permissions",
            description: "Ensure GitHub token has appropriate permissions for PR creation and workflow execution"
        }
    ];

    return (
        <Card>
            <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-lg md:text-xl">🚀 Setup Instructions</CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
                {steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-2">
                        <Badge variant="outline" className="text-xs px-2 py-1 mt-0.5">{step.number}</Badge>
                        <div>
                            <h4 className="font-semibold text-sm">{step.title}</h4>
                            <p className="text-xs text-muted-foreground" dangerouslySetInnerHTML={{ __html: step.description }} />
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};

export default SetupInstructions;
