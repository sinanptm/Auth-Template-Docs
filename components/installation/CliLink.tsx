"use client";

import { memo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Package } from "lucide-react";
import Link from "next/link";

const CliLink = () => {
    return (
        <Card className="border-2 border-blue-500/20 bg-gradient-to-r from-blue-950/20 to-indigo-950/20">
            <CardContent className="pt-4">
                <Link
                    className="flex items-center justify-between"
                    href="https://npmjs.com/package/clean-auth"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="flex items-center gap-3">
                        <Package className="h-6 w-6 text-blue-400" />
                        <div>
                            <h3 className="font-semibold">clean-auth CLI</h3>
                            <p className="text-sm text-muted-foreground">Official NPM package</p>
                        </div>
                    </div>
                    <Button variant="outline" size="sm" className="gap-1.5 cursor-pointer">
                        <ExternalLink className="h-4 w-4" />
                        View on NPM
                    </Button>
                </Link>
            </CardContent>
        </Card>
    );
};


export default memo(CliLink);
