import styled from 'styled-components';

export const Container = styled.fieldset`
	border: none;

	legend {
		font-weight: bold;
		color: #333;
		margin-bottom: 0.8rem;
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
