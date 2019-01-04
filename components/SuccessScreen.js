import { Icon, Section } from "bloomer";

export default () => {
  return (
    <Section hasTextColor='primary'
      style={{
        position: 'absolute',
        left: '40%'
      }}
    >
      <div>
        <Icon className="fas fa-thumbs-up fa-2x" />
      </div>
    </Section>
  );
};
