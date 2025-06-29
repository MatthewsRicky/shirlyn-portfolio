import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  ContainerProps,
} from "@react-email/components";

import { Tailwind } from "@react-email/tailwind";
//import { sendEmail } from "@/actions/sendEmails";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New Message from your Portfolio</Preview>
      <Tailwind>
        <Body className="bg-gray-100">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You receeived thhe following meessage from the portfolio contact
                form
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender`&apos;`s email is {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
