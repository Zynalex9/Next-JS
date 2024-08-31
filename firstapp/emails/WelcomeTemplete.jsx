import React from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTemplete = ({ name }) => {
  return (
    <Html>
      <Preview>Welcome Abroad</Preview>
      <Body>
        <Container>
          <Text>Hello {name}</Text>
          <Link href="https://www.linkedin.com/in/zain-ali-webdev/">
            View my LinkedIn
          </Link>
        </Container>
      </Body>
    </Html>
  );
};

export default WelcomeTemplete;
