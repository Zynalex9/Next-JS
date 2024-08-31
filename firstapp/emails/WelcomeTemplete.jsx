import React from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTemplate = ({ name }) => {
  return (
    <Html>
      <Preview>Welcome Aboard</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Text style={styles.text}>Hello {name},</Text>
          <Text style={styles.message}>
            Welcome to our community! We’re thrilled to have you with us.
          </Text>
          <Link href="https://www.linkedin.com/in/zain-ali-webdev/" style={styles.link}>
            View my LinkedIn
          </Link>
        </Container>
      </Body>
    </Html>
  );
};

const styles = {
  body: {
    backgroundColor: "#f4f4f4",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  container: {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  text: {
    color: "#333333",
    fontSize: "18px",
    fontWeight: "bold",
  },
  message: {
    color: "#555555",
    fontSize: "16px",
    margin: "15px 0",
  },
  link: {
    display: "inline-block",
    backgroundColor: "#0073b1",
    color: "#ffffff",
    padding: "10px 20px",
    borderRadius: "5px",
    textDecoration: "none",
    marginTop: "20px",
  },
};

export default WelcomeTemplate;
