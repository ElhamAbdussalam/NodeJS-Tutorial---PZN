import winston from "winston";

test("logging with printf format", () => {
  const logger = winston.createLogger({
    level: "info",
    format: winston.format.printf((info) => {
      return `${new Date()} : ${info.level.toUpperCase()} : ${info.message}`;
    }),
    transports: [new winston.transports.Console({})],
  });

  logger.info("Hello logger");
});
