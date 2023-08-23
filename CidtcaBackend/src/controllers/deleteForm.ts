import { Form } from '../models/Form';
import type { Request, Response } from 'express';

export = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const deleteForm = await Form.findByPk(id);

    if (!deleteForm) throw new Error('Bad request.');

    await deleteForm.destroy();
    res.status(202).json({ msg: 'accepted.' });
  } catch (error: unknown) {
    error instanceof Error
      ? res.status(400).json({ error: error.message })
      : null;
  }
};
