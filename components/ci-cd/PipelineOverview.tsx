import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
//@ts-ignore
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
//@ts-ignore
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const PipelineOverview = () => {
    const pipelineStages = `
# CI/CD Pipeline Stages

## 1. Code Commit
   ↓ Push to main/develop or create PR

## 2. Quality Checks
   ├── ESLint & Prettier formatting
   ├── TypeScript type checking
   └── Code structure validation

## 3. Testing Phase
   ├── Server: Jest unit tests
   ├── Server: Build verification
   └── Web: Lint validation

## 4. Build Phase
   ├── Server: TypeScript compilation
   ├── Web: Next.js production build
   └── Artifact generation

## 5. Security Audit
   ├── Dependency vulnerability scan
   ├── Package audit (moderate+ fails)
   └── Security report generation

## 6. Deployment Ready
   └── Artifacts ready for deployment
    `.trim();

    return (
        <Card>
            <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-lg md:text-xl">🔄 Pipeline Overview</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
                <div className="bg-muted p-4 rounded-lg">
                    <SyntaxHighlighter language="yaml" style={vscDarkPlus} customStyle={{
                        margin: 0,
                        background: "#1e1e1e",
                        fontSize: "11px",
                        lineHeight: "1.4",
                    }}>
                        {pipelineStages}
                    </SyntaxHighlighter>
                </div>
            </CardContent>
        </Card>
    );
};

export default PipelineOverview;
