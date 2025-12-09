import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function CTASection() {
    return (
        <section className="relative py-24 sm:py-32 bg-slate-950 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-600/20 to-transparent rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative rounded-3xl overflow-hidden"
                >
                    {/* Card Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700" />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px]" />

                    <div className="relative p-8 sm:p-12 lg:p-16">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left Content */}
                            <div>
                                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
                                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                                    Fale Conosco
                                </span>

                                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                    Pronto para Transformar
                                    <span className="block text-slate-400">Seu Negócio?</span>
                                </h2>

                                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                    Entre em contato para uma consultoria gratuita e descubra
                                    como nossas soluções podem impulsionar seus resultados.
                                </p>

                                {/* Contact Info */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 text-slate-300">
                                        <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center">
                                            <Phone className="w-4 h-4 text-blue-400" />
                                        </div>
                                        <span>(94) 9 8423-1245</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-slate-300">
                                        <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center">
                                            <Mail className="w-4 h-4 text-blue-400" />
                                        </div>
                                        <span>elitymaciel@hotmail.com</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-slate-300">
                                        <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center">
                                            <MapPin className="w-4 h-4 text-blue-400" />
                                        </div>
                                        <span>Redenção, PA</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Form */}
                            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                                <h3 className="text-xl font-semibold text-white mb-6">
                                    Solicite um Orçamento
                                </h3>

                                <form className="space-y-4">
                                    <div>
                                        <Input
                                            placeholder="Seu nome"
                                            className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 h-12 rounded-xl focus:border-blue-500 focus:ring-blue-500/20"
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            type="email"
                                            placeholder="Seu e-mail"
                                            className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 h-12 rounded-xl focus:border-blue-500 focus:ring-blue-500/20"
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            type="tel"
                                            placeholder="Seu telefone"
                                            className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 h-12 rounded-xl focus:border-blue-500 focus:ring-blue-500/20"
                                        />
                                    </div>
                                    <div>
                                        <select className="w-full h-12 px-4 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-400 focus:border-blue-500 focus:ring-blue-500/20 focus:outline-none">
                                            <option value="">Selecione o serviço</option>
                                            <option value="solar">Energia Solar</option>
                                            <option value="sistemas">Desenvolvimento de Sistemas</option>
                                            <option value="linkpro">Link Pro - Automação Comercial</option>
                                        </select>
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full h-12 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-xl shadow-lg shadow-amber-500/20 transition-all duration-300 hover:scale-[1.02]"
                                    >
                                        Enviar Mensagem
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </form>

                                <p className="text-slate-500 text-xs text-center mt-4">
                                    Responderemos em até 24 horas úteis
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}