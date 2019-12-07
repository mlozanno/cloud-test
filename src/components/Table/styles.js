import styled from 'styled-components';

export const Container = styled.table`
	width: 100%;
	overflow-x: auto;
	border-collapse: collapse;

	text-align: left;

	th,
	td {
		padding: 0.8rem;
		vertical-align: middle;
		width: 25%;
	}

	th {
		background: #92fe9d;
		color: #333;
	}

	tbody > tr:nth-child(odd) {
		background-color: #f0f0f0;
	}

	tbody > tr > td:last-child {
		text-align: center;
	}

	td > svg {
		color: #e84118;
		font-size: 1.8rem;
		cursor: pointer;
	}
`;
