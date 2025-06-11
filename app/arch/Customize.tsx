import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Layers, Zap, Shield } from "lucide-react";

const Customize = () => {
    return (
        <Card >
            <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-blue-300 flex items-center gap-2">
                    🎯 Why This Template is Perfect for Customization
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                {/* Introduction */}
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    Built on Clean Architecture principles, this backend is designed for seamless customization. Its modular, layered structure ensures that developers can extend or modify functionality with minimal effort, maintaining scalability and maintainability.
                </p>

                <div>
                    <h4 className="font-semibold text-lg text-green-400 mb-3 flex items-center gap-2">
                        <Layers className="h-5 w-5" />
                        Clean Architecture Advantages
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                            {
                                title: "Separation of Concerns",
                                desc: "Each layer (Domain, Application, Infrastructure, Presentation, Shared) has a single responsibility, making modifications targeted and safe.",
                            },
                            {
                                title: "Dependency Inversion",
                                desc: "Interfaces in the Domain layer ensure that business logic remains independent of infrastructure details, allowing easy swaps of technologies.",
                            },
                            {
                                title: "Testable Code",
                                desc: "Pure business logic in the Domain layer and dependency injection via Inversify enable isolated unit testing, simplifying validation of custom features.",
                            },
                            {
                                title: "Framework Independence",
                                desc: "Core logic isn't tied to Express.js or MongoDB, allowing developers to switch frameworks or databases with minimal refactoring.",
                            },
                        ].map((item, index) => (
                            <div key={index} className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-1" />
                                <div>
                                    <span className="font-semibold text-sm text-gray-200">{item.title}</span>
                                    <p className="text-xs text-gray-400">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="font-semibold text-lg text-purple-400 mb-3 flex items-center gap-2">
                        <Shield className="h-5 w-5" />
                        Easy Backend Customization
                    </h4>
                    <div className="space-y-3">
                        {[
                            {
                                task: "Add a New User Role",
                                steps: "Define a new role in types/index.ts, create a new entity in domain/entities, add use cases in use_case, and implement controllers in presentation/controllers.",
                                folders: ["types", "domain/entities", "use_case", "presentation/controllers"],
                            },
                            {
                                task: "Integrate a New OAuth Provider",
                                steps: "Implement a new service in infrastructure/services that adheres to domain/interfaces/services/IOAuthService.ts, and update di/services.ts for dependency injection.",
                                folders: ["infrastructure/services", "domain/interfaces/services", "di"],
                            },
                            {
                                task: "Switch to a Different Database",
                                steps: "Replace repository implementations in infrastructure/repositories and update models in infrastructure/models, keeping domain/interfaces/repositories unchanged.",
                                folders: ["infrastructure/repositories", "infrastructure/models", "domain/interfaces/repositories"],
                            },
                            {
                                task: "Add Push Notifications",
                                steps: "Create a new service interface in domain/interfaces/services, implement it in infrastructure/services, and inject it into use cases via di/services.ts.",
                                folders: ["domain/interfaces/services", "infrastructure/services", "di"],
                            },
                        ].map((item, index) => (
                            <div key={index} className="border border-gray-700 rounded-lg p-3">
                                <div className="flex items-center gap-2 mb-2">
                                    <Badge className="bg-purple-900 text-purple-200 text-xs">
                                        {item.task}
                                    </Badge>
                                </div>
                                <p className="text-sm text-gray-300 mb-2">{item.steps}</p>
                                <div className="flex flex-wrap gap-1">
                                    {item.folders.map((folder, idx) => (
                                        <Badge
                                            key={idx}
                                            variant="outline"
                                            className="text-xs text-gray-400 border-gray-600"
                                        >
                                            {folder}/
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scalability and Maintenance */}
                <div>
                    <h4 className="font-semibold text-lg text-orange-400 mb-3 flex items-center gap-2">
                        <Zap className="h-5 w-5" />
                        Scalability & Maintenance
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                        {[
                            "Modular design supports team collaboration by isolating changes to specific layers.",
                            "TypeScript ensures type safety, reducing runtime errors during customization.",
                            "Dependency injection simplifies adding or swapping services without affecting core logic.",
                            "Consistent error handling and logging patterns streamline debugging of custom features.",
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-orange-500 flex-shrink-0 mt-1" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </CardContent>
        </Card>
    );
};

export default Customize;