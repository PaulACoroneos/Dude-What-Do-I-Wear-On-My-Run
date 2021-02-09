import { convertFromCelsiusToFahrenheit, convertFromFahrenheitToCelcius } from "../temperature-utilities"

describe('temperature utilities', () => {
  it('converts a temperature from fahrenheit to celsius', () => {
    const temp = convertFromFahrenheitToCelcius(75);
    expect(temp).toBe(23.88888888888889)
  })
  it('converts a temperature from celsius to fahrenheit', () => {
    const temp = convertFromCelsiusToFahrenheit(25);
    expect(temp).toBe(77)
  })
})