export const convertFromFahrenheitToCelcius  = (value: number) =>
  (value - 32) * (5 / 9);

export const convertFromCelsiusToFahrenheit = (value: number) => value * (9 / 5) + 32;