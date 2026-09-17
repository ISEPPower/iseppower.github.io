export interface TeamMember {
  name: string;
  role: string;
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
}];
