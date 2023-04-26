export class User {
    public get subscription(): boolean {
        return this._subscription;
    }
    public set subscription(value: boolean) {
        this._subscription = value;
    }

    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    public get province(): string {
        return this._province;
    }
    public set province(value: string) {
        this._province = value;
    }
    public get country(): string {
        return this._country;
    }
    public set country(value: string) {
        this._country = value;
    }
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get id(): string {
        return this._id;
    }
    private set id(value: string) {
        this._id = value;
    }

    constructor(
        private _id: string,
        private _name: string,
        private _lastName: string,
        private _country: string,
        private _province: string,
        private _email: string,
        private _password: string,
        private _subscription: boolean) {

    }

}