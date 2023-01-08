import { Router } from "express";
import { createForm } from "../controllers/createForm.controller";
import { getForm } from "../controllers/getForm.controller";
import { getForms } from "../controllers/getForms.controller";

const router = Router();

router.get("/forms", getForms);
router.post("/forms", createForm);
router.get("/forms/:id", getForm);
// router.delete("/pdfs/:id", deletePdf);

export default router;
