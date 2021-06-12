//Require Router
const banksRouter = require("./banks");
const storesRouter = require("./stores");
const districtsRouter = require("./districts");
const wardsRouter = require("./wards");
const typeStaffsRouter = require("./type-staffs");
const staffRouter = require("./staff");
const warehousesRouter = require("./warehouses");
//const ordersRouter = require("./orders");

function routes(app) {
  app.use("/banks", banksRouter);
  app.use("/stores", storesRouter);
  app.use("/districts", districtsRouter);
  app.use("/wards", wardsRouter);
  app.use("/type-staffs", typeStaffsRouter);
  app.use("/staffs", staffRouter);
  app.use("/warehouses", warehousesRouter);

  // app.use((req, res, next) => {
  //   res.status(400).send({
  //     status: 404,
  //     error: "Not found",
  //   });
  // });
  app.get("/", (req, res, next) => {
    throw new Error("Something went wrong!");
    res.send("Welcome to main route!");
  });
  app.use((error, req, res, next) => {
    console.error(error.stack);
    res.status(error.status || 500).send({
      status: error.status || 500,
      message: error.message || "Internal Server Error",
    });
  });
}

module.exports = routes;
