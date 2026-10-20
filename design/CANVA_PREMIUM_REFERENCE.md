# Anthony Ribeiro — Landing premium (referência visual aprovada)

## Status
- **Canva (imagem convertida com Magic Layers):** https://www.canva.com/d/PIEbrWVjL-rHQNp
- **Imagem de referência original:** captura fornecida no ChatGPT em 20/10/2026, resolução **846 × 1860 px**. Não foi adicionada como asset web porque é a página inteira rasterizada.
- **Canva: 65 caixas de texto editáveis e 58 elementos de imagem** (parcialmente independentes); a conversão automática contém erros de reconhecimento de texto e componentes raster muito pequenos (exemplo: **59 × 41 px**).
- **GitHub:** esta branch guarda a especificação; **nenhuma alteração de layout ou deploy de produção deve ser feita antes de aprovar exportações e screenshots**.

## Referência visual — prioridade absoluta
Manter o layout premium da imagem enviada pelo proprietário: AR branco, fundo navy, grade em perspectiva azul-neon, hero com foto central, dashboard, automações e smartphone flutuantes. Cards de gestão, automações, dashboards, e-commerce, SaaS e rotas devem preservar a mesma riqueza visual. Últimas seções: processo horizontal, stack de tecnologias, manifesto, contato e rodapé.

## Artefatos que devem sair separados do Canva
| Arquivo previsto | Uso | Mínimo recomendado |
|---|---|---|
| `logo-ar.svg` | Navbar e rodapé | SVG vetorial, sem fundo |
| `hero-person.png` | Retrato em sobreposição | Transparente, ~1200 px de largura útil |
| `hero-dashboard.webp` | Painel visual do hero | 900 × 640 px ou melhor |
| `hero-automations.webp` | Painel flutuante | 700 × 800 px ou melhor |
| `hero-phone.webp` | Interface de smartphone | 700 × 1100 px ou melhor |
| `background-neon.webp` | Decoração ambiente sem textos | 1920 × 1100 px ou melhor |
| `card-gestao.webp` | Card gestão | 1200 × 750 px ou melhor |
| `card-automacoes.webp` | Card automações | 1200 × 750 px ou melhor |
| `card-dashboards.webp` | Card dashboards | 1200 × 750 px ou melhor |
| `card-ecommerce.webp` | Card pedidos | 1200 × 750 px ou melhor |
| `card-saas.webp` | Card aplicativos | 1200 × 750 px ou melhor |
| `card-rotas.webp` | Card operações | 1200 × 750 px ou melhor |

A resolução recomendada não se consegue ampliando um elemento de 59 × 41 px: é necessário recriar/renderizar cada arte a partir de uma fonte detalhada. Conferir legibilidade no tamanho nativo e em telas Retina. **Não exportar a página inteira como imagem para produção.**

## Critérios obrigatórios
1. Todas as artes separadas precisam ser revisadas lado a lado com o modelo aprovado.
2. Headline, conteúdos, links, botões, tags, idiomas e formulário ficam em HTML/React — nunca achatados nas imagens.
3. Visual responsivo em 320, 375, 390, 430, 768, 1024 e 1440 px; sem overflow horizontal.
4. Verificar mobile visualmente com screenshots reais; nunca considerar HTTP 200 como aprovação de design.
5. Preservar oito idiomas e as interações existentes.
6. **Somente integrar ao Git de produção após aprovação explícita dos assets e do preview.**

## Próxima etapa
No Canva, identificar e refazer as imagens raster que ficaram pequenas ou tiveram elementos/textos danificados. Baixar os arquivos **individualmente** na resolução adequada; só então integrá-los em `assets/landing/` numa branch técnica de implementação.
