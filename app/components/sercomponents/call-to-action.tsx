interface CallToActionProps {
    title: string;
    description: string;
    primaryButton: { text: string; href: string };
    secondaryButton: { text: string; href: string };
}

export default function CallToAction({ title, description, primaryButton, secondaryButton }: CallToActionProps) {
    return (
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 lg:p-12 text-center text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">{title}</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                    href={primaryButton.href}
                    className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                    {primaryButton.text}
                </a>
                <a
                    href={secondaryButton.href}
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                    {secondaryButton.text}
                </a>
            </div>
        </div>
    );
}