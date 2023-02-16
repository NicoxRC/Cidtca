import { User } from '../models/User';
import { Request, Response } from 'express';

export const postUser = async (req: Request, res: Response) => {
  try {
    const { user, password } = req.body;
    if (!user || !password) throw new Error('Bad Request.');
    const newUser = await User.create({ user, password });

    res.status(202).json(newUser);
  } catch (error) {
    res.status(400).json(error);
  }
};
