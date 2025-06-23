"use client";

import { memo, useState } from "react";
import CliLink from "./CliLink";
import QuickStart from "./QuickStart";
import CliCommands from "./CliCommands";
import ManualSetup from "./ManualSetup";

const Installation: React.FC = () => {
    const [copied, setCopied] = useState<string>("");

    return (
        <div className="space-y-4">
            <CliLink />
            <QuickStart copied={copied} setCopied={setCopied} />
            <CliCommands />
            <ManualSetup copied={copied} setCopied={setCopied} />
        </div>
    );
};

export default memo(Installation);