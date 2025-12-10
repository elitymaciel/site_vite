import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Search,
    PlayCircle,
    BookOpen,
    FileText,
    ChevronRight,
    Menu,
    X,
    CheckCircle2,
    Clock,
    BarChart3,
    ShoppingBag,
    Box,
    Receipt,
    Settings,
    HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

// Training Data Structure
const trainingModules = [
    {
        id: "getting-started",
        title: "Primeiros Passos",
        icon: PlayCircle,
        topics: [
            { id: "intro", title: "Visão Geral do Link Pro", duration: "5 min", type: "video" },
            { id: "setup", title: "Configurações Iniciais", duration: "12 min", type: "video" },
            { id: "users", title: "Cadastrando Usuários e Permissões", duration: "8 min", type: "video" },
        ]
    },
    {
        id: "pdv",
        title: "Frente de Caixa (PDV)",
        icon: ShoppingBag,
        topics: [
            { id: "pdv-open", title: "Abertura de Caixa", duration: "3 min", type: "article" },
            { id: "pdv-sale", title: "Realizando uma Venda", duration: "10 min", type: "video" },
            { id: "pdv-discount", title: "Aplicando Descontos", duration: "4 min", type: "video" },
            { id: "pdv-close", title: "Fechamento e Sangria", duration: "6 min", type: "video" },
        ]
    },
    {
        id: "stock",
        title: "Gestão de Estoque",
        icon: Box,
        topics: [
            { id: "stock-add", title: "Cadastro de Produtos", duration: "15 min", type: "video" },
            { id: "stock-xml", title: "Importação via XML", duration: "8 min", type: "video" },
            { id: "stock-audit", title: "Realizando Inventário", duration: "20 min", type: "article" },
        ]
    },
    {
        id: "financial",
        title: "Financeiro",
        icon: BarChart3,
        topics: [
            { id: "fin-flow", title: "Fluxo de Caixa", duration: "12 min", type: "video" },
            { id: "fin-pay", title: "Contas a Pagar e Receber", duration: "15 min", type: "video" },
            { id: "fin-dre", title: "Analisando o DRE", duration: "10 min", type: "article" },
        ]
    },
    {
        id: "fiscal",
        title: "Fiscal",
        icon: Receipt,
        topics: [
            { id: "nfe-emit", title: "Emitindo NFe", duration: "8 min", type: "video" },
            { id: "taxes", title: "Configuração de Impostos", duration: "25 min", type: "video" },
        ]
    },
];

export default function TreinamentosPage() {
    const [activeModule, setActiveModule] = useState("getting-started");
    const [activeTopic, setActiveTopic] = useState("intro");
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    const currentModule = trainingModules.find(m => m.id === activeModule) || trainingModules[0];
    const currentTopic = currentModule.topics.find(t => t.id === activeTopic) || currentModule.topics[0];

    return (
        <div className="min-h-screen bg-background font-sans flex flex-col">

            {/* Top Navigation */}
            <header className="h-16 border-b border-border bg-card px-4 flex items-center justify-between z-20 shrink-0">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-white font-bold font-heading shadow-sm">
                            L
                        </div>
                        <span className="font-bold font-heading text-primary tracking-tight hidden md:inline-block">Link Academy</span>
                    </div>
                    <Separator orientation="vertical" className="h-6 mx-2 hidden md:block" />
                    <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hidden md:flex" asChild>
                        <Link to="/">
                            <ChevronRight className="rotate-180 w-4 h-4" /> Voltar para Site
                        </Link>
                    </Button>
                </div>

                <div className="flex-1 max-w-md mx-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                            placeholder="O que você quer aprender hoje?"
                            className="pl-9 bg-muted/50 border-transparent focus:bg-background focus:border-primary/20 transition-all"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="hidden md:flex flex-col items-end mr-2">
                        <span className="text-xs font-medium text-muted-foreground">Progresso do Curso</span>
                        <div className="w-32 h-2 bg-muted rounded-full mt-1 overflow-hidden">
                            <div className="h-full bg-accent w-[35%] rounded-full"></div>
                        </div>
                    </div>
                    <Button size="icon" variant="ghost" className="rounded-full">
                        <HelpCircle className="w-5 h-5 text-muted-foreground" />
                    </Button>
                    <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                        JD
                    </div>
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden">

                {/* Sidebar */}
                <aside
                    className={`
            fixed inset-y-0 left-0 z-10 w-72 bg-card border-r border-border transform transition-transform duration-300 ease-in-out
            md:relative md:translate-x-0 pt-16 md:pt-0
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          `}
                >
                    <div className="h-full flex flex-col">
                        <div className="p-4 border-b border-border">
                            <h2 className="font-bold text-sm text-muted-foreground uppercase tracking-wider mb-4">Módulos</h2>
                            <div className="space-y-1">
                                {trainingModules.map((module) => (
                                    <button
                                        key={module.id}
                                        onClick={() => setActiveModule(module.id)}
                                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeModule === module.id
                                                ? 'bg-primary/10 text-primary'
                                                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                                            }`}
                                    >
                                        <module.icon size={18} />
                                        {module.title}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <ScrollArea className="flex-1">
                            <div className="p-4">
                                <h3 className="font-bold text-sm text-foreground mb-3 px-2">{currentModule.title}</h3>
                                <div className="space-y-1">
                                    {currentModule.topics.map((topic, index) => (
                                        <button
                                            key={topic.id}
                                            onClick={() => setActiveTopic(topic.id)}
                                            className={`w-full flex items-start gap-3 px-3 py-3 rounded-lg text-sm transition-all border ${activeTopic === topic.id
                                                    ? 'bg-background border-primary/20 shadow-sm'
                                                    : 'bg-transparent border-transparent hover:bg-muted/50 text-muted-foreground'
                                                }`}
                                        >
                                            <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${activeTopic === topic.id ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
                                                }`}>
                                                {index + 1}
                                            </div>
                                            <div className="text-left">
                                                <p className={`font-medium ${activeTopic === topic.id ? 'text-primary' : 'text-foreground'}`}>
                                                    {topic.title}
                                                </p>
                                                <div className="flex items-center gap-2 mt-1.5">
                                                    <Badge variant="outline" className="text-[10px] h-4 px-1 rounded-sm border-border text-muted-foreground font-normal">
                                                        {topic.type === 'video' ? 'Vídeo' : 'Artigo'}
                                                    </Badge>
                                                    <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                                                        <Clock size={10} /> {topic.duration}
                                                    </span>
                                                </div>
                                            </div>
                                            {index === 0 && (
                                                <CheckCircle2 size={16} className="text-green-500 ml-auto shrink-0" />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </ScrollArea>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 overflow-y-auto bg-muted/10 p-4 md:p-8 w-full">
                    {/* Mobile Sidebar Toggle */}
                    <button
                        className="md:hidden fixed bottom-6 right-6 z-50 bg-primary text-white p-3 rounded-full shadow-lg shadow-primary/30"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        {sidebarOpen ? <X /> : <Menu />}
                    </button>

                    <div className="max-w-4xl mx-auto">
                        {/* Breadcrumb */}
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                            <span>Treinamentos</span>
                            <ChevronRight size={14} />
                            <span>{currentModule.title}</span>
                            <ChevronRight size={14} />
                            <span className="text-primary font-medium">{currentTopic.title}</span>
                        </div>

                        <div className="space-y-6">
                            {/* Video Player Placeholder */}
                            <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-2xl relative group">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                                        <PlayCircle size={32} className="text-white fill-white" />
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                    <div className="flex items-center justify-between text-white">
                                        <span className="text-sm font-medium">0:00 / {currentTopic.duration}</span>
                                        <div className="flex gap-2">
                                            <Settings size={16} className="cursor-pointer hover:text-primary" />
                                            <span className="text-xs border border-white/30 rounded px-1 cursor-pointer hover:bg-white/20">HD</span>
                                        </div>
                                    </div>
                                    <div className="w-full h-1 bg-white/20 rounded-full mt-3 cursor-pointer group/progress">
                                        <div className="h-full bg-primary w-0 rounded-full relative group-hover/progress:bg-accent">
                                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover/progress:opacity-100 shadow"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="flex-1">
                                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 font-heading">{currentTopic.title}</h1>
                                    <div className="prose prose-slate max-w-none">
                                        <p className="text-muted-foreground leading-relaxed">
                                            Nesta aula, vamos aprender os conceitos fundamentais do {currentTopic.title}.
                                            O Link Pro oferece ferramentas poderosas para otimizar este processo na sua empresa.
                                        </p>

                                        <h3 className="text-lg font-bold text-slate-800 mt-6 mb-3">O que você vai aprender:</h3>
                                        <ul className="space-y-2 list-none pl-0">
                                            {[1, 2, 3].map((i) => (
                                                <li key={i} className="flex items-start gap-2 text-slate-600">
                                                    <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                                                    <span>Passo a passo detalhado da funcionalidade no sistema.</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mt-6">
                                            <h4 className="font-bold text-blue-800 text-sm mb-2 flex items-center gap-2">
                                                <BookOpen size={16} /> Material Complementar
                                            </h4>
                                            <div className="space-y-2">
                                                <a href="#" className="block text-sm text-blue-600 hover:underline flex items-center gap-2">
                                                    <FileText size={14} /> Guia Rápido em PDF
                                                </a>
                                                <a href="#" className="block text-sm text-blue-600 hover:underline flex items-center gap-2">
                                                    <FileText size={14} /> Lista de Atalhos de Teclado
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full md:w-72 space-y-6">
                                    <Card>
                                        <CardContent className="p-5">
                                            <h3 className="font-bold text-sm mb-4">Progresso do Módulo</h3>
                                            <div className="space-y-2 mb-4">
                                                <div className="flex justify-between text-xs text-muted-foreground">
                                                    <span>1 de {currentModule.topics.length} aulas</span>
                                                    <span>33%</span>
                                                </div>
                                                <Progress value={33} className="h-2" />
                                            </div>
                                            <Button className="w-full" size="sm">Continuar para Próxima Aula</Button>
                                        </CardContent>
                                    </Card>

                                    <Card className="bg-slate-900 text-white border-none">
                                        <CardContent className="p-5">
                                            <h3 className="font-bold text-sm mb-2 text-white">Precisa de ajuda?</h3>
                                            <p className="text-xs text-slate-400 mb-4">Nossa equipe de suporte está disponível para tirar suas dúvidas.</p>
                                            <Button variant="secondary" size="sm" className="w-full bg-white/10 text-white hover:bg-white/20 border-transparent">
                                                Abrir Chamado
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
