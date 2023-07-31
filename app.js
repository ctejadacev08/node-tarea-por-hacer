//const { menuPrincipal, pausa } = require("./helpers/menu");

const { menuInquirer, pausa } = require("./helpers/inquirerMenu");

const main = async () => {
  let op = "";
  do {
    op = await menuInquirer();
    console.log({ op });
    await pausa();
  } while (op !== "0");
};
main();
