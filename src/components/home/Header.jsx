import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Terminal } from "lucide-react"; // Imported Terminal for logo placeholder

const navLinks = [
    { href: "#servicos", label: "Serviços" },
    { href: "#contato", label: "Contato" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-slate-950/90 backdrop-blur-lg border-b border-slate-800" : "bg-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-2">
                        {/* Replaced image with icon placeholder */}
                        <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                            <Terminal className="text-white w-6 h-6" />
                        </div>
                        <span className="text-xl font-bold text-white">Tech Sistemas</span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <Button size="sm" className="bg-amber-500 hover:bg-amber-600 text-white border-0">Solicitar Orçamento</Button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <nav className="md:hidden py-4 border-t border-slate-800 bg-slate-950 absolute left-0 right-0 px-4">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <Button size="sm" className="w-full bg-amber-500 hover:bg-amber-600 text-white">Solicitar Orçamento</Button>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}
