export default function Footer() {
    return (
        <footer className="relative border-t border-white/10 bg-gradient-to-b from-gray-900 via-gray-950 to-black py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-3">
                            SyntaXLab.
                        </h2>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Building the next generation of web experiences with cutting-edge technology and innovative solutions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><a href="#about" className="text-gray-400 hover:text-cyan-400 transition text-sm">About Us</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-cyan-400 transition text-sm">Services</a></li>
                            <li><a href="#portfolio" className="text-gray-400 hover:text-cyan-400 transition text-sm">Portfolio</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-cyan-400 transition text-sm">Contact</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Resources</h3>
                        <ul className="space-y-3">
                            <li><a href="#blog" className="text-gray-400 hover:text-cyan-400 transition text-sm">Blog</a></li>
                            <li><a href="#docs" className="text-gray-400 hover:text-cyan-400 transition text-sm">Documentation</a></li>
                            <li><a href="#support" className="text-gray-400 hover:text-cyan-400 transition text-sm">Support</a></li>
                            <li><a href="#privacy" className="text-gray-400 hover:text-cyan-400 transition text-sm">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
                        <div className="grid grid-cols-2 gap-3">
                            <a href="https://github.com/WebmasterSensei" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition text-sm group">
                                <i className="ri-github-fill text-xl group-hover:scale-110 transition-transform"></i>
                                <span>GitHub</span>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-sky-400 transition text-sm group">
                                <i className="ri-twitter-x-line text-xl group-hover:scale-110 transition-transform"></i>
                                <span>Twitter</span>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition text-sm group">
                                <i className="ri-linkedin-fill text-xl group-hover:scale-110 transition-transform"></i>
                                <span>LinkedIn</span>
                            </a>
                            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-pink-400 transition text-sm group">
                                <i className="ri-dribbble-fill text-xl group-hover:scale-110 transition-transform"></i>
                                <span>Dribbble</span>
                            </a>
                            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition text-sm group">
                                <i className="ri-behance-fill text-xl group-hover:scale-110 transition-transform"></i>
                                <span>Behance</span>
                            </a>
                            <a href="mailto:contact@syntaxlab.dev" className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition text-sm group">
                                <i className="ri-mail-fill text-xl group-hover:scale-110 transition-transform"></i>
                                <span>Email</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-500">
                        &copy; 2025 <span className="text-white font-semibold">SyntaXLab</span>. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                        <a href="#terms" className="hover:text-cyan-400 transition">Terms of Service</a>
                        <a href="#privacy" className="hover:text-cyan-400 transition">Privacy Policy</a>
                        <a href="#cookies" className="hover:text-cyan-400 transition">Cookies</a>
                    </div>
                </div>
            </div>
            
            {/* Subtle glow effect */}
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
        </footer>
    )
}