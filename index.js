module.exports = mlgproxy;

function mlgproxy(object, options = {}) {
  const handler = {
    get: function(target, prop) {
      let newName = prop.toString().replace(/0/g, "o").replace(/3/g,
          "e")
        .replace(/4/g, "a").replace(/8/g, "ate")
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

      if (typeof target[newName] === "object") {
        return mlgproxy(target[newName], options);
      }

      return target[newName];
    },
    set: function(target, prop, value) {
      let newName = prop.toString().replace(/0/g, "o").replace(/3/g, "e")
        .replace(/4/g, "a").replace(/8/g, "ate")
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
