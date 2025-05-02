
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Bell,
  Trophy,
  User,
  Activity,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu,
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [notifications, setNotifications] = useState(3);
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-bold text-3xl accent-gradient bg-clip-text text-transparent">FURIA</span>
            <span className="font-medium text-xl">Engage</span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex">
            <nav className="flex items-center space-x-4 text-sm font-medium">
              <Link to="/desafios" className="transition-colors hover:text-primary">
                Desafios
              </Link>
              <Link to="/recompensas" className="transition-colors hover:text-primary">
                Recompensas
              </Link>
              <Link to="/leaderboard" className="transition-colors hover:text-primary">
                Leaderboard
              </Link>
              <Link to="/eventos" className="transition-colors hover:text-primary">
                Eventos
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              {notifications > 0 && (
                <Badge variant="destructive" className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0">
                  {notifications}
                </Badge>
              )}
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="flex flex-col p-2">
                  <p className="font-medium">FuriaFan123</p>
                  <p className="text-sm text-muted-foreground">fan@example.com</p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer flex justify-between items-center">
                  <span>Nível</span>
                  <Badge variant="outline" className="ml-2 bg-primary/10">
                    Nível 12
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer flex justify-between items-center">
                  <span>Pontos</span> 
                  <span className="font-medium">1,245</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <Link to="/perfil" className="flex w-full">Meu Perfil</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link to="/configuracoes" className="flex w-full">Configurações</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer text-destructive">
                  Sair
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
