import { memo } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Code, Bug } from "lucide-react";
//@ts-ignore
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// @ts-ignore
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const Testing = () => {

    const testExample = {
        filename: "OtpUseCase.test.ts",
        code: `describe("OtpUseCase", () => {
  let otpUseCase: OtpUseCase;
  const validPayload = { email: "john@example.com", otp: "123456" };

  beforeEach(() => {
    otpUseCase = new OtpUseCase(
      mockUserRepository,
      mockTokenService,
      mockValidatorService,
      mockOtpRepository,
      mockMailService
    );
    jest.clearAllMocks();
  });

  it("should verify OTP and return tokens successfully", async () => {
    const user = { _id: "user123", email: validPayload.email, name: "John" };
    mockUserRepository.findByEmail.mockResolvedValue(user);
    mockOtpRepository.findOne.mockResolvedValue({ createdAt: new Date() });
    mockTokenService.createAccessToken.mockReturnValue("accessToken");
    mockTokenService.createRefreshToken.mockReturnValue("refreshToken");

    const result = await otpUseCase.exec(validPayload);

    expect(result).toEqual({
      accessToken: "accessToken",
      refreshToken: "refreshToken",
      user: { id: user._id, name: user.name },
    });
  });
});`,
        description: "This test verifies the OTP use case, mocking dependencies like user and OTP repositories. Clean Architecture's dependency inversion allows easy mocking, ensuring isolated and reliable unit tests.",
    };

    return (
        <Card>
            <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-blue-300 flex items-center gap-2">
                    <Bug className="h-5 w-5" /> Streamlined Testing with Clean Architecture
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                {/* Introduction */}
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    Clean Architecture makes testing a breeze by enforcing separation of concerns, dependency inversion, and modularity. Each layer can be tested in isolation, ensuring robust, maintainable, and scalable tests. With tools like Jest and Inversify for dependency injection, writing and running tests is both intuitive and efficient.
                </p>

                {/* Key Benefits */}
                <div>
                    <h4 className="font-semibold text-lg text-green-400 mb-3 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5" />
                        Why Testing is Easy
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                            {
                                title: "Isolated Unit Tests",
                                desc: "The Domain layer contains pure business logic, free of infrastructure dependencies, making unit tests simple and focused.",
                            },
                            {
                                title: "Mockable Dependencies",
                                desc: "Dependency injection via Inversify allows easy mocking of repositories and services, as seen in the test mocks directory.",
                            },
                            {
                                title: "Layered Testing",
                                desc: "Test each layer (Domain, Application, Infrastructure) independently, ensuring comprehensive coverage without external dependencies.",
                            },
                            {
                                title: "Type-Safe Testing",
                                desc: "TypeScript interfaces and types ensure type safety, reducing errors in test setup and execution.",
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

                {/* Testing Workflow */}
                <div>
                    <h4 className="font-semibold text-lg text-purple-400 mb-3 flex items-center gap-2">
                        <Code className="h-5 w-5" />
                        Testing Workflow
                    </h4>
                    <div className="space-y-3">
                        {[
                            {
                                task: "Test a Use Case",
                                steps: "Mock dependencies like repositories and services in tests/__mocks__, then write tests in tests/user/auth to verify use case logic.",
                                folders: ["tests/__mocks__", "tests/user/auth"],
                            },
                            {
                                task: "Test a Repository",
                                steps: "Implement mock repository logic in infrastructure/repositories and write tests to verify data operations.",
                                folders: ["infrastructure/repositories", "tests"],
                            },
                            {
                                task: "Test a Service",
                                steps: "Mock external services in tests/__mocks__/services and test service implementations in infrastructure/services.",
                                folders: ["tests/__mocks__/services", "infrastructure/services"],
                            },
                            {
                                task: "Run Tests",
                                steps: "Use Jest to run tests with `npm test`. The jest.config.js file ensures proper setup for TypeScript and module resolution.",
                                folders: ["tests", "jest.config.js"],
                            },
                        ].map((item, index) => (
                            <div key={index} className="border border-gray-700 rounded-lg p-3">
                                <div className="flex items-center gap-2 mb-2">
                                    <Badge className="bg-purple-900 text-purple-200 text-xs">{item.task}</Badge>
                                </div>
                                <p className="text-sm text-gray-300 mb-2">{item.steps}</p>
                                <div className="flex flex-wrap gap-1">
                                    {item.folders.map((folder, idx) => (
                                        <Badge key={idx} variant="outline" className="text-xs text-gray-400 border-gray-600">
                                            {folder}/
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Test Example */}
                <div>
                    <h4 className="font-semibold text-lg text-orange-400 mb-3 flex items-center gap-2">
                        <Code className="h-5 w-5" />
                        Test Example
                    </h4>
                    <div className="bg-[#1e1e1e] rounded-lg overflow-hidden border border-gray-700">
                        {/* VS Code-like header */}
                        <div className="flex items-center justify-between px-3 py-2 bg-[#2d2d30] border-b border-gray-600">
                            <div className="flex items-center space-x-2">
                                <div className="flex space-x-1">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <span className="text-xs text-gray-300 font-mono ml-2">📄 {testExample.filename}</span>
                            </div>
                            <div className="text-xs text-gray-400">TypeScript</div>
                        </div>

                        {/* Code content with syntax highlighting */}
                        <div className="overflow-x-auto">
                            <SyntaxHighlighter
                                language="typescript"
                                style={vscDarkPlus}
                                showLineNumbers={true}
                                wrapLines={true}
                                wrapLongLines={true}
                            >
                                {testExample.code}
                            </SyntaxHighlighter>
                        </div>

                        {/* Description */}
                        <div className="px-3 pb-3 pt-2 border-t border-gray-700 bg-[#252526]">
                            <p className="text-xs text-gray-400 leading-relaxed">{testExample.description}</p>
                        </div>
                    </div>
                </div>

                {/* Scalability and Maintenance */}
                <div>
                    <h4 className="font-semibold text-lg text-blue-400 mb-3 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5" />
                        Scalability & Maintenance
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                        {[
                            "Isolated tests ensure that changes in one layer don’t break tests in others.",
                            "Mocking dependencies simplifies testing new features without external services.",
                            "Jest’s robust setup and TypeScript integration catch errors early, reducing maintenance overhead.",
                            "Consistent test structure across layers supports team collaboration and onboarding.",
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0 mt-1" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </CardContent>
        </Card>
    );
};

export default memo(Testing);