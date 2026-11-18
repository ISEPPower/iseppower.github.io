import { team, type TeamMember } from './team';

// Contact details and photos stay in team.ts; only role and biography are translated.
const translations: Record<string, Pick<TeamMember, 'role' | 'bio'>> = {
  '1200571@ISEP.IPP.PT': {
    role: 'Doutoranda em Engenharia Eletrotécnica e de Computadores · Docente Convidada no ISEP',
    bio: [
      'Sou estudante do Programa Doutoral em Engenharia Eletrotécnica e de Computadores (PDEESC) e docente convidada no Instituto Superior de Engenharia do Porto (ISEP), Politécnico do Porto. Sou licenciada em Engenharia Eletrotécnica e de Computadores e mestre em Engenharia Eletrotécnica – Sistemas Elétricos de Energia. Antes de iniciar o doutoramento, trabalhei em vários projetos na indústria centrados em sistemas inteligentes para edifícios e infraestruturas.',
      'Atualmente, dedico-me inteiramente à minha investigação de doutoramento, que combina energias renováveis e inteligência artificial.',
    ],
  },
  '1160552@ISEP.IPP.PT': {
    role: 'Doutoramento e Investigação · GECAD',
    bio: [
      'Rúben Barreto frequenta o Doutoramento em Engenharia Eletrotécnica e de Computadores no ISEP e integra o GECAD (Grupo de Investigação em Engenharia e Computação Inteligente para a Inovação e o Desenvolvimento Avançados), com sete anos de experiência em investigação.',
      'O doutoramento, iniciado em 2024, desenvolve o projeto “NEXUS – An intra- and inter-community collaboration model for synergetic interactions and intelligent green energy management”, financiado pela Fundação para a Ciência e a Tecnologia (FCT).',
      'Concluiu a licenciatura em Engenharia Eletrotécnica e de Computadores em 2019 (classificação final de 15 valores) e o mestrado em Engenharia Eletrotécnica – Sistemas Elétricos de Energia em 2023 (classificação final de 18 valores, com distinção), no Instituto Superior de Engenharia do Porto (ISEP), Politécnico do Porto.',
      'Participou em vários projetos nacionais e internacionais, entre os quais SPEAR, TIoCPS, F4Itech, NGS, PRECISE e EnergyP2P. Este trabalho resultou em 18 publicações científicas, incluindo artigos em revistas da Elsevier, artigos em conferências e capítulos de livros publicados pela Elsevier, Springer e IEEE, bem como num conjunto de dados disponível publicamente.',
      'O seu trabalho científico centra-se em modelos de gestão de energia para comunidades de energia, em particular através de programas de resposta da procura que promovem a participação ativa dos membros da comunidade com base na sua flexibilidade, incluindo a flexibilidade energética ao nível dos edifícios.',
      'Atualmente, a sua investigação centra-se no projeto EnergyP2P, onde desenvolve modelos de otimização matemática (por exemplo, baseados em MILP) para a gestão de energia em comunidades de energia, com especial ênfase em mecanismos de transação peer-to-peer. Estes modelos procuram melhorar a gestão dos recursos energéticos distribuídos, aumentando a eficiência e a sustentabilidade do sistema e reduzindo as emissões de CO2.',
      'Fez revisão de artigos científicos, apresentou o seu trabalho em conferências internacionais e participou ativamente em vários seminários e workshops científicos.',
    ],
  },
  '1220822@ISEP.IPP.PT': {
    role: 'Estudante e Bolseiro de Investigação · GECAD',
    bio: [
      'Vitor Gonçalo Jesus é estudante e investigador no Instituto Superior de Engenharia do Porto (ISEP), onde frequenta o Mestrado em Engenharia de Inteligência Artificial.',
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
      'Atualmente, é investigador no GECAD - Grupo de Investigação em Engenharia e Computação Inteligente para a Inovação e o Desenvolvimento Avançados, ISEP/IPP, Portugal - e frequenta um mestrado em Inteligência Artificial no Instituto Politécnico do Porto.',
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
