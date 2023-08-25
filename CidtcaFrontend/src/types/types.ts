import type { FormInterface } from './formInterface';
import type { CardPropsInterface } from './interfaces';

export type CardsPropsType = { forms: FormInterface[] };
export type FormDetailsIdType = Pick<CardPropsInterface, 'id'>;
