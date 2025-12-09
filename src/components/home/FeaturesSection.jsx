import React from 'react';
import { motion } from 'framer-motion';
import {
    Rocket,
    HeadphonesIcon,
    TrendingUp,
    Lock,
    Smartphone,
    Cloud
} from 'lucide-react';

const features = [
    {
        icon: Rocket,
        title: 'Implementação Rápida',
        description: 'Sistemas em produção em tempo recorde, sem comprometer a qualidade.',
    },
    {
        icon: HeadphonesIcon,
        title: 'Suporte Premium',
        description: 'Equipe técnica especializada disponível para auxiliar quando precisar.',
    },
    {
        icon: TrendingUp,
        title: 'Escalabilidade',
        description: 'Soluções que crescem junto com o seu negócio, sem limitações.',
    },
    {
        icon: Lock,
        title: 'Segurança Total',
        description: 'Dados protegidos com criptografia de ponta e backups automáticos.',
    },
    {
        icon: Smartphone,
        title: 'Acesso Mobile',
        description: 'Gerencie tudo na palma da mão com apps nativos iOS e Android.',
    },
    {
        icon: Cloud,
        title: 'Cloud Computing',
        description: 'Infraestrutura em nuvem de alta disponibilidade e performance.',
    },
];

export default function FeaturesSection() {
    return (
        <section className="relative py-24 sm:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_70%)]" />

            <div className="relative max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="text-sm font-medium text-blue-400 tracking-wider uppercase mb-4 block">
                            Por que nos escolher
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Tecnologia que
                            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                Impulsiona Resultados
                            </span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                            Com anos de experiência no mercado, combinamos expertise técnica com
                            atendimento personalizado para entregar soluções que realmente fazem
                            a diferença no seu dia a dia.
                        </p>

                        {/* Highlight Box */}
                        <div className="relative p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-white">+</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">Link Pro - Revenda Autorizada</h4>
                                    <p className="text-slate-400 text-sm">
                                        Somos parceiros oficiais do sistema Link Pro. Implantação,
                                        treinamento e suporte especializado em automação comercial.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Features Grid */}
                    <div className="grid sm:grid-cols-2 gap-5">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative p-6 rounded-2xl bg-slate-900/30 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/50 transition-all duration-300"
                            >
                                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300">
                                    <feature.icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}