import express from "express";
import formRoutes from "./routes/form.routes";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";

const app = express();
app.use(express.json({ limit: "10mb" }));
app.use(
  express.urlencoded({ limit: "10mb", extended: true, parameterLimit: 50000 })
);
app.use(cors());
app.use(formRoutes);
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(morgan("dev"));

export default app;
