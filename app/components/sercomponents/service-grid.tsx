export default function ServiceGrid() {
    const services = [
        {
            icon: "🚀",
            title: "Web Development",
            description: "Custom web applications built with modern frameworks and best practices",
            features: ["React/Next.js", "TypeScript", "Responsive Design", "SEO Optimized"]
        },
        {
            icon: "📱",
            title: "Mobile Solutions",
            description: "Cross-platform mobile applications for iOS and Android",
            features: ["React Native", "Flutter", "Native Performance", "App Store Deployment"]
        },
        {
            icon: "👀",
            title: "Custom System Development",
            description: " Need a tailor-made solution? I specialize in building modern web apps, APIs, and automation tools built for your business needs.",
            features: ["AWS/Azure", "DevOps", "CI/CD Pipelines", "Microservices"]
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
                <div key={index} className="bg-linear-to-br from-black via-slate-950 to-slate-900 rounded-[1rem] p-8 shadow-lg  hover:shadow-xl transition-all duration-300 group">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-white mb-6 leading-relaxed">{service.description}</p>
                </div>
            ))}
        </div>
    );
}