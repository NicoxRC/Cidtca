import { User } from '../models/User';
import type { Request, Response } from 'express';
import type { UserInterface } from '../interfaces/user';

export = async (req: Request, res: Response): Promise<void> => {
  try {
    const { user, password } = req.body;
    if (!user || !password) throw new Error('Bad Request.');
    const newUser: UserInterface = await User.create({ user, password });

    res.status(202).json(newUser);
  } catch (error: unknown) {
    error instanceof Error
      ? res.status(400).json({ ërror: error.message })
      : null;
  }
};
