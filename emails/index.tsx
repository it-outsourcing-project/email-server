import * as React from 'react';
import {
  Column,
  Container,
  Head,
  Heading,
  Html,
  Row,
  Section,
  Tailwind,
} from '@react-email/components';

function formatter(date) {
  return new Intl.DateTimeFormat('ru', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

export default function Email({ name, email, phone, message }) {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              brand: 'F48E0B',
            },
          },
        },
      }}
    >
      <Html lang="pl">
        <Head>
          <title>Пришла новая заявка на заказ</title>
        </Head>
        <Container className="">
          <Heading className="text-sm lg:text-xl text-center" as="h1">
            Дата заявки: {formatter(new Date())}
          </Heading>
          <Section className="space-y-2">
            <Row className="border-b border-neutral-300">
              <Column className="font-bold text-neutral-400 text-center">
                Имя
              </Column>
            </Row>
            <Row className="border-b border-neutral-300">
              <Column className="text-black text-center">{name}</Column>
            </Row>

            <Row className="border-b border-neutral-300">
              <Column className="font-bold text-neutral-400 text-center">
                Номер телефона
              </Column>
            </Row>
            <Row className="border-b border-neutral-300">
              <Column className="text-black text-center">{phone}</Column>
            </Row>

            <Row className="border-b border-neutral-300">
              <Column className="font-bold text-neutral-400 text-center">
                Email
              </Column>
            </Row>
            <Row className="border-b border-neutral-300">
              <Column className="text-black text-center">{email}</Column>
            </Row>

            <Row className="border-b border-neutral-300">
              <Column className="font-bold text-neutral-400 text-center">
                Дополнительная информация
              </Column>
            </Row>
            <Row className="border-b border-neutral-300">
              <Column className="text-black text-center">{message}</Column>
            </Row>
          </Section>
        </Container>
      </Html>
    </Tailwind>
  );
}
