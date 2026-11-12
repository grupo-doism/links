# Grupo DOISM — Organizador de Links

Sistema de páginas de links estilo Linktree, 100% da empresa, hospedado no GitHub + Vercel.

## Estrutura de pastas

```
/
├── index.html              ← Página principal (raiz do domínio)
├── cracha/index.html       ← Crachá digital
├── instagram-central/      ← Bio do Instagram central
├── instagram-expansao/     ← Bio do Instagram de expansão
├── _template/
│   ├── index.html          ← Template completo (use para criar novos perfis)
│   └── renderer.js         ← Código compartilhado entre todos os perfis
└── README.md
```

## Como criar um novo perfil

1. Copie a pasta `_template` e renomeie para o nome do novo perfil  
   Ex: `copiar _template → evento-2026`

2. Abra `evento-2026/index.html` e edite **somente** o bloco `<script>` no topo:

```js
const PROFILE = {
  title:      "Evento 2026 — Links",
  name:       "Evento ",
  nameBlue:   "2026",
  nameSuffix: "",
  bio:        "Acesse tudo sobre o evento aqui.",
  footer:     "© 2026 Grupo DOISM",
  showLogo:   true,
  initials:   "EV",

  /* Foto de perfil — URL de uma imagem (ou null para usar o logo) */
  avatar:   null,

  /* Imagem de fundo — URL de uma imagem (ou null para fundo padrão) */
  bgImage:  null,

  /* Cor de fundo personalizada — hex (ou null para manter o preto) */
  bgColor:  null
};

const LINKS = [
  { id:"link1", label:"Nome do Link", url:"https://...", icon:"🔗", color:"#29ABE2" },
  /* Adicione mais links aqui */
];

const SOCIALS = [
  { label:"Instagram", url:"https://instagram.com/...", icon:"instagram" },
  /* Ícones disponíveis: instagram, youtube, linkedin, whatsapp, tiktok, facebook */
];
```

3. Mude o `<script src="../_template/renderer.js">` → mantém o caminho relativo

4. Faça push para o GitHub — o Vercel publica automaticamente

## URLs após deploy no Vercel

| Pasta | URL |
|---|---|
| `/` (raiz) | `links.grupodoism.com.br` |
| `cracha/` | `links.grupodoism.com.br/cracha` |
| `instagram-central/` | `links.grupodoism.com.br/instagram-central` |
| `instagram-expansao/` | `links.grupodoism.com.br/instagram-expansao` |
| `evento-2026/` | `links.grupodoism.com.br/evento-2026` |

## Como usar foto de perfil

No campo `avatar`, coloque a URL da foto (pode ser do próprio repositório):

```js
avatar: "https://raw.githubusercontent.com/seuusuario/seurepositorio/main/fotos/fulano.jpg"
```

Ou coloque a imagem na pasta do perfil e referencie como:
```js
avatar: "foto.jpg"
```

## Como usar imagem de fundo

```js
bgImage: "https://raw.githubusercontent.com/seuusuario/repo/main/backgrounds/evento.jpg"
```

A imagem recebe automaticamente uma sobreposição escura para manter a legibilidade do texto.

## Deploy no Vercel

1. Suba o repositório para o GitHub
2. No Vercel: **New Project** → importe o repositório
3. Framework: **Other** (sem framework, HTML estático)
4. Output Directory: deixe vazio (raiz do projeto)
5. Clique **Deploy**
6. Configure o domínio personalizado nas configurações do projeto

## Cores da marca

| Cor | Hex |
|---|---|
| Azul DOISM | `#29ABE2` |
| Preto | `#111111` |
| Branco | `#f5f5f5` |
