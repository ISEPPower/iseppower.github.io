export interface TeamMember {
  name: string;
  role?: string;
  bio: string[];
  email?: string;
  linkedin?: string;
  github?: string;
  /** A site-relative public image path, for example images/member.jpg. */
  image?: string;
}
// Add one entry per confirmed team member as their details become available.
export const team: TeamMember[] = [{
  name: 'Bernardo Cardoso',
  role: 'Researcher · SoftCPS',
  bio: [
    'Bernardo Cardoso is a Portuguese researcher and member of the Software for Cyber Physical Systems (SoftCPS) research group at the School of Engineering of the Polytechnic of Porto (ISEP). He is currently pursuing a bachelor’s degree in Informatics Engineering at the same institution.',
    'Bernardo’s technical interests lie at the intersection of Artificial Intelligence and Critical Systems. He is particularly focused on understanding how intelligent solutions can be implemented within systems where reliability and safety are paramount. Being part of the SoftCPS group allows him to actively engage with cutting-edge developments in these fields alongside experienced researchers.',
    'When he is away from his code and studies, Bernardo explores drawing and 2D animation, balancing his engineering mindset with a love for art.',
  ],
  linkedin: 'https://www.linkedin.com/in/bernardo-granja-cardoso/',
  email: '1231090@ISEP.IPP.PT',
  image: 'images/team/bernardo-cardoso.jpg',
}, {
  name: 'Francisco Lousada',
  role: 'Researcher · SoftCPS',
  bio: [
    'Francisco Lousada is a Portuguese researcher and member of the Software for Cyber Physical Systems (SoftCPS) research group at the School of Engineering of the Polytechnic of Porto (ISEP), where he is currently pursuing his bachelor’s degree in Informatics Engineering.',
    'Driven by a practical approach to real-world problems, Francisco focuses on software engineering best practices, organization, and teamwork. He is dedicated to building robust software and continuously deepening his technical knowledge through both academic research and personal study. His interests also lie in Artificial Intelligence, specifically in Computer Vision, Neural Networks, and Machine Learning, areas where he is looking to gain more hands-on experience and insight.',
    'When he is not focused on his studies or research, Francisco enjoys playing and learning the guitar, watching movies, listening to music, and gaming.',
  ],
  linkedin: 'https://www.linkedin.com/in/francisco-lousada/',
  email: '1231092@ISEP.IPP.PT',
  image: 'images/team/francisco-lousada.png',
}, {
  name: 'Laura Branco Múrias',
  bio: [],
  email: '1220717@ISEP.IPP.PT',
  image: 'images/team/laura-branco-murias.jpg',
}, {
  name: 'Sepehr Shojaee',
  role: 'Software Engineer & Researcher · GECAD',
  bio: [
    'Sepehr Shojaee is a Software Engineer and Researcher with over 10 years of professional experience in software development, particularly in backend systems and .NET technologies.',
    'He is currently a Researcher at GECAD-Research Group on Intelligent Engineering and Computing for Advanced Innovation and Development, ISEP/IPP, Portugal, and is pursuing a Master’s degree in Artificial Intelligence at the Polytechnic Institute of Porto.',
    'His current work focuses on the development of intelligent software solutions for energy systems and energy communities, including data integration, simulation, data analysis, and performance evaluation. His research interests include artificial intelligence, software engineering, intelligent systems, data analytics, optimization, distributed energy resources, energy communities, and smart energy systems.',
  ],
  linkedin: 'https://www.linkedin.com/in/sepehrshojaee/',
  email: '1260448@ISEP.IPP.PT',
  image: 'images/team/sepehr-shojaee.png',
}];
