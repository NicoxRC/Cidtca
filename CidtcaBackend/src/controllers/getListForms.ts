import { Form } from '../models/Form';
import type { Request, Response } from 'express';
import type { FormInterface } from '../types/formInterface';

export = async (req: Request, res: Response): Promise<void> => {
  try {
    const forms: FormInterface[] = await Form.findAll();
    res.status(200).json(forms);
  } catch (error: unknown) {
    error instanceof Error
      ? res.status(400).json({ error: error.message })
      : null;
  }
};
