import { User } from '../models/User';
import { Request, Response } from 'express';

export const getUser = async (req: Request, res: Response) => {
  try {
    const { user, password } = req.query;
    const users = await User.findAll();

    if (users[0].user !== user || users[0].password !== password) {
      throw new Error('Not Found.');
    }

    res.status(200).json(users);
  } catch (error) {
    res.status(404).json(error);
  }
};
