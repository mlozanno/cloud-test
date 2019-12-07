import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html, body, #root {
		min-height: 100%;
	}

	html {
		font-size: 10px;
	}

	body {
		background-image: linear-gradient(to right top, #00c9ff, #00dbf8, #00eae2, #41f6c2, #92fe9d);
		-webkit-font-smoothing: antialiased !important;
	}

	body, button, input, select {
		font-family: 'Roboto', Arial, Helvetica, sans-serif;
		font-size: 1.6rem;
	}

	button, input, select {
		border: 0.1rem solid #ccc;
		border-radius: 0;
		height: 4rem;
		padding: 0 0.8rem;
		width: 100%;
		outline: none;
		margin: 0.4rem 0;
	}

	button {
		background: #92fe9d;
		border: none;
		cursor: pointer;
		transition: background .2s linear;

		&:hover {
			background: #56d863;
		}
	}

	h1 {
		font-size: 2.4rem;
		text-align: center;
		margin-bottom: 1.6rem
	}

	h3 {
		font-size: 1.6rem;
		margin-bottom: 1.6rem
	}
`;
