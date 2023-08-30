import type { UserInterface } from '../interfaces/User';

export type InitialValuesLoginType = Omit<UserInterface, 'id'>;
