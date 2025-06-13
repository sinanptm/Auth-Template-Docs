import { memo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BackendFolder from "./ServerFolder";
import { architectureLayers } from "@/constants/server";

const Server = () => {
    const getLayerColor = (layer: string) => {
        switch (layer) {
            case "Domain":
                return "bg-blue-900 text-blue-200";
            case "Application":
                return "bg-green-900 text-green-200";
            case "Infrastructure":
                return "bg-orange-900 text-orange-200";
            case "Presentation":
                return "bg-purple-900 text-purple-200";
            case "Shared":
                return "bg-gray-900 text-gray-200";
            default:
                return "bg-slate-900 text-slate-200";
        }
    };

    return (
        <div className="space-y-6">
            <BackendFolder getLayerColor={getLayerColor} />

            <Card>
                <CardHeader className="p-4 md:p-6">
                    <CardTitle className="text-lg md:text-xl">🏛️ Architecture Layers</CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-4">
                    {Object.entries(architectureLayers).map(([layer, { description, folders, dependencies }]) => (
                        <div key={layer} className="border rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-lg font-bold text-primary">{layer}</h3>
                                <Badge className={getLayerColor(layer)} variant="secondary">
                                    {layer}
                                </Badge>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <h4 className="font-semibold mb-1">Description</h4>
                                    <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Associated Folders</h4>
                                    <div className="flex flex-wrap gap-1">
                                        {folders.map((folder, index) => (
                                            <Badge key={index} variant="outline" className="text-xs px-2 py-0.5">
                                                {folder}/
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Dependencies</h4>
                                    <p className="text-xs text-muted-foreground">{dependencies}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
};

export default memo(Server);