import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { memo } from "react";

const Testing = () => {
    return (
        <Card className="">
            <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-lg md:text-xl text-blue-300 flex items-center">
                    🧪 Testing Strategy
                </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
                <p className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed">
                    Comprehensive test suite with mocked dependencies for isolated unit testing, ensuring robust and reliable code quality.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-lg text-green-400 mb-3 flex items-center">
                            📊 Test Coverage
                        </h4>
                        <div className="space-y-2">
                            {[
                                "Authentication use cases",
                                "Password reset flows",
                                "OAuth integration",
                                "OTP verification",
                                "Error handling",
                            ].map((item, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <Badge
                                        variant="secondary"
                                        className="bg-green-900 text-green-200 text-xs px-2 py-1"
                                    >
                                        ✓
                                    </Badge>
                                    <span className="text-sm text-gray-300">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg text-purple-400 mb-3 flex items-center">
                            🛠️ Mock Strategy
                        </h4>
                        <div className="space-y-2">
                            {[
                                "Repository mocks",
                                "Service mocks",
                                "External API mocks",
                                "Database mocks",
                            ].map((item, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <Badge
                                        variant="secondary"
                                        className="bg-purple-900 text-purple-200 text-xs px-2 py-1"
                                    >
                                        🧩
                                    </Badge>
                                    <span className="text-sm text-gray-300">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default memo(Testing);