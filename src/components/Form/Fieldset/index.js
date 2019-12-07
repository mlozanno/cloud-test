import React from 'react';

import { Container } from './styles';

export default function Fieldset({ children, legend }) {
	return (
		<Container>
			<legend>{legend}</legend>
			<div>{children}</div>
		</Container>
	);
}
