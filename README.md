# Ribeiro Cuidados

Site institucional da Ribeiro Cuidados, cuidado domiciliar em São Paulo. HTML e CSS estáticos, sem etapa de build.

## Estrutura

- `site/index.html`: página principal
- `site/politica-de-privacidade/`, `site/termos-de-uso/`, `site/politica-de-repasse/`: páginas legais
- `site/assets/css/site.css`: estilos (Tailwind já compilado e tema da marca)
- `site/assets/img/`: logo e imagens
- `netlify.toml`: publicação e cabeçalhos

## Rodar localmente

```bash
python -m http.server 8080 --directory site
```

Depois é só abrir http://localhost:8080.

## Publicar no Netlify

Em *Add new site > Import an existing project*, escolher este repositório. O Netlify lê o `netlify.toml`: não há comando de build e a pasta publicada é `site`.

## Contatos

WhatsApp, e-mail e Instagram aparecem no `index.html` e no rodapé das páginas legais. Para trocar o WhatsApp, substituir `5511927077633` em todos os arquivos HTML.
