# Corrigir deploy estático no Coolify

## Objetivo
Fazer o site React + Vite voltar a funcionar após redeploy no Coolify, sem alterar layout, conteúdo ou rotas.

## Alterações
- Padronizar a instalação com npm, removendo o lockfile concorrente do Bun.
- Normalizar o `package-lock.json` para usar o registro público do npm, evitando dependências do cache privado do ambiente de edição.
- Adicionar um `Dockerfile` multi-stage: compilar o Vite e servir somente a pasta `dist` com Caddy.
- Adicionar um `Caddyfile` com fallback SPA para `index.html`, preservando rotas como `/servicos`, `/faq` e `/contato`.
- Adicionar `.dockerignore` para manter a imagem limpa e reproduzível.

## Validação
- Executar instalação limpa e `npm run build`.
- Construir a imagem Docker quando o Docker estiver disponível; caso contrário, validar a configuração e testar localmente o conteúdo de `dist` e o fallback de rotas.
