import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PipelineStats = () => {
    return (
        <Card>
            <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-lg md:text-xl">📊 Pipeline Statistics</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-3 border rounded-lg">
                        <div className="text-2xl font-bold text-blue-500">3</div>
                        <div className="text-xs text-muted-foreground">Workflows</div>
                    </div>
                    <div className="text-center p-3 border rounded-lg">
                        <div className="text-2xl font-bold text-green-500">7</div>
                        <div className="text-xs text-muted-foreground">Total Jobs</div>
                    </div>
                    <div className="text-center p-3 border rounded-lg">
                        <div className="text-2xl font-bold text-purple-500">2</div>
                        <div className="text-xs text-muted-foreground">Scheduled</div>
                    </div>
                    <div className="text-center p-3 border rounded-lg">
                        <div className="text-2xl font-bold text-orange-500">~5min</div>
                        <div className="text-xs text-muted-foreground">Avg Runtime</div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default PipelineStats;
