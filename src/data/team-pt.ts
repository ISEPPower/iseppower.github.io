import { team, type TeamMember } from './team';

// Contact details and photos stay in team.ts; only role and biography are translated.
const translations: Record<string, Pick<TeamMember, 'role' | 'bio'>> = {
  '1220822@ISEP.IPP.PT': {
    role: 'Estudante e Bolseiro de Investigação · GECAD',
    bio: [
      'Gonçalo Jesus é estudante e investigador no Instituto Superior de Engenharia do Porto (ISEP), onde frequenta o Mestrado em Engenharia de Inteligência Artificial.',
      'Trabalha como bolseiro de investigação no GECAD (Grupo de Investigação em Engenharia e Computação Inteligente para a Inovação e o Desenvolvimento Avançados), uma unidade de investigação e desenvolvimento integrada no ISEP.',
    ],
  },
  '1231090@ISEP.IPP.PT': {
    role: 'Investigador · SoftCPS',
    bio: [
      'Bernardo Cardoso é um investigador português e membro do grupo de investigação Software for Cyber Physical Systems (SoftCPS) do Instituto Superior de Engenharia do Porto (ISEP). Atualmente, frequenta a licenciatura em Engenharia Informática na mesma instituição.',
      'Os interesses técnicos de Bernardo situam-se na interseção entre a Inteligência Artificial e os Sistemas Críticos. Dedica especial atenção à compreensão de como implementar soluções inteligentes em sistemas nos quais a fiabilidade e a segurança são fundamentais. A integração no grupo SoftCPS permite-lhe acompanhar ativamente os avanços nestas áreas, em colaboração com investigadores experientes.',
      'Fora da programação e dos estudos, Bernardo explora o desenho e a animação 2D, conciliando a sua perspetiva de engenharia com o gosto pela arte.',
    ],
  },
  '1231092@ISEP.IPP.PT': {
    role: 'Investigador · SoftCPS',
    bio: [
      'Francisco Lousada é um investigador português e membro do grupo de investigação Software for Cyber Physical Systems (SoftCPS) do Instituto Superior de Engenharia do Porto (ISEP), onde frequenta atualmente a licenciatura em Engenharia Informática.',
      'Orientado por uma abordagem prática aos problemas do mundo real, Francisco centra-se nas boas práticas de engenharia de software, na organização e no trabalho em equipa. Dedica-se à criação de software robusto e ao aprofundamento contínuo dos seus conhecimentos técnicos, tanto através da investigação académica como do estudo pessoal. Os seus interesses incluem também a Inteligência Artificial, em particular Visão por Computador, Redes Neuronais e Aprendizagem Automática, áreas nas quais procura adquirir mais experiência prática e conhecimento.',
      'Quando não está dedicado aos estudos ou à investigação, Francisco gosta de tocar e aprender guitarra, ver filmes, ouvir música e jogar videojogos.',
    ],
  },
  '1220717@ISEP.IPP.PT': {
    role: 'Investigadora Contratada · ISEP',
    bio: [
      'Laura Branco Múrias é uma investigadora portuguesa na área da engenharia que trabalha atualmente como Investigadora Contratada no Instituto Superior de Engenharia do Porto (ISEP), integrado no Instituto Politécnico do Porto.',
      'O seu percurso profissional e académico inclui os seguintes aspetos:',
      'Formação atual: Frequenta uma pós-graduação em Investigação e Desenvolvimento em Engenharia no ISEP, no ano letivo de 2025–2026.',
      'Atividade de investigação: A sua função de investigadora contratada na instituição teve início em 5 de dezembro de 2025.',
    ],
  },
  '1260448@ISEP.IPP.PT': {
    role: 'Engenheiro de Software e Investigador · GECAD',
    bio: [
      'Sepehr Shojaee é engenheiro de software e investigador, com mais de 10 anos de experiência profissional em desenvolvimento de software, em particular em sistemas de backend e tecnologias .NET.',
      'Atualmente, é investigador no GECAD — Grupo de Investigação em Engenharia e Computação Inteligente para a Inovação e o Desenvolvimento Avançados, ISEP/IPP, Portugal — e frequenta um mestrado em Inteligência Artificial no Instituto Politécnico do Porto.',
      'O seu trabalho atual centra-se no desenvolvimento de soluções de software inteligentes para sistemas e comunidades de energia, incluindo integração de dados, simulação, análise de dados e avaliação de desempenho. Os seus interesses de investigação incluem inteligência artificial, engenharia de software, sistemas inteligentes, análise de dados, otimização, recursos energéticos distribuídos, comunidades de energia e sistemas energéticos inteligentes.',
    ],
  },
  '1221174@ISEP.IPP.PT': {
    role: 'Investigadora Contratada · GECAD',
    bio: [
      'Sofia Moreira Cardoso é investigadora contratada no GECAD (Grupo de Investigação em Engenharia e Computação Inteligente para a Inovação e o Desenvolvimento), sediado no ISEP (Instituto Superior de Engenharia do Porto) / Instituto Politécnico do Porto.',
    ],
  },
};

export const portugueseTeam: TeamMember[] = team.map(member => {
  const translation = translations[member.email ?? ''];
  if (!translation) throw new Error(`Missing Portuguese team biography: ${member.name}`);
  return { ...member, ...translation };
});
