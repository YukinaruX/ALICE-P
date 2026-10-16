# Verificações executadas

- Vitest: 2 testes aprovados (conteúdo integral renderizado, H1 único e contatos).
- TypeScript sem erros; build Vite aprovado.
- Chromium: 360, 390, 768 e 1440px, com movimento normal e reduzido. Dez blocos integrais visíveis, sem overflow horizontal; cartão, FAQ e menu mobile operantes; sem erros JavaScript.
- Teclado: link de pular conteúdo como primeiro foco e FAQ por Enter. Toque no cartão e redimensionamento desktop/mobile aprovados.
- Prévia desktop e mobile inspecionada visualmente.
- npm install final: zero vulnerabilidades reportadas.
- Servidor local: http://localhost:5173. Nenhuma publicação executada.

A criação usa efeitos próprios inspirados na referência, conforme autorização. Não reproduz o motor original. Não houve medição de desempenho ou auditoria formal WCAG. Domínio, política de privacidade e publicação ficam para etapa futura.

## Revisão de animações

Adicionadas quatro cenas de papel rasgado ligadas à rolagem, com reversão; virada automática do cartão com controle manual prioritário; polaroids que abrem a partir de uma pilha no desktop e movimento no celular; rota desenhada progressivamente. Cenas decorativas separadas de texto e controles.

Testes motion-check.mjs aprovados em 390 e 1440px: transformações de rasgo, cartão e polaroids, reversão do rasgo, rota e modo reduzido. Repetidos os oito cenários de conteúdo/responsividade, testes de teclado/toque, TypeScript, Vitest e build.
