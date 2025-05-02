
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";

interface Reward {
  id: number;
  title: string;
  description: string;
  pointsCost: number;
  category: "digital" | "physical" | "experience";
  imageSrc: string;
  featured?: boolean;
  available: boolean;
}

interface RewardsListProps {
  rewards: Reward[];
  userPoints: number;
}

export default function RewardsList({ rewards, userPoints }: RewardsListProps) {
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

  return (
    <Card className="border-primary/20">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <Gift className="h-5 w-5 text-primary" />
          <CardTitle className="text-lg">Recompensas Disponíveis</CardTitle>
        </div>
        <Button variant="link" size="sm" className="text-primary">
          Ver Todas
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rewards.map((reward) => (
            <div
              key={reward.id}
              className={`interactive-card p-4 flex flex-col ${
                reward.featured ? "bg-primary/5 border-primary/30" : ""
              }`}
            >
              <div className="relative w-full h-32 rounded-md overflow-hidden mb-3">
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
              
              <div className="flex-1">
                <h3 className="font-medium mb-1">{reward.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {reward.description}
                </p>
              </div>
              
              <div className="flex items-center justify-between mt-auto">
                <Badge variant="outline" className="font-medium">
                  {reward.pointsCost.toLocaleString()} pontos
                </Badge>
                <Button 
                  size="sm" 
                  variant={userPoints >= reward.pointsCost ? "default" : "outline"}
                  disabled={!reward.available || userPoints < reward.pointsCost}
                >
                  {userPoints >= reward.pointsCost ? "Resgatar" : "Pontos Insuficientes"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
