import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sun, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/5 to-amber-500/5 rounded-full blur-3xl" />
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
                <div className="text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-sm text-slate-300">Soluções em Tecnologia & Energia</span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                    >
                        Inovação que
                        <span className="block mt-2 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                            Transforma Negócios
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        Energia solar, desenvolvimento de sistemas personalizados, sites e
                        <span className="text-blue-400 font-semibold"> Automação comercial</span>.
                        Tecnologia de ponta para o seu sucesso.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <a href="#contato">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-amber-500/25 transition-all duration-300 hover:scale-105"
                            >
                                Solicitar Orçamento
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </a>
                        <Link to="/automacao">
                            <Button
                                variant="outline"
                                size="lg"
                                className="bg-transparent border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full backdrop-blur-sm"
                            >
                                Conheça o Link Pro
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="grid grid-cols-3 gap-4 sm:gap-8 mt-20 max-w-3xl mx-auto"
                    >
                        {[
                            { icon: Sun, value: '500+', label: 'Projetos Solares' },
                            { icon: Zap, value: '1000+', label: 'Sistemas Ativos' },
                            { icon: Shield, value: '99.9%', label: 'Uptime Garantido' },
                        ].map((stat, index) => (
                            <div key={index} className="text-center group">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10 mb-3 group-hover:bg-white/10 transition-colors">
                                    <stat.icon className="w-5 h-5 text-amber-400" />
                                </div>
                                <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                                <div className="text-xs sm:text-sm text-slate-500">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div >

            {/* Bottom Gradient Fade */}
            < div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
        </section >
    );
}