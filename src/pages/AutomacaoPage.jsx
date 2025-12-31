import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    ArrowRight,
    CheckCircle2,
    BarChart3,
    ShieldCheck,
    Wallet,
    TrendingUp,
    PieChart,
    Menu,
    X,
    Star,
    Smartphone,
    Monitor,
    ShoppingBag,
    Utensils,
    Box,
    Receipt,
    Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";

export default function AutomacaoPage() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/10 selection:text-primary overflow-x-hidden">

            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border shadow-sm">
                <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center text-white font-bold text-xl font-heading shadow-md">
                            L
                        </div>
                        <span className="text-2xl font-bold font-heading text-primary tracking-tight">Link Pro</span>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#recursos" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">Recursos</a>
                        <a href="#segmentos" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">Segmentos</a>
                        <a href="#mobile" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">Apps Móveis</a>
                        <a href="#contato" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">Contato</a>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <Button variant="ghost" className="font-medium text-primary hover:bg-primary/5 cursor-pointer">Área do Cliente</Button>
                        <Link to="/treinamentos">
                            <Button className="bg-primary hover:bg-primary/90 text-white font-bold shadow-lg shadow-primary/20 px-6 cursor-pointer">
                                Treinamentos
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-foreground"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-border p-4 flex flex-col gap-4 shadow-xl"
                    >
                        <a href="#recursos" className="p-2 text-muted-foreground hover:text-primary font-medium" onClick={() => setIsMobileMenuOpen(false)}>Recursos</a>
                        <a href="#segmentos" className="p-2 text-muted-foreground hover:text-primary font-medium" onClick={() => setIsMobileMenuOpen(false)}>Segmentos</a>
                        <a href="#mobile" className="p-2 text-muted-foreground hover:text-primary font-medium" onClick={() => setIsMobileMenuOpen(false)}>Apps Móveis</a>
                        <div className="flex flex-col gap-3 pt-4 border-t border-border">
                            <Button variant="outline" className="w-full border-primary text-primary cursor-pointer">Área do Cliente</Button>
                            <Link to="/treinamentos">
                                <Button className="w-full bg-primary text-white cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Treinamentos</Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 md:pt-44 md:pb-32 relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                            className="flex flex-col gap-6"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary text-xs font-bold uppercase tracking-wider w-fit border border-blue-200">
                                <Star className="w-3 h-3 fill-primary" />
                                Sistema ERP Completo
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-slate-900 leading-[1.1]">
                                Gestão Inteligente para <br />
                                <span className="text-primary">Varejo e Serviços</span>
                            </h1>

                            <p className="text-lg text-slate-600 leading-relaxed max-w-lg font-medium">
                                O Link Pro unifica sua empresa: Vendas, Estoque, Financeiro e NFe em uma única plataforma. Sem módulos extras, sem surpresas.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 pt-4">
                                <a href="#contato">
                                    <Button size="lg" className="h-14 px-8 rounded-lg bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 text-lg font-bold">
                                        Conhecer o Sistema
                                    </Button>
                                </a>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="h-14 px-8 rounded-lg border-2 border-slate-200 text-slate-700 hover:bg-slate-50 text-lg font-semibold"
                                    onClick={() => setIsVideoModalOpen(true)}
                                >
                                    Ver Vídeo Demo
                                </Button>
                            </div>

                            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-200/60 mt-4">
                                <div>
                                    <p className="text-2xl font-bold text-slate-900">+5k</p>
                                    <p className="text-sm text-slate-500 font-medium">Clientes Ativos</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-slate-900">99%</p>
                                    <p className="text-sm text-slate-500 font-medium">Satisfação</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-slate-900">24/7</p>
                                    <p className="text-sm text-slate-500 font-medium">Suporte Técnico</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-[2rem] blur-3xl -z-10 opacity-50"></div>
                            <img
                                src="/img-telas.png"
                                alt="Link Pro Dashboard"
                                className="w-full drop-shadow-2xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section id="recursos" className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-heading">Uma Solução, Infinitas Possibilidades</h2>
                        <p className="text-lg text-slate-600">Diferente de outros sistemas, o Link Pro entrega todos os recursos que você precisa sem cobranças adicionais por módulos.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Box,
                                title: "Controle de Estoque",
                                desc: "Multilojas, grade de produtos, inventário via app e sugestão de compras baseada no giro."
                            },
                            {
                                icon: ShoppingBag,
                                title: "PDV Completo",
                                desc: "Frente de caixa rápido, emissão de NFC-e, pré-venda, crediário e integração com PIX."
                            },
                            {
                                icon: BarChart3,
                                title: "Gestão Financeira",
                                desc: "Contas a pagar e receber, fluxo de caixa, DRE e conciliação bancária simplificada."
                            },
                            {
                                icon: Receipt,
                                title: "Emissão Fiscal",
                                desc: "NFe, NFCe, MDFe e CTe. Cálculos automáticos de impostos e envio direto para contabilidade."
                            },
                            {
                                icon: Users,
                                title: "CRM e Fidelidade",
                                desc: "Histórico de compras, clube de pontos, promoções personalizadas e análise de perfil."
                            },
                            {
                                icon: Monitor,
                                title: "Link Web",
                                desc: "Acesse seus relatórios, dashboard financeiro e estoque de qualquer lugar pelo navegador."
                            }
                        ].map((feature, i) => (
                            <Card key={i} className="border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group bg-slate-50/50">
                                <CardContent className="p-8">
                                    <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 text-primary flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors">
                                        <feature.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-slate-900">{feature.title}</h3>
                                    <p className="text-slate-600 leading-relaxed text-sm">{feature.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA / Contact */}
            <section id="contato" className="py-24 container mx-auto px-4 md:px-6">
                <div className="bg-primary rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <ContactForm showService={false} source="Sistema Link" />
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-4 gap-12 mb-12">
                        <div className="col-span-2">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-white font-bold font-heading">
                                    L
                                </div>
                                <span className="text-xl font-bold font-heading text-slate-900">Link Pro</span>
                            </div>
                            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                                Cervantes Tecnologia. Soluções robustas para gestão empresarial. Simplificando processos, maximizando resultados.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold text-slate-900 mb-4">Produto</h4>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li><a href="#" className="hover:text-primary">Funcionalidades</a></li>
                                <li><a href="#" className="hover:text-primary">Link Web</a></li>
                                <li><a href="#" className="hover:text-primary">Aplicativos</a></li>
                                <li><a href="#" className="hover:text-primary">Atualizações</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-slate-900 mb-4">Suporte</h4>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li><Link to="/treinamentos" className="hover:text-primary">Central de Treinamentos</Link></li>
                                <li><a href="#" className="hover:text-primary">Base de Conhecimento</a></li>
                                <li><a href="#" className="hover:text-primary">Portal do Parceiro</a></li>
                                <li><a href="#" className="hover:text-primary">Acesso Remoto</a></li>
                                <li><a href="#" className="hover:text-primary">Downloads</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-xs text-slate-400">&copy; 2024 Cervantes Tecnologia. Todos os direitos reservados.</p>
                        <div className="flex gap-6 text-xs text-slate-400">
                            <a href="#" className="hover:text-primary">Privacidade</a>
                            <a href="#" className="hover:text-primary">Termos</a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Video Modal */}
            {isVideoModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                    onClick={() => setIsVideoModalOpen(false)}
                >
                    <div
                        className="relative w-full max-w-5xl mx-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setIsVideoModalOpen(false)}
                            className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                        >
                            <X size={32} />
                        </button>
                        <div className="relative pt-[56.25%] bg-black rounded-lg overflow-hidden shadow-2xl">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src="https://www.youtube.com/embed/7ACT8w2XD1E?autoplay=1&modestbranding=1&rel=0&showinfo=0"
                                title="Link Pro Demo"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
