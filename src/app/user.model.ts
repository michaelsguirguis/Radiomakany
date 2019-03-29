export class UserModel {
  constructor(
    public firstName: string,
    public lastName: string,
    public userName: string,
    public email: string,
    public phone: string,
    public joinDate: Date,
    public loginFailures: number,
    public roles: string[],
    public logins: number,
    public lastLogin: Date
  ) {}
}
