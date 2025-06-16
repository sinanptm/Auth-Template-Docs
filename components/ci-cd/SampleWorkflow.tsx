import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
// @ts-ignore
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// @ts-ignore
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type SampleWorkflowProps = {
    copied: string;
    copyToClipboard: (text: string, section: string) => void;
};

const SampleWorkflow = ({ copied, copyToClipboard }: SampleWorkflowProps) => {
    const sampleWorkflow = `
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  server:
    name: Server Tests & Build
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v4
      
    - name: Install pnpm
      uses: pnpm/action-setup@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'pnpm'
        
    - name: Install dependencies
      run: pnpm install
      
    - name: Run server tests
      run: pnpm test
      
    - name: Build server
      run: pnpm --prefix server build
    `.trim();

    return (
        <Card>
            <CardHeader className="p-4 md:p-6">
                <div className="flex justify-between items-center">
                    <CardTitle className="text-lg md:text-xl">📝 Sample Workflow Configuration</CardTitle>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(sampleWorkflow, "workflow")}
                        className="text-xs cursor-pointer"
                    >
                        {copied === "workflow" ? "Copied!" : <Copy className="h-4 w-4" />}
                    </Button>
                </div>
            </CardHeader>
            <CardContent className="p-4">
                <div className="bg-[#1e1e1e] rounded-lg overflow-hidden border border-gray-700">
                    <SyntaxHighlighter language="yaml" style={vscDarkPlus}>
                        {sampleWorkflow}
                    </SyntaxHighlighter>
                </div>
            </CardContent>
        </Card>
    );
};

export default SampleWorkflow;
