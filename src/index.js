const sum = (...args) => {
  return args.reduce((total, arg) => total + arg, 0);
};

export default {
  sum,
};
