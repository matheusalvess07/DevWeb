# SGHSS - VidaPlus

Sistema de Gestão Hospitalar e de Serviços de Saúde (SGHSS) da instituição **VidaPlus**, responsável por gerenciar:

- 🏥 Hospitais
- 🏡 Clínicas de bairro
- 🧪 Laboratórios
- 🩺 Equipes de Home Care

---

## 📌 Tecnologias

- **Angular** 17+
- **Angular Material**
- **TypeScript**
- **HTML5 + CSS3 (SCSS)**
- **Chart.js / ApexCharts**
- **Figma** (protótipos visuais)
- **Responsivo e Acessível (WCAG)**

---

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
