export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  linkedin?: string;
  github?: string;
  /** A site-relative public image path, for example images/member.jpg. */
  image?: string;
}
// Replace this placeholder and add one entry per confirmed team member.
// No team size or identities have been assumed.
export const team: TeamMember[] = [{
  name: 'Team member ? to be added',
  role: 'Role to be defined',
  bio: 'Member details and a short biography will be added during the project.',
}];
