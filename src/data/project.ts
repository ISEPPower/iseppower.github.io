import type { Locale } from '../utils/i18n';

// Update only when the team confirms a change. Stages are not dated commitments.
export const currentWeek = 4;
export const latestReport = 'blog/week-4-rule-engine-prototype/';
export type StageStatus = 'open' | 'defined' | 'review' | 'active' | 'started' | 'planned';
// One status per stage, in the same order as `stages` below. 'active' is the current focus.
export const stageStatus: StageStatus[] = ['defined', 'review', 'active', 'started', 'started'];
export const projectCopy = {
  en: {
    week: 'Week 4', focus: 'Rule engine prototype · Knowledge base implementation',
    now: 'Current focus', nowText: 'The two-level knowledge base (A01–A12, D01–D09) runs in SWI-Prolog and Drools, deciding START_NOW or DEFER with an explanation for each request.',
    next: 'Next proposed output', nextText: 'A follow-up review of the rules, thresholds and test scenarios with Prof. João Soares.',
    journal: 'Latest report', journalText: 'Week 4 · Rule engine prototype, decision explanations and test scenarios.',
    read: 'Read the week 4 report', stageTitle: 'From a question to an explained decision',
    stageIntro: 'We are in week 4. The knowledge base, including the Demand Response event, runs in both inference engines and passes eight reference scenarios. The rules are ready for a follow-up expert review. Later stages are proposed, with no confirmed dates.',
    status: { open: 'Open questions', defined: 'Defined', review: 'Expert-reviewed', active: 'In progress', started: 'Started', planned: 'Planned' },
    stages: [
      ['Problem & scope', 'Case study defined: one CoSSMic household with rooftop PV, three flexible appliances and a SHIFTING Demand Response event, over 48 hours in 15-minute steps.'],
      ['Knowledge acquisition', 'Identify sources and record what each source contributes to the decision problem.'],
      ['Decision rules', 'Choose a representation and document the assumptions behind candidate rules.'],
      ['Advisory prototype', 'Connect agreed inputs to recommendations and readable explanations.'],
      ['Evaluation', 'Agree on test scenarios, review behaviour and document limitations.'],
    ],
  },
  pt: {
    week: 'Semana 4', focus: 'Protótipo do motor de regras · Implementação da base de conhecimento',
    now: 'Foco atual', nowText: 'A base de conhecimento em dois níveis (A01–A12, D01–D09) funciona em SWI-Prolog e em Drools, decidindo START_NOW ou DEFER com uma explicação para cada pedido.',
    next: 'Próximo resultado proposto', nextText: 'Uma nova revisão das regras, dos limiares e dos cenários de teste com o Prof. João Soares.',
    journal: 'Relatório mais recente', journalText: 'Semana 4 · Protótipo do motor de regras, explicações das decisões e cenários de teste.',
    read: 'Ler o relatório da semana 4', stageTitle: 'De uma questão a uma decisão explicada',
    stageIntro: 'Estamos na semana 4. A base de conhecimento, incluindo o evento de Demand Response, funciona em ambos os motores de inferência e passa oito cenários de referência. As regras estão prontas para nova revisão do especialista. As fases seguintes são propostas, sem datas confirmadas.',
    status: { open: 'Questões em aberto', defined: 'Definido', review: 'Revisto pelo especialista', active: 'Em curso', started: 'Iniciado', planned: 'Planeada' },
    stages: [
      ['Problema e âmbito', 'Caso de estudo definido: uma habitação CoSSMic com FV no telhado, três equipamentos flexíveis e um evento de Demand Response do tipo SHIFTING, em 48 horas com passos de 15 minutos.'],
      ['Aquisição de conhecimento', 'Identificar fontes e registar o contributo de cada uma para o problema de decisão.'],
      ['Regras de decisão', 'Escolher uma representação e documentar os pressupostos das regras candidatas.'],
      ['Protótipo de aconselhamento', 'Ligar os dados acordados a recomendações e explicações compreensíveis.'],
      ['Avaliação', 'Acordar cenários de teste, analisar o comportamento e documentar limitações.'],
    ],
  },
} satisfies Record<Locale, unknown>;
