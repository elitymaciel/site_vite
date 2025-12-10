import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: ''
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

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setStatus({
                type: 'error',
                message: 'Por favor, insira um email válido.'
            });
            return;
        }

        setStatus({ type: 'loading', message: '' });

        try {
            // ALTERE ESTA URL PARA A URL DA SUA API EXTERNA
            const API_URL = 'https://sua-api-externa.com/api/contatos';

            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Erro ao enviar os dados');
            }

            setStatus({
                type: 'success',
                message: 'Obrigado! Seus dados foram enviados com sucesso. Em breve entraremos em contato.'
            });

            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                service: ''
            });

            setTimeout(() => {
                setStatus({ type: 'idle', message: '' });
            }, 5000);

        } catch (error) {
            setStatus({
                type: 'error',
                message: 'Ocorreu um erro ao enviar seus dados. Por favor, tente novamente.'
            });
        }
    };

    return (
        <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading">
                Fale com nossa equipe
            </h2>
            <p className="text-blue-100 text-lg mb-10">
                Preencha o formulário abaixo e nossa equipe entrará em contato para apresentar o Link Pro.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                    <Input
                        type="text"
                        name="name"
                        placeholder="Nome completo *"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-blue-200/70 h-14 rounded-lg focus:bg-white/20 transition-all"
                        required
                        disabled={status.type === 'loading'}
                    />

                    <Input
                        type="email"
                        name="email"
                        placeholder="E-mail corporativo *"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-blue-200/70 h-14 rounded-lg focus:bg-white/20 transition-all"
                        required
                        disabled={status.type === 'loading'}
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <Input
                        type="tel"
                        name="phone"
                        placeholder="Telefone / WhatsApp *"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-blue-200/70 h-14 rounded-lg focus:bg-white/20 transition-all"
                        required
                        disabled={status.type === 'loading'}
                    />

                    <Input
                        type="text"
                        name="company"
                        placeholder="Nome da empresa"
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-blue-200/70 h-14 rounded-lg focus:bg-white/20 transition-all"
                        disabled={status.type === 'loading'}
                    />
                </div>

                <div className="w-full">
                    <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full h-14 rounded-lg px-4 cursor-pointer focus:outline-none transition-all font-medium"
                        disabled={status.type === 'loading'}
                        style={{
                            backgroundColor: '#ffffff',
                            color: '#0f172a',
                            border: '2px solid rgba(255, 255, 255, 0.3)'
                        }}
                    >
                        <option value="" disabled style={{ color: '#64748b' }}>Selecione o serviço desejado</option>
                        <option value="energia-solar" style={{ color: '#0f172a' }}>Energia Solar</option>
                        <option value="desenvolvimento-sistemas" style={{ color: '#0f172a' }}>Desenvolvimento de Sistemas</option>
                        <option value="automacao-comercial" style={{ color: '#0f172a' }}>Automação Comercial (Link Pro)</option>
                        <option value="sites" style={{ color: '#0f172a' }}>Desenvolvimento de Sites</option>
                        <option value="consultoria" style={{ color: '#0f172a' }}>Consultoria Técnica</option>
                    </select>
                </div>

                <Button
                    type="submit"
                    size="lg"
                    className="h-14 px-8 bg-accent hover:bg-accent/90 text-white font-bold rounded-lg w-full shadow-lg shadow-black/10 cursor-pointer"
                    disabled={status.type === 'loading'}
                >
                    {status.type === 'loading' ? (
                        <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Enviando...
                        </>
                    ) : (
                        'Falar com Consultor'
                    )}
                </Button>

                {status.type === 'success' && (
                    <div className="flex items-center gap-2 bg-green-500/20 backdrop-blur-sm text-white p-4 rounded-lg border border-green-400/30">
                        <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                        <p className="text-sm">{status.message}</p>
                    </div>
                )}

                {status.type === 'error' && (
                    <div className="flex items-center gap-2 bg-red-500/20 backdrop-blur-sm text-white p-4 rounded-lg border border-red-400/30">
                        <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                        <p className="text-sm">{status.message}</p>
                    </div>
                )}

                <p className="text-xs text-blue-200/60 text-center">
                    * Campos obrigatórios
                </p>
            </form>
        </div>
    );
}
