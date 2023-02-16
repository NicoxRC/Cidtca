import { Request, Response } from 'express';
import { Form } from '../models/Form';

export const deleteForm = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleteForm = await Form.findByPk(id);

    if (!deleteForm) throw new Error('Bad request.');

    await deleteForm.destroy();
    res.status(202).json({ msg: 'accepted.' });
  } catch (error) {
    res.status(400).json(error);
  }
};
