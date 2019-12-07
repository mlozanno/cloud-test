import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Paper({ children }) {
	return <Container>{children}</Container>;
}

Paper.propTypes = {
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
		.isRequired,
};
