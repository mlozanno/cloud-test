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

	body {
		-webkit-font-smoothing: antialiased !important;
	}

	body, button, input, textarea {
		font-family: 'Roboto', Arial, Helvetica, sans-serif
	}
`;
