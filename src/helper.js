const log = (function (environment) {
  if (environment === "production") {
    return () => {};
  }
  return (...args) => {
    console.log(...args);
  };
})(import.meta.env.MODE);

export { log };
