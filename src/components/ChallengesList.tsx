
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Award } from "lucide-react";

interface Challenge {
  id: number;
  title: string;
  description: string;
  points: number;
  progress: number;
  total: number;
  category: "daily" | "weekly" | "special";
  dueDate?: string;
}

interface ChallengesListProps {
  challenges: Challenge[];
}

export default function ChallengesList({ challenges }: ChallengesListProps) {
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

  return (
    <Card className="border-primary/20">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <Award className="h-5 w-5 text-primary" />
          <CardTitle className="text-lg">Desafios Ativos</CardTitle>
        </div>
        <Button variant="link" size="sm" className="text-primary">
          Ver Todos
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {challenges.map((challenge) => (
            <div
              key={challenge.id}
              className="p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="font-medium">{challenge.title}</div>
                  <p className="text-sm text-muted-foreground">
                    {challenge.description}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  {getCategoryBadge(challenge.category)}
                  <span className="text-sm font-medium text-primary">
                    +{challenge.points} pontos
                  </span>
                </div>
              </div>
              <div className="mt-3 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>
                    Progresso: {challenge.progress}/{challenge.total}
                  </span>
                  {challenge.dueDate && (
                    <span className="text-muted-foreground">
                      Até {challenge.dueDate}
                    </span>
                  )}
                </div>
                <Progress
                  value={(challenge.progress / challenge.total) * 100}
                  className="h-2"
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
