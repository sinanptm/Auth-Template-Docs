export const schemas = {
    website: {
        "@type": "WebSite",
        "@id": "https://full-stack-clean-auth-template.vercel.app/#website",
        "url": "https://full-stack-clean-auth-template.vercel.app",
        "name": "Full-Stack Auth Template",
        "description": "Production-ready full-stack authentication template with Next.js 15, Express, and MongoDB. Open-source and community-inspired.",
        "publisher": {
            "@type": "Person",
            "name": "Muhammed Sinan",
            "url": "https://www.muhammedsinan.space/"
        },
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://full-stack-clean-auth-template.vercel.app/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
        },
        "inLanguage": "en-US"
    },
    webApplication: {
        "@type": "WebApplication",
        "@id": "https://full-stack-clean-auth-template.vercel.app/#webapp",
        "name": "Full-Stack Authentication Template",
        "url": "https://full-stack-clean-auth-template.vercel.app",
        "description": "A complete authentication system with Next.js 15, Express, MongoDB, JWT, OAuth, and clean architecture for rapid development.",
        "applicationCategory": "Web Development",
        "operatingSystem": "Any",
        "featureList": [
            "Email/Password Authentication",
            "OAuth (Google, GitHub)",
            "OTP Verification",
            "Role-Based Access Control",
            "Clean Architecture"
        ],
        "author": {
            "@type": "Person",
            "name": "Muhammed Sinan",
            "url": "https://www.muhammedsinan.space/"
        },
        "sameAs": ["https://github.com/sinanptm/fullstack-clean-auth-template"],
        "inLanguage": "en-US"
    },
    softwareSourceCode: {
        "@type": "SoftwareSourceCode",
        "@id": "https://full-stack-clean-auth-template.vercel.app/#sourcecode",
        "name": "Full-Stack Clean Auth Template",
        "description": "Open-source full-stack authentication template using TypeScript, Next.js 15, Express, and MongoDB. Clone it on GitHub to kickstart your project.",
        "codeRepository": "https://github.com/sinanptm/fullstack-clean-auth-template",
        "programmingLanguage": ["TypeScript", "JavaScript"],
        "license": "https://github.com/sinanptm/fullstack-clean-auth-template/blob/main/LICENSE",
        "author": {
            "@type": "Person",
            "name": "Muhammed Sinan",
            "url": "https://www.muhammedsinan.space/"
        },
        "contributor": {
            "@type": "Organization",
            "name": "Developer Community",
            "description": "Inspired by developer community best practices"
        },
        "sameAs": ["https://full-stack-clean-auth-template.vercel.app"],
        "inLanguage": "en-US"
    }
};