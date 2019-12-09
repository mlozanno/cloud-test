import React, { useState, useEffect } from 'react';

import { Container } from './styles';

import { decimalHoursToString, calculateTotalTime } from '../../utils/helpers';

import Paper from '../../components/Paper';
import Table from '../../components/Table';
import Form from '../../components/Form';

export default function Main() {
	const [exerciseList, setExerciseList] = useState([]);

	const [totalTime, setTotalTime] = useState(0);

	useEffect(() => {
		const storage = localStorage.getItem('@cloud-test/exerciseList');

		setExerciseList(storage ? JSON.parse(storage) : []);
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'@cloud-test/exerciseList',
			JSON.stringify(exerciseList)
		);

		setTotalTime(decimalHoursToString(calculateTotalTime(exerciseList)));
	}, [exerciseList]);

	return (
		<Container>
			<h1>Log de Exercícios</h1>

			<Paper>
				<Form exerciseList={exerciseList} setExerciseList={setExerciseList} />
			</Paper>

			<Paper>
				<Table
					exerciseList={exerciseList}
					setExerciseList={setExerciseList}
					totalTime={totalTime}
				/>
			</Paper>
		</Container>
	);
}
