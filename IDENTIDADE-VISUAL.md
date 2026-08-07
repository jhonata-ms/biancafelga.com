# Identidade visual — Bianca Felga

Este documento registra a paleta oficial do site e orienta a criação de páginas futuras.

## Paleta oficial

| Token CSS | Nome | Cor |
| --- | --- | --- |
| `--azul-petroleo-profundo` | Azul Petróleo Profundo | `#243B43` |
| `--azul-ardosia` | Azul Ardósia | `#4F6970` |
| `--dourado-ambar` | Dourado Âmbar | `#B8793F` |
| `--creme-dourado` | Creme Dourado | `#D8C39A` |
| `--marrom-bronze` | Marrom Bronze | `#654B3A` |
| `--roxo-profundo` | Roxo Profundo | `#3C2A45` |
| `--roxo-amora` | Roxo Amora | `#6D4A6E` |
| `--rosa-queimado` | Rosa Queimado | `#B47A7F` |
| `--pele-rosada-clara` | Pele Rosada Clara | `#E7C5B8` |
| `--pele-rosada-media` | Pele Rosada Média | `#D4A79C` |
| `--pele-rosada-escura` | Pele Rosada Escura | `#B87C6B` |

## Uso nas páginas

- Fundo principal: `--paper` (`--pele-rosada-clara`).
- Texto e ações principais: `--ink` e `--forest` (`--azul-petroleo-profundo`).
- Superfícies claras e cartões: `--paper-light` (`--creme-dourado`).
- Destaques e interações: `--coral` (`--roxo-amora`).
- Áreas escuras: `--roxo-profundo` ou `--azul-petroleo-profundo`, sempre com texto claro.
- Elementos secundários: `--azul-ardosia`, `--marrom-bronze` e os tons rosados.

As definições oficiais ficam no bloco `:root` de `assets/css/site.css`. Toda página nova deve carregar esse arquivo e utilizar os tokens semânticos já existentes. Evite inserir novos códigos hexadecimais diretamente em componentes.

## Contraste

Para textos corridos, use preferencialmente Azul Petróleo Profundo ou Roxo Profundo sobre Pele Rosada Clara e Creme Dourado. Em fundos escuros, use Pele Rosada Clara ou Creme Dourado. Rosa Queimado, Pele Rosada Escura e Dourado Âmbar devem ser usados principalmente em detalhes, superfícies e elementos decorativos.
