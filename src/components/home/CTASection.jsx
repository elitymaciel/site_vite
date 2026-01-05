import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function CTASection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        source: 'solar'
    });

    const [status, setStatus] = useState({
        type: 'idle',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.phone) {
            setStatus({
                type: 'error',
                message: 'Por favor, preencha todos os campos obrigatórios.'
            });
            return;
        }

        setStatus({ type: 'loading', message: '' });

        try {
            const API_URL = 'https://evolutionapi.solartechsolutions.com.br/message/sendText/maciel_erp';
            const API_KEY = '9E49B7510753-49F9-BA8B-C7B1274BC97C';
            const TARGET_NUMBER = '5594984231245';

            const message = `🚀 *Novo Lead - ${formData.source.toUpperCase()}*\n\n` +
                `👤 *Nome:* ${formData.name}\n` +
                `📧 *Email:* ${formData.email}\n` +
                `📱 *Telefone:* ${formData.phone}\n` +
                `🛠️ *Serviço:* ${formData.service || 'Não informado'}\n` +
                `📍 *Fonte:* ${formData.source}`;

            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'apikey': API_KEY
                },
                body: JSON.stringify({
                    "number": TARGET_NUMBER,
                    "text": message
                }),
            });

            if (!response.ok) {
                throw new Error('Erro ao enviar');
            }

            setStatus({
                type: 'success',
                message: 'Mensagem enviada com sucesso! Em breve entraremos em contato.'
            });

            setFormData({
                name: '',
                email: '',
                phone: '',
                service: '',
                source: 'solar'
            });

            setTimeout(() => setStatus({ type: 'idle', message: '' }), 5000);

        } catch (error) {
            setStatus({
                type: 'error',
                message: 'Ocorreu um erro ao enviar. Tente novamente mais tarde.'
            });
        }
    };

    return (
        <section id="contato" className="relative py-24 sm:py-32 bg-slate-950 overflow-hidden">
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

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <input type="hidden" name="source" value={formData.source} />
                                    <div>
                                        <Input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Seu nome"
                                            className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 h-12 rounded-xl focus:border-blue-500 focus:ring-blue-500/20"
                                            required
                                            disabled={status.type === 'loading'}
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            type="email"
                                            placeholder="Seu e-mail"
                                            className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 h-12 rounded-xl focus:border-blue-500 focus:ring-blue-500/20"
                                            required
                                            disabled={status.type === 'loading'}
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            type="tel"
                                            placeholder="Seu telefone"
                                            className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 h-12 rounded-xl focus:border-blue-500 focus:ring-blue-500/20"
                                            required
                                            disabled={status.type === 'loading'}
                                        />
                                    </div>
                                    <div>
                                        <select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full h-12 px-4 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-400 focus:border-blue-500 focus:ring-blue-500/20 focus:outline-none"
                                            disabled={status.type === 'loading'}
                                        >
                                            <option value="">Selecione o serviço</option>
                                            <option value="solar">Energia Solar</option>
                                            <option value="sistemas">Desenvolvimento de Sistemas</option>
                                            <option value="linkpro">Automação Comercial</option>
                                        </select>
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full h-12 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-xl shadow-lg shadow-amber-500/20 transition-all duration-300 hover:scale-[1.02]"
                                        disabled={status.type === 'loading'}
                                    >
                                        {status.type === 'loading' ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Enviando...
                                            </>
                                        ) : (
                                            <>
                                                Enviar Mensagem
                                                <ArrowRight className="ml-2 w-4 h-4" />
                                            </>
                                        )}
                                    </Button>

                                    {status.type === 'success' && (
                                        <div className="flex items-center gap-2 bg-green-500/20 backdrop-blur-sm text-green-400 p-3 rounded-xl border border-green-500/30 text-sm">
                                            <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                                            <p>{status.message}</p>
                                        </div>
                                    )}

                                    {status.type === 'error' && (
                                        <div className="flex items-center gap-2 bg-red-500/20 backdrop-blur-sm text-red-400 p-3 rounded-xl border border-red-500/30 text-sm">
                                            <AlertCircle className="h-4 w-4 flex-shrink-0" />
                                            <p>{status.message}</p>
                                        </div>
                                    )}
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
