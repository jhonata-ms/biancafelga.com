# Bianca Felga — identidade visual e orientações do projeto

Este documento orienta alterações em todo o site. A referência da identidade atual é `assets/css/site.css`, aplicada às páginas HTML em português e inglês.

## Direção visual e voz

Preservar a direção dark academia: galeria intimista, fundo escuro, superfícies quentes, tipografia clássica e detalhes delicados. Usar espaço generoso, linhas finas e destaques dourados para valorizar a artista e suas obras.

A comunicação é pessoal, acolhedora e contemplativa. Manter a voz da artista, incluindo a apresentação “Pode me chamar de Bika!” e os temas arte, presença e contemplação.

## Paleta

Usar as variáveis existentes em `:root` para manter consistência.

| Cor | Variável | Código | Uso atual |
| --- | --- | --- | --- |
| Fundo escuro | `--background` | `#171914` | Fundo principal e molduras das obras |
| Marfim | `--paper` | `#ECE5D4` | Texto principal e estados de interação |
| Antique Gold | `--gold` | `#C49A6C` | Ênfases, links, botões e detalhes |
| Oxford Brown | `--brown` | `#3E2723` | Gradiente da seção sobre a artista |
| Velvet Burgundy | `--burgundy` | `#6A1B3D` | Tom de referência do destaque de óleo |
| Ivy Green | `--ivy` | `#2C6B4F` | Tom de referência do destaque de aquarela |
| Charcoal Slate | `--slate` | `#37474F` | Cor de apoio disponível na paleta |
| Texto secundário | `--muted` | `#C3B9A5` | Subtítulos, notas e rodapé |
| Linhas | `--line` | `#C49A6C55` | Bordas douradas translúcidas de 1 px |

Os cartões de aquarela combinam verde translúcido `#2C6B4F80` com `#1D2924`; os de óleo combinam vinho translúcido `#6A1B3D70` com `#302522`. A seção sobre usa gradiente de marrom para `#25231A`, e a de contato combina `#202923` com o fundo principal.

## Tipografia

- Títulos: Cormorant Garamond, com fallback `Georgia, serif`, peso 400, entrelinha compacta e espaçamento levemente negativo.
- Texto: EB Garamond, com fallback `Georgia, serif`; base de 20 px e entrelinha 1,65.
- Navegação, botões, chamadas curtas e pequenas legendas: `Arial, sans-serif`, geralmente em caixa alta, 9–11 px e letras espaçadas. O seletor de idiomas usa 13 px, sem caixa alta forçada.
- Ênfases editoriais: itálico dourado. Na escala principal, `h1` varia de 64 a 112 px, `h2` de 42 a 72 px e `h3` de 38 a 58 px, com ajustes específicos no celular. Títulos de obras usam 34 px, passando a 36 px até 600 px.

As fontes serifadas são carregadas pelo Google Fonts. Preservar os fallbacks locais.

## Composição e componentes

- Conteúdo centralizado em `.container`, com largura máxima de 1200 px. Margens laterais de 48 px no desktop, 28 px até 1000 px e 18 px até 450 px.
- Cabeçalho com assinatura à esquerda, navegação à direita e borda inferior fina. Barra de idiomas acima do cabeçalho.
- Abertura em duas colunas, com título expressivo e retrato em arco. Seções sobre e contato também usam duas colunas no desktop e uma até 800 px.
- Retratos podem usar topo arredondado em arco. A imagem de contato mantém sua proporção integral, com altura automática e `object-fit: contain`.
- Cartões das técnicas com borda fina, fundo tonal e deslocamento discreto de 5 px para cima no hover.
- Ações principais usam `.button`: fundo dourado, texto escuro, caixa alta e seta. No hover, o fundo passa a marfim. Links editoriais usam sublinhado fino dourado.
- Seções têm espaçamento vertical de 110 px no desktop e 70 px até 800 px. Rodapé com assinatura, técnicas e ano atualizado pelo JavaScript.

## Assinatura e imagens

Cabeçalho e rodapé utilizam `assets/img/logo.png`, a assinatura original com canal alfa transparente. O CSS aplica `filter: brightness(0) invert(1)` e opacidade `0.92` para clarear os traços sobre o fundo escuro. Preservar transparência e proporção, sem fundo retangular. A assinatura tem largura de 180 px no cabeçalho desktop, 145 px no mobile e 130 px no rodapé.

As imagens atuais incluem `assets/img/artista-sem-placa.png` na abertura, `assets/img/laboratorio.jpg` na seção sobre e `assets/img/artista-contato.jpg` no contato. Preservar textos alternativos descritivos e carregamento tardio das imagens fora da abertura.

## Galerias e dados das obras

A galeria aberta encaminha para páginas próprias de Aquarelas e Óleo sobre tela. A numeração é independente por técnica: aquarelas de #01 a #28 e óleos de #01 a #33.

No estado atual das páginas, todas as obras exibem “Disponibilidade a consultar”. Não atribuir números, temas, títulos, preços ou disponibilidade sem dados da artista.

Cada obra deve apresentar imagem integral, número e técnica, título ou descrição, disponibilidade e ação “Adquirir arte”, com mensagem de WhatsApp identificando a obra. Preservar a correspondência entre imagem, legenda e mensagem.

A grade usa três colunas no desktop, duas até 1000 px e uma até 600 px. Cada imagem fica em uma área quadrada com borda fina e `object-fit: contain`: nunca cortar a composição da pintura para preencher o cartão. Manter o link para ampliar a imagem original e as legendas em fonte serifada, sem caixa alta no título ou na descrição.

WhatsApp de contato: **+55 11 91161-3164**, usando `https://wa.me/5511911613164`.

## Navegação, idiomas e acessibilidade

A página inicial em português fica na raiz, em `index.html`. As demais páginas em português ficam em `pt/`: `sobre.html`, `galeria.html`, `aquarelas.html`, `oleo-sobre-tela.html` e `contato.html`. As correspondentes em inglês ficam em `en/`: `index.html`, `about.html`, `gallery.html`, `watercolours.html`, `oil-on-canvas.html` e `contact.html`, respectivamente. Ao criar links, respeitar os caminhos relativos dos assets compartilhados e das páginas equivalentes entre idiomas. Manter as versões coerentes ao alterar conteúdo, componentes ou dados das obras.

A navegação principal em português é “Sobre a artista”, “Galeria aberta” e “Entre em contato”. O seletor “Português 🇧🇷 / English 🇬🇧” deve permanecer visível mesmo com o menu mobile fechado e apontar para a página equivalente no outro idioma. Preservar `lang`, `hreflang` e a indicação de idioma ou página atual com `aria-current`.

Até 800 px, o menu é controlado pelo botão “Menu”, com `aria-expanded` e `aria-controls`. Sem JavaScript, os links continuam acessíveis. Manter fechamento por Escape e retorno de foco ao botão.

Preservar o link “Ir para o conteúdo”, textos alternativos, foco visível dourado e suporte a `prefers-reduced-motion`. Links de WhatsApp que abrem nova aba usam `rel="noopener noreferrer"`.

## Manutenção

O site usa HTML estático, estilos compartilhados em `assets/css/site.css` e comportamento em `assets/js/site.js`. Aplicar alterações visuais nesses componentes compartilhados, respeitando as classes e os padrões existentes.

Ao alterar a interface, conferir versões em português e inglês, desktop e celular, navegação, legibilidade, proporção das imagens e links de aquisição. Atualizar este documento quando houver uma mudança aprovada de identidade visual ou de padrões do projeto.
