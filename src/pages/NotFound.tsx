
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md p-8">
        <h1 className="text-6xl font-bold mb-6 accent-gradient bg-clip-text text-transparent">404</h1>
        <p className="text-xl mb-6">Ops! Página não encontrada</p>
        <p className="text-muted-foreground mb-8">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Button asChild className="bg-primary hover:bg-primary/90">
          <Link to="/">Retornar ao Início</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
