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
    HelpCircle,
    Utensils
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
            { id: "users", title: "Cadastro de Usuários", duration: "10 min", type: "video", url: "https://cervantes.srv.br/lz/knowledgebase.php?article=6e532b8526552c614670b266f99aa6bb", youtubeId: "" },
            { id: "suppliers", title: "Cadastro de Fornecedor", duration: "8 min", type: "video", url: "https://cervantes.srv.br/lz/knowledgebase.php?article=96755bc2c66906f58a7bb8e6d8435356", youtubeId: "" },
            { id: "products", title: "Cadastro de Produtos", duration: "15 min", type: "video", url: "https://cervantes.srv.br/lz/knowledgebase.php?article=9202f23a32da2fad249f02d73797d092", youtubeId: "" },
        ]
    },
    {
        id: "pdv",
        title: "Frente de Caixa (PDV)",
        icon: ShoppingBag,
        topics: [
            { id: "pdv-sale", title: "Vendas no Caixa", duration: "12 min", type: "video", url: "https://cervantes.srv.br/lz/knowledgebase.php?article=74f6af6140523a8e065d8f7d7a7bbab4" },
            { id: "pdv-commission", title: "Comissão nas Vendas pelo Módulo Caixa", duration: "8 min", type: "video", url: "https://cervantes.srv.br/lz/knowledgebase.php?article=ea160217291d6ae4be42a5fa011dc102" },
            { id: "payment-condition", title: "Condição de Pagamento", duration: "6 min", type: "article", url: "https://cervantes.srv.br/lz/knowledgebase.php?article=b4f99b47c6d4af920699d30e58aea07b" },
            { id: "card-config", title: "Configuração de Cartão", duration: "5 min", type: "article", url: "https://cervantes.srv.br/lz/knowledgebase.php?article=c9b77980e3d0d1fcad618d996b1f5a36" },
        ]
    },
    {
        id: "stock",
        title: "Gestão de Estoque",
        icon: Box,
        topics: [
            { id: "stock-nfe", title: "Nota Fiscal de Entrada (pelo XML)", duration: "15 min", type: "video", url: "https://cervantes.srv.br/lz/knowledgebase.php?article=9a6ca0ddd5e11ae29f584f919336ed10" },
            { id: "stock-suggestion", title: "Sugestão de Compra / Compra", duration: "12 min", type: "video", url: "https://cervantes.srv.br/lz/knowledgebase.php?article=585f870bd7755d8e3cabdc8aadab2a0e" },
            { id: "stock-multistore", title: "Multilojas", duration: "20 min", type: "article", url: "https://cervantes.srv.br/lz/knowledgebase.php?article=e8e55dba75a1bc1e170c8084b7a9ec21" },
            { id: "stock-labels", title: "Configuração de Etiquetas", duration: "8 min", type: "article", url: "https://cervantes.srv.br/lz/knowledgebase.php?article=0e808d587073f2fa7f78e1b581292922" },
        ]
    },
    {
        id: "financial",
        title: "Financeiro",
        icon: BarChart3,
        topics: [
            { id: "fin-general", title: "Treinamento Financeiro", duration: "18 min", type: "video", url: "https://cervantes.srv.br/lz/knowledgebase.php?article=878f5f9e636d573852ea900d162e0430" },
            { id: "fin-boleto", title: "Emissão de Boleto", duration: "10 min", type: "video", url: "https://cervantes.srv.br/lz/knowledgebase.php?article=9ed12501ccdde77b4ec1e7b90e1ee896" },
            { id: "fin-costs", title: "Gerência de Custos", duration: "15 min", type: "article", url: "https://cervantes.srv.br/lz/knowledgebase.php?article=51f2913b6a5c2d9611d30be9667c7ac9" },
        ]
    },
    {
        id: "fiscal",
        title: "Fiscal",
        icon: Receipt,
        topics: [
            { id: "fiscal-config", title: "Configurações Fiscais", duration: "20 min", type: "video", url: "https://cervantes.srv.br/lz/knowledgebase.php?article=51bea856310d25e687003e424b27348f" },
            { id: "fiscal-nfse", title: "Emissão de NFS-e", duration: "12 min", type: "video", url: "https://cervantes.srv.br/lz/knowledgebase.php?article=36e80ad911d3dfc3cde90c9ac9f8f859" },
            { id: "fiscal-nfe-config", title: "Configurações da Nota Fiscal de Entrada", duration: "15 min", type: "article", url: "https://cervantes.srv.br/lz/knowledgebase.php?article=f8e373ffbb1df95a49c9cbb471c74ccd" },
        ]
    },
    {
        id: "sales",
        title: "Vendas e Negociação",
        icon: Settings,
        topics: [
            { id: "sales-config", title: "Configurações da Negociação", duration: "10 min", type: "article", url: "https://cervantes.srv.br/lz/knowledgebase.php?article=b5a6b9d6675849853b3e8ac7aded4b75" },
            { id: "sales-presale", title: "Pré-vendas no Negociação", duration: "12 min", type: "video", url: "https://cervantes.srv.br/lz/knowledgebase.php?article=5fb255f6940aa6a7ed228ae3c4c8eab7" },
            { id: "sales-conditional", title: "Pedido Condicional para o Cliente", duration: "8 min", type: "video", url: "https://cervantes.srv.br/lz/knowledgebase.php?article=5a24e786417e393a8b9644ab792fd41a" },
        ]
    },
    {
        id: "restaurant",
        title: "Bares e Restaurantes",
        icon: Utensils,
        topics: [
            { id: "restaurant-service", title: "Atendimento para Bares e Restaurantes", duration: "15 min", type: "video", url: "https://cervantes.srv.br/lz/knowledgebase.php?article=e0a9abd00797e48642e0aefaab15fab8" },
            { id: "restaurant-commission", title: "Comissão no Atendimento", duration: "10 min", type: "video", url: "https://cervantes.srv.br/lz/knowledgebase.php?article=96a92231b4503cb6b252ede8b6bf6035" },
            { id: "restaurant-recipe", title: "Produto Composto (Ficha Técnica)", duration: "12 min", type: "video", url: "https://cervantes.srv.br/lz/knowledgebase.php?article=fae8f56543deb72a942ff9f87b873baf" },
        ]
    },
    {
        id: "advanced",
        title: "Recursos Avançados",
        icon: HelpCircle,
        topics: [
            { id: "adv-loyalty", title: "Cartão Fidelidade", duration: "10 min", type: "video", url: "https://cervantes.srv.br/lz/knowledgebase.php?article=2b9cdebb444dbb2fe8380860104f0573" },
            { id: "adv-os", title: "Ordem de Serviço (OS)", duration: "18 min", type: "video", url: "https://cervantes.srv.br/lz/knowledgebase.php?article=ea18db81fd6a9f1b2c49f664d370ad67" },
            { id: "adv-import", title: "Importador do Sistema Link", duration: "15 min", type: "article", url: "https://cervantes.srv.br/lz/knowledgebase.php?article=3d1360dece724db43ea45465528035a6" },
            { id: "adv-tray", title: "Integração Sistema Link e Tray", duration: "20 min", type: "article", url: "https://cervantes.srv.br/lz/knowledgebase.php?article=a9ecf6120021eca9f169f5f829625cd1" },
        ]
    },
];

export default function TreinamentosPage() {
    const [activeModule, setActiveModule] = useState("getting-started");
    const [activeTopic, setActiveTopic] = useState("users");
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
                            {/* Video/Content Player */}
                            <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-2xl relative">
                                {currentTopic.youtubeId ? (
                                    // YouTube Embed
                                    <iframe
                                        src={`https://www.youtube.com/embed/${currentTopic.youtubeId}?rel=0&modestbranding=1`}
                                        title={currentTopic.title}
                                        className="w-full h-full border-0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                ) : currentTopic.url ? (
                                    // Knowledge Base Page Embed
                                    <iframe
                                        src={currentTopic.url}
                                        title={currentTopic.title}
                                        className="w-full h-full border-0 bg-white"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                ) : (
                                    // No Content Available
                                    <div className="w-full h-full bg-black flex items-center justify-center">
                                        <div className="text-center text-white">
                                            <PlayCircle size={48} className="mx-auto mb-4 opacity-50" />
                                            <p className="text-sm">Conteúdo não disponível</p>
                                        </div>
                                    </div>
                                )}
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
