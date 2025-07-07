# 🏥 SGHSS - VidaPlus

Sistema de Gestão Hospitalar e de Serviços de Saúde (SGHSS), desenvolvido como projeto para a instituição **VidaPlus**. O sistema oferece recursos para controle de pacientes, profissionais, agenda médica, exames, internações e muito mais.

---

## 🚀 Funcionalidades

- Cadastro de pacientes, médicos, funcionários e unidades
- Gerenciamento de agendamentos e consultas
- Registro e visualização de prontuário eletrônico
- Dashboard com gráficos e KPIs (indicadores)
- Gestão de exames laboratoriais
- Acompanhamento de internações e atendimentos

---

## 🛠️ Tecnologias Utilizadas

- **Angular 17+** – Framework para aplicações SPA
- **TypeScript** – Linguagem com tipagem forte
- **Angular Material** – UI moderna e responsiva
- **Chart.js** – Visualização de dados (gráficos)
- **RxJS** – Programação reativa
- **HTML5 + SCSS** – Estrutura e estilo

---

## 📦 Como Executar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/matheusalvess07/DevWeb.git
Navegue até a pasta do projeto:


cd sghss-vidaplus-frontend

Instale as dependências: npm install

Inicie o servidor: ng serve

Acesse em: http://localhost:4200/

## 📁 Estrutura do Projeto
```bash
      src/
      │
      ├── app/
      │   ├── pages/               # Módulos de tela (agenda, prontuário, etc)
      │   ├── services/            # Serviços (ex: auth)
      │   ├── shared/              # Componentes reutilizáveis (navbar, sidebar)
      │   ├── app.routes.ts        # Rotas standalone
      │   ├── app.config.ts        # Configuração principal
      │   └── app.component.ts     # Root component
      │
      ├── assets/                  # Imagens e fontes
      ├── environments/            # Ambientes
      └── index.html               # HTML principal
      
```
---
## 📌 Planejamento Futuro

 Autenticação com JWT e controle de acesso

 Painel administrativo completo

 Responsividade total (PWA)

 Integração com APIs de convênios e exames

 Deploy em produção com Firebase ou Vercel

 ---
👨‍💻 Autor
Matheus Alves Da Silva – UNINTER
---

Projeto desenvolvido no curso de Análise e Desenvolvimento de Sistemas pela Uninter.

## 📄 Licença

Este projeto é de uso acadêmico e institucional. Todos os direitos reservados à equipe de desenvolvimento e à instituição VidaPlus.