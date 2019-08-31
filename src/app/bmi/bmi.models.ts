export class Person {

  constructor(
    public weightKg: number = 50,
    public heightCm: number = 180
  ) { }

  public bmi() {
    const heightMeters = this.heightCm / 100.0;
    return this.weightKg / (heightMeters ** 2);
  }

  public bmiCategory() {
    const bmi = this.bmi();

    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi > 25.0) {
      return 'Overweight';
    } else {
      return 'Normal';
    }
  }
}
