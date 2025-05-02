
import { Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface PointsSummaryProps {
  points: number;
  level: number;
  nextLevelPoints: number;
  currentLevelPoints: number;
  weeklyPoints: number;
  totalPointsForNextLevel: number;
}

export default function PointsSummary({
  points,
  level,
  nextLevelPoints,
  currentLevelPoints,
  weeklyPoints,
  totalPointsForNextLevel,
}: PointsSummaryProps) {
  const progress = Math.round(((currentLevelPoints - (points - currentLevelPoints)) / totalPointsForNextLevel) * 100);
  
  return (
    <Card className="p-6 relative overflow-hidden border-primary/20">
      <div className="absolute top-0 right-0 h-24 w-24 bg-primary/5 rounded-bl-full z-0"></div>
      
      <div className="flex items-center gap-3 mb-4 relative z-10">
        <div className="bg-primary/10 p-3 rounded-full flex items-center justify-center">
          <Trophy className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-bold">Seus Pontos</h3>
          <p className="text-sm text-muted-foreground">Continue coletando pontos para subir de nível</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-muted/50 p-3 rounded-lg">
          <p className="text-sm text-muted-foreground">Total de Pontos</p>
          <p className="text-2xl font-bold">{points.toLocaleString()}</p>
        </div>
        <div className="bg-muted/50 p-3 rounded-lg">
          <p className="text-sm text-muted-foreground">Pontos na Semana</p>
          <p className="text-2xl font-bold">{weeklyPoints.toLocaleString()}</p>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-primary rounded-full text-primary-foreground w-6 h-6 flex items-center justify-center text-xs font-medium">
              {level}
            </div>
            <span>Nível atual</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>Próximo nível</span>
            <div className="bg-primary/20 text-primary rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium">
              {level + 1}
            </div>
          </div>
        </div>
        <Progress value={progress} className="h-2" />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>{currentLevelPoints} pontos</span>
          <span>{nextLevelPoints} pontos</span>
        </div>
      </div>
    </Card>
  );
}
