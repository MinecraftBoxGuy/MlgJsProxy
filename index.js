module.exports = function(object, options = {}) {
  const handler = {
    get: function(target, prop) {
      let newName = prop.toString().replace("0", "o").replace("3", "e")
        .replace("4", "a")
        .replace(
          /(LO+L|RE+KT)/gi, "");

      if (options.replace && typeof options.replace === "object") {

        for (const key in options.replace) {
          try {
            newName = newName.replace(new RegExp(key, 'g'), options.replace[
              key]);
          } catch (e) {
            console.log("Please use a valid regex");
          }
        }
      }

      return target[newName];
    },
    set: function(target, prop, value) {
      let newName = prop.toString().replace("0", "o").replace("3", "e")
        .replace("4", "a")
        .replace(
          /(LO+L|RE+KT)/gi, "");

      if (options.replace && typeof options.replace === "object") {

        for (const key in options.replace) {
          try {
            newName = newName.replace(new RegExp(key, 'g'), options.replace[
              key]);
          } catch (e) {
            console.log("Please use a valid regex");
          }
        }
      }

      return target[newName] = value;
    }
  };
  return new Proxy(object, handler);
};
