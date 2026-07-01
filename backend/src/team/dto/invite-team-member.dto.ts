export class InviteTeamMemberDto {
  name: string;
  email: string;
  phone?: string;
  role: 'MANAGER' | 'WORKER';
  temporaryPassword?: string;
}
