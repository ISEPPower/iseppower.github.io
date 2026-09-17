import type { Locale } from '../utils/i18n';

// Update only when the team confirms a change. Stages are not dated commitments.
export const currentWeek = 1;
export const projectCopy = {
  en: {
    week: 'Week 1', focus: 'Project kickoff',
    now: 'Current focus', nowText: 'Opening the project journal and framing the demand response question.',
    next: 'Next proposed output', nextText: 'A short scope note: target user, flexible task, inputs and constraints. Not yet published.',
    journal: 'Latest report', journalText: 'Week 1 · An opening record, updated as the week progresses.',
    read: 'Read the week 1 report', stageTitle: 'From a question to an explained decision',
    stageIntro: 'We are in week 1. Later stages describe the proposed direction; their dates and detailed scope are not confirmed.',
    active: 'In progress', planned: 'Planned',
    stages: [
      ['Problem & scope', 'Frame the decision question and identify which user constraints need to be clarified.'],
      ['Knowledge acquisition', 'Identify sources and record what each source contributes to the decision problem.'],
      ['Decision rules', 'Choose a representation and document the assumptions behind candidate rules.'],
      ['Advisory prototype', 'Connect agreed inputs to recommendations and readable explanations.'],
      ['Evaluation', 'Agree on test scenarios, review behaviour and document limitations.'],
    ],
  },
  pt: {
    week: 'Semana 1', focus: 'Arranque do projeto',
    now: 'Foco atual', nowText: 'Iniciar o diário do projeto e enquadrar a questão de resposta da procura.',
    next: 'Próximo resultado proposto', nextText: 'Uma nota de âmbito: utilizador-alvo, tarefa flexível, dados e restrições. Ainda não publicada.',
    journal: 'Relatório mais recente', journalText: 'Semana 1 · Um registo inicial, atualizado ao longo da semana.',
    read: 'Ler o relatório da semana 1', stageTitle: 'De uma questão a uma decisão explicada',
    stageIntro: 'Estamos na semana 1. As fases seguintes descrevem a orientação proposta; as datas e o âmbito detalhado ainda não estão confirmados.',
    active: 'Em curso', planned: 'Planeada',
    stages: [
      ['Problema e âmbito', 'Enquadrar a questão de decisão e identificar as restrições do utilizador a esclarecer.'],
      ['Aquisição de conhecimento', 'Identificar fontes e registar o contributo de cada uma para o problema de decisão.'],
      ['Regras de decisão', 'Escolher uma representação e documentar os pressupostos das regras candidatas.'],
      ['Protótipo de aconselhamento', 'Ligar os dados acordados a recomendações e explicações compreensíveis.'],
      ['Avaliação', 'Acordar cenários de teste, analisar o comportamento e documentar limitações.'],
    ],
  },
} satisfies Record<Locale, unknown>;
