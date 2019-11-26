const sum = (...args) => {
  return args.reduce((total, arg) => total + arg, 0);
};

const substract = (...args) => {
  return args.slice(1).reduce((total, arg) => total - arg, args[0]);
};

const times = (...args) => {
  return args.slice(1).reduce((total, arg) => total * arg, args[0]);
};

export default {
  sum,
  substract,
  times,
};
