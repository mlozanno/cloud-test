export const decimalHoursToString = hoursDecimal => {
	const numHours = Math.floor(hoursDecimal);
	const numMinutes = Math.round((hoursDecimal - numHours) * 60);
	return `${numHours < 10 ? '0' : ''}${numHours}:${
		numMinutes < 10 ? '0' : ''
	}${numMinutes}`;
};

export const calculateTotalTime = list =>
	list
		.map(item => {
			const [hoursPart, minutesPart] = item.time.split(':');
			return Number(hoursPart) + Number(minutesPart) / 60;
		})
		.reduce((acc, e) => acc + e, 0);
