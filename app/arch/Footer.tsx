import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const Footer = () => {
    return (
        <div className="space-y-6 mt-12">
            {/* Call to Action Footer */}
            <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border-primary/20">
                <CardContent className="text-center py-8 md:py-12">
                    <div className="space-y-4 md:space-y-6">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                <span className="text-amber-100">🚀</span> Kickstart Your Next Scalable App!
                            </h3>
                            <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 max-w-3xl mx-auto leading-relaxed">
                                Jumpstart your development with this production-ready template, featuring clean architecture, modern tech, and scalable patterns tailored to your needs.
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                            <Badge variant="secondary" className="text-xs md:text-sm px-3 py-1">
                                ⚡ Cutting-Edge Tech Stack
                            </Badge>
                            <Badge variant="secondary" className="text-xs md:text-sm px-3 py-1">
                                🎨 Highly Customizable
                            </Badge>
                            <Badge variant="secondary" className="text-xs md:text-sm px-3 py-1">
                                ✅ Production-Ready
                            </Badge>
                            <Badge variant="secondary" className="text-xs md:text-sm px-3 py-1">
                                🛡️ Rigorously Tested
                            </Badge>
                        </div>

                        <div className="pt-4 border-t border-primary/20 mt-6">
                            <p className="text-xs text-muted-foreground">
                                Crafted with ❤️ by <Link href={'https://www.muhammedsinan.space'} className="text-blue-400">Sinan</Link>. Inspired by developer community best practices.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};