import { Form } from '../models/Form';
import type { Request, Response } from 'express';

export = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const {
      pregunta_20,
      pregunta_21_n_grados,
      pregunta_21_n_minutos,
      pregunta_21_n_segundos,
      pregunta_21_w_grados,
      pregunta_21_w_minutos,
      pregunta_21_w_segundos,
      pregunta_22,
    } = req.body;

    const findForm = await Form.findByPk(id);
    if (!findForm) throw new Error('From not found.');

    const fields: any = {};
    if (pregunta_20) fields.pregunta_20 = pregunta_20;
    if (pregunta_21_n_grados)
      fields.pregunta_21_n_grados = pregunta_21_n_grados;
    if (pregunta_21_n_minutos)
      fields.pregunta_21_n_minutos = pregunta_21_n_minutos;
    if (pregunta_21_n_segundos)
      fields.pregunta_21_n_segundos = pregunta_21_n_segundos;
    if (pregunta_21_w_grados)
      fields.pregunta_21_w_grados = pregunta_21_w_grados;
    if (pregunta_21_w_minutos)
      fields.pregunta_21_w_minutos = pregunta_21_w_minutos;
    if (pregunta_21_w_segundos)
      fields.pregunta_21_w_segundos = pregunta_21_w_segundos;
    if (pregunta_22) fields.pregunta_22 = pregunta_22;

    if (Object.entries(fields).length === 0) throw new Error('Not enough info');

    await findForm.update(fields);
    res.status(200).json(findForm);
  } catch (error: unknown) {
    error instanceof Error
      ? res.status(400).json({ ërror: error.message })
      : null;
  }
};
