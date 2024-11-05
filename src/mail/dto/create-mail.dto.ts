import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';
import validator from 'validator';

export const createMailSechema = z.object({
  name: z
    .string()
    .max(20, { message: 'Имя не может быть таким большим' })
    .trim()
    .refine((val: string) => val !== ' ', {
      message: 'Имя не должно содержать пустых символов',
    }),
  email: z
    .string()
    .trim()
    .email('Введите правильный адрес электронной почты')
    .refine(validator.isEmail, 'Введите правильный адрес электронной почты'),
  phone: z
    .string()
    .trim()
    .refine(validator.isMobilePhone, 'Введите правильный номер телефона'),
  message: z
    .string()
    .max(120, { message: 'Сообщение не может быть длиной более 120 символов' }),
});

export class CreateMailDto extends createZodDto(createMailSechema) {}
