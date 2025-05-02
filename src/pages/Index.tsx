
import { useState } from "react";
import Header from "@/components/Header";
import PointsSummary from "@/components/PointsSummary";
import ActivityFeed from "@/components/ActivityFeed";
import EngagementStats from "@/components/EngagementStats";
import ChallengesList from "@/components/ChallengesList";
import RewardsList from "@/components/RewardsList";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Trophy, Activity, Bell } from "lucide-react";

const Index = () => {
  // Dados simulados
  const [userStats] = useState({
    points: 1245,
    level: 12,
    nextLevelPoints: 1500,
    currentLevelPoints: 1200,
    weeklyPoints: 320,
    totalPointsForNextLevel: 300,
    interactionCount: 87,
    contributionStreak: 14,
    topPercentage: 5
  });

  const [activities] = useState([
    {
      id: 1,
      type: "comment" as const,
      points: 15,
      description: "Comentou na transmissão ao vivo do jogo FURIA vs Imperial",
      date: "Hoje, 14:32"
    },
    {
      id: 2,
      type: "watch" as const,
      points: 25,
      description: "Assistiu ao vídeo 'FURIA: O caminho para o Major' completo",
      date: "Hoje, 12:10"
    },
    {
      id: 3,
      type: "participate" as const,
      points: 50,
      description: "Participou da enquete 'Qual deve ser a próxima skin FURIA?'",
      date: "Ontem, 18:45"
    },
    {
      id: 4,
      type: "share" as const,
      points: 20,
      description: "Compartilhou a publicação sobre o novo membro da FURIA",
      date: "Ontem, 15:22"
    },
    {
      id: 5,
      type: "like" as const,
      points: 5,
      description: "Curtiu a publicação 'FURIA anuncia nova parceria'",
      date: "3 dias atrás"
    }
  ]);

  const [challenges] = useState([
    {
      id: 1,
      title: "Comentarista do dia",
      description: "Faça 5 comentários em publicações ou vídeos da FURIA",
      points: 30,
      progress: 3,
      total: 5,
      category: "daily" as const,
      dueDate: "Hoje, 23:59"
    },
    {
      id: 2,
      title: "Maratona de Conteúdo",
      description: "Assista 3 horas de conteúdo da FURIA na semana",
      points: 100,
      progress: 1.5,
      total: 3,
      category: "weekly" as const,
      dueDate: "Domingo, 23:59"
    },
    {
      id: 3,
      title: "Embaixador FURIA",
      description: "Compartilhe 10 publicações da FURIA em suas redes sociais",
      points: 150,
      progress: 4,
      total: 10,
      category: "special" as const
    }
  ]);

  const [rewards] = useState([
    {
      id: 1,
      title: "Fundo de tela exclusivo",
      description: "Papel de parede digital exclusivo para desktop e celular",
      pointsCost: 200,
      category: "digital" as const,
      imageSrc: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      available: true
    },
    {
      id: 2,
      title: "15% de desconto na loja",
      description: "Cupom de desconto para usar em qualquer produto da loja oficial",
      pointsCost: 500,
      category: "digital" as const,
      imageSrc: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      available: true
    },
    {
      id: 3,
      title: "Camisa autografada",
      description: "Camisa oficial da FURIA autografada pelos jogadores",
      pointsCost: 2000,
      category: "physical" as const,
      imageSrc: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1949&q=80",
      featured: true,
      available: true
    },
    {
      id: 4,
      title: "Meet & Greet virtual",
      description: "Encontro online com os jogadores da FURIA",
      pointsCost: 3500,
      category: "experience" as const,
      imageSrc: "https://images.unsplash.com/photo-1603481546579-65d935ba9cdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      available: true
    }
  ]);

  const [weeklyData] = useState([
    { date: "Seg", points: 45 },
    { date: "Ter", points: 80 },
    { date: "Qua", points: 35 },
    { date: "Qui", points: 60 },
    { date: "Sex", points: 95 },
    { date: "Sáb", points: 50 },
    { date: "Dom", points: 20 }
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-6">
        <Alert className="mb-6 border-accent bg-accent/5">
          <Bell className="h-4 w-4 text-accent" />
          <AlertTitle>Um novo evento está chegando!</AlertTitle>
          <AlertDescription>
            A FURIA estará na Brasil Game Show. Prepare-se para desafios especiais e recompensas exclusivas.
          </AlertDescription>
        </Alert>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="md:col-span-2">
            <PointsSummary
              points={userStats.points}
              level={userStats.level}
              nextLevelPoints={userStats.nextLevelPoints}
              currentLevelPoints={userStats.currentLevelPoints}
              weeklyPoints={userStats.weeklyPoints}
              totalPointsForNextLevel={userStats.totalPointsForNextLevel}
            />
          </div>
          <div className="md:col-span-1 flex flex-col">
            <div className="bg-primary/5 rounded-lg p-6 border border-primary/20 flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary flex items-center justify-center">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Seu Nível Atual</p>
                <h2 className="text-3xl font-bold text-primary">Nível {userStats.level}</h2>
                <p className="text-sm text-muted-foreground">
                  Mais {userStats.nextLevelPoints - userStats.points} pontos para Nível {userStats.level + 1}
                </p>
              </div>
            </div>
            <div className="flex-1"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="md:col-span-2">
            <EngagementStats
              weeklyData={weeklyData}
              interactionCount={userStats.interactionCount}
              contributionStreak={userStats.contributionStreak}
              topPercentage={userStats.topPercentage}
            />
          </div>
          <div className="md:col-span-1">
            <ActivityFeed activities={activities} />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChallengesList challenges={challenges} />
          <RewardsList rewards={rewards} userPoints={userStats.points} />
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

export default Index;
