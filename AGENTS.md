# AGENTS.md — Site de Alice Vieira

## Missão e escopo

Criar uma landing page institucional em português brasileiro para Alice Vieira, psicóloga, CRP 10/12527. Apresentar a profissional, abordagem, público e modalidades; facilitar contato pelo WhatsApp. Ler CONTEUDO.md, ANALISE.md e DESIGN.md antes de implementar. CONTEUDO.md contém o texto integral obrigatório, conforme solicitação mais recente do usuário.

Este pacote contém uma proposta de projeto. Não existe código de site entregue neste pacote. Não publicar automaticamente. Se já houver repositório, inspecionar sua estrutura e preservar a stack e os padrões existentes.

## Fonte de verdade

- Texto público obrigatório: CONTEUDO.md; prevalece sobre sugestões anteriores de resumo. Contexto e fontes: ANALISE.md.
- Sistema visual: DESIGN.md, atualizado com a referência Torn Postcard escolhida pelo usuário.
- Referência principal: https://21stdev-my-components-one.vercel.app/#torn-postcard-portfolio. Priorizar abertura centralizada, camadas de papel e transições rasgadas, adaptadas à identidade azul/creme de Alice; retrato na seção Sobre. A escolha supera a sugestão anterior de hero dividido em duas colunas.
- A abertura foi observada visualmente; estrutura e efeitos adicionais foram identificados na descrição pública do autor. O código não foi obtido nem executado; verificar comportamento, dependências, responsividade e licença antes da integração.
- Recortes devem ficar em camadas decorativas separadas, sem cortar texto/foco ou interceptar cliques. Não bloquear rolagem. Conferir licença antes de reutilizar código ou assets externos.
- Alterações explícitas da cliente prevalecem sobre propostas destes documentos.
- Projeto de Alice é independente do projeto de Natália Menezes. Nunca reutilizar dados pessoais, vinho/rosa, assinatura ou CRP de Natália.
- Não inventar currículo, especializações, anos de experiência, número de pacientes, endereço, preço, convênios ou disponibilidade.
- Manter “pós-graduanda”; não substituir por “especialista”.

## Informações do site

Alice Vieira; CRP 10/12527; formada pela UFPA; pós-graduanda em Avaliação Psicológica e Psicodiagnóstico; abordagem Gestalt-terapia. Psicoterapia para adolescentes e adultos. Presencial na CLIPSI Saúde Belém, Pedreira, Belém/PA; online via Google Meet. Avaliação psicológica para pré e pós-operatório de cirurgia bariátrica, conforme material fornecido.

WhatsApp: https://wa.me/5591982336647
Instagram: https://www.instagram.com/psialicevc/

Não transformar temas do feed em especialidades clínicas. Preservar a frase fornecida pelo usuário sobre atendimento online a brasileiros em qualquer localidade, conforme CONTEUDO.md; não ampliar a afirmação para habilitação em todos os países. Não renderizar dados pendentes como fatos.

## Arquitetura proposta

Para projeto novo sem restrições: React com TypeScript e Vite, para aproveitar diretamente o template React escolhido. Esta escolha substitui a sugestão anterior de Astro. Se o projeto existente já usa React/Next.js, preservar sua stack. Evitar backend, autenticação, painel, pagamento, agenda integrada ou banco de dados no escopo inicial.

Estrutura sugerida: página principal, página de privacidade quando houver texto aprovado, componentes de seção e arquivo de conteúdo tipado. Centralizar nome, CRP, telefone, links, modalidades e textos em um único módulo de conteúdo. Centralizar tokens em CSS.

Componentes: Header, Hero, About, TherapyThemes, Approach, Services, FAQ, Contact e Footer. Criar componentes adicionais só quando houver necessidade real de reutilização.

## Comportamento

- Navegação por âncoras acessíveis, com compensação da altura do cabeçalho.
- CTA abre WhatsApp com texto genérico: “Olá, Alice! Gostaria de informações sobre atendimento.” Codificar com encodeURIComponent.
- Para avaliação, usar mensagem específica sobre informações do processo, sem sugerir diagnóstico.
- O clique não significa agendamento confirmado. Não exibir confirmação fictícia.
- Link para Instagram; evitar embed do feed no lançamento.
- FAQ com details/summary ou controles equivalentes acessíveis.
- Não criar formulário de sintomas, coleta de histórico clínico ou questionário diagnóstico.
- Não inserir pixels ou analytics sem decisão explícita e revisão da necessidade de informação/consentimento. Não registrar conteúdo de mensagens ou dados clínicos.

## Conteúdo e apresentação

Preservar a organização em cinco capítulos do template: abertura; sobre; atendimentos; processo terapêutico; contato. Integrar temas e Gestalt-terapia nos capítulos Sobre e Processo; incluir dúvidas no capítulo final, permitindo altura natural para leitura. O DESIGN.md contém o mapeamento completo. Manter identificação profissional legível. Escrever com acolhimento e clareza, sem urgência artificial, “últimas vagas” inventadas ou promessa de transformação garantida.

Não usar depoimentos de pacientes, avaliações inventadas, selos falsos, estrelas de satisfação ou fotos geradas que representem Alice. Utilizar alice-vieira-foto.jpg, retrato de 1600 × 1200 px extraído diretamente do PDF enviado, sem moldura. Não gerar pessoa substituta nem alterar sua aparência.

## Qualidade técnica

- HTML semântico, um H1, hierarquia coerente, lang pt-BR.
- Navegação por teclado, foco visível, link de pular conteúdo e contraste WCAG AA.
- Texto principal mínimo 16px; alvos de toque de pelo menos 44px.
- Decoração com alt vazio/aria-hidden; imagens relevantes com descrição objetiva.
- Respeitar prefers-reduced-motion; não depender de animação para revelar informações.
- Imagens responsivas WebP/AVIF quando possível; dimensões definidas para evitar deslocamentos.
- Priorizar imagem principal; lazy loading apenas abaixo da primeira dobra.
- Fontes com licença adequada e poucos pesos; preferir hospedagem local quando viável.
- Meta title e descrição baseados em fatos. URL canônica e Open Graph somente com domínio e assets finais.
- Dados estruturados opcionais, apenas com propriedades verificadas. Não inserir avaliações ou endereço inventados.

## Verificação e entrega

Conferir responsividade em 360, 390, 768 e 1440px; ausência de overflow; leitura, foco e FAQ; links e número do WhatsApp; nenhuma colisão entre botão flutuante e conteúdo. Rodar build e verificações existentes. Validar que não há conteúdo de Natália, campos provisórios públicos, qualificações alteradas ou serviços acrescentados sem fonte.

Relatar arquivos alterados, verificações realmente executadas e pendências. Não afirmar pontuação de desempenho sem medição. Não alterar dependências ou arquitetura só para seguir esta sugestão se o repositório existente já resolver o objetivo.


## Template e animações — requisito do usuário

Página do autor: https://21st.dev/@kedhareswer/templates/scroll-tear-portfolio-website-template
Autor: Kedhareswer Naidu.
Comando publicado pelo autor (não executado nesta preparação):

```sh
npx shadcn@latest add https://21st.dev/r/kedhareswer/torn-postcard-portfolio
```

Em 16/10/2026, uma tentativa de leitura do endereço de registro retornou HTTP 404. Não afirmar que o código foi baixado ou instalado. Na implementação, conferir se o endereço voltou a funcionar; se continuar indisponível, solicitar o arquivo ou endereço corrigido do autor. Não substituir silenciosamente por uma página estática nem por efeitos aproximados alegando fidelidade ao original.

O usuário quer reutilizar estrutura e animações, não somente cores e textura. Preservar o motor original quando o código estiver disponível: rasgo guiado por rolagem, cartão que vira, pilha de polaroids e rota animada. Adaptar conteúdo e assets conforme DESIGN.md. Antes de alterar, rodar a base original e registrar seu comportamento para comparação. A página anuncia React, arquivo único e sem dependências adicionais; confirmar isso no código, sem presumir bibliotecas específicas.

Evitar reescrever o componente inteiro antes de entender o vínculo entre scroll, capítulos e transformações. Centralizar textos e tokens quando possível sem romper a animação. Manter avisos e créditos que acompanhem a licença; gratuidade informada pelo usuário não identifica uma licença específica.

Validar movimento normal e reduzido, rolagem nos dois sentidos, navegação por âncoras, teclado, toque, redimensionamento e saída de cada seção. Não esconder informação essencial no verso de cartão inacessível. Com movimento reduzido, apresentar capítulos e cartões em fluxo legível. Preservar o efeito normal no desktop e celular capaz de executá-lo, simplificando somente por necessidade comprovada de acesso ou desempenho.


## Revisão obrigatória de conteúdo e foto — 16/10/2026

Incluir todo o CONTEUDO.md: nome/CRP; quatro parágrafos de biografia, incluindo capacitações, pesquisa de balé e vivências artísticas; dois parágrafos integrais sobre a abordagem; três serviços com descrições e botões; convite à primeira sessão; frase final atribuída a Fritz Perls no material recebido. Não trocar parágrafos por palavras-chave, truncar, aplicar line-clamp nem deixar texto apenas em metadados, alt ou elementos permanentemente ocultos.

A animação do cartão não comporta necessariamente a biografia inteira. Usar o retrato na frente e a identificação no verso, com os quatro parágrafos em área editorial visível no mesmo capítulo. A abordagem completa deve ter bloco próprio de altura natural junto à rota animada. Manter cinco capítulos com subseções quando necessário; acomodar conteúdo sem reduzir fonte ou eliminar texto. A completude tem prioridade sobre a altura de uma tela.

Foto fornecida: alice-vieira-foto.jpg, JPEG 1600 × 1200 (4:3), extração do objeto de imagem original do PDF, sem recompressão. Preservar o arquivo fonte; gerar derivados responsivos durante a implementação se necessário. Alt sugerido: “Alice Vieira sorrindo em um ambiente ao ar livre”.

Antes da entrega, comparar o conteúdo renderizado com cada bloco público de CONTEUDO.md em desktop e mobile e verificar acesso ao texto com movimento reduzido. Não declarar o site atualizado apenas porque estes documentos foram alterados.
