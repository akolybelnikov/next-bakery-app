import { Message, MessageBody, Section } from "bloomer";
import Link from "next/link";

export default () => {
  return (
    <Section
      style={{
        minHeight: "50vh",
        flexDirection: "column",
        justifyContent: "center",
        display: "flex",
        maxWidth: "60vw",
        margin: '0 auto'
      }}
      className="has-text-centered"
    >
      <Message>
        <MessageBody>Произошла досадная ошибка!</MessageBody>
      </Message>
      <Link href="/">
        <a className="button is-primary is-small is-outlined">
          Вернуться в хорошее место.
        </a>
      </Link>
    </Section>
  );
};
