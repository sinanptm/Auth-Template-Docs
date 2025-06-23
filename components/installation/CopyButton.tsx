"use client";

import { Button } from "@/components/ui/button";
import { Copy, CheckCircle } from "lucide-react";

interface CopyButtonProps {
    text: string;
    id: string;
    copied: string;
    setCopied: (id: string) => void;
}

const CopyButton = ({ text, id, copied, setCopied }: CopyButtonProps) => {
    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={() => {
                navigator.clipboard.writeText(text).then(() => {
                    setCopied(id);
                    setTimeout(() => setCopied(""), 2000);
                });
            }}
            className="h-6 w-6 p-0"
        >
            {copied === id ? <CheckCircle className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
        </Button>
    );
};

export default CopyButton;
