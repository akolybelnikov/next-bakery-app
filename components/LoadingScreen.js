import { Icon, Section } from 'bloomer';

export default () => {
	return (
		<Section
			style={{
				minHeight: '50vh',
				justifyContent: 'center',
				alignItems: 'center',
				display: 'flex',
				maxWidth: '60vw',
				margin: '0 auto',
			}}
			className="has-text-centered"
		>
			<div>
				<Icon
					className="fas fa-spinner fa-pulse fa-2x"
					style={{ display: 'block' }}
				/>
			</div>
		</Section>
	);
};
