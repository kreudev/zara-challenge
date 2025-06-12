import { Price } from './Price'

export class Storage {
  private constructor(
    private readonly capacity: string,
    private readonly price: Price,
  ) {}

  static create(capacity: string, price: Price): Storage {
    return new Storage(capacity, price)
  }

  getCapacity(): string {
    return this.capacity
  }

  getPrice(): Price {
    return this.price
  }
}
