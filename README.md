# Template para Academia

Template de site para **academias e estúdios fitness**, feito com React + Vite. Tem página inicial,
planos e preços, horários, perguntas frequentes e uma página de nutrição. Todo o conteúdo que muda
de cliente para cliente fica em **um único arquivo** (`src/site.config.js`).

> **Site de demonstração.** Todos os nomes, telefones, e-mails, endereços, CNPJ e imagens são
> fictícios. Nenhum negócio real está representado.

![Captura de tela do template (substitua por um print seu)](docs-images/print-home.png)

> Coloque seu print em `docs-images/print-home.png` (veja a sugestão de capturas no fim deste arquivo).

## Tecnologias

React 19, Vite, Tailwind CSS 4, DaisyUI, React Router e Lucide Icons.

## Como rodar

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # gera a pasta dist/
npm run preview  # testa o build localmente
```

## Como personalizar

1. **Textos e dados:** edite `src/site.config.js` (nome, slogan, serviços, planos, horários, FAQ,
   telefone/WhatsApp, e-mail, endereço, CNPJ, redes sociais). Campos vazios (`""`) fazem o
   elemento sumir. Exemplo: deixe `redes.instagram` vazio para esconder o botão do Instagram.
2. **Imagens e logo:** veja [IMAGENS.md](IMAGENS.md). Todas são placeholders em `src/assets/img/`
   e `public/`.
3. **Cores:** o destaque é o laranja do Tailwind (`orange-500`/`orange-600`). Para trocar, procure
   por `orange-` nos componentes em `src/` e substitua pela cor desejada.
4. **Título e descrição da página:** `index.html`.

## Como publicar

Rode `npm run build` e publique a pasta `dist/`.

- **Cloudflare Pages:** conecte o repositório, comando de build `npm run build`, pasta de saída `dist`.
- **Netlify:** idem (build `npm run build`, publish `dist`). Para as rotas funcionarem ao recarregar,
  crie `public/_redirects` com `/*  /index.html  200`.
- **GitHub Pages:** o projeto já tem `npm run deploy` (usa `gh-pages`). Se o site ficar em
  `usuario.github.io/repositorio/`, defina `base: "/repositorio/"` no `vite.config.js` e use
  `HashRouter` (ou um `404.html` de redirecionamento) por causa das rotas.
- **Vercel:** funciona direto; o `vercel.json` já trata as rotas.

## Antes de entregar a um cliente

- [ ] Trocar **todos** os dados em `src/site.config.js` (nome, contatos, endereço, CNPJ, planos, preços, horários).
- [ ] Usar **fotos e logo autorizados** (do cliente ou de banco gratuito com licença) e atualizar favicon e imagem de prévia (`og:image`, de preferência PNG/JPG com URL absoluta).
- [ ] Revisar os **textos legais** (política de privacidade, termos, regras de contrato e cancelamento) com o cliente.
- [ ] Conferir o registro profissional do nutricionista/educadores (ex.: CRN/CREF) e se podem aparecer no site.
- [ ] Remover o **aviso de demonstração**: `demo: false` em `src/site.config.js`.
- [ ] Remover o **noindex**: apague a meta `robots` do `index.html` e o cabeçalho `X-Robots-Tag` do `vercel.json`
      (e ajuste `public/robots.txt` se quiser).
- [ ] Testar os links de WhatsApp, telefone e e-mail com os dados reais.
- [ ] Revisar o título da página e a descrição para SEO.

## Capturas de tela sugeridas

Veja a lista na descrição do projeto (desktop 1440x900 e celular 390x844): Home (topo), serviços,
planos, horários + FAQ, nutrição e rodapé.
