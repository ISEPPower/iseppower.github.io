import type { Locale } from '../utils/i18n';

// Update only when the team confirms a change. Stages are not dated commitments.
export const currentWeek = 3;
export const latestReport = 'blog/week-3-first-prototype/';
export type StageStatus = 'open' | 'review' | 'active' | 'started' | 'planned';
// One status per stage, in the same order as `stages` below. 'active' is the current focus.
export const stageStatus: StageStatus[] = ['open', 'review', 'active', 'started', 'planned'];
export const projectCopy = {
  en: {
    week: 'Week 3', focus: 'Expert-reviewed knowledge base · First Prolog/Drools prototype',
    now: 'Current focus', nowText: 'Prof. João Soares reviewed our rule logic. The first rule (R001) runs end to end in both SWI-Prolog and Drools.',
    next: 'Next proposed output', nextText: 'A revised knowledge base with the grid’s Demand Response event, target and progress, for a follow-up expert review.',
    journal: 'Latest report', journalText: 'Week 3 · Expert review of the knowledge base and first working prototype.',
    read: 'Read the week 3 report', stageTitle: 'From a question to an explained decision',
    stageIntro: 'We are in week 3. The expert has reviewed the rule structure and a first rule runs in both inference engines. The Demand Response event logic is being added. Later stages are proposed, with no confirmed dates.',
    status: { open: 'Open questions', review: 'Expert-reviewed', active: 'In progress', started: 'Started', planned: 'Planned' },
    stages: [
      ['Problem & scope', 'Frame the decision question and define the case study: residential customer, flexible appliances and Demand Response program.'],
      ['Knowledge acquisition', 'Identify sources and record what each source contributes to the decision problem.'],
      ['Decision rules', 'Choose a representation and document the assumptions behind candidate rules.'],
      ['Advisory prototype', 'Connect agreed inputs to recommendations and readable explanations.'],
      ['Evaluation', 'Agree on test scenarios, review behaviour and document limitations.'],
    ],
  },
  pt: {
    week: 'Semana 3', focus: 'Base de conhecimento revista pelo especialista · Primeiro protótipo em Prolog/Drools',
    now: 'Foco atual', nowText: 'O Prof. João Soares reviu a nossa lógica de regras. A primeira regra (R001) funciona de ponta a ponta em SWI-Prolog e em Drools.',
    next: 'Próximo resultado proposto', nextText: 'Uma base de conhecimento revista, com o evento, o objetivo e o progresso de Demand Response pedidos pela rede, para nova revisão do especialista.',
    journal: 'Relatório mais recente', journalText: 'Semana 3 · Revisão da base de conhecimento pelo especialista e primeiro protótipo funcional.',
    read: 'Ler o relatório da semana 3', stageTitle: 'De uma questão a uma decisão explicada',
    stageIntro: 'Estamos na semana 3. O especialista reviu a estrutura das regras e uma primeira regra funciona em ambos os motores de inferência. A lógica do evento de Demand Response está a ser acrescentada. As fases seguintes são propostas, sem datas confirmadas.',
    status: { open: 'Questões em aberto', review: 'Revisto pelo especialista', active: 'Em curso', started: 'Iniciado', planned: 'Planeada' },
    stages: [
      ['Problema e âmbito', 'Enquadrar a questão de decisão e definir o caso de estudo: cliente residencial, equipamentos flexíveis e programa de Demand Response.'],
      ['Aquisição de conhecimento', 'Identificar fontes e registar o contributo de cada uma para o problema de decisão.'],
      ['Regras de decisão', 'Escolher uma representação e documentar os pressupostos das regras candidatas.'],
      ['Protótipo de aconselhamento', 'Ligar os dados acordados a recomendações e explicações compreensíveis.'],
      ['Avaliação', 'Acordar cenários de teste, analisar o comportamento e documentar limitações.'],
    ],
  },
} satisfies Record<Locale, unknown>;
