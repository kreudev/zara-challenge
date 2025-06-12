export class Color {
  private constructor(
    private readonly name: string,
    private readonly hexCode: string,
    private readonly imageUrl: string,
  ) {
    if (!this.isValidHexCode(hexCode)) {
      throw new Error('Código de color hexadecimal inválido')
    }
  }

  static create(name: string, hexCode: string, imageUrl: string): Color {
    return new Color(name, hexCode, imageUrl)
  }

  private isValidHexCode(hex: string): boolean {
    return /^#[0-9A-F]{6}$/i.test(hex) || /^#[0-9A-F]{3}$/i.test(hex)
  }

  getName(): string {
    return this.name
  }

  getHexCode(): string {
    return this.hexCode
  }

  getImageUrl(): string {
    return this.imageUrl
  }
}
