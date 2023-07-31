const { menuPrincipal, pausa } = require("./helpers/menu");

const main = async () => {
  let op = "";
  do {
    op = await menuPrincipal();
    console.log({ op });
    if (op !== "0") await pausa();
  } while (op !== "0");
};
main();
