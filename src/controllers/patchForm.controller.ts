import { Request, Response } from 'express';
import { Form } from '../models/Form';

export const patchForms = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { pregunta_23, pregunta_23_gps_n, pregunta_23_gps_w, pregunta_24 } =
      req.body;
    const findForm = await Form.findByPk(id);
    if (!findForm) return res.status(404).json({ msg: 'Form not found' });

    const fields: any = {};
    if (pregunta_23) fields.pregunta_23 = pregunta_23;
    if (pregunta_23_gps_n && pregunta_23_gps_w) {
      fields.pregunta_23_gps = `N: ${pregunta_23_gps_n} W: ${pregunta_23_gps_w}`;
    } else {
      throw new Error('bad request.');
    }
    if (pregunta_24) fields.pregunta_24 = pregunta_24;

    if (Object.entries(fields).length === 0) throw new Error('Not enough info');

    await findForm.update(fields);
    res.status(200).json(findForm);
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }
};
