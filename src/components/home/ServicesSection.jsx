import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Code2, ShoppingCart, ArrowUpRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

const services = [
    {
        icon: Sun,
        title: 'Energia Solar',
        description: 'Projetos completos de energia solar fotovoltaica para residências e empresas. Reduza sua conta de luz em até 95% com energia limpa e renovável.',
        features: ['Projetos Personalizados', 'Instalação Profissional', 'Monitoramento 24/7', 'Garantia Estendida'],
        gradient: 'from-amber-500 to-orange-600',
        bgGlow: 'bg-amber-500/20',
    },
    {
        icon: Code2,
        title: 'Desenvolvimento de Sistemas',
        description: 'Soluções tecnológicas sob medida para automatizar processos e impulsionar a eficiência do seu negócio com software de alta performance.',
        features: ['Sistemas Web & Mobile', 'Integrações APIs', 'Dashboards Inteligentes', 'Suporte Dedicado'],
        gradient: 'from-blue-500 to-indigo-600',
        bgGlow: 'bg-blue-500/20',
    },
    {
        icon: ShoppingCart,
        title: 'Link Pro - Automação Comercial',
        description: 'Sistema completo de gestão e automação comercial. PDV, controle de estoque, emissão de NF-e e muito mais em uma única plataforma.',
        features: ['PDV Completo', 'Gestão de Estoque', 'Emissão NF-e/NFC-e', 'Relatórios Gerenciais'],
        gradient: 'from-emerald-500 to-teal-600',
        bgGlow: 'bg-emerald-500/20',
    },
];

export default function ServicesSection() {
    return (
        <section className="relative py-24 sm:py-32 bg-slate-950">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-medium text-amber-400 tracking-wider uppercase mb-4 block">
                        Nossos Serviços
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                        Soluções Completas para
                        <span className="block text-slate-400">Sua Empresa</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Da energia que move seu negócio aos sistemas que o gerenciam,
                        oferecemos tecnologia de ponta para cada necessidade.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                        >
                            <Card className="relative group h-full bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all duration-500 overflow-hidden">
                                {/* Background Glow */}
                                <div className={`absolute -top-24 -right-24 w-48 h-48 ${service.bgGlow} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                <div className="relative p-8">
                                    {/* Icon */}
                                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 shadow-lg`}>
                                        <service.icon className="w-7 h-7 text-white" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-400 mb-6 leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <ul className="space-y-3 mb-8">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                                                <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Link */}
                                    <button className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-amber-400 transition-colors">
                                        Saiba mais
                                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}