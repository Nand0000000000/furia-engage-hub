
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Activity {
  id: number;
  type: "comment" | "watch" | "participate" | "share" | "like";
  points: number;
  description: string;
  date: string;
}

interface ActivityFeedProps {
  activities: Activity[];
}

export default function ActivityFeed({ activities }: ActivityFeedProps) {
  const getActivityIcon = (type: Activity["type"]) => {
    switch (type) {
      case "comment":
        return "💬";
      case "watch":
        return "👁️";
      case "participate":
        return "🏆";
      case "share":
        return "🔄";
      case "like":
        return "❤️";
      default:
        return "✨";
    }
  };

  return (
    <Card className="h-full border-primary/20">
      <CardHeader>
        <CardTitle className="text-lg">Atividades Recentes</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-3 p-3 rounded-md bg-muted/50"
              >
                <div className="rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center text-xl">
                  {getActivityIcon(activity.type)}
                </div>
                <div className="flex-1">
                  <p className="text-sm">{activity.description}</p>
                  <div className="flex items-center justify-between mt-1">
                    <Badge variant="outline" className="text-xs bg-primary/10">
                      +{activity.points} pontos
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {activity.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
