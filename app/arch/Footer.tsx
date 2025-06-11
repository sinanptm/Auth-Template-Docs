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
                                🎯 Ready to build your next project?
                            </h3>
                            <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 max-w-3xl mx-auto leading-relaxed">
                                This template provides everything you need to start building production-ready applications
                                with clean architecture that scales with your requirements. Built with modern technologies
                                and battle-tested patterns.
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                            <Badge variant="secondary" className="text-xs md:text-sm px-3 py-1">
                                ✨ Built with modern technologies
                            </Badge>
                            <Badge variant="secondary" className="text-xs md:text-sm px-3 py-1">
                                🎨 Easy to customize
                            </Badge>
                            <Badge variant="secondary" className="text-xs md:text-sm px-3 py-1">
                                🚀 Production-ready
                            </Badge>
                            <Badge variant="secondary" className="text-xs md:text-sm px-3 py-1">
                                🧪 Fully tested
                            </Badge>
                        </div>

                        <div className="pt-4 border-t border-primary/20 mt-6">
                            <p className="text-xs text-muted-foreground">
                                Made with ❤️ <Link href={'https://www.muhammedsinan.space'} className="text-blue-400">Sinan</Link>  by studying the best practices from the developer community
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};
