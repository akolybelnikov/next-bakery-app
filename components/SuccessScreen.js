import { Icon, Section } from "bloomer";

export default () => {
  return (
    <Section
      style={{
        minHeight: "50vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        maxWidth: "60vw",
        margin: "0 auto"
      }}
      className="has-text-centered has-text-primary"
    >
      <div>
        <Icon className="fas fa-thumbs-up fa-2x" />
      </div>
    </Section>
  );
};
