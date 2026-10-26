import type { Locale } from '../utils/i18n';

// Update only when the team confirms a change. Stages are not dated commitments.
export const currentWeek = 6;
export const latestReport = 'blog/week-6-challenge-delivered/';
export type StageStatus = 'open' | 'defined' | 'review' | 'active' | 'started' | 'planned' | 'complete';
// One status per stage, in the same order as `stages` below. 'active' is the current focus.
export const stageStatus: StageStatus[] = ['complete', 'complete', 'complete', 'complete', 'complete'];
export const projectCopy = {
  en: {
    week: 'Week 6', focus: 'Challenge 1 delivered · Final presentation and Demo Day',
    now: 'Current focus', nowText: 'The two final reports were delivered on 25 October. We present the work on 26 October and take part in the Pitch / Demo Day on 28 October.',
    next: 'After the challenge', nextText: 'Possible next steps: real hourly prices (PVPC), several programmes per appliance and coordination across an energy community.',
    journal: 'Latest report', journalText: 'Week 6 · Challenge delivered: final rules, results, real-world context and the final film.',
    read: 'Read the week 6 report', stageTitle: 'From a question to an explained decision',
    stageIntro: 'Challenge 1 is complete. Every stage was carried out in six weeks, reviewed with the expert and documented in the final reports.',
    status: { open: 'Open questions', defined: 'Defined', review: 'Expert-reviewed', active: 'In progress', started: 'Started', planned: 'Planned', complete: 'Complete' },
    stages: [
      ['Problem & scope', 'Case study defined: one CoSSMic household with rooftop PV, three flexible appliances and a SHIFTING Demand Response event, over 48 hours in 15-minute steps.'],
      ['Knowledge acquisition', 'Challenge material, course material, literature and two sessions with Prof. João Soares, which added the grid’s Demand Response request to the rules.'],
      ['Decision rules', '14 assessment rules and 9 decision rules in three priority levels: appliance constraints, the grid’s request, household savings.'],
      ['Advisory prototype', 'Drools and Prolog behind a live web app, with How and Why-not explanations for every START_NOW / DEFER decision.'],
      ['Evaluation', 'Eight reference scenarios, nine Demand Response scenarios, an exhaustive Drools–Prolog test of 6,912 combinations and documented limitations.'],
    ],
  },
  pt: {
    week: 'Semana 6', focus: 'Desafio 1 entregue · Apresentação final e Demo Day',
    now: 'Foco atual', nowText: 'Os dois relatórios finais foram entregues a 25 de outubro. Apresentamos o trabalho a 26 de outubro e participamos no Pitch / Demo Day a 28 de outubro.',
    next: 'Depois do desafio', nextText: 'Próximos passos possíveis: preços horários reais (PVPC), vários programas por equipamento e coordenação numa comunidade de energia.',
    journal: 'Relatório mais recente', journalText: 'Semana 6 · Desafio entregue: regras finais, resultados, contexto real e o filme final.',
    read: 'Ler o relatório da semana 6', stageTitle: 'De uma questão a uma decisão explicada',
    stageIntro: 'O Desafio 1 está concluído. Todas as fases foram realizadas em seis semanas, revistas com o especialista e documentadas nos relatórios finais.',
    status: { open: 'Questões em aberto', defined: 'Definido', review: 'Revisto pelo especialista', active: 'Em curso', started: 'Iniciado', planned: 'Planeada', complete: 'Concluído' },
    stages: [
      ['Problema e âmbito', 'Caso de estudo definido: uma habitação CoSSMic com FV no telhado, três equipamentos flexíveis e um evento de Demand Response do tipo SHIFTING, em 48 horas com passos de 15 minutos.'],
      ['Aquisição de conhecimento', 'Material do desafio, material das aulas, literatura e duas sessões com o Prof. João Soares, que acrescentaram o pedido de Demand Response da rede às regras.'],
      ['Regras de decisão', '14 regras de avaliação e 9 regras de decisão em três níveis de prioridade: restrições dos equipamentos, pedido da rede, poupança da casa.'],
      ['Protótipo de aconselhamento', 'Drools e Prolog por trás de uma aplicação web online, com explicações Como e Porque não para cada decisão START_NOW / DEFER.'],
      ['Avaliação', 'Oito cenários de referência, nove cenários de Demand Response, um teste exaustivo Drools–Prolog com 6 912 combinações e limitações documentadas.'],
    ],
  },
} satisfies Record<Locale, unknown>;
