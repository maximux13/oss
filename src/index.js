const base = cb => (...args) =>
  args.slice(1).reduce((total, arg) => cb(total, arg), args[0]);

export const sum = base((a, b) => a + b);

export const substract = base((a, b) => a - b);

export const times = base((a, b) => a * b);
