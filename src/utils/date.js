// Convert a PrimeReact Calendar value (a Date, or '' when empty) into a
// YYYY-MM-DD string for use as a query param, or undefined when not set so
// axios omits it.
export const toDateParam = (value) =>
  value instanceof Date ? value.toISOString().slice(0, 10) : undefined;
