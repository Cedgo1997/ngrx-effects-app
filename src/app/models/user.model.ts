export class UserModel {
  constructor(
    public id: string,
    public first_name: string,
    public last_name: string,
    public email: string,
    public avatar: string
  ) {}
}
