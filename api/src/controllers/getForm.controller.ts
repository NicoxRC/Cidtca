import { Form } from "../models/Form";
import { Request, Response } from "express";

export const getForm = async (req: Request, res: Response) => {
  const { id } = req.params;
  let findedForm: object;
  try {
    findedForm = await Form.findByPk(id);
    if (!findedForm) throw new Error("Not found.");
    res.status(200).json(findedForm);
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
};
