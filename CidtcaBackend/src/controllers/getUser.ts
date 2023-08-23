import { User } from '../models/User';
import type { Request, Response } from 'express';
import type { UserInterface } from '../types/userInterface';

export = async (req: Request, res: Response): Promise<void> => {
  try {
    const { user, password } = req.query;
    const users: UserInterface[] = await User.findAll();

    if (users[0].user !== user || users[0].password !== password) {
      throw new Error('Not Found.');
    }

    res.status(200).json(users);
  } catch (error: unknown) {
    error instanceof Error
      ? res.status(400).json({ error: error.message })
      : null;
  }
};
