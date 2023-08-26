import { Form } from '../models/Form';
import type { Request, Response } from 'express';
import type { FormInterface } from '../interfaces/form';

export = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  let findedForm: FormInterface;
  try {
    findedForm = await Form.findByPk(id);
    if (!findedForm) throw new Error('Not found.');
    res.status(200).json(findedForm);
  } catch (error: unknown) {
    error instanceof Error
      ? res.status(400).json({ error: error.message })
      : null;
  }
};
