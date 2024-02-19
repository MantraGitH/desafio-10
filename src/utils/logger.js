import winston from "winston";
import "winston-mongodb";

const logConfiguration = {
  transports: [
    winston.add(
      new winston.transports.MongoDB({
        options: { useUnifiedTopology: true },
        db: "mongodb+srv://camiloarias56:Camilo54750843@clusterprdm.as8xfkk.mongodb.net/ecommerce?retryWrites=true&w=majority",
        collection: "logs",
        tryReconnect: true,
        level: "error",
      })
    ),
    new winston.transports.Console({ level: "silly" }),

    new winston.transports.File({
      filename: "./logs.log",
      level: "info",
    }),
  ],
};

export const logger = winston.createLogger(logConfiguration);
