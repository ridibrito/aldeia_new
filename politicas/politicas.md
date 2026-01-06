PRD — Página “Políticas” com Abas (Aldeia Singular)
1) Contexto e objetivo

Criar uma página institucional única para hospedar e organizar as políticas do produto (Brasil / infoproduto), usando abas para navegação rápida entre documentos, mantendo URLs compartilháveis para cada aba e garantindo acessibilidade e SEO.

Objetivos

Centralizar documentos legais em um só lugar (UX simples).

Permitir que cada política seja acessada por link direto (ex.: #privacidade).

Manter estrutura compatível com LGPD e boas práticas de e-commerce/infoproduto.

Garantir mobile-first, carregamento rápido e leitura confortável.

Não objetivos

Não criar um CMS completo (V1 pode ser conteúdo estático).

Não implementar gestão de versões automatizada (pode ser manual no texto).

2) Público-alvo

Visitantes do site (pré-compra) querendo verificar regras.

Compradores/alunos (pós-compra) buscando cancelamento e privacidade.

Parceiros/fornecedores/autoridades (consulta formal).

3) Escopo V1
Documentos (abas)

Política de Privacidade

Termos de Uso

Política de Reembolso/Cancelamento

Política de Cookies

Componentes principais

Header com título: “Políticas e Documentos Legais”

Subtítulo curto: “Última atualização: DD/MM/AAAA”

Navegação por abas (desktop) e selector (mobile)

Conteúdo de cada política com:

Índice interno (opcional, mas recomendado em políticas longas)

Seções (H2/H3)

Botão “Copiar link desta seção”

Footer com:

Contato do suporte

Contato LGPD/DPO (se aplicável)

Links redundantes (SEO e navegação tradicional)

4) Requisitos funcionais
RF01 — Abas com ancoragem na URL

Ao clicar em uma aba, atualizar a URL com hash:

#privacidade

#termos

#reembolso

#cookies

Ao carregar a página com um hash, abrir automaticamente a aba correspondente.

Se hash inválido/ausente, default = #privacidade.

Critério de aceite:

Abrir .../politicas#reembolso → a aba Reembolso aparece selecionada.

Recarregar a página mantém a aba.

RF02 — Navegação mobile adaptada

Em telas pequenas:

Abas viram dropdown/segmented control (sem quebrar layout)

Scroll suave para o topo do conteúdo ao trocar de aba (opcional)

Critério de aceite:

iPhone/Android: seletor de política é clicável, sem overflow.

RF03 — Estrutura semântica e acessível

Implementar abas com WAI-ARIA:

role="tablist", role="tab", role="tabpanel"

aria-selected, aria-controls, id consistentes

Teclado:

setas esquerda/direita alternam abas

Enter/Space ativa

Contraste e foco visível

Critério de aceite:

Lighthouse A11y ≥ 90 (ou equivalente).

RF04 — SEO e indexação

Mesmo sendo “uma página com abas”, precisamos que bots enxerguem conteúdo.

Opção recomendada (V1 simples):

Renderizar todo conteúdo no HTML (SSR/estático)

Abas apenas escondem/mostram via CSS/JS (sem carregar sob demanda)

Adicionar:

<title> e meta description apropriados

Canonical da própria página

Headings corretos (H1 único, H2 por seção)

Critério de aceite:

Sem conteúdo “invisível” para crawler (evitar conteúdo carregado só no client).

O texto das políticas aparece no “View Source”.

RF05 — Download/Impressão

Botão “Imprimir / Salvar PDF” por aba (usa print do navegador)

Estilo @media print para imprimir apenas a aba ativa

Critério de aceite:

Ao imprimir, não sai menu, não sai abas redundantes; sai só o documento.

RF06 — Controle de versão (mínimo)

Cada aba exibe:

“Última atualização: DD/MM/AAAA”

(opcional) “Versão: v1.0”

Alteração manual pelo editor do site/código.

Critério de aceite:

Data aparece no topo e é atualizável.

5) Requisitos de conteúdo (mínimo legal)
Privacidade (LGPD)

Controladora, dados coletados, finalidades, bases legais, compartilhamento, direitos do titular, retenção, segurança, contato DPO.

Termos

Aceite, elegibilidade (18+), regras da comunidade, propriedade intelectual, limitação de responsabilidade, não substitui profissionais (tema sensível), foro.

Reembolso

Garantia 7 dias, como solicitar, sem reembolso após 7 dias, cancelamento de renovação e cobranças futuras.

Cookies

Tipos, finalidade, gerenciamento, consentimento quando aplicável.

6) Requisitos não funcionais

Performance: LCP < 2.5s (página leve, sem libs pesadas)

Responsividade: 320px+ (mobile-first)

Segurança: sem conteúdo editável do lado do cliente sem sanitização (se for CMS)

Compatibilidade: Chrome, Safari, Edge (2 últimas versões)

7) UX/UI (diretrizes)

Layout:

Container central (max-width 900–1100px)

Tipografia confortável (16–18px)

Espaçamento generoso entre seções

Abas:

Estado ativo bem claro

“Sticky tabs” no topo ao rolar (opcional, recomendado)

Ações:

“Copiar link”

“Imprimir”

Conteúdo:

Seções com anchor IDs para compartilhamento

8) Estrutura de rotas e URLs

Sugestão:

/politicas (página única)

#privacidade

#termos

#reembolso

#cookies

E links no rodapé:

“Política de Privacidade” → /politicas#privacidade

“Termos de Uso” → /politicas#termos

etc.

9) Eventos e tracking (opcional, recomendado)

Evento ao trocar de aba: policy_tab_view

props: { tab: "privacidade|termos|reembolso|cookies" }

Evento ao clicar imprimir: policy_print_click

Evento ao copiar link: policy_copy_link

10) Critérios de aceite (checklist final)

 Link direto abre a aba correta

 Troca de abas atualiza hash na URL

 Mobile funciona sem quebrar

 Navegação por teclado (setas/enter) funciona

 Conteúdo aparece no HTML (SSR/estático)

 Print imprime somente conteúdo da aba ativa

 Data de atualização visível

 Links do rodapé apontam para as abas corretas

11) Entregáveis

Página /politicas implementada

Conteúdo das 4 políticas inserido

Estilos de print

(Opcional) tracking GA4/Pixel

12) Riscos e mitigação

Risco SEO: conteúdo carregado apenas no client → mitigação: SSR/estático com conteúdo no HTML.

Risco LGPD: políticas incompletas ou sem contato DPO → mitigação: placeholders obrigatórios e validação antes de publicar.

Risco de confusão: assinatura/cancelamento pouco claro → mitigação: seção “Como cancelar renovação” com passo a passo.