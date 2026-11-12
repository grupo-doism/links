/*
 * ============================================================
 *  GRUPO DOISM — Configuração de Links
 *  Edite aqui para personalizar sua página sem mexer no HTML.
 * ============================================================
 *
 *  LINKS PRINCIPAIS
 *  ----------------
 *  id      → identificador único (sem espaços), usado para contar cliques
 *  label   → texto exibido no botão
 *  url     → endereço completo com https://
 *  icon    → emoji ou símbolo SVG inline
 *  color   → cor do ícone (hex). A cor também gera o fundo suave do ícone.
 */

const LINKS = [
  {
    id: "whatsapp",
    label: "Fale no WhatsApp",
    url: "https://wa.me/5511999999999",
    icon: "💬",
    color: "#25d366"
  },
  {
    id: "site",
    label: "Nosso Site",
    url: "https://grupodoism.com.br",
    icon: "🌐",
    color: "#4f8ef7"
  },
  {
    id: "instagram",
    label: "Instagram",
    url: "https://instagram.com/grupodoism",
    icon: "📸",
    color: "#e1306c"
  },
  {
    id: "youtube",
    label: "Canal no YouTube",
    url: "https://youtube.com/@grupodoism",
    icon: "▶️",
    color: "#ff0000"
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://linkedin.com/company/grupodoism",
    icon: "💼",
    color: "#0a66c2"
  },
  {
    id: "catalogo",
    label: "Catálogo de Produtos",
    url: "https://grupodoism.com.br/catalogo",
    icon: "📋",
    color: "#a259ff"
  },
  {
    id: "contato",
    label: "Entre em Contato",
    url: "mailto:contato@grupodoism.com.br",
    icon: "✉️",
    color: "#f7a24f"
  }
];

/*
 *  REDES SOCIAIS (ícones pequenos na parte de baixo)
 *  --------------------------------------------------
 *  label   → nome exibido no tooltip
 *  url     → endereço completo com https://
 *  icon    → SVG inline ou emoji
 */

const SOCIALS = [
  {
    label: "Instagram",
    url: "https://instagram.com/grupodoism",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>'
  },
  {
    label: "YouTube",
    url: "https://youtube.com/@grupodoism",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>'
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/company/grupodoism",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>'
  },
  {
    label: "WhatsApp",
    url: "https://wa.me/5511999999999",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>'
  }
];
