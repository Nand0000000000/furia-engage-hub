
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";
import { Badge } from "@/components/ui/badge";
import { Activity, Star, Trophy } from "lucide-react";

interface EngagementData {
  date: string;
  points: number;
}

interface EngagementStatsProps {
  weeklyData: EngagementData[];
  interactionCount: number;
  contributionStreak: number;
  topPercentage: number;
}

export default function EngagementStats({
  weeklyData,
  interactionCount,
  contributionStreak,
  topPercentage
}: EngagementStatsProps) {
  return (
    <Card className="border-primary/20">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Estatísticas de Engajamento</CardTitle>
          <Badge variant="outline" className="bg-primary/10">
            Últimos 7 dias
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="stat-card flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <Activity className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Interações</p>
                <h4 className="text-2xl font-bold">{interactionCount}</h4>
              </div>
            </div>
            <div className="stat-card flex items-center gap-3">
              <div className="bg-accent/10 p-2 rounded-full">
                <Star className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Dias Seguidos</p>
                <h4 className="text-2xl font-bold">{contributionStreak}</h4>
              </div>
            </div>
            <div className="stat-card flex items-center gap-3">
              <div className="bg-secondary/10 p-2 rounded-full">
                <Trophy className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Top Fãs</p>
                <h4 className="text-2xl font-bold">Top {topPercentage}%</h4>
              </div>
            </div>
          </div>
          
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={weeklyData}
                margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis 
                  dataKey="date" 
                  tick={{ fontSize: 12 }} 
                  tickMargin={8}
                  stroke="#8E9196"
                />
                <YAxis 
                  tick={{ fontSize: 12 }} 
                  tickMargin={8}
                  stroke="#8E9196"
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="points" 
                  stroke="#8B5CF6" 
                  strokeWidth={3} 
                  dot={{ r: 4, fill: "#8B5CF6" }}
                  activeDot={{ r: 6, stroke: "#8B5CF6", strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
