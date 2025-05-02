
import { useState } from "react";
import Header from "@/components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Gift, Search, Filter, CircleCheck, Gem } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface Reward {
  id: number;
  title: string;
  description: string;
  pointsCost: number;
  category: "digital" | "physical" | "experience";
  imageSrc: string;
  featured?: boolean;
  available: boolean;
  stock?: number;
}

const Rewards = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [userPoints] = useState(1245); // Simular pontos do usuário
  
  const [rewards] = useState<Reward[]>([
    {
      id: 1,
      title: "Fundo de tela exclusivo",
      description: "Papel de parede digital exclusivo para desktop e celular",
      pointsCost: 200,
      category: "digital",
      imageSrc: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      available: true
    },
    {
      id: 2,
      title: "15% de desconto na loja",
      description: "Cupom de desconto para usar em qualquer produto da loja oficial",
      pointsCost: 500,
      category: "digital",
      imageSrc: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      available: true
    },
    {
      id: 3,
      title: "Camisa autografada",
      description: "Camisa oficial da FURIA autografada pelos jogadores",
      pointsCost: 2000,
      category: "physical",
      imageSrc: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1949&q=80",
      featured: true,
      available: true,
      stock: 5
    },
    {
      id: 4,
      title: "Meet & Greet virtual",
      description: "Encontro online com os jogadores da FURIA",
      pointsCost: 3500,
      category: "experience",
      imageSrc: "https://images.unsplash.com/photo-1603481546579-65d935ba9cdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      available: true,
      stock: 10
    },
    {
      id: 5,
      title: "Mousepad edição limitada",
      description: "Mousepad exclusivo da FURIA com design especial",
      pointsCost: 1200,
      category: "physical",
      imageSrc: "https://images.unsplash.com/photo-1629429407756-282bd96e09b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      available: true,
      stock: 20
    },
    {
      id: 6,
      title: "Entrada VIP evento FURIA",
      description: "Acesso VIP ao próximo evento presencial da FURIA",
      pointsCost: 5000,
      category: "experience",
      imageSrc: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      featured: true,
      available: true,
      stock: 3
    },
    {
      id: 7,
      title: "Pack de emotes exclusivos",
      description: "Conjunto de emotes exclusivos para usar no Discord e Twitch",
      pointsCost: 800,
      category: "digital",
      imageSrc: "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      available: true
    },
    {
      id: 8,
      title: "Tema exclusivo para Steam",
      description: "Tema personalizado para o seu perfil na Steam",
      pointsCost: 350,
      category: "digital",
      imageSrc: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      available: true
    }
  ]);

  const getCategoryBadge = (category: Reward["category"]) => {
    switch (category) {
      case "digital":
        return <Badge variant="secondary">Digital</Badge>;
      case "physical":
        return <Badge className="bg-primary">Físico</Badge>;
      case "experience":
        return <Badge className="bg-accent">Experiência</Badge>;
      default:
        return null;
    }
  };

  const filteredRewards = rewards.filter(reward => {
    // Filtrar por termo de pesquisa
    if (searchTerm && !reward.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    // Filtrar por categoria
    if (activeTab !== "all" && reward.category !== activeTab) {
      return false;
    }
    
    return true;
  });

  const handleRedeemReward = (reward: Reward) => {
    if (userPoints < reward.pointsCost) {
      toast({
        title: "Pontos insuficientes",
        description: `Você precisa de mais ${reward.pointsCost - userPoints} pontos para resgatar esta recompensa.`,
        variant: "destructive"
      });
    } else {
      toast({
        title: "Recompensa resgatada!",
        description: `Você resgatou "${reward.title}" com sucesso.`,
        variant: "default"
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold">Recompensas</h1>
            <p className="text-muted-foreground">Utilize seus pontos para resgatar itens e experiências exclusivas</p>
          </div>
          
          <div className="stats-card px-4 py-2 bg-primary/10 rounded-lg border border-primary/30 flex items-center gap-3">
            <Gem className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Seus Pontos</p>
              <p className="text-xl font-bold">{userPoints.toLocaleString()}</p>
            </div>
          </div>
        </div>
        
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle>Filtrar Recompensas</CardTitle>
            <CardDescription>Encontre recompensas específicas ou filtre por categoria</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Buscar recompensas..." 
                  className="pl-8" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={setActiveTab}>
                <TabsList>
                  <TabsTrigger value="all">Todas</TabsTrigger>
                  <TabsTrigger value="digital">Digitais</TabsTrigger>
                  <TabsTrigger value="physical">Físicas</TabsTrigger>
                  <TabsTrigger value="experience">Experiências</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredRewards.length > 0 ? (
            filteredRewards.map((reward) => (
              <Card key={reward.id} className={`overflow-hidden hover:border-primary/50 transition-colors ${reward.featured ? "bg-primary/5 border-primary/30" : ""}`}>
                <div className="relative w-full h-40">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                  <img
                    src={reward.imageSrc}
                    alt={reward.title}
                    className="w-full h-full object-cover"
                  />
                  {reward.featured && (
                    <Badge className="absolute top-2 left-2 z-20 bg-accent">
                      Destaque
                    </Badge>
                  )}
                  {getCategoryBadge(reward.category) && (
                    <div className="absolute top-2 right-2 z-20">
                      {getCategoryBadge(reward.category)}
                    </div>
                  )}
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{reward.title}</CardTitle>
                  <CardDescription>{reward.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-col space-y-4">
                    {reward.stock !== undefined && (
                      <div className="text-sm text-muted-foreground">
                        Disponível: <span className="font-medium">{reward.stock}</span> unidades
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="font-medium text-primary">
                        {reward.pointsCost.toLocaleString()} pontos
                      </Badge>
                      <Button 
                        size="sm" 
                        variant={userPoints >= reward.pointsCost ? "default" : "outline"}
                        disabled={!reward.available || userPoints < reward.pointsCost}
                        onClick={() => handleRedeemReward(reward)}
                      >
                        {userPoints >= reward.pointsCost ? "Resgatar" : "Pontos Insuficientes"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
              <Gift className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-xl font-medium mb-2">Nenhuma recompensa encontrada</h3>
              <p className="text-muted-foreground mb-4">
                Não encontramos recompensas correspondentes aos seus filtros.
              </p>
              <Button onClick={() => {setSearchTerm(""); setActiveTab("all");}}>
                Limpar Filtros
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <footer className="border-t py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <span className="font-bold text-xl accent-gradient bg-clip-text text-transparent">FURIA</span> Engage Hub &copy; 2025
            <p className="text-sm text-muted-foreground">
              Conectando fãs com a FURIA através de engajamento e recompensas
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Termos</a>
            <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Contato</a>
            <a href="#" className="hover:text-primary transition-colors">FAQ</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Rewards;
