export class Asset {

  constructor(
    public symbol: string,
    public fullName: string,
    public price: number = 0,
    public volume: number = 0
  ) { }

  public get total() {
    return this.price * this.volume;
  }
}
