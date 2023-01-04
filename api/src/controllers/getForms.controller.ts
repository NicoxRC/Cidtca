import { Form } from "../models/Form";
import { Request, Response } from "express";

export const getForms = async (req: Request, res: Response) => {
  try {
    const forms = await Form.findAll();
    res.status(200).json(forms);
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
};
