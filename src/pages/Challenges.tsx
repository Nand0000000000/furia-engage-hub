
import { useState } from "react";
import Header from "@/components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Award, Search, Filter, Calendar, Trophy } from "lucide-react";

interface Challenge {
  id: number;
  title: string;
  description: string;
  points: number;
  progress: number;
  total: number;
  category: "daily" | "weekly" | "special";
  dueDate?: string;
  completed?: boolean;
}

const Challenges = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  
  const [challenges] = useState<Challenge[]>([
    {
      id: 1,
      title: "Comentarista do dia",
      description: "Faça 5 comentários em publicações ou vídeos da FURIA",
      points: 30,
      progress: 3,
      total: 5,
      category: "daily",
      dueDate: "Hoje, 23:59"
    },
    {
      id: 2,
      title: "Maratona de Conteúdo",
      description: "Assista 3 horas de conteúdo da FURIA na semana",
      points: 100,
      progress: 1.5,
      total: 3,
      category: "weekly",
      dueDate: "Domingo, 23:59"
    },
    {
      id: 3,
      title: "Embaixador FURIA",
      description: "Compartilhe 10 publicações da FURIA em suas redes sociais",
      points: 150,
      progress: 4,
      total: 10,
      category: "special"
    },
    {
      id: 4,
      title: "Quiz de CS:GO",
      description: "Responda corretamente a 10 perguntas sobre CS:GO e a FURIA",
      points: 50,
      progress: 10,
      total: 10,
      category: "daily",
      completed: true
    },
    {
      id: 5,
      title: "Designer de Memes",
      description: "Crie e envie 3 memes relacionados à FURIA para as redes sociais",
      points: 75,
      progress: 1,
      total: 3,
      category: "weekly",
      dueDate: "Domingo, 23:59"
    },
    {
      id: 6,
      title: "Analista Tático",
      description: "Escreva uma análise detalhada de uma partida recente da FURIA",
      points: 200,
      progress: 0,
      total: 1,
      category: "special"
    }
  ]);

  const getCategoryBadge = (category: Challenge["category"]) => {
    switch (category) {
      case "daily":
        return <Badge variant="secondary">Diário</Badge>;
      case "weekly":
        return <Badge className="bg-primary">Semanal</Badge>;
      case "special":
        return <Badge className="bg-accent">Especial</Badge>;
      default:
        return null;
    }
  };

  const filteredChallenges = challenges.filter(challenge => {
    // Filtrar por termo de pesquisa
    if (searchTerm && !challenge.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    // Filtrar por categoria
    if (activeTab !== "all" && challenge.category !== activeTab) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold">Desafios</h1>
            <p className="text-muted-foreground">Complete desafios para ganhar pontos e resgatar recompensas exclusivas</p>
          </div>
          
          <div className="stats-card px-4 py-2 bg-primary/10 rounded-lg border border-primary/30 flex items-center gap-3">
            <Trophy className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Desafios Completados</p>
              <p className="text-xl font-bold">{challenges.filter(c => c.completed || c.progress >= c.total).length} / {challenges.length}</p>
            </div>
          </div>
        </div>
        
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle>Filtrar Desafios</CardTitle>
            <CardDescription>Encontre desafios específicos ou filtre por categoria</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Buscar desafios..." 
                  className="pl-8" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={setActiveTab}>
                <TabsList>
                  <TabsTrigger value="all">Todos</TabsTrigger>
                  <TabsTrigger value="daily">Diários</TabsTrigger>
                  <TabsTrigger value="weekly">Semanais</TabsTrigger>
                  <TabsTrigger value="special">Especiais</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredChallenges.length > 0 ? (
            filteredChallenges.map((challenge) => (
              <Card key={challenge.id} className={`hover:border-primary/50 transition-colors ${challenge.completed || challenge.progress >= challenge.total ? 'bg-primary/5' : ''}`}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-primary mt-1" />
                      <CardTitle className="text-lg">{challenge.title}</CardTitle>
                    </div>
                    <div>
                      {getCategoryBadge(challenge.category)}
                    </div>
                  </div>
                  <CardDescription className="mt-2">{challenge.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mt-2 space-y-4">
                    <div className="flex justify-between text-sm">
                      <span>
                        Progresso: {challenge.progress}/{challenge.total}
                      </span>
                      {challenge.dueDate && (
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>{challenge.dueDate}</span>
                        </div>
                      )}
                    </div>
                    <Progress
                      value={(challenge.progress / challenge.total) * 100}
                      className="h-2"
                    />
                    
                    <div className="flex items-center justify-between pt-2">
                      <Badge variant="outline" className="font-medium">
                        +{challenge.points} pontos
                      </Badge>
                      <Button 
                        size="sm"
                        variant={challenge.completed || challenge.progress >= challenge.total ? "outline" : "default"}
                        disabled={challenge.completed || challenge.progress >= challenge.total}
                      >
                        {challenge.completed || challenge.progress >= challenge.total ? "Completado" : "Iniciar"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
              <Award className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-xl font-medium mb-2">Nenhum desafio encontrado</h3>
              <p className="text-muted-foreground mb-4">
                Não encontramos desafios correspondentes aos seus filtros.
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

export default Challenges;
