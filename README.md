# Convite Digital Interativo – 15 Anos Sophia Vitória

Site de convite digital de alto padrão desenvolvido especialmente para compartilhamento via **WhatsApp**, com design **mobile-first**, navegação elegante e áreas clicáveis (*hotspots*) calibradas sobre a arte original.

---

## 📁 Estrutura do Projeto

```text
convite-sophia-vitoria/
├── index.html                   # Convite principal interativo com os 4 botões
├── presentes.html               # Página de Sugestões de Presentes (+ cópia de Pix)
├── manual.html                  # Página do Manual do Convidado (+ atalho RSVP)
├── assets/
│   ├── css/
│   │   └── style.css            # Folha de estilos responsiva (Mobile-First / Desktop)
│   ├── js/
│   │   ├── config.js            # Central de links e configurações do projeto
│   │   └── main.js              # Lógica de interação, pré-carregamento e cópia
│   └── images/
│       ├── convite-principal.jpg    # Imagem oficial do convite (576 x 1024)
│       ├── sugestoes-presentes.jpg  # Imagem de presentes (683 x 1024)
│       └── manual-convidado.jpg     # Imagem do manual (683 x 1024)
└── README.md                    # Documentação do projeto
```

---

## ⚙️ Como Alterar os Links e Configurações

Todos os links externos e informações configuráveis estão reunidos em um único arquivo:  
📂 **`assets/js/config.js`**

```javascript
const CONFIG = {
  // BOTÃO 1 - Google Maps
  mapsUrl: "https://www.google.com/maps/place/...",

  // BOTÃO 3 - Confirmação de Presença (RSVP)
  // Altere aqui quando quiser inserir o link definitivo
  rsvpUrl: "https://assessoriavip.com.br/rsvpUnico/f71be860-ab0a-11f1-ad8f-bb8af7109401",

  // Caminhos das imagens
  images: {
    convitePrincipal: "assets/images/convite-principal.jpg",
    sugestoesPresentes: "assets/images/sugestoes-presentes.jpg",
    manualConvidado: "assets/images/manual-convidado.jpg"
  },

  // Chaves PIX para o botão de cópia rápida
  pix: {
    chaveCelular: "19998924831",
    chaveCpf: "45164376865"
  }
};
```

---

## 🎯 Os 4 Botões do Convite

1. **Localização no Maps**: Abre o Google Maps no endereço exato do *Salão Antonieta Eventos* em Americana-SP.
2. **Sugestões de Presentes**: Abre a página `presentes.html` com a arte original em alta definição, botão de voltar discreto e botões rápidos para copiar as chaves Pix.
3. **Confirmar Presença**: Redireciona diretamente para o link de RSVP da Assessoria VIP.
4. **Manual do Convidado**: Abre a página `manual.html` com a arte completa, botão de retorno e atalho para confirmação.

---

## 🚀 Como Visualizar ou Testar Localmente

Basta abrir o arquivo **`index.html`** em qualquer navegador moderno (Chrome, Safari, Edge, Firefox).

Para abrir pelo VS Code ou terminal:
- Extensão **Live Server** no VS Code.
- Ou via Node: `npx serve .`

---

## 🌐 Como Publicar na Internet

O site é 100% estático (HTML, CSS e JavaScript puros), o que garante carregamento instantâneo no 3G/4G/5G sem custos de servidor.

Você pode publicar gratuitamente em:
- **Netlify**: Basta arrastar a pasta do projeto.
- **Vercel**: `vercel deploy` ou via GitHub.
- **GitHub Pages**: Criar repositório e ativar Pages.
- **Hostinger / cPanel / Qualquer Hospedagem**: Enviar os arquivos para a pasta `public_html`.
