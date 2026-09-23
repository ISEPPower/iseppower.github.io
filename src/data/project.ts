import type { Locale } from '../utils/i18n';

// Update only when the team confirms a change. Stages are not dated commitments.
export const currentWeek = 2;
export const projectCopy = {
  en: {
    week: 'Week 2', focus: 'Expert selected · Knowledge acquisition in progress',
    now: 'Current focus', nowText: 'João André Pinto Soares has been selected as the expert for Challenge 1. Knowledge acquisition is in progress.',
    next: 'Next proposed output', nextText: 'A short scope note: target user, flexible task, inputs and constraints. Not yet published.',
    journal: 'Latest report', journalText: 'Week 2 · Expert selection and ongoing knowledge acquisition.',
    read: 'Read the week 2 report', stageTitle: 'From a question to an explained decision',
    stageIntro: 'We are in week 2. Knowledge acquisition is in progress and scope questions remain open. Later stages are proposed, with no confirmed dates.',
    active: 'In progress', planned: 'Planned', open: 'Open questions',
    stages: [
      ['Problem & scope', 'Frame the decision question and identify which user constraints need to be clarified.'],
      ['Knowledge acquisition', 'Identify sources and record what each source contributes to the decision problem.'],
      ['Decision rules', 'Choose a representation and document the assumptions behind candidate rules.'],
      ['Advisory prototype', 'Connect agreed inputs to recommendations and readable explanations.'],
      ['Evaluation', 'Agree on test scenarios, review behaviour and document limitations.'],
    ],
  },
  pt: {
    week: 'Semana 2', focus: 'Especialista selecionado · Aquisição de conhecimento em curso',
    now: 'Foco atual', nowText: 'João André Pinto Soares foi selecionado como especialista para o Desafio 1. A aquisição de conhecimento está em curso.',
    next: 'Próximo resultado proposto', nextText: 'Uma nota de âmbito: utilizador-alvo, tarefa flexível, dados e restrições. Ainda não publicada.',
    journal: 'Relatório mais recente', journalText: 'Semana 2 · Seleção do especialista e aquisição de conhecimento em curso.',
    read: 'Ler o relatório da semana 2', stageTitle: 'De uma questão a uma decisão explicada',
    stageIntro: 'Estamos na semana 2. A aquisição de conhecimento está em curso e existem questões de âmbito em aberto. As fases seguintes são propostas, sem datas confirmadas.',
    active: 'Em curso', planned: 'Planeada', open: 'Questões em aberto',
    stages: [
      ['Problema e âmbito', 'Enquadrar a questão de decisão e identificar as restrições do utilizador a esclarecer.'],
      ['Aquisição de conhecimento', 'Identificar fontes e registar o contributo de cada uma para o problema de decisão.'],
      ['Regras de decisão', 'Escolher uma representação e documentar os pressupostos das regras candidatas.'],
      ['Protótipo de aconselhamento', 'Ligar os dados acordados a recomendações e explicações compreensíveis.'],
      ['Avaliação', 'Acordar cenários de teste, analisar o comportamento e documentar limitações.'],
    ],
  },
} satisfies Record<Locale, unknown>;
