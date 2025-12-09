import React from 'react';
import { Sun, Code, Link } from 'lucide-react';

export function Footer() {
    return (
        <footer className="py-12 px-4 border-t border-slate-800 bg-slate-950">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-2">
                        {/* Using a placeholder since logo is not defined */}
                        <div className="h-10 w-10 bg-amber-500 rounded-lg flex items-center justify-center font-bold text-white">TS</div>
                        <span className="text-xl font-bold text-white">Tech Sistemas</span>
                    </a>

                    {/* Services Icons */}
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-slate-400">
                            <Sun className="w-4 h-4 text-amber-500" />
                            <span className="text-sm">Energia Solar</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-400">
                            <Code className="w-4 h-4 text-blue-500" />
                            <span className="text-sm">Sistemas</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-400">
                            <Link className="w-4 h-4 text-emerald-500" />
                            <span className="text-sm">Link Pro</span>
                        </div>
                    </div>

                    {/* Copyright */}
                    <p className="text-sm text-slate-500">
                        © {new Date().getFullYear()} Tech Sistemas. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
