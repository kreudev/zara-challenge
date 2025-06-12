export class Price {
  private constructor(
    private readonly amount: number,
    private readonly currency: string = 'EUR',
  ) {
    if (amount < 0) {
      throw new Error('Price cannot be negative')
    }
  }

  static create(amount: number, currency: string = 'EUR'): Price {
    return new Price(amount, currency)
  }

  getValue(): number {
    return this.amount
  }

  getCurrency(): string {
    return this.currency
  }

  equals(other: Price): boolean {
    return this.amount === other.amount && this.currency === other.currency
  }

  toString(): string {
    return `${this.amount} ${this.currency}`
  }
}
