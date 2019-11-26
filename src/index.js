export const sum = (...args) => {
  return args.reduce((total, arg) => total + arg, 0);
};

export const substract = (...args) => {
  return args.slice(1).reduce((total, arg) => total - arg, args[0]);
};

export const times = (...args) => {
  return args.slice(1).reduce((total, arg) => total * arg, args[0]);
};
