# Prompt completo — Site de Alice Vieira

Este arquivo reúne o pedido de reprodução, as decisões aprovadas e uma cópia dos arquivos de implementação. Pode ser enviado a outro assistente para continuar o projeto ou recriar o resultado. A foto deve acompanhar este arquivo: alice-vieira-foto.jpg. Um prompt sozinho não incorpora o JPEG.

---

## PROMPT PARA COPIAR E USAR

Você é responsável por implementar ou continuar o site institucional de Alice Vieira, psicóloga clínica, CRP 10/12527. Entregue o site funcionando localmente, com código organizado, conteúdo completo e animações de rolagem marcantes. A versão descrita aqui já foi aprovada visualmente pelo usuário. Preserve essa direção ao continuar o trabalho.

### 1. Objetivo e autorização

Crie uma landing page em português brasileiro para apresentar Alice, sua trajetória, abordagem Gestalt-terapia e serviços, facilitando o contato pelo WhatsApp.

A referência escolhida foi Torn Postcard / Scroll Tear Portfolio, de Kedhareswer Naidu:
- https://21st.dev/@kedhareswer/templates/scroll-tear-portfolio-website-template
- https://21stdev-my-components-one.vercel.app/#torn-postcard-portfolio

O endereço de instalação anunciado pelo autor retornou HTTP 404 durante a preparação: https://21st.dev/r/kedhareswer/torn-postcard-portfolio. A demonstração estava acessível, inclusive seu JavaScript compilado, mas o arquivo React editável e a licença específica de reutilização não foram obtidos. O usuário autorizou expressamente uma implementação própria inspirada nessa referência.

Portanto, o resultado aprovado usa código próprio. Não afirme que o template foi instalado, que o motor original foi preservado ou que houve reprodução idêntica. Não copie assets externos ou código compilado da demonstração. Não publique automaticamente.

### 2. Stack e organização

Use React com TypeScript e Vite. O projeto atual tem React 19, TypeScript 5.9, Vite 8.3, Vitest 5 e Playwright para verificação. As versões e os scripts exatos estão no package.json reproduzido no anexo. Em um ambiente novo, verifique compatibilidade e segurança antes de instalar.

Não use backend, autenticação, banco de dados, pagamentos ou agenda integrada. Não adicione bibliotecas de animação: o movimento atual usa CSS, SVG, requestAnimationFrame e eventos passivos de rolagem. Use fontes de sistema: Georgia para títulos e trechos em itálico; Arial/Helvetica para corpo e interface. Não existem downloads externos de fontes.

Responsabilidades dos arquivos:
- src/content.ts: identificação, biografia integral, abordagem integral, serviços, contatos e construção das URLs de WhatsApp.
- src/App.tsx: cabeçalho, cinco capítulos, cartão, polaroids, rota, contato, FAQ e rodapé.
- src/ChapterTransition.tsx: quatro cenas decorativas de papel que rasga.
- src/useScrollMotion.ts: progresso das animações, reversão na rolagem e resposta à redução de movimento.
- src/styles.css: tokens, composição, tipografia, responsividade e coreografia visual.
- src/main.tsx: inicialização React.
- public/alice-vieira-foto.jpg: cópia do retrato original; preserve também o arquivo fonte na raiz.
- tests/: testes de conteúdo e verificações reais em Chromium.

### 3. Identidade visual aprovada

Construa um site editorial, acolhedor e artístico, com memória de cartão-postal, camadas de papel e detalhes de colagem. Evite uma aparência genérica de plataforma de saúde.

Paleta:
- Creme predominante: #F7F3EA.
- Superfícies claras: #FFFDF8.
- Azul profundo: #183C60.
- Texto: #243746.
- Texto secundário: #4D6474.
- Azul suave: #DCE8EF.
- Bordas: #C7D4DB.
- Dourado decorativo: #B49150.
- Fundo do contato: #E9EEE9.

Container de até 1160px; margens de 48px no desktop, 32px no tablet e 20px no celular. Espaços amplos entre capítulos. Títulos grandes em Georgia, com palavras em itálico; corpo com pelo menos 16px e boa altura de linha. Estrelas discretas, círculos finos e motivos botânicos periféricos. Bordas de papel não devem recortar texto, foco ou áreas clicáveis.

O fundo azul da abertura recebe camadas de papel azul claro e creme. O retrato aparece no capítulo Sobre, nunca como pessoa gerada ou substituída. Os serviços têm desenhos vetoriais próprios: localização, tela com coração e ramo. O rodapé termina em uma faixa geométrica azul inspirada em azulejos.

### 4. Cinco capítulos

1. Abertura: cabeçalho com nome tipográfico, links Sobre mim, Atendimentos, A abordagem, Dúvidas e Vamos conversar. No celular, menu com botão e aria-expanded. Conteúdo centralizado com nome Alice Vieira em um único H1, identificação, estrela, mensagem de acolhimento, CTA e indicação de presencial em Belém e online. Apoio aprovado: “Um espaço para se escutar e compreender suas relações.” e “Psicoterapia para adolescentes e adultos. Um olhar sensível à sua história e à sua singularidade.” Link para continuar rolando.

2. Sobre: título “Um pouco sobre mim”, foto real na frente de um cartão tridimensional, identificação no verso e quatro parágrafos completos em área editorial adjacente. No desktop, retrato à esquerda e texto à direita; no celular, foto primeiro e biografia depois. O cartão tem controle manual de virada. Abaixo, “Cada história, um universo.” e temas Autoconhecimento, Autoestima e Relacionamentos.

3. Atendimentos: título “Meus serviços como psicóloga”, três polaroids com nome, descrição integral e botão “Entre em contato!”. Usar os três serviços fornecidos, sem acrescentar especialidades. Apresentar presencial, online e avaliação como opções distintas.

4. Processo: título “Como funciona a Gestalt-terapia?”, dois parágrafos integrais em bloco de altura natural e rota ilustrada. Etapas: “Primeiro contato — Um espaço para suas dúvidas.”; “Construir o encontro — Conversar sobre modalidade e horários.”; “Iniciar o acompanhamento — Acolher sua história, no seu tempo.” A rota não substitui a explicação completa. Incluir os detalhes “Um olhar para o aqui e agora” e “Estar presente também é se cuidar.”

5. Contato: composição em cartão-postal com “PARA: VOCÊ”, convite “Vamos agendar a sua primeira sessão?”, CTA “Entre em contato!”, “O primeiro passo pode ser uma conversa.” e selo decorativo “Com escuta & presença”. Complemento: “Sua história é bem-vinda aqui.” Integrar o FAQ e encerrar com a frase atribuída a Fritz Perls. Rodapé com Alice Vieira, CRP, Instagram, WhatsApp e retorno ao início.

FAQ atual:
- Para quem é a psicoterapia? O atendimento é voltado a adolescentes e adultos.
- Onde acontecem os encontros presenciais? Na CLIPSI Saúde Belém, no bairro da Pedreira, em Belém/PA.
- Como funciona o atendimento online? Os atendimentos acontecem via Google Meet, para brasileiros em qualquer localidade.
- Como posso saber mais sobre o atendimento? Entre em contato pelo WhatsApp para conversar sobre o atendimento e tirar suas dúvidas. O contato não confirma um agendamento.

### 5. Animações aprovadas: devem ser perceptíveis

A primeira versão tinha movimentos discretos demais. O usuário pediu animações mais próximas da experiência da referência. A revisão aprovada acrescentou os efeitos abaixo. Não retorne a uma página de bordas estáticas com apenas hover ou inclinações sutis.

A. Papel rasgando entre capítulos:
- Quatro cenas decorativas intercaladas antes de Sobre, Atendimentos, Processo e Contato.
- Cada cena tem um palco sticky de 100svh dentro de uma área de rolagem de 180svh no desktop e 165svh no celular.
- Duas folhas em camadas separadas cobrem a cena, com uma emenda irregular no centro.
- Durante a rolagem, a metade superior sobe e inclina para um lado; a inferior desce e inclina para o outro. O rasgo revela um título grande do capítulo seguinte e sua cor de fundo.
- As bordas usam polígonos com 161 pontos e variação irregular em pixels, evitando um zigue-zague grosseiro.
- Abertura vinculada à posição real do scroll, com smoothstep p²(3−2p), e reversível ao rolar para cima. Não bloquear o scroll, aplicar snapping ou animar por temporizadores independentes da posição.
- Movimento das folhas até aproximadamente 65svh, com rotações de −9° e +8°, além de pequena translação lateral e inclinação tridimensional.
- A cena decorativa é aria-hidden, sem foco e sem interceptar cliques. O texto público real permanece nas seções em fluxo natural.
- Títulos das cenas: “Um pouco sobre mim”; “Possibilidades de cuidado”; “Aqui. Agora. Com você.”; “Vamos conversar?”.

B. Cartão que vira:
- Perspectiva 3D de 1500px, duas faces com backface-visibility e giro de 0° a 180° no eixo Y.
- O scroll controla a virada automaticamente conforme o cartão atravessa a tela. O retrato vem na frente; nome e CRP no verso.
- O botão “Vire este cartão” / “Ver o retrato” usa aria-pressed. Ao ser acionado, o controle manual tem prioridade e o scroll deixa de sobrescrever a escolha.
- A biografia permanece fora do verso, integral e sempre disponível.
- Coluna do retrato sticky no desktop e em fluxo normal no celular.

C. Polaroids:
- No desktop, as três cartas começam próximas de uma pilha no centro e se abrem até suas colunas conforme a seção entra na tela.
- Calcular deslocamento a partir do centro do container e dos offsets de cada carta; não usar medidas que dependam da transformação já aplicada.
- Inclinação de cada carta acompanha a abertura. No celular, cartas ficam em coluna com movimento vertical e rotação moderada, sem ultrapassar a largura da tela.
- Se um cartão recebe foco por teclado, trazê-lo para frente e estabilizar sua posição.

D. Rota:
- SVG com caminho curvo, guia suave e traço principal que se desenha progressivamente.
- Usar pathLength=1, stroke-dasharray=1 e stroke-dashoffset variando de 1 a 0 conforme o scroll.
- Textos das etapas ficam legíveis o tempo todo. A rota também deve voltar ao estado anterior ao rolar para cima.

E. Outros movimentos:
- Camadas da abertura têm parallax discreto.
- Ornamentos e cartão de contato respondem suavemente ao progresso da seção.
- Atualizar estilos em requestAnimationFrame com listeners de scroll passivos; reagir a resize e mudanças de prefers-reduced-motion; remover listeners no cleanup.

F. Movimento reduzido:
- Respeitar prefers-reduced-motion: reduce.
- Remover as cenas intermediárias de rasgo para reduzir a extensão do percurso e movimentos amplos.
- Manter seções e cartões em fluxo legível, rota completa e todos os textos.
- Desabilitar a virada automática; o botão continua permitindo trocar a face sem animação longa.

### 6. Conteúdo obrigatório e dados profissionais

Use integralmente o conteúdo reproduzido na seção “Conteúdo público integral” deste arquivo. Não resumir, truncar, usar line-clamp ou esconder parágrafos para caber numa tela.

Alice é formada pela UFPA e pós-graduanda em Avaliação Psicológica e Psicodiagnóstico. Manter “pós-graduanda”; não trocar por “especialista”. Público: adolescentes e adultos. Não transformar assuntos de pesquisa ou temas do Instagram em especialidades clínicas.

WhatsApp: https://wa.me/5591982336647
Instagram: https://www.instagram.com/psialicevc/

CTA genérico: construir a URL com encodeURIComponent de “Olá, Alice! Gostaria de informações sobre atendimento.”
CTA de avaliação: usar encodeURIComponent de “Olá, Alice! Gostaria de informações sobre o processo de avaliação psicológica para cirurgia bariátrica.”

Links externos abrem com target=_blank e rel=noopener noreferrer. Contato não significa sessão confirmada. Não simular agendamento ou envio de formulário.

Foto: alice-vieira-foto.jpg, JPEG 1600 × 1200, extraído do PDF fornecido. Preserve rosto, cabelos, proporções, aparência e fundo natural. Alt: “Alice Vieira sorrindo em um ambiente ao ar livre”. Definir largura e altura para evitar deslocamento; lazy loading permitido porque fica abaixo da abertura. O arquivo JPEG é um asset separado obrigatório.

A frase final e sua atribuição foram fornecidas pelo usuário; não afirmar verificação bibliográfica independente. A formulação sobre brasileiros em qualquer localidade deve ser preservada sem ampliá-la para alegações de habilitação em todos os países.

### 7. Acessibilidade, privacidade e limites

Use HTML semântico, lang=pt-BR, um H1, títulos coerentes, foco visível, link de pular conteúdo como primeiro foco, navegação por teclado, FAQ com details/summary e compensação de âncoras. Texto principal mínimo de 16px, alvos de toque de pelo menos 44px e contraste adequado. Decoração sem leitura por tecnologias assistivas.

Sem depoimentos, estrelas de satisfação, avaliações, selos de credenciais inventados, urgência artificial ou promessas de resultado. Não inventar currículo, anos de experiência, pacientes, preço, convênios, endereço completo ou disponibilidade. Não reutilizar dados ou identidade do projeto de Natália Menezes. Não gerar retrato substituto.

Não criar formulário de sintomas, histórico clínico ou questionário diagnóstico. Não incluir pixels, analytics ou registro de mensagens. Sem embeds de Instagram. Não publicar política de privacidade fictícia. Não adicionar canonical, Open Graph ou dados estruturados com domínio/endereço não aprovados.

Meta title atual: “Alice Vieira | Psicóloga em Belém e online”. Descrição: “Alice Vieira, psicóloga clínica CRP 10/12527. Psicoterapia para adolescentes e adultos em Belém e online, com abordagem Gestalt-terapia.”

### 8. Verificação e execução

Antes de entregar:
1. Rodar npm test, TypeScript e npm run build.
2. Comparar cada parágrafo público com o HTML e com a página renderizada.
3. Testar 360, 390, 768 e 1440px, cada um com movimento normal e reduzido.
4. Confirmar ausência de overflow horizontal, texto cortado, sobreposição de controles ou conteúdo inacessível.
5. Conferir WhatsApp e mensagem de avaliação, Instagram, FAQ, menu mobile, primeiro foco, uso do teclado e toque.
6. Testar rasgo abrindo e fechando com a rolagem, virada automática e manual, polaroids e rota progressiva. Conferir redimensionamento.
7. Inspecionar screenshots de desktop e celular; não substituir inspeção visual por apenas um build.
8. Iniciar o servidor com npm run dev -- --port 5173 e entregar o endereço local acessível.
9. Relatar os arquivos alterados, verificações realmente executadas e limitações. Não declarar pontuação de desempenho ou auditoria WCAG formal sem medição.

No projeto entregue foram aprovados os testes de conteúdo, os oito cenários de responsividade/movimento, teclado, toque, redimensionamento, animações, TypeScript e build. O endereço utilizado foi http://localhost:5173. Não houve publicação, medição de desempenho nem auditoria formal WCAG. Repita as verificações ao mudar o projeto; os resultados anteriores não comprovam uma nova versão.

### 9. Como usar os anexos

Se o código atual estiver disponível, continue diretamente nele e preserve a implementação aprovada. Se estiver recriando em outra pasta, use os arquivos anexados abaixo como base exata, em vez de reinterpretar livremente o visual e as animações.

O código anexado é a versão produzida nesta conversa. O package-lock.json não está incorporado; preserve o arquivo real se estiver no projeto. A foto também precisa ser fornecida separadamente. Os scripts de navegador contêm o caminho do Chromium instalado no computador original; ajuste executablePath ou use um navegador instalado pelo Playwright no novo ambiente.

---

## Conteúdo público integral

# Conteúdo integral do site — Alice Vieira

Fonte: texto enviado pelo usuário em 16/10/2026. Todos os blocos abaixo devem aparecer no site. Revisão limitada a gramática, pontuação, grafia e organização, preservando informações e voz em primeira pessoa. Não resumir ou excluir blocos para encaixá-los no template. Notas de implementação não são texto público.

## 1. Identificação — abertura

Alice Vieira

Psicóloga Clínica · CRP 10/12527

## 2. Um pouco sobre mim — capítulo Sobre

Sou psicóloga clínica (CRP 10/12527), formada pela Universidade Federal do Pará e pós-graduanda em Avaliação Psicológica e Psicodiagnóstico.

Tenho como objetivo te auxiliar em demandas voltadas ao autoconhecimento, à autoestima e aos relacionamentos, estando aberta a escutar adolescentes e adultos que queiram iniciar o acompanhamento psicológico de modo responsável e ético.

Possuo capacitação em Avaliação de Transtornos Alimentares e Avaliação Psicológica para Cirurgia Bariátrica. Durante a graduação, pesquisei sobre dança, com enfoque no balé clássico e em suas cobranças relacionadas ao desempenho, ao comportamento alimentar, à autoimagem e à perfeição.

Considero-me uma psicóloga sensível e criativa, tendo minhas vivências artísticas como uma parte importante da minha personalidade. Para mim, autoconhecimento e autoestima caminham juntos e estão diretamente ligados aos relacionamentos que cultivamos, sejam estes de qualquer natureza.

## 3. Como funciona a Gestalt-terapia? — capítulo Abordagem/Processo

Realizo meus atendimentos utilizando a Gestalt-terapia como abordagem e acredito em um acompanhamento humano, individualizado e que respeite as singularidades de cada pessoa, acolhendo suas histórias e vivências.

A Gestalt-terapia é uma abordagem psicoterapêutica que valoriza a experiência vivida no momento presente. Seu foco está na ampliação da consciência sobre pensamentos, emoções, sensações corporais e formas de se relacionar. Compreende o indivíduo de maneira integrada, considerando a interação contínua entre pessoa e ambiente. O processo terapêutico busca favorecer a autonomia, a responsabilidade e o contato autêntico. Para isso, utiliza o diálogo e experimentos que promovem novas formas de perceber e enfrentar as dificuldades.

## 4. Meus serviços como psicóloga — capítulo Atendimentos

### Psicoterapia Presencial

Atendimentos em Belém/PA, na CLIPSI Saúde Belém, no bairro da Pedreira.

Botão: Entre em contato!

### Psicoterapia Online

Atendimentos via Google Meet, para brasileiros em qualquer localidade!

Botão: Entre em contato!

### Avaliação Psicológica

Processo de avaliação psicológica para pré e pós-operatório de cirurgia bariátrica.

Botão: Entre em contato!

## 5. Vamos agendar a sua primeira sessão? — capítulo Contato

Botão principal: Entre em contato!

## 6. Frase de encerramento

“Estar no ‘aqui e agora’ é unir a nossa atenção e a nossa consciência.”

— Fritz Perls


---

## Anexo — arquivos da implementação aprovada

### package.json

```json
{
  "name": "alice-vieira",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite --host 0.0.0.0",
    "build": "tsc --noEmit && vite build",
    "test": "vitest run"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@playwright/test": "^1.64.1",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "typescript": "~5.9.0",
    "vite": "^8.3.4",
    "vitest": "^5.0.5"
  }
}

```

### tsconfig.json

```json
{"compilerOptions":{"target":"ES2022","lib":["ES2022","DOM","DOM.Iterable"],"module":"ESNext","moduleResolution":"Bundler","jsx":"react-jsx","strict":true,"noEmit":true,"skipLibCheck":true,"allowImportingTsExtensions":true},"include":["src"]}
```

### index.html

```html
<!doctype html><html lang="pt-BR"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/><meta name="theme-color" content="#183c60"/><meta name="description" content="Alice Vieira, psicóloga clínica CRP 10/12527. Psicoterapia para adolescentes e adultos em Belém e online, com abordagem Gestalt-terapia."/><title>Alice Vieira | Psicóloga em Belém e online</title></head><body><div id="root"></div><script type="module" src="/src/main.tsx"></script></body></html>
```

### src/main.tsx

```tsx
import React from 'react'; import {createRoot} from 'react-dom/client'; import App from './App'; import './styles.css'; createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
```

### src/content.ts

```typescript
export const content = {
  "name": "Alice Vieira",
  "identification": "Psicóloga Clínica · CRP 10/12527",
  "phone": "5591982336647",
  "instagram": "https://www.instagram.com/psialicevc/",
  "bio": [
    "Sou psicóloga clínica (CRP 10/12527), formada pela Universidade Federal do Pará e pós-graduanda em Avaliação Psicológica e Psicodiagnóstico.",
    "Tenho como objetivo te auxiliar em demandas voltadas ao autoconhecimento, à autoestima e aos relacionamentos, estando aberta a escutar adolescentes e adultos que queiram iniciar o acompanhamento psicológico de modo responsável e ético.",
    "Possuo capacitação em Avaliação de Transtornos Alimentares e Avaliação Psicológica para Cirurgia Bariátrica. Durante a graduação, pesquisei sobre dança, com enfoque no balé clássico e em suas cobranças relacionadas ao desempenho, ao comportamento alimentar, à autoimagem e à perfeição.",
    "Considero-me uma psicóloga sensível e criativa, tendo minhas vivências artísticas como uma parte importante da minha personalidade. Para mim, autoconhecimento e autoestima caminham juntos e estão diretamente ligados aos relacionamentos que cultivamos, sejam estes de qualquer natureza."
  ],
  "approach": [
    "Realizo meus atendimentos utilizando a Gestalt-terapia como abordagem e acredito em um acompanhamento humano, individualizado e que respeite as singularidades de cada pessoa, acolhendo suas histórias e vivências.",
    "A Gestalt-terapia é uma abordagem psicoterapêutica que valoriza a experiência vivida no momento presente. Seu foco está na ampliação da consciência sobre pensamentos, emoções, sensações corporais e formas de se relacionar. Compreende o indivíduo de maneira integrada, considerando a interação contínua entre pessoa e ambiente. O processo terapêutico busca favorecer a autonomia, a responsabilidade e o contato autêntico. Para isso, utiliza o diálogo e experimentos que promovem novas formas de perceber e enfrentar as dificuldades."
  ],
  "quote": "“Estar no ‘aqui e agora’ é unir a nossa atenção e a nossa consciência.”",
  "services": [
    {
      "title": "Psicoterapia Presencial",
      "description": "Atendimentos em Belém/PA, na CLIPSI Saúde Belém, no bairro da Pedreira.",
      "tag": "Belém, PA",
      "icon": "place"
    },
    {
      "title": "Psicoterapia Online",
      "description": "Atendimentos via Google Meet, para brasileiros em qualquer localidade!",
      "tag": "Onde você estiver",
      "icon": "screen"
    },
    {
      "title": "Avaliação Psicológica",
      "description": "Processo de avaliação psicológica para pré e pós-operatório de cirurgia bariátrica.",
      "tag": "Cuidado em cada etapa",
      "icon": "leaf"
    }
  ]
} as const;
export function whatsapp(evaluation = false) { return 'https://wa.me/'+content.phone+'?text='+encodeURIComponent(evaluation ? 'Olá, Alice! Gostaria de informações sobre o processo de avaliação psicológica para cirurgia bariátrica.' : 'Olá, Alice! Gostaria de informações sobre atendimento.'); }
```

### src/App.tsx

```tsx
import React, { useRef, useState } from 'react';
import ChapterTransition from './ChapterTransition';
import { useScrollMotion } from './useScrollMotion';
import { content, whatsapp } from './content';
function Star({className=''}:{className?:string}) {return <span className={'star '+className} aria-hidden="true">✧</span>}
function Icon({kind}:{kind:string}) {return <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">{kind==='place'? <><path d="M50 83S23 57 23 35a27 27 0 0 1 54 0c0 22-27 48-27 48Z"/><circle cx="50" cy="35" r="10"/><path d="m19 74-8 13h78l-8-13"/></>:kind==='screen'?<><rect x="10" y="17" width="80" height="55" rx="3"/><path d="M40 72v12m20-12v12M29 84h42"/><path d="M43 39c-8-12-21 2 7 19 28-17 15-31 7-19l-7 7Z"/></>:<><path d="M29 86C35 54 70 49 73 15 37 15 14 44 37 65m0 0 28-35M44 57c19 4 35-7 41-20"/><path d="M23 23v14m-7-7h14M79 73v14m-7-7h14"/></>}</svg>}
function CTA({evaluation=false,label='Entre em contato!',light=false}:{evaluation?:boolean;label?:string;light?:boolean}) {return <a className={'button '+(light?'button-light':'')} href={whatsapp(evaluation)} target="_blank" rel="noopener noreferrer">{label}<span aria-hidden="true">↗</span></a>}
function SectionLabel({number,children}:{number:string;children:React.ReactNode}) {return <p className="section-label"><span>{number} / 05</span>{children}</p>}
export default function App(){
 const [menu,setMenu]=useState(false); const [flipped,setFlipped]=useState(false); const root=useRef<HTMLDivElement>(null);
 const manualCard=useRef(false); const [cardManual,setCardManual]=useState(false);
 useScrollMotion(root,manualCard,setFlipped);
 return <div ref={root}><a className="skip" href="#conteudo">Pular para o conteúdo</a>
 <header className="header"><a className="brand" href="#inicio">Alice Vieira<span>PSICOLOGIA</span></a><button className="menu-toggle" aria-expanded={menu} aria-controls="navigation" onClick={()=>setMenu(!menu)}>{menu?'Fechar ×':'Menu ☰'}</button><nav id="navigation" className={menu?'open':''} aria-label="Navegação principal">{[['sobre','Sobre mim'],['atendimentos','Atendimentos'],['processo','A abordagem'],['duvidas','Dúvidas']].map(([id,label])=><a key={id} href={'#'+id} onClick={()=>setMenu(false)}>{label}</a>)}<a className="nav-contact" href="#contato" onClick={()=>setMenu(false)}>Vamos conversar <span aria-hidden="true">↗</span></a></nav></header>
 <main id="conteudo"><section id="inicio" className="hero" data-scene><div className="hero-decoration" aria-hidden="true"><div className="orb"/><div className="paper paper-one"/><div className="paper paper-two"/><div className="paper paper-three"/><div className="botanical">❋</div></div><div className="hero-content"><div className="hero-kicker"><span/> UM ENCONTRO COM VOCÊ <span/></div><Star/><h1>{content.name}</h1><p className="identification">{content.identification}</p><div className="fine-line"/><p className="hero-title">Um espaço para se escutar<br/>e compreender suas relações.</p><p className="hero-description">Psicoterapia para adolescentes e adultos.<br/>Um olhar sensível à sua história e à sua singularidade.</p><CTA light label="Conversar sobre atendimento"/><p className="location">PRESENCIAL EM BELÉM <span>✧</span> ONLINE</p></div><a className="scroll-cue" href="#sobre">A sua história merece espaço <span aria-hidden="true">↓</span></a><div className="tear" aria-hidden="true"/></section>
 <ChapterTransition number="02" title="Um pouco sobre mim" from="#183c60" to="#f7f3ea"/><section id="sobre" className="about section" data-scene><div className="container"><SectionLabel number="02">PRAZER, ALICE</SectionLabel><div className="about-grid"><div className="portrait-column"><div className={'postcard '+(flipped?'flipped ':'')+(cardManual?'manual':'')}><div className="postcard-inner"><div className="postcard-front" aria-hidden={flipped}><img src="/alice-vieira-foto.jpg" width="1600" height="1200" alt="Alice Vieira sorrindo em um ambiente ao ar livre" loading="lazy"/><div className="photo-caption">Um olhar sensível. Uma escuta presente.<Star/></div></div><div className="postcard-back" aria-hidden={!flipped}><Star/><p>Alice Vieira</p><span>Psicóloga Clínica<br/>CRP 10/12527</span><div className="postmark" aria-hidden="true">BELÉM · PA<br/>COM PRESENÇA</div></div></div></div><button className="flip-button" onClick={()=>{manualCard.current=true;setCardManual(true);setFlipped(!flipped)}} aria-pressed={flipped}>↻ {flipped?'Ver o retrato':'Vire este cartão'}</button><p className="handwritten">Cada história, um universo.</p></div><div className="editorial"><h2>Um pouco<br/><em>sobre mim</em><Star/></h2>{content.bio.map(p=><p key={p}>{p}</p>)}<div className="themes"><span>Autoconhecimento</span><span>Autoestima</span><span>Relacionamentos</span></div></div></div></div></section>
 <ChapterTransition number="03" title="Possibilidades de cuidado" from="#f7f3ea" to="#dce8ef"/><section id="atendimentos" className="services section" data-scene><div className="tear top-tear" aria-hidden="true"/><div className="container"><SectionLabel number="03">POSSIBILIDADES DE CUIDADO</SectionLabel><div className="section-heading"><h2>Meus serviços<br/><em>como psicóloga</em></h2><p>Diferentes formas de encontro.<br/>O mesmo cuidado com a sua história.</p></div><div className="polaroids">{content.services.map((s,i)=><article className={'polaroid card-'+i} key={s.title}><div className="service-art"><span className="card-number">0{i+1}</span><Icon kind={s.icon}/><span className="art-caption">{s.tag}</span><Star/></div><h3>{s.title}</h3><p>{s.description}</p><CTA evaluation={i===2}/></article>)}</div></div><div className="tear" aria-hidden="true"/></section>
 <ChapterTransition number="04" title="Aqui. Agora. Com você." from="#dce8ef" to="#f7f3ea"/><section id="processo" className="process section" data-scene><div className="container"><SectionLabel number="04">PRESENÇA & POSSIBILIDADES</SectionLabel><div className="process-grid"><div><h2>Como funciona<br/>a <em>Gestalt-terapia?</em></h2><div className="route"><svg viewBox="0 0 300 420" aria-hidden="true"><path className="route-guide" d="M40 30C310 0 260 170 100 180S-30 340 240 380"/><path className="route-draw" pathLength="1" d="M40 30C310 0 260 170 100 180S-30 340 240 380"/></svg>{[['Primeiro contato','Um espaço para suas dúvidas.'],['Construir o encontro','Conversar sobre modalidade e horários.'],['Iniciar o acompanhamento','Acolher sua história, no seu tempo.']].map(([title,desc],i)=><div className={'route-step step-'+i} key={title}><span>0{i+1}</span><div><h3>{title}</h3><p>{desc}</p></div></div>)}</div></div><div className="approach-copy"><Star/><p className="small-heading">UM OLHAR PARA O AQUI E AGORA</p>{content.approach.map(p=><p key={p}>{p}</p>)}<p className="handwritten">Estar presente também é se cuidar.</p></div></div></div></section>
 <ChapterTransition number="05" title="Vamos conversar?" from="#f7f3ea" to="#e9eee9"/><section id="contato" className="contact section" data-scene><div className="tear top-tear" aria-hidden="true"/><div className="container"><SectionLabel number="05">UM CONVITE AO ENCONTRO</SectionLabel><div className="contact-postcard"><div><p className="small-heading">PARA: VOCÊ</p><h2>Vamos agendar a sua<br/><em>primeira sessão?</em></h2><CTA/><p className="contact-note">O primeiro passo pode ser uma conversa.</p></div><div className="contact-mark"><div className="stamp"><Star/><span>COM ESCUTA<br/>& PRESENÇA</span></div><p className="handwritten">Sua história<br/>é bem-vinda aqui.</p><span className="postcard-lines" aria-hidden="true"/></div></div><div id="duvidas" className="faq"><div><p className="small-heading">ANTES DE COMEÇAR</p><h2>Talvez você<br/><em>queira saber...</em></h2></div><div>{[['Para quem é a psicoterapia?','O atendimento é voltado a adolescentes e adultos.'],['Onde acontecem os encontros presenciais?','Na CLIPSI Saúde Belém, no bairro da Pedreira, em Belém/PA.'],['Como funciona o atendimento online?','Os atendimentos acontecem via Google Meet, para brasileiros em qualquer localidade.'],['Como posso saber mais sobre o atendimento?','Entre em contato pelo WhatsApp para conversar sobre o atendimento e tirar suas dúvidas. O contato não confirma um agendamento.']].map(([q,a])=><details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></div><blockquote><Star/><p>{content.quote}</p><cite>— Fritz Perls</cite></blockquote></div></section></main><footer><div className="container footer-inner"><div><a className="footer-name" href="#inicio">Alice Vieira</a><p>{content.identification}</p></div><div className="footer-links"><a href={content.instagram} target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href={whatsapp()} target="_blank" rel="noopener noreferrer">WhatsApp ↗</a><a href="#inicio">Voltar ao início ↑</a></div></div><div className="tile-border" aria-hidden="true"/></footer></div>
}

```

### src/ChapterTransition.tsx

```tsx
import React from 'react';
type Props = {number:string;title:string;from:string;to:string;dark?:boolean};
/** Cenário decorativo independente: nunca recorta texto ou recebe foco. */
export default function ChapterTransition({number,title,from,to,dark=false}:Props){
 return <div className="chapter-transition" data-tear-scene aria-hidden="true" style={{'--sheet-color':from,'--reveal-color':to,'--reveal-ink':dark?'#f7f3ea':'#183c60'} as React.CSSProperties}>
 <div className="tear-stage"><div className="tear-underlay"><span className="transition-orbit"/><span className="transition-number">{number} / 05</span><span className="transition-star">✧</span><span className="transition-title">{title}</span><span className="transition-line"/><span className="transition-note">CADA HISTÓRIA, UM NOVO ENCONTRO</span></div><div className="tear-sheet tear-sheet-top"><span className="sheet-ring"/><span className="sheet-label">ALICE VIEIRA <span>·</span> PSICOLOGIA</span><span className="sheet-flower">❋</span></div><div className="tear-sheet tear-sheet-bottom"><span className="sheet-instruction">CONTINUE ROLANDO <span>↓</span></span><span className="sheet-flower">✧</span></div><div className="tear-thread"/></div>
 </div>
}

```

### src/useScrollMotion.ts

```typescript
import { useEffect, type RefObject } from 'react';
const clamp = (value:number) => Math.max(0,Math.min(1,value));
const smooth = (value:number) => { const p=clamp(value); return p*p*(3-2*p); };
export function useScrollMotion(root:RefObject<HTMLDivElement|null>, manualCard:RefObject<boolean>, onCardFlip:(flipped:boolean)=>void){
 useEffect(()=>{
 const media=matchMedia('(prefers-reduced-motion: reduce)');let frame=0;
 const update=()=>{frame=0;const node=root.current;if(!node)return;const height=innerHeight;const reduced=media.matches;
 node.querySelectorAll<HTMLElement>('[data-scene]').forEach(el=>{const r=el.getBoundingClientRect();el.style.setProperty('--progress',String(reduced?.5:clamp((height-r.top)/(height+r.height))));});
 node.querySelectorAll<HTMLElement>('[data-tear-scene]').forEach(el=>{const r=el.getBoundingClientRect();const p=reduced?1:smooth(-r.top/Math.max(1,r.height-height));el.style.setProperty('--open',String(p));});
 const card=node.querySelector<HTMLElement>('.postcard');if(card){const p=reduced?0:smooth((height*.65-card.getBoundingClientRect().top)/(height*.65));card.style.setProperty('--flip',String(p));if(!manualCard.current)onCardFlip(p>.5);}
 const cards=node.querySelector<HTMLElement>('.polaroids');if(cards){const r=cards.getBoundingClientRect();const p=reduced?1:smooth((height*.95-r.top)/(height*.55));cards.style.setProperty('--spread',String(p));cards.querySelectorAll<HTMLElement>('.polaroid').forEach(el=>{const x=innerWidth>700?cards.clientWidth/2-el.offsetLeft-el.offsetWidth/2:0;el.style.setProperty('--stack-x',x+'px');});}
 const route=node.querySelector<HTMLElement>('.route');if(route){const r=route.getBoundingClientRect();route.style.setProperty('--draw',String(reduced?1:clamp((height*.85-r.top)/(height*.85))));}
 };
 const tick=()=>{if(!frame)frame=requestAnimationFrame(update);};update();addEventListener('scroll',tick,{passive:true});addEventListener('resize',tick);media.addEventListener('change',tick);
 return()=>{removeEventListener('scroll',tick);removeEventListener('resize',tick);media.removeEventListener('change',tick);cancelAnimationFrame(frame);};
 },[root,manualCard,onCardFlip]);
}

```

### src/styles.css

```css
:root{--cream:#f7f3ea;--surface:#fffdf8;--blue:#183c60;--ink:#243746;--muted:#4d6474;--soft:#dce8ef;--gold:#b49150;--border:#c7d4db;font-family:Arial,Helvetica,sans-serif;color:var(--ink);background:var(--cream);font-synthesis:none;font-size:18px}*{box-sizing:border-box}html{scroll-behavior:smooth;scroll-padding-top:110px}body{margin:0}button,a{-webkit-tap-highlight-color:transparent}a{color:inherit}button{font:inherit}button,a,summary{touch-action:manipulation}a:focus-visible,button:focus-visible,summary:focus-visible{outline:3px solid #9e6322;outline-offset:5px}button{cursor:pointer}h1,h2,h3,p{margin-top:0}h1,h2,h3,.brand,.footer-name{font-family:Georgia,'Times New Roman',serif;font-weight:400}p{line-height:1.75}h2{font-size:clamp(2.4rem,4vw,3.7rem);line-height:1.13;letter-spacing:-.045em;margin-bottom:34px}h2 em{font-weight:400;color:var(--blue)}h3{font-size:1.5rem;line-height:1.3}em{font-family:Georgia,'Times New Roman',serif}.container{width:min(1160px,calc(100% - 96px));margin:auto}.section{padding:110px 0;position:relative;scroll-margin-top:20px}.header{position:absolute;top:0;left:0;right:0;z-index:10;display:flex;align-items:center;justify-content:space-between;color:var(--cream);padding:27px 48px;border-bottom:1px solid #ffffff26}.brand{text-decoration:none;font-size:1.7rem;line-height:1.05;letter-spacing:-.04em}.brand span{display:block;font-family:Arial,sans-serif;font-size:.52rem;letter-spacing:.32em;margin-top:9px}nav{display:flex;align-items:center;gap:30px;font-size:.78rem}nav a{text-decoration:none;min-height:44px;display:flex;align-items:center}nav a:hover{text-decoration:underline;text-underline-offset:6px}.nav-contact{border:1px solid #ffffff70;border-radius:2px;padding:0 18px;gap:18px}.menu-toggle{display:none}.skip{position:fixed;top:-100px;left:15px;padding:15px;background:var(--surface);color:var(--blue);z-index:100}.skip:focus{top:15px}.hero{background:var(--blue);color:var(--cream);position:relative;min-height:900px;min-height:max(850px,100svh);display:flex;align-items:center;justify-content:center;padding:155px 24px 140px;isolation:isolate}.hero-content{text-align:center;position:relative;z-index:2}.hero-kicker{display:flex;justify-content:center;gap:18px;align-items:center;font-size:.65rem;letter-spacing:.25em;margin-bottom:21px}.hero-kicker span{width:36px;height:1px;background:#c4cfd48c}.star{font-family:Georgia,serif;font-size:2rem;line-height:1;color:var(--gold);display:inline-block}.hero-content>.star{font-size:2.7rem;color:#d1b77f;margin-bottom:15px}h1{font-size:clamp(4rem,8.2vw,7.2rem);letter-spacing:-.06em;line-height:1;margin:0 0 18px}.identification{font-size:.82rem;letter-spacing:.08em}.fine-line{height:1px;width:64px;background:#b49150;margin:28px auto}.hero-title{font-family:Georgia,serif;font-size:clamp(1.5rem,2.4vw,2rem);line-height:1.4;margin-bottom:17px;letter-spacing:-.015em}.hero-description{font-size:.9rem;color:#dce8ef;line-height:1.7;margin-bottom:28px}.button{display:inline-flex;align-items:center;justify-content:space-between;gap:32px;background:var(--blue);color:var(--surface);padding:15px 23px;min-height:50px;text-decoration:none;font-size:.82rem;line-height:1.4;border:1px solid transparent;border-radius:2px;transition:background .2s,box-shadow .2s}.button span{font-size:1.25rem}.button:hover{background:#28577c;box-shadow:0 4px 12px #183c6020}.button-light{background:var(--cream);color:var(--blue)}.button-light:hover{background:#dce8ef}.location{font-size:.58rem;letter-spacing:.16em;margin:23px 0 0}.location span{padding:0 13px;color:#d1b77f}.hero-decoration{position:absolute;inset:0;overflow:hidden;z-index:-1;pointer-events:none}.orb{position:absolute;border:1px solid #dce8ef18;border-radius:50%;width:740px;height:740px;left:50%;top:47%;transform:translate(-50%,-50%)}.orb:after{content:'';position:absolute;inset:28px;border:1px dashed #dce8ef12;border-radius:50%}.paper{position:absolute;bottom:-40px;width:75%;height:35%;clip-path:polygon(0 34%,5% 39%,9% 32%,14% 40%,18% 35%,23% 46%,27% 42%,32% 50%,38% 46%,44% 56%,49% 50%,54% 62%,61% 56%,68% 67%,73% 60%,79% 70%,85% 64%,91% 73%,100% 69%,100% 100%,0 100%);transform:translateY(calc((var(--progress,.5) - .5)*100px))}.paper-one{background:#65849a;left:-20%;height:45%;transform:rotate(12deg) translateY(calc((var(--progress,.5) - .5)*140px))}.paper-two{background:#a6bdca;right:-23%;height:37%;transform:rotate(-20deg) translateY(calc((var(--progress,.5) - .5)*-90px))}.paper-three{background:#dce8ef;left:-17%;bottom:-14%;height:41%;transform:rotate(4deg)}.botanical{position:absolute;right:4%;bottom:14%;font-size:12rem;color:#dce8ef29;transform:rotate(calc(var(--progress,.5)*35deg))}.scroll-cue{position:absolute;bottom:53px;text-align:center;font-size:.64rem;letter-spacing:.06em;text-decoration:none;z-index:3;display:grid;gap:12px;min-height:44px}.scroll-cue span{font-size:1.3rem}.tear{position:absolute;left:0;right:0;bottom:-1px;height:28px;background:var(--cream);clip-path:polygon(0 48%,2% 62%,4% 39%,6% 58%,8% 42%,10% 70%,12% 45%,14% 62%,16% 40%,18% 54%,20% 35%,23% 60%,25% 42%,27% 65%,30% 40%,33% 56%,35% 35%,37% 61%,40% 41%,43% 62%,45% 39%,48% 57%,50% 37%,52% 62%,55% 43%,58% 68%,60% 39%,63% 57%,65% 40%,68% 65%,70% 38%,73% 60%,76% 41%,79% 67%,82% 40%,85% 58%,88% 36%,90% 64%,93% 41%,96% 62%,98% 40%,100% 55%,100% 100%,0 100%);pointer-events:none}.section-label{display:flex;align-items:center;gap:20px;font-size:.62rem;letter-spacing:.18em;margin-bottom:54px}.section-label>span{color:var(--muted);letter-spacing:.08em;padding-right:20px;border-right:1px solid var(--border)}.about-grid{display:grid;grid-template-columns: .95fr 1.05fr;gap:90px;align-items:start}.portrait-column{padding-top:50px}.postcard{perspective:1500px;transform:rotate(calc(-5deg + var(--progress,.5)*6deg));width:100%;aspect-ratio:1.15}.postcard-inner{position:relative;width:100%;height:100%;transform-style:preserve-3d;transition:transform .9s cubic-bezier(.2,.7,.2,1)}.postcard.flipped .postcard-inner{transform:rotateY(180deg)}.postcard-front,.postcard-back{position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden;background:var(--surface);padding:15px;box-shadow:0 12px 35px #24374618;border:1px solid #e6e1d6}.postcard-front img{width:100%;height:auto;aspect-ratio:4/3;object-fit:cover;display:block}.photo-caption{font:italic 1rem Georgia,serif;display:flex;align-items:center;justify-content:space-between;padding:20px 5px 7px;gap:8px}.postcard-back{transform:rotateY(180deg);display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center;background:var(--soft)}.postcard-back p{font:2.4rem Georgia,serif;margin:20px 0}.postcard-back>span{line-height:1.8}.postmark{position:absolute;right:13px;top:15px;border:1px solid var(--blue);border-radius:50%;font-size:.5rem;padding:15px 7px;transform:rotate(-16deg)}.flip-button{display:block;margin:26px auto 0;border:0;background:transparent;color:var(--blue);font-size:.72rem;min-height:44px;text-decoration:underline;text-underline-offset:5px}.handwritten{font:italic 1.5rem/1.5 Georgia,serif;color:var(--blue)}.portrait-column>.handwritten{text-align:center;margin:40px 0;transform:rotate(-4deg)}.editorial h2{position:relative}.editorial h2 .star{margin-left:28px;vertical-align:top}.editorial p{font-size:.9rem}.themes{display:flex;flex-wrap:wrap;gap:8px;margin-top:28px}.themes span{padding:9px 13px;border:1px solid var(--border);border-radius:30px;font-size:.64rem}.services{background:var(--soft);padding-top:120px;padding-bottom:135px}.top-tear{top:-1px;bottom:auto;transform:rotate(180deg)}.section-heading{display:flex;align-items:end;justify-content:space-between;gap:30px;margin-bottom:45px}.section-heading h2{margin-bottom:0}.section-heading>p{font-size:.86rem;line-height:1.7;color:var(--muted)}.polaroids{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;padding:25px 0}.polaroid{padding:16px 16px 22px;background:var(--surface);box-shadow:0 8px 20px #183c6012;display:flex;flex-direction:column;transform:rotate(calc(var(--rotation)*1deg + (var(--progress,.5) - .5)*8deg));transform-origin:50% 80%}.card-0{--rotation:-4}.card-1{--rotation:2;translate:0 18px}.card-2{--rotation:-2}.service-art{height:215px;background:#e3e7df;position:relative;display:flex;align-items:center;justify-content:center;margin-bottom:25px;color:var(--blue);overflow:hidden}.card-1 .service-art{background:#e4eaf0}.card-2 .service-art{background:#ede7da}.service-art>svg{width:110px;height:110px}.card-number{position:absolute;left:15px;top:13px;font:italic .9rem Georgia,serif}.art-caption{position:absolute;bottom:15px;font-size:.56rem;text-transform:uppercase;letter-spacing:.16em}.service-art>.star{position:absolute;right:18px;top:18px}.polaroid h3{font-size:1.35rem;margin-bottom:15px;padding:0 6px}.polaroid>p{font-size:.82rem;margin-bottom:25px;padding:0 6px;flex:1}.polaroid .button{width:100%;background:transparent;color:var(--blue);border-top:1px solid var(--border);padding:13px 6px 0;min-height:48px}.polaroid .button:hover{box-shadow:none;text-decoration:underline}.process-grid{display:grid;grid-template-columns:1fr 1fr;gap:100px}.approach-copy{padding-top:30px}.approach-copy>.star{font-size:3rem;margin-bottom:25px}.small-heading{font-size:.61rem;letter-spacing:.16em;line-height:1.8}.approach-copy>p:not(.small-heading):not(.handwritten){font-size:.93rem}.approach-copy>.handwritten{margin-top:33px;font-size:1.25rem}.route{position:relative;height:440px;margin-top:45px}.route>svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}.route>svg path{fill:none;stroke:var(--gold);stroke-width:1.3;stroke-dasharray:5 7;stroke-dashoffset:calc(var(--progress,.5)*-100);opacity:.8}.route-step{position:absolute;display:flex;gap:16px;align-items:start;background:var(--cream);padding:10px 8px}.route-step>span{border:1px solid var(--gold);width:35px;height:35px;border-radius:50%;display:grid;place-items:center;font-size:.65rem;flex-shrink:0}.route-step h3{font-size:1.15rem;margin:4px 0 6px}.route-step p{font-size:.7rem;margin:0;line-height:1.5}.step-0{top:0;left:0}.step-1{top:170px;right:0}.step-2{top:340px;left:5px}.contact{background:#e9eee9;padding-bottom:70px}.contact-postcard{background:var(--surface);border:1px solid #d5dbd4;padding:55px 60px;box-shadow:0 8px 25px #24374608;display:grid;grid-template-columns:1.5fr 1fr;gap:45px;transform:rotate(calc((var(--progress,.5) - .5)*2deg))}.contact-postcard h2{font-size:clamp(2rem,3.4vw,3.1rem)}.contact-note{font-size:.72rem;color:var(--muted);margin:17px 0 0}.contact-mark{border-left:1px solid #d5dbd4;padding-left:50px;position:relative}.stamp{width:108px;padding:13px 10px;text-align:center;border:4px double var(--blue);margin:0 0 22px auto;transform:rotate(9deg);background:var(--soft)}.stamp .star{font-size:2.2rem}.stamp span:last-child{font-size:.45rem;letter-spacing:.1em;display:block;line-height:1.8}.contact-mark>.handwritten{font-size:1.6rem;transform:rotate(-5deg);margin-top:30px}.postcard-lines{display:block;height:50px;background:repeating-linear-gradient(transparent 0 23px,#c7d4db 23px 24px)}.faq{display:grid;grid-template-columns:1fr 1.3fr;gap:80px;padding-top:100px;scroll-margin-top:45px}.faq h2{font-size:2.7rem}.faq details{border-bottom:1px solid #bdc9c4}.faq summary{list-style:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:20px;min-height:74px;font-size:.83rem;padding:20px 0}.faq summary::-webkit-details-marker{display:none}.faq summary span{font-size:1.3rem;color:var(--blue)}.faq details[open] summary span{transform:rotate(45deg)}.faq details>p{font-size:.82rem;margin:0 30px 24px 0}blockquote{text-align:center;max-width:680px;margin:95px auto 0}blockquote>.star{margin-bottom:22px}blockquote p{font:italic clamp(1.3rem,2.3vw,1.8rem)/1.5 Georgia,serif;color:var(--blue);margin-bottom:20px}blockquote cite{font-size:.65rem;font-style:normal;letter-spacing:.07em}footer{background:var(--blue);color:var(--cream)}.footer-inner{display:flex;justify-content:space-between;align-items:center;padding:48px 0;gap:30px}.footer-name{font-size:2rem;text-decoration:none;letter-spacing:-.04em}footer p{font-size:.67rem;margin:10px 0 0;color:var(--soft)}.footer-links{display:flex;gap:25px;font-size:.73rem}.footer-links a{display:flex;align-items:center;min-height:44px;text-decoration:none}.footer-links a:hover{text-decoration:underline}.tile-border{height:22px;background-color:#dce8ef;background-image:radial-gradient(circle at 50% 50%,#183c60 2px,transparent 3px),repeating-conic-gradient(from 45deg,#183c60 0 25%,transparent 0 50%);background-size:22px 22px;opacity:.8}
@media(min-width:1500px){.hero{max-height:1150px;min-height:950px}}@media(max-width:1000px){.header{padding:24px 30px}nav{gap:19px;font-size:.7rem}.container{width:calc(100% - 64px)}.about-grid{gap:40px;grid-template-columns:1fr 1fr}.process-grid{gap:45px}.polaroids{gap:18px}.polaroid{padding:12px}.polaroid h3{font-size:1.2rem}.service-art{height:180px}.photo-caption{font-size:.8rem;padding-top:14px}.contact-postcard{padding:40px;gap:30px}.contact-mark{padding-left:30px}.faq{gap:40px}.section{padding-top:85px;padding-bottom:85px}}
@media(max-width:700px){:root{font-size:16px}.container{width:calc(100% - 40px)}.header{padding:20px;align-items:center}.brand{font-size:1.65rem}.menu-toggle{display:block;border:1px solid #ffffff80;background:transparent;color:var(--cream);padding:10px 13px;min-height:44px;font-size:.8rem}nav{display:none;position:absolute;top:91px;left:0;right:0;padding:20px;background:var(--blue);border-bottom:1px solid #ffffff60}nav.open{display:flex;align-items:stretch;flex-direction:column;gap:6px;font-size:1rem}nav a{padding:8px 12px}.nav-contact{margin-top:10px;justify-content:space-between}.hero{min-height:860px;min-height:max(800px,100svh);padding:145px 20px 150px}.hero-kicker{font-size:.58rem;gap:12px;letter-spacing:.2em}.hero-kicker span{width:20px}h1{font-size:4.15rem}.identification{font-size:.77rem;letter-spacing:.02em}.hero-title{font-size:1.65rem}.hero-description{font-size:1rem}.button{font-size:.9rem;padding:15px 20px;gap:24px}.location{font-size:.58rem}.orb{width:580px;height:580px}.paper-one{left:-40%;width:100%;height:31%}.paper-two{right:-40%;width:110%;height:28%}.paper-three{left:-60%;width:130%;height:30%}.botanical{font-size:8rem;right:-30px;bottom:8%}.scroll-cue{bottom:55px;font-size:.67rem}.section{padding:70px 0}.section-label{font-size:.6rem;letter-spacing:.12em;gap:14px;margin-bottom:35px}.section-label>span{padding-right:14px}h2{font-size:2.8rem;margin-bottom:28px}.about-grid,.process-grid{grid-template-columns:1fr;gap:30px}.portrait-column{padding:10px 10px 0;max-width:480px;margin:auto;width:100%}.postcard{aspect-ratio:1.1}.photo-caption{font-size:.9rem;padding-top:20px}.portrait-column>.handwritten{margin:20px 0 10px;font-size:1.3rem}.flip-button{margin-top:16px;font-size:.8rem}.editorial p{font-size:1rem}.themes span{font-size:.72rem}.section-heading{display:block;margin-bottom:30px}.section-heading>p{margin:20px 0 0;font-size:1rem}.polaroids{grid-template-columns:1fr;gap:40px;padding:20px 10px 10px;max-width:440px;margin:auto}.polaroid{padding:16px 16px 20px;transform:rotate(calc(var(--rotation)*.5deg + (var(--progress,.5) - .5)*4deg))}.card-1{translate:none}.service-art{height:220px}.polaroid h3{font-size:1.65rem}.polaroid>p{font-size:1rem}.polaroid .button{font-size:1rem}.approach-copy{padding-top:0}.approach-copy>p:not(.small-heading):not(.handwritten){font-size:1rem}.route{height:390px;max-width:380px;margin:30px auto 0}.step-1{top:145px}.step-2{top:290px}.route-step h3{font-size:1.3rem}.route-step p{font-size:.85rem}.route-step>span{font-size:.75rem}.contact-postcard{padding:28px 24px;grid-template-columns:1fr;gap:28px}.contact-postcard h2{font-size:2.4rem}.contact-mark{border-left:0;border-top:1px solid var(--border);padding:25px 0 0;display:flex;align-items:center;gap:20px;justify-content:space-between}.stamp{order:1;margin:0;flex-shrink:0;width:90px}.stamp span:last-child{font-size:.5rem}.contact-mark>.handwritten{font-size:1.3rem;margin:0}.postcard-lines{display:none}.contact-note{font-size:.85rem}.faq{grid-template-columns:1fr;gap:5px;padding-top:70px}.faq h2{font-size:2.6rem}.faq summary{font-size:1rem;min-height:74px}.faq details>p{font-size:1rem}.small-heading{font-size:.66rem}.footer-inner{display:block;padding:35px 0}.footer-links{gap:22px;margin-top:25px;font-size:.78rem;flex-wrap:wrap}footer p{font-size:.8rem}blockquote{margin-top:65px}blockquote cite{font-size:.8rem}.postcard-back p{font-size:2.2rem}}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*,*:before,*:after{animation:none!important;transition:none!important}.paper,.botanical,.postcard,.polaroid,.contact-postcard{transform:none!important}.postcard.flipped .postcard-inner{transform:rotateY(180deg)}.route>svg path{stroke-dashoffset:0}}

/* Corpo de texto com mínimo de 16px em todas as telas. */
.polaroid>p,.faq details>p{font-size:max(16px,.9rem)}

/* Coreografia própria: o papel se abre em uma cena decorativa, separada do conteúdo. */
.chapter-transition{height:180svh;position:relative;background:var(--reveal-color);overflow:clip;--open:1;color:var(--reveal-ink);isolation:isolate}
.tear-stage{position:sticky;top:0;height:100svh;min-height:400px;overflow:hidden;perspective:1400px}
.tear-underlay{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:30px;transform:scale(calc(.87 + var(--open)*.13));}
.transition-number{font-size:.7rem;letter-spacing:.22em;margin-bottom:25px;position:relative}
.transition-star{font:4rem Georgia,serif;color:var(--gold);position:relative;margin-bottom:20px;transform:rotate(calc((1 - var(--open))*-120deg))}
.transition-title{font:italic clamp(2.8rem,6.8vw,6.8rem)/1.1 Georgia,serif;letter-spacing:-.055em;max-width:900px;position:relative}
.transition-note{font-size:.56rem;letter-spacing:.24em;position:relative;line-height:2}
.transition-line{width:70px;height:1px;background:var(--gold);margin:35px 0}
.transition-orbit{position:absolute;width:min(72vw,720px);aspect-ratio:1;border:1px solid #183c601a;border-radius:50%}
.transition-orbit:after{content:'';position:absolute;inset:22px;border:1px dashed #183c6016;border-radius:50%}
.tear-sheet{position:absolute;inset:-2%;background:var(--sheet-color);pointer-events:none;filter:drop-shadow(0 0 12px #183c6033);transform-origin:50% 50%;will-change:transform;backface-visibility:hidden}
.tear-sheet-top{clip-path:polygon(0 0,100% 0,100% 48%,97% 51%,94% 47%,91% 50%,88% 48%,85% 52%,82% 49%,79% 51%,76% 47%,73% 50%,70% 48%,67% 52%,64% 49%,61% 51%,58% 48%,55% 50%,52% 47%,49% 51%,46% 48%,43% 52%,40% 49%,37% 51%,34% 47%,31% 50%,28% 48%,25% 52%,22% 49%,19% 51%,16% 48%,13% 50%,10% 47%,7% 51%,4% 49%,0 51%);transform:translate3d(calc(var(--open)*-6vw),calc(var(--open)*-65svh),0) rotate(calc(var(--open)*-9deg)) rotateX(calc(var(--open)*17deg));z-index:2}
.tear-sheet-bottom{clip-path:polygon(0 50.8%,4% 48.8%,7% 50.8%,10% 46.8%,13% 49.8%,16% 47.8%,19% 50.8%,22% 48.8%,25% 51.8%,28% 47.8%,31% 49.8%,34% 46.8%,37% 50.8%,40% 48.8%,43% 51.8%,46% 47.8%,49% 50.8%,52% 46.8%,55% 49.8%,58% 47.8%,61% 50.8%,64% 48.8%,67% 51.8%,70% 47.8%,73% 49.8%,76% 46.8%,79% 50.8%,82% 48.8%,85% 51.8%,88% 47.8%,91% 49.8%,94% 46.8%,97% 50.8%,100% 47.8%,100% 100%,0 100%);transform:translate3d(calc(var(--open)*5vw),calc(var(--open)*65svh),0) rotate(calc(var(--open)*8deg)) rotateX(calc(var(--open)*-14deg));z-index:2}
.sheet-label{position:absolute;top:29%;left:0;right:0;text-align:center;font-size:.7rem;letter-spacing:.32em;color:var(--gold)}.sheet-label>span{padding:0 14px}
.sheet-instruction{position:absolute;top:70%;left:0;right:0;text-align:center;font-size:.58rem;letter-spacing:.2em;color:var(--gold)}.sheet-instruction>span{display:block;font-size:1.6rem;margin-top:20px}
.sheet-flower{position:absolute;font:10rem Georgia,serif;color:var(--gold);opacity:.18;right:5%;top:8%;transform:rotate(15deg)}.tear-sheet-bottom>.sheet-flower{left:3%;right:auto;top:68%;font-size:8rem}
.sheet-ring{position:absolute;left:50%;top:20%;width:60vw;height:60vw;border:1px solid #b4915025;border-radius:50%;transform:translateX(-50%)}
.tear-thread{position:absolute;z-index:3;left:0;right:0;top:49.8%;height:1px;background:#b4915055;opacity:calc(1 - var(--open)*10);pointer-events:none}
.postcard-inner,.postcard.flipped .postcard-inner{transform:rotateY(calc(var(--flip,0)*180deg));transition:none}
.postcard.manual .postcard-inner{transform:rotateY(0deg);transition:transform .85s cubic-bezier(.2,.7,.2,1)}
.postcard.manual.flipped .postcard-inner{transform:rotateY(180deg)}
.portrait-column{position:sticky;top:90px;align-self:start}
.polaroids{position:relative;--spread:1}
.polaroid{transform:translate3d(calc(var(--stack-x,0px)*(1 - var(--spread))),calc((1 - var(--spread))*35px),0) rotate(calc(var(--rotation)*1deg + (1 - var(--spread))*(var(--rotation)*3deg)));translate:none;will-change:transform;position:relative}
.polaroid:focus-within{z-index:5;transform:rotate(0deg)}
.route>svg .route-guide{stroke-dasharray:5 7;stroke-dashoffset:0;opacity:.2}
.route>svg .route-draw{stroke:var(--blue);stroke-width:2;stroke-dasharray:1;stroke-dashoffset:calc(1 - var(--draw,1));opacity:1;stroke-linecap:round}
@media(max-width:700px){.chapter-transition{height:165svh}.transition-title{font-size:3.4rem;max-width:350px}.transition-note{font-size:.54rem;letter-spacing:.15em}.transition-orbit{width:120vw}.sheet-label{font-size:.6rem;letter-spacing:.2em}.sheet-flower{font-size:7rem;right:-10%}.sheet-ring{width:110vw;height:110vw;top:25%}.portrait-column{position:relative;top:auto}.polaroid{transform:translateY(calc((1 - var(--spread))*32px)) rotate(calc(var(--rotation)*1deg + (1 - var(--spread))*var(--rotation)*2deg))}.polaroid:focus-within{transform:none}}
@media(prefers-reduced-motion:reduce){.chapter-transition{display:none}.portrait-column{position:relative;top:auto}.postcard-inner,.postcard.flipped .postcard-inner{transform:rotateY(0deg)}.postcard.manual.flipped .postcard-inner{transform:rotateY(180deg)}.route>svg .route-draw{stroke-dashoffset:0}.polaroid{transform:none!important;will-change:auto}}

@media(max-width:700px){.polaroid{transform:translateY(calc((1 - var(--spread))*32px)) rotate(calc(var(--rotation)*.4deg + (1 - var(--spread))*var(--rotation)*.3deg))}}

.tear-sheet-top{clip-path:polygon(0 0,100% 0,100.000% calc(50% + 0.70px),99.375% calc(50% + -1.59px),98.750% calc(50% + -5.86px),98.125% calc(50% + 2.68px),97.500% calc(50% + 3.91px),96.875% calc(50% + 1.16px),96.250% calc(50% + 3.22px),95.625% calc(50% + 4.30px),95.000% calc(50% + 6.63px),94.375% calc(50% + 1.92px),93.750% calc(50% + -1.50px),93.125% calc(50% + 4.88px),92.500% calc(50% + -0.32px),91.875% calc(50% + -6.62px),91.250% calc(50% + -1.30px),90.625% calc(50% + -2.09px),90.000% calc(50% + -4.52px),89.375% calc(50% + -4.17px),88.750% calc(50% + -2.37px),88.125% calc(50% + 3.06px),87.500% calc(50% + -0.48px),86.875% calc(50% + -1.20px),86.250% calc(50% + 7.98px),85.625% calc(50% + 4.61px),85.000% calc(50% + 0.49px),84.375% calc(50% + 5.11px),83.750% calc(50% + 3.95px),83.125% calc(50% + 1.49px),82.500% calc(50% + -1.96px),81.875% calc(50% + -2.56px),81.250% calc(50% + 1.40px),80.625% calc(50% + -5.36px),80.000% calc(50% + -7.36px),79.375% calc(50% + 0.91px),78.750% calc(50% + -2.17px),78.125% calc(50% + -4.17px),77.500% calc(50% + 0.97px),76.875% calc(50% + 2.74px),76.250% calc(50% + 4.20px),75.625% calc(50% + 1.48px),75.000% calc(50% + 3.05px),74.375% calc(50% + 8.72px),73.750% calc(50% + 1.23px),73.125% calc(50% + -1.30px),72.500% calc(50% + 4.54px),71.875% calc(50% + -0.59px),71.250% calc(50% + -4.32px),70.625% calc(50% + -3.35px),70.000% calc(50% + -2.86px),69.375% calc(50% + -1.54px),68.750% calc(50% + -6.05px),68.125% calc(50% + -3.23px),67.500% calc(50% + 4.40px),66.875% calc(50% + -1.20px),66.250% calc(50% + -0.64px),65.625% calc(50% + 6.77px),65.000% calc(50% + 4.48px),64.375% calc(50% + 2.97px),63.750% calc(50% + 2.66px),63.125% calc(50% + 3.60px),62.500% calc(50% + 4.31px),61.875% calc(50% + -3.64px),61.250% calc(50% + -2.76px),60.625% calc(50% + 2.21px),60.000% calc(50% + -5.66px),59.375% calc(50% + -6.30px),58.750% calc(50% + -0.95px),58.125% calc(50% + -2.01px),57.500% calc(50% + -1.75px),56.875% calc(50% + -1.88px),56.250% calc(50% + 2.58px),55.625% calc(50% + 6.38px),55.000% calc(50% + -0.15px),54.375% calc(50% + 3.14px),53.750% calc(50% + 8.74px),53.125% calc(50% + 1.38px),52.500% calc(50% + 0.12px),51.875% calc(50% + 2.25px),51.250% calc(50% + 0.15px),50.625% calc(50% + -1.84px),50.000% calc(50% + -6.11px),49.375% calc(50% + -2.57px),48.750% calc(50% + 0.11px),48.125% calc(50% + -7.32px),47.500% calc(50% + -2.93px),46.875% calc(50% + 3.54px),46.250% calc(50% + -0.73px),45.625% calc(50% + 0.70px),45.000% calc(50% + 3.87px),44.375% calc(50% + 5.47px),43.750% calc(50% + 5.10px),43.125% calc(50% + 0.02px),42.500% calc(50% + 4.21px),41.875% calc(50% + 5.42px),41.250% calc(50% + -4.21px),40.625% calc(50% + -2.13px),40.000% calc(50% + 0.85px),39.375% calc(50% + -4.50px),38.750% calc(50% + -4.93px),38.125% calc(50% + -4.07px),37.500% calc(50% + -0.72px),36.875% calc(50% + -0.13px),36.250% calc(50% + -4.35px),35.625% calc(50% + 3.15px),35.000% calc(50% + 6.64px),34.375% calc(50% + -0.24px),33.750% calc(50% + 3.68px),33.125% calc(50% + 6.78px),32.500% calc(50% + 3.10px),31.875% calc(50% + 1.39px),31.250% calc(50% + -0.77px),30.625% calc(50% + 1.84px),30.000% calc(50% + -0.52px),29.375% calc(50% + -7.92px),28.750% calc(50% + -1.88px),28.125% calc(50% + -0.19px),27.500% calc(50% + -6.73px),26.875% calc(50% + -2.61px),26.250% calc(50% + 1.05px),25.625% calc(50% + 1.30px),25.000% calc(50% + 1.48px),24.375% calc(50% + 0.83px),23.750% calc(50% + 7.14px),23.125% calc(50% + 5.83px),22.500% calc(50% + -1.15px),21.875% calc(50% + 4.81px),21.250% calc(50% + 4.70px),20.625% calc(50% + -2.77px),20.000% calc(50% + -1.88px),19.375% calc(50% + -1.67px),18.750% calc(50% + -1.97px),18.125% calc(50% + -4.43px),17.500% calc(50% + -6.74px),16.875% calc(50% + 0.84px),16.250% calc(50% + 0.01px),15.625% calc(50% + -4.96px),15.000% calc(50% + 3.29px),14.375% calc(50% + 5.33px),13.750% calc(50% + 1.70px),13.125% calc(50% + 3.48px),12.500% calc(50% + 4.19px),11.875% calc(50% + 5.86px),11.250% calc(50% + 1.61px),10.625% calc(50% + -2.80px),10.000% calc(50% + 3.35px),9.375% calc(50% + -0.60px),8.750% calc(50% + -7.60px),8.125% calc(50% + -2.02px),7.500% calc(50% + -1.69px),6.875% calc(50% + -4.26px),6.250% calc(50% + -3.26px),5.625% calc(50% + -1.50px),5.000% calc(50% + 3.91px),4.375% calc(50% + 1.18px),3.750% calc(50% + -0.75px),3.125% calc(50% + 8.11px),2.500% calc(50% + 5.38px),1.875% calc(50% + -0.11px),1.250% calc(50% + 4.23px),0.625% calc(50% + 3.23px),0.000% calc(50% + 0.25px))}
.tear-sheet-bottom{clip-path:polygon(0.000% calc(50% + -0.25px),0.625% calc(50% + 2.73px),1.250% calc(50% + 3.73px),1.875% calc(50% + -0.61px),2.500% calc(50% + 4.88px),3.125% calc(50% + 7.61px),3.750% calc(50% + -1.25px),4.375% calc(50% + 0.68px),5.000% calc(50% + 3.41px),5.625% calc(50% + -2.00px),6.250% calc(50% + -3.76px),6.875% calc(50% + -4.76px),7.500% calc(50% + -2.19px),8.125% calc(50% + -2.52px),8.750% calc(50% + -8.10px),9.375% calc(50% + -1.10px),10.000% calc(50% + 2.85px),10.625% calc(50% + -3.30px),11.250% calc(50% + 1.11px),11.875% calc(50% + 5.36px),12.500% calc(50% + 3.69px),13.125% calc(50% + 2.98px),13.750% calc(50% + 1.20px),14.375% calc(50% + 4.83px),15.000% calc(50% + 2.79px),15.625% calc(50% + -5.46px),16.250% calc(50% + -0.49px),16.875% calc(50% + 0.34px),17.500% calc(50% + -7.24px),18.125% calc(50% + -4.93px),18.750% calc(50% + -2.47px),19.375% calc(50% + -2.17px),20.000% calc(50% + -2.38px),20.625% calc(50% + -3.27px),21.250% calc(50% + 4.20px),21.875% calc(50% + 4.31px),22.500% calc(50% + -1.65px),23.125% calc(50% + 5.33px),23.750% calc(50% + 6.64px),24.375% calc(50% + 0.33px),25.000% calc(50% + 0.98px),25.625% calc(50% + 0.80px),26.250% calc(50% + 0.55px),26.875% calc(50% + -3.11px),27.500% calc(50% + -7.23px),28.125% calc(50% + -0.69px),28.750% calc(50% + -2.38px),29.375% calc(50% + -8.42px),30.000% calc(50% + -1.02px),30.625% calc(50% + 1.34px),31.250% calc(50% + -1.27px),31.875% calc(50% + 0.89px),32.500% calc(50% + 2.60px),33.125% calc(50% + 6.28px),33.750% calc(50% + 3.18px),34.375% calc(50% + -0.74px),35.000% calc(50% + 6.14px),35.625% calc(50% + 2.65px),36.250% calc(50% + -4.85px),36.875% calc(50% + -0.63px),37.500% calc(50% + -1.22px),38.125% calc(50% + -4.57px),38.750% calc(50% + -5.43px),39.375% calc(50% + -5.00px),40.000% calc(50% + 0.35px),40.625% calc(50% + -2.63px),41.250% calc(50% + -4.71px),41.875% calc(50% + 4.92px),42.500% calc(50% + 3.71px),43.125% calc(50% + -0.48px),43.750% calc(50% + 4.60px),44.375% calc(50% + 4.97px),45.000% calc(50% + 3.37px),45.625% calc(50% + 0.20px),46.250% calc(50% + -1.23px),46.875% calc(50% + 3.04px),47.500% calc(50% + -3.43px),48.125% calc(50% + -7.82px),48.750% calc(50% + -0.39px),49.375% calc(50% + -3.07px),50.000% calc(50% + -6.61px),50.625% calc(50% + -2.34px),51.250% calc(50% + -0.35px),51.875% calc(50% + 1.75px),52.500% calc(50% + -0.38px),53.125% calc(50% + 0.88px),53.750% calc(50% + 8.24px),54.375% calc(50% + 2.64px),55.000% calc(50% + -0.65px),55.625% calc(50% + 5.88px),56.250% calc(50% + 2.08px),56.875% calc(50% + -2.38px),57.500% calc(50% + -2.25px),58.125% calc(50% + -2.51px),58.750% calc(50% + -1.45px),59.375% calc(50% + -6.80px),60.000% calc(50% + -6.16px),60.625% calc(50% + 1.71px),61.250% calc(50% + -3.26px),61.875% calc(50% + -4.14px),62.500% calc(50% + 3.81px),63.125% calc(50% + 3.10px),63.750% calc(50% + 2.16px),64.375% calc(50% + 2.47px),65.000% calc(50% + 3.98px),65.625% calc(50% + 6.27px),66.250% calc(50% + -1.14px),66.875% calc(50% + -1.70px),67.500% calc(50% + 3.90px),68.125% calc(50% + -3.73px),68.750% calc(50% + -6.55px),69.375% calc(50% + -2.04px),70.000% calc(50% + -3.36px),70.625% calc(50% + -3.85px),71.250% calc(50% + -4.82px),71.875% calc(50% + -1.09px),72.500% calc(50% + 4.04px),73.125% calc(50% + -1.80px),73.750% calc(50% + 0.73px),74.375% calc(50% + 8.22px),75.000% calc(50% + 2.55px),75.625% calc(50% + 0.98px),76.250% calc(50% + 3.70px),76.875% calc(50% + 2.24px),77.500% calc(50% + 0.47px),78.125% calc(50% + -4.67px),78.750% calc(50% + -2.67px),79.375% calc(50% + 0.41px),80.000% calc(50% + -7.86px),80.625% calc(50% + -5.86px),81.250% calc(50% + 0.90px),81.875% calc(50% + -3.06px),82.500% calc(50% + -2.46px),83.125% calc(50% + 0.99px),83.750% calc(50% + 3.45px),84.375% calc(50% + 4.61px),85.000% calc(50% + -0.01px),85.625% calc(50% + 4.11px),86.250% calc(50% + 7.48px),86.875% calc(50% + -1.70px),87.500% calc(50% + -0.98px),88.125% calc(50% + 2.56px),88.750% calc(50% + -2.87px),89.375% calc(50% + -4.67px),90.000% calc(50% + -5.02px),90.625% calc(50% + -2.59px),91.250% calc(50% + -1.80px),91.875% calc(50% + -7.12px),92.500% calc(50% + -0.82px),93.125% calc(50% + 4.38px),93.750% calc(50% + -2.00px),94.375% calc(50% + 1.42px),95.000% calc(50% + 6.13px),95.625% calc(50% + 3.80px),96.250% calc(50% + 2.72px),96.875% calc(50% + 0.66px),97.500% calc(50% + 3.41px),98.125% calc(50% + 2.18px),98.750% calc(50% + -6.36px),99.375% calc(50% + -2.09px),100.000% calc(50% + 0.20px),100% 100%,0 100%)}

```

### tests/site.test.tsx

```tsx
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import App from '../src/App';
describe('Página pública',()=>{
 it('mantém cada parágrafo obrigatório visível no HTML',()=>{
 const html=renderToStaticMarkup(<App/>);
 const source=readFileSync('CONTEUDO.md','utf8').split('## Notas de implementação')[0];
 const paragraphs=source.split('\n\n').filter(p=>/^(Sou |Tenho |Possuo |Considero-me |Realizo |A Gestalt|Atendimentos |Processo de |“)/.test(p));
 expect(paragraphs).toHaveLength(10);
 for(const text of paragraphs) expect(html).toContain(text);
 expect((html.match(/<h1[ >]/g)||[])).toHaveLength(1);
 });
 it('oferece contatos reais e mensagem específica para avaliação',()=>{
 const html=renderToStaticMarkup(<App/>);
 expect(html).toContain('https://wa.me/5591982336647?text=');
 expect(html).toContain(encodeURIComponent('Olá, Alice! Gostaria de informações sobre o processo de avaliação psicológica para cirurgia bariátrica.'));
 expect(html).toContain('https://www.instagram.com/psialicevc/');
 expect(html).not.toContain('<form');
 });
});
```

### tests/browser-check.mjs

```javascript
import {chromium} from '@playwright/test';
import fs from 'node:fs/promises';
const browser=await chromium.launch({headless:true,executablePath:'C:/Users/jvgsl/AppData/Local/ms-playwright/chromium-1243/chrome-win64/chrome.exe'});
const results=[];const errors=[];
for(const width of [360,390,768,1440]){for(const reducedMotion of ['no-preference','reduce']){
const page=await browser.newPage({viewport:{width,height:1000},reducedMotion});page.on('pageerror',e=>errors.push(e.message));await page.goto('http://localhost:5173');await page.locator('h1').waitFor();
const source=await fs.readFile('CONTEUDO.md','utf8');const paragraphs=source.split('## Notas de implementação')[0].split('\n\n').filter(p=>/^(Sou |Tenho |Possuo |Considero-me |Realizo |A Gestalt|Atendimentos |Processo de |“)/.test(p));
for(const text of paragraphs){if(!await page.getByText(text,{exact:true}).isVisible())throw Error('Texto inacessível: '+text)}
const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth);if(overflow)throw Error('Overflow '+width);
await page.locator('.flip-button').scrollIntoViewIfNeeded();await page.waitForTimeout(150);const previous=await page.locator('.flip-button').getAttribute('aria-pressed');await page.locator('.flip-button').click();await page.waitForTimeout(reducedMotion==='reduce'?50:1000);if(await page.locator('.flip-button').getAttribute('aria-pressed')===previous)throw Error('Cartão');
await page.locator('summary').filter({hasText:'Para quem é a psicoterapia?'}).click();if(!await page.getByText('O atendimento é voltado a adolescentes e adultos.',{exact:true}).isVisible())throw Error('FAQ');
if(width<700){await page.evaluate(()=>scrollTo(0,0));await page.getByRole('button',{name:'Menu ☰'}).click();await page.getByRole('link',{name:'Atendimentos',exact:true}).click();if(await page.getByRole('button',{name:'Menu ☰'}).getAttribute('aria-expanded')!=='false')throw Error('Menu');}
if(await page.locator('.flip-button').getAttribute('aria-pressed')==='true')await page.locator('.flip-button').click();await page.waitForTimeout(reducedMotion==='reduce'?50:1000);await page.evaluate(()=>scrollTo(0,document.body.scrollHeight));await page.evaluate(()=>scrollTo(0,0));if(reducedMotion==='no-preference'){await page.waitForTimeout(700);await page.screenshot({path:'docs/preview-'+width+'.png',fullPage:true});}results.push({width,reducedMotion,overflow,paragraphs:paragraphs.length});await page.close();}}
await browser.close();if(errors.length)throw Error(errors.join('\n'));await fs.writeFile('docs/browser-results.json',JSON.stringify(results,null,2));console.log(JSON.stringify(results,null,2));
```

### tests/motion-check.mjs

```javascript
import assert from 'node:assert/strict';
import {chromium} from '@playwright/test';
const browser=await chromium.launch({executablePath:'C:/Users/jvgsl/AppData/Local/ms-playwright/chromium-1243/chrome-win64/chrome.exe'});
try {for(const width of [390,1440]) {
 const page=await browser.newPage({viewport:{width,height:900},reducedMotion:'no-preference'});await page.goto('http://localhost:5173');await page.locator('h1').waitFor();
 assert.equal(await page.locator('.chapter-transition').count(),4,'quatro transições de papel');
 const seek=async(selector,progress)=>{await page.evaluate(({selector,progress})=>{const el=document.querySelector(selector);scrollTo({top:el.getBoundingClientRect().top+scrollY+(el.offsetHeight-innerHeight)*progress,behavior:'instant'});},{selector,progress});await page.waitForTimeout(100);};
 await seek('.chapter-transition',0);const closed=await page.locator('.tear-sheet-top').first().evaluate(e=>getComputedStyle(e).transform);
 await seek('.chapter-transition',.65);const opened=await page.locator('.tear-sheet-top').first().evaluate(e=>getComputedStyle(e).transform);assert.notEqual(closed,opened,'papel abre na rolagem');await page.screenshot({path:'docs/motion-tear-'+width+'.png'});
 await seek('.chapter-transition',0);assert.equal(await page.locator('.tear-sheet-top').first().evaluate(e=>getComputedStyle(e).transform),closed,'papel fecha na rolagem inversa');
 const at=async(selector,y)=>{await page.locator(selector).evaluate((e,y)=>scrollTo({top:e.getBoundingClientRect().top+scrollY-y,behavior:'instant'}),y);await page.waitForTimeout(100);};
 await at('.postcard',700);const front=await page.locator('.postcard-inner').evaluate(e=>getComputedStyle(e).transform);await at('.postcard',30);const back=await page.locator('.postcard-inner').evaluate(e=>getComputedStyle(e).transform);assert.notEqual(front,back,'cartão vira na rolagem');
 await at('.polaroids',850);const stacked=await page.locator('.polaroid').first().evaluate(e=>getComputedStyle(e).transform);await at('.polaroids',100);const spread=await page.locator('.polaroid').first().evaluate(e=>getComputedStyle(e).transform);assert.notEqual(stacked,spread,'polaroids se abrem com a rolagem');
 await at('.route',800);const routeStart=await page.locator('.route-draw').evaluate(e=>getComputedStyle(e).strokeDashoffset);await at('.route',40);const routeEnd=await page.locator('.route-draw').evaluate(e=>getComputedStyle(e).strokeDashoffset);assert.notEqual(routeStart,routeEnd,'rota é desenhada');
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,'sem overflow');
 await page.emulateMedia({reducedMotion:'reduce'});assert.equal(await page.locator('.chapter-transition').first().isVisible(),false,'sem cenas intercaladas com redução de movimento');assert.equal(await page.locator('.route-draw').evaluate(e=>getComputedStyle(e).strokeDashoffset),'0px');
 await page.close();console.log('PASS animações e reversão em '+width+'px');}}
 finally{await browser.close();}

```

### tests/access-check.mjs

```javascript
import {chromium} from '@playwright/test';
const browser=await chromium.launch({executablePath:'C:/Users/jvgsl/AppData/Local/ms-playwright/chromium-1243/chrome-win64/chrome.exe'});const page=await browser.newPage({viewport:{width:390,height:844},hasTouch:true,reducedMotion:'reduce'});await page.goto('http://localhost:5173');await page.keyboard.press('Tab');if(await page.locator(':focus').textContent()!=='Pular para o conteúdo')throw Error('Atalho de teclado');await page.keyboard.press('Enter');await page.locator('summary').first().focus();await page.keyboard.press('Enter');if(!await page.locator('details').first().getAttribute('open').then(x=>x!==null))throw Error('FAQ pelo teclado');await page.getByRole('button',{name:'Vire este cartão'}).tap();if(await page.getByRole('button',{name:'Ver o retrato'}).getAttribute('aria-pressed')!=='true')throw Error('Toque');await page.setViewportSize({width:1440,height:900});await page.setViewportSize({width:360,height:800});if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth))throw Error('Resize');console.log('PASS: teclado, foco inicial, FAQ, toque e redimensionamento');await browser.close();
```

### README.md

```markdown
# Alice Vieira — site institucional

Implementação própria em React, TypeScript e Vite, autorizada após a indisponibilidade do registro do template. Não utiliza o código compilado nem os assets externos da referência.

## Rodar

```sh
npm install
npm run dev -- --port 5173
```

Endereço: http://localhost:5173

## Verificações

```sh
npm test
npm run build
node tests/browser-check.mjs
```

O teste de navegador usa o Chromium local indicado no script; ajustar executablePath em outro computador. Textos e contatos: src/content.ts. Cores e composição: src/styles.css. Componentes: src/App.tsx. Foto original preservada na raiz e copiada em public. Fontes de sistema, sem downloads externos.

Sem publicação automática, analytics, formulários ou confirmação fictícia de agendamento.

```

### .gitignore

```text
node_modules/
dist/
.npm-cache/
*.log

```
