import winston from "winston";

test("logging with level", () => {
  const logger = winston.createLogger({
    level: "debug",
    transports: [new winston.transports.Console({})],
  });

  logger.log({ level: "error", message: "Error message" });
  logger.log({ level: "warn", message: "Warn message" });
  logger.log({ level: "info", message: "Info message" });
  logger.log({ level: "http", message: "HTTP message" });
  logger.log({ level: "verbose", message: "Verbose message" });
  logger.log({ level: "debug", message: "Debug message" });
  logger.log({ level: "silly", message: "Silly message" });
});
