# DESIGN.md — Alice Vieira

## Direção escolhida pelo usuário — referência Torn Postcard

Site editorial, acolhedor e artístico, inspirado no print de @psialicevc. Base clara com azul profundo, fotografia real e detalhes discretos de papel/azulejo. Proposta para revisão, não manual oficial extraído da marca. Referências visuais: print do Instagram e abertura do site Torn Postcard Portfolio, inspecionada em 16/10/2026. O Canva foi utilizado como fonte textual.

Base escolhida pelo usuário: https://21stdev-my-components-one.vercel.app/#torn-postcard-portfolio

Na abertura da referência foram observados camadas de paisagem recortada, textura de papel, bordas rasgadas, título serifado grande centralizado, botões e etiqueta de papel. A inspeção visual foi da abertura desktop. Posteriormente, a descrição pública do autor confirmou cinco capítulos e os efeitos listados abaixo. O comportamento em execução, os valores de animação e a versão mobile ainda precisam ser verificados no código; não foram medidos nesta análise.

Adotar o template como base de implementação, incluindo estrutura e animações originais, conforme pedido explícito do usuário. Adaptar a composição para azuis e creme, recortes de papel e fragmentos discretos de azulejo ligados à identidade de Alice. A paisagem montanhosa e a águia são elementos do portfólio de referência; para Alice, propor colagens autorais com motivos do seu perfil. Usar detalhes artísticos periféricos e área central limpa. Manter a paleta abaixo como proposta de adaptação.

Objetivo: reconhecer a personalidade do Instagram e facilitar a leitura das informações de atendimento. O site deve parecer pessoal e profissional, com conteúdo como protagonista.

## Paleta sugerida

| Token | Cor | Uso |
| --- | --- | --- |
| background | #F7F3EA | Fundo creme predominante |
| surface | #FFFDF8 | Blocos e superfícies claras |
| primary | #183C60 | CTA, títulos e navegação |
| text | #243746 | Texto principal |
| muted | #4D6474 | Texto secundário |
| soft-blue | #DCE8EF | Seções suaves e áreas decorativas |
| border | #C7D4DB | Divisórias decorativas |
| accent | #B49150 | Pequenos ornamentos dourados |

Hexadecimais propostos a partir da direção visual, não cores oficiais amostradas. Usar texto claro em primary e texto escuro nas superfícies claras; testar contraste de cada combinação real. Não usar dourado nem borda clara como único indicador de foco ou texto pequeno.

## Tipografia

Sugestão: Lora para títulos e Source Sans 3 para corpo/interface, após conferir disponibilidade e licença na implementação. Não alegar que são as fontes do perfil. Evitar serifas muito condensadas em parágrafos.

- H1: clamp(2.25rem, 4.5vw, 4rem), altura de linha 1.12.
- H2: clamp(1.8rem, 3vw, 2.75rem), altura 1.2.
- Corpo: 18px desktop, 16–18px mobile, altura 1.6.
- Texto auxiliar: mínimo 14px, sem reduzir nome e CRP a detalhe ilegível.
- Parágrafos com largura aproximada de 60–68 caracteres.

## Layout e ritmo

Container máximo 1160px. Margens laterais de 20px no celular, 32px no tablet e 48px no desktop. Espaçamento vertical entre seções de 64px no celular e 88–104px no desktop. Escala de espaçamento: 4, 8, 12, 16, 24, 32, 48, 64 e 96px.

Raios moderados de 8–16px. Bordas finas, sombras quase imperceptíveis. Alternar texto, fotografia e áreas suaves; evitar uma página inteira de cartões iguais.

## Composição por seção

### Cabeçalho
Nome ou assinatura original autorizada à esquerda. Links “Sobre”, “Atendimentos”, “Dúvidas” e contato à direita. No mobile, menu compacto com controle acessível. Usar nome tipográfico até receber marca; não inventar monograma.

### Abertura
Desktop: abertura ampla com composição centralizada, seguindo a referência escolhida. Fundo azul profundo, camadas de papel azul suave/creme nas bordas, identificação profissional e grande título serifado em creme. Apoio curto, modalidades e CTA centralizados em área sem textura carregada. Encerramento da abertura com borda rasgada para a seção clara. O retrato principal fica na seção Sobre, em moldura de cartão-postal. Um pequeno selo de papel pode informar “Presencial em Belém · Online”, sem inventar mensagens de disponibilidade. Nada deve atravessar os textos ou controles.

Mobile: identificação, título, texto e CTA; o retrato aparece na seção seguinte. Reduzir camadas e ornamentos, sem rolagem horizontal; manter propósito e ação fáceis de encontrar. Não obrigar uma altura de tela inteira nem cortar texto para caber na primeira dobra.

### Sobre
Retrato principal real na frente do cartão-postal, identificação no verso e biografia completa em área editorial adjacente, preservando o efeito de virada do template. Disponibilizar texto e controles de forma acessível, inclusive quando o cartão estiver parado ou com movimento reduzido. Fotografia secundária apenas se houver asset adequado. Separar formação e trajetória artística em pequenos blocos; não despejar o texto integral do Canva em um parágrafo.

### Temas e abordagem
Autoconhecimento, autoestima e relacionamentos como entradas editoriais breves. Publicar os dois parágrafos completos da abordagem em bloco próprio no capítulo Processo, conforme CONTEUDO.md. Não usar fotografias estereotipadas de sofrimento ou cards que pareçam diagnóstico.

### Atendimentos
Três cartões em formato polaroid, aproveitando a reorganização animada do template: psicoterapia presencial, psicoterapia online e avaliação psicológica. Cada bloco informa o que é, modalidade/local quando confirmado e ação contextual. Deixar clara a diferença entre avaliação e acompanhamento terapêutico.

### Dúvidas e contato
FAQ limpo com separadores e controles legíveis. Encerramento com convite acolhedor e CTA, identificação profissional e links. Uma faixa estreita de padrão azul pode concluir a composição.

## Uso de colagem e ornamentação

- Até um conjunto decorativo por seção; deixar a maioria das superfícies sem textura.
- Reservar azulejos/florais a faixas, bordas ou recortes periféricos.
- Usar estrelas douradas com parcimônia, sem movimento contínuo.
- Nunca colocar textura complexa atrás de parágrafos ou controles.
- Não copiar obras, imagens de BTS, frames do Studio Ghibli ou fotografias do feed como assets do site sem autorização de uso adequada. Preservar a linguagem criativa com elementos próprios ou licenciados.
- Não recriar o feed inteiro nem usar colagens como substituto de retratos profissionais.

## Interações

Na abertura azul, botão principal creme com texto azul profundo; nas seções claras, botão azul profundo com texto claro. Altura mínima 48px e foco evidente. Aparência de recorte de papel permitida no fundo decorativo, mantendo área clicável regular e texto íntegro. Hover com mudança sutil; sem brilho, pulso ou escala chamativa. Links de texto identificáveis além da cor. Transições de 150–220ms apenas para controles de interface. Efeitos ligados à rolagem seguem o motor e os intervalos originais do template, a confirmar no código; respeitar redução de movimento.

CTA flutuante é opcional: só incluir se não cobrir conteúdo, navegação ou rodapé. Ícones coerentes, sem mistura de estilos. Decoração não deve receber foco nem leitura por tecnologia assistiva.

## Assets e validação visual

Retrato principal disponível: alice-vieira-foto.jpg, 1600 × 1200 px, extraído do PDF fornecido. Foto secundária é opcional; solicitar assinatura/logo original apenas se existir. Preservar fisionomia, proporções e cor natural da fotografia. Não usar o print do feed como banner.

Antes da entrega, conferir legibilidade no celular, hierarquia de títulos, identificação profissional, contraste, estados de foco e recorte do retrato. O resultado esperado combina calma, personalidade artística e facilidade de contato, sem excesso ornamental nem estética genérica de plataforma de saúde.


## Implementação da linguagem de papel

Reutilizar o mecanismo de bordas e rasgos disponibilizado no template; personalizar cores e motivos. Não aplicar recorte no container que contém texto, foco ou botões: usar camada separada e pointer-events: none. Não adicionar canvas/WebGL ou bibliotecas extras sem necessidade demonstrada pelo código. Grão sutil, sem comprometer contraste. As animações originais fazem parte do escopo normal; oferecer conteúdo legível com movimento reduzido e fallback estático se o motor falhar. Não bloquear a rolagem nem impor scroll snapping.

O usuário autorizou usar o template gratuito e suas animações. Reutilizar o código disponibilizado conforme sua licença e preservar avisos exigidos. A licença específica ainda não foi conferida. Personalizar marca e conteúdo para Alice; verificar separadamente os direitos dos assets externos.


## Estrutura e animações do template escolhido

Fonte: https://21st.dev/@kedhareswer/templates/scroll-tear-portfolio-website-template (descrição do autor lida em 16/10/2026).

A tabela especifica a adaptação e prevalece sobre a sequência genérica do briefing inicial. Os efeitos são documentados pelo autor; não representam testes de execução feitos nesta análise.

| Capítulo original | Efeito descrito | Adaptação para Alice |
| --- | --- | --- |
| Capa de diário de viagem | Capítulos se abrem como papel rasgado durante o scroll | Abertura azul/creme, nome e CRP, mensagem de acolhimento e CTA; manter revelação da seção seguinte |
| Sobre em cartão-postal | Cartão vira | Retrato de Alice e apresentação/formação, com alternativa legível ao movimento |
| Projetos em polaroids | Cartões se reorganizam | Psicoterapia presencial, online e avaliação psicológica; títulos e ações próprios em cada cartão |
| Mapa da experiência | Rota animada | Percurso informativo: primeiro contato, combinação de modalidade/horário e início do acompanhamento; textos sujeitos à revisão de Alice, sem prometer duração ou resultado |
| Contato em cartão-postal | Formulário com apresentação de cartão-postal | Manter composição visual e efeitos existentes no código; trocar coleta de mensagem por CTA para WhatsApp. Não simular envio de formulário |

Integrar explicação de Gestalt-terapia e temas à apresentação/percurso. FAQ no capítulo de contato ou bloco complementar de altura natural. Não comprimir parágrafos em viewport fixo: conservar a apresentação de capítulos em desktop quando comportar o conteúdo e permitir expansão/fluxo normal onde necessário, especialmente no celular.

Não definir rotação, easing, duração, distância de scroll ou ordem de sobreposição por adivinhação: extrair do código original quando disponível. Manter a coreografia antes de estilizar. Não acrescentar efeitos que a fonte não documenta como se fossem originais. O tratamento do formulário é uma adaptação funcional deliberada para o WhatsApp, não promessa de reprodução integral.

Critério de fidelidade: rasgo, virada, polaroids e rota continuam reconhecíveis após personalização; títulos e CTAs permanecem utilizáveis durante e após as transições. Com prefers-reduced-motion, desativar movimentos amplos, manter todas as informações e disponibilizar cartões em fluxo estático. Não prender teclado ou rolagem em uma cena.

Status de obtenção: o endereço de registro publicado pelo autor retornou 404 nesta tentativa. Código, licença e dependências não foram inspecionados. A documentação está pronta para orientar integração, mas não contém o código-fonte nem garante que o comando de instalação funcione hoje.


## Conteúdo integral e acomodação no template

CONTEUDO.md é a fonte do texto público obrigatório. Não usar somente resumos da biografia ou da abordagem. Manter quatro parágrafos na apresentação e dois na explicação da Gestalt-terapia. Destacar formação e capacitações visualmente sem apagar o texto original revisado.

No desktop, o cartão com retrato pode ocupar uma coluna e a biografia a outra. Se a altura superar a cena animada, reservar espaço de leitura em fluxo normal dentro do mesmo capítulo. No celular, cartão primeiro, biografia completa em seguida. Não colocar toda a biografia em um verso minúsculo, esconder por hover ou exigir uma rolagem rápida para ler.

O capítulo Processo inclui o título “Como funciona a Gestalt-terapia?” e todo o texto correspondente, além da rota ilustrativa. A rota não substitui a explicação. As polaroids contêm as descrições integrais de cada serviço e “Entre em contato!”. Encerramento com “Vamos agendar a sua primeira sessão?” e frase atribuída a Fritz Perls fornecida no conteúdo.

A foto está disponível sem moldura e estrelas. Criar a moldura como elemento separado; preservar o rosto e os cachos no enquadramento responsivo. Preferir proporção 4:3 da imagem; não ampliar o JPEG além do necessário. A foto mantém seu fundo natural; não foi removido nem recriado.
