import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html, body, #root {
		min-height: 100vh;
		height: 100%;
	}

	html {
		font-size: 10px;
	}

	body {
		background-image: linear-gradient(to right top, #00c9ff, #00dbf8, #00eae2, #41f6c2, #92fe9d);
		-webkit-font-smoothing: antialiased !important;
		padding: 8rem 0;
	}

	body, button, input, textarea {
		font-family: 'Roboto', Arial, Helvetica, sans-serif;
		font-size: 1.6rem;
	}

	h1 {
		font-size: 2.4rem;
		text-align: center;
	}
`;
