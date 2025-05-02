
# FURIA Engage Hub

## Visão Geral

FURIA Engage Hub é uma plataforma de engajamento para fãs de e-sports que permite aos usuários ganhar pontos por interagir com o conteúdo da FURIA, completar desafios e resgatar recompensas exclusivas.

## Funcionalidades

### Dashboard Principal
- Visão geral de pontos do usuário
- Níveis e progresso
- Atividades recentes
- Estatísticas de engajamento
- Desafios ativos
- Recompensas disponíveis

### Sistema de Pontuação
- Ganhe pontos por interagir com conteúdo da FURIA
- Comentários, curtidas, compartilhamentos
- Assistir transmissões ao vivo e vídeos
- Participar de enquetes e eventos

### Desafios
- Desafios diários
- Desafios semanais
- Desafios especiais
- Acompanhamento de progresso em tempo real

### Recompensas
- Recompensas digitais (fundos de tela, cupons de desconto)
- Recompensas físicas (camisetas, equipamentos)
- Experiências (meet & greet com jogadores)

## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando:

- **React**: Biblioteca JavaScript para construção de interfaces
- **TypeScript**: Superset de JavaScript com tipagem estática
- **Tailwind CSS**: Framework CSS utilitário
- **shadcn/ui**: Biblioteca de componentes React
- **Lucide Icons**: Biblioteca de ícones
- **React Router**: Roteamento de páginas
- **Recharts**: Biblioteca de gráficos e visualizações
- **React Query**: Gerenciamento de estado e requisições

## Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/              # Componentes UI básicos (shadcn)
│   ├── ActivityFeed.tsx # Feed de atividades recentes
│   ├── ChallengesList.tsx # Lista de desafios
│   ├── EngagementStats.tsx # Estatísticas de engajamento
│   ├── Header.tsx       # Cabeçalho da aplicação
│   ├── PointsSummary.tsx # Resumo de pontos do usuário
│   └── RewardsList.tsx  # Lista de recompensas
├── pages/               # Páginas da aplicação
│   ├── Index.tsx        # Página inicial/dashboard
│   ├── Challenges.tsx   # Página de desafios
│   ├── Rewards.tsx      # Página de recompensas
│   └── NotFound.tsx     # Página 404
├── hooks/               # Hooks customizados
├── lib/                 # Utilitários e funções auxiliares
└── App.tsx              # Componente principal com rotas
```

## Rotas

- `/`: Dashboard principal
- `/desafios`: Página de desafios
- `/recompensas`: Página de recompensas

## Como Executar o Projeto

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```
   npm run dev
   ```

4. Acesse o projeto em `http://localhost:8080`

## Configuração de Tema

O projeto utiliza um esquema de cores preto e branco minimalista com suporte a tema claro e escuro.

### Personalização

O tema pode ser personalizado editando os arquivos:
- `tailwind.config.ts`: Configurações do Tailwind CSS
- `src/index.css`: Variáveis CSS para cores e temas

## Construção para Produção

Para criar uma versão de produção:

```
npm run build
```

## Licença

Este projeto é proprietário e confidencial. Todos os direitos reservados à FURIA Esports.
