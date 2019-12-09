import styled from 'styled-components';

export const Container = styled.fieldset`
	border: none;

	legend {
		font-weight: bold;
		color: #333;
		margin-bottom: 0.8rem;
	}

	span {
		color: #e84118;
		font-size: 1.2rem;
	}

	@media (min-width: 600px) {
		> div {
			display: flex;
			justify-content: space-between;

			> div {
				width: calc(25% - 0.8rem);
			}
		}
	}
`;
