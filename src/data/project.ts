import type { Locale } from '../utils/i18n';

// Update only when the team confirms a change. Stages are not dated commitments.
export const currentWeek = 5;
export const latestReport = 'blog/week-5-deployment-expert-session/';
export type StageStatus = 'open' | 'defined' | 'review' | 'active' | 'started' | 'planned';
// One status per stage, in the same order as `stages` below. 'active' is the current focus.
export const stageStatus: StageStatus[] = ['defined', 'review', 'review', 'review', 'active'];
export const projectCopy = {
  en: {
    week: 'Week 5', focus: 'Advisor live on a DEI server · Second expert session',
    now: 'Current focus', nowText: 'The advisor is deployed and public. Runs can cover any 1 to 4 days of the full household dataset, and Prof. João Soares reviewed the result in a second session.',
    next: 'Next proposed output', nextText: 'The final report, including the business and organisational context, reviewed by Prof. João Soares.',
    journal: 'Latest report', journalText: 'Week 5 · Deployment, date ranges and the second expert session.',
    read: 'Read the week 5 report', stageTitle: 'From a question to an explained decision',
    stageIntro: 'We are in week 5. The advisor is deployed, and the expert reviewed the rules and the prototype in a second session. The rules were tested on other periods of the dataset, and the final report is being written.',
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
    week: 'Semana 5', focus: 'Sistema online num servidor do DEI · Segunda sessão com o especialista',
    now: 'Foco atual', nowText: 'O sistema está instalado e é público. As execuções podem abranger quaisquer 1 a 4 dias do conjunto de dados completo da habitação, e o Prof. João Soares reviu o resultado numa segunda sessão.',
    next: 'Próximo resultado proposto', nextText: 'O relatório final, incluindo o enquadramento empresarial e organizacional, revisto pelo Prof. João Soares.',
    journal: 'Relatório mais recente', journalText: 'Semana 5 · Instalação, intervalos de datas e segunda sessão com o especialista.',
    read: 'Ler o relatório da semana 5', stageTitle: 'De uma questão a uma decisão explicada',
    stageIntro: 'Estamos na semana 5. O sistema está instalado, e o especialista reviu as regras e o protótipo numa segunda sessão. As regras foram testadas noutros períodos do conjunto de dados, e o relatório final está a ser escrito.',
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
