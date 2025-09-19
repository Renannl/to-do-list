# To-Do List

Este é um projeto de To-Do List (lista de tarefas) desenvolvido com React, TypeScript, Vite e Tailwind CSS.

## Funcionalidades
- Adicionar, marcar como concluída e remover tarefas
- Filtrar tarefas (todas, ativas, concluídas)
- Limpar tarefas concluídas
- Interface responsiva e tema escuro/claro
- Fonte personalizada (Josefin Sans)

## Tecnologias Utilizadas
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## Estrutura do Projeto
```
├── public/
│   └── fonts/           # Fontes personalizadas
├── src/
│   ├── assets/          # Imagens e ícones
│   ├── components/      # Componentes React
│   ├── contexts/        # Contextos de tema
│   ├── hooks/           # Hooks customizados
│   ├── globals.css      # CSS global e Tailwind
│   └── main.tsx         # Ponto de entrada
├── tailwind.config.js   # Configuração do Tailwind
├── package.json         # Dependências e scripts
└── README.md            # Documentação
```

## Instalação e Uso
1. Clone o repositório:
   ```bash
   git clone https://github.com/SEU_USUARIO/to-do-list.git
   cd to-do-list
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Rode o projeto:
   ```bash
   npm run dev
   ```

## Personalização da Fonte
As fontes estão em `public/fonts` e são importadas em `src/globals.css` via `@font-face`. O Tailwind está configurado para usar a fonte Josefin Sans com a classe `font-josefin`.

## Licença
Este projeto é open-source e está sob a licença MIT.
