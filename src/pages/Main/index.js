import React, { useState, useEffect } from 'react';

import { MdRemoveCircle } from 'react-icons/md';

import MaskedInput from 'react-text-mask';

import { Container } from './styles';

import Paper from '../../components/Paper';
// import Table from '../../components/Table';
import Fieldset from '../../components/Form/Fieldset';

export default function Main() {
	const [exerciseList, setExerciseList] = useState([]);
	const [errors, setErrors] = useState({
		time: 'Tempo inválido',
		type: 'Selecione um',
		date: 'Data inválida',
	});
	const [isSubmited, setIsSubmited] = useState(false);
	const [totalTime, setTotalTime] = useState(0);

	useEffect(() => {
		const storage = localStorage.getItem('@cloud-test/exerciseList');

		setExerciseList(storage ? JSON.parse(storage) : []);
	}, []);

	const calculateTotalTime = list =>
		list
			.map(item => {
				const [hoursPart, minutesPart] = item.time.split(':');
				const a = Number(hoursPart) + Number(minutesPart) / 60;
				return a;
			})
			.reduce((acc, e) => acc + e, 0);

	const decimalHoursToString = hoursDecimal => {
		const numHours = Math.floor(hoursDecimal);
		const numMinutes = Math.round((hoursDecimal - numHours) * 60);
		return `${numHours < 10 ? '0' : ''}${numHours}:${
			numMinutes < 10 ? '0' : ''
		}${numMinutes}`;
	};

	useEffect(() => {
		localStorage.setItem(
			'@cloud-test/exerciseList',
			JSON.stringify(exerciseList)
		);

		setTotalTime(decimalHoursToString(calculateTotalTime(exerciseList)));
	}, [exerciseList]);

	const handleError = obj => {
		const rules = {
			time: /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
			date: /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/,
		};

		if (rules.time.test(obj.time)) {
			setErrors(delete errors.time);
		} else {
			setErrors(Object.assign(errors, { time: 'Tempo inválido' }));
		}

		if (obj.type !== '') {
			setErrors(delete errors.type);
		} else {
			setErrors(Object.assign(errors, { type: 'Selecione um' }));
		}

		if (rules.date.test(obj.date)) {
			setErrors(delete errors.date);
		} else {
			setErrors(Object.assign(errors, { date: 'Data inválida' }));
		}
	};

	const handleSubmit = e => {
		e.preventDefault();
		setIsSubmited(true);

		const data = {
			id: Date.now(),
			time: e.target.elements.time.value,
			type: e.target.elements.type.value,
			date: e.target.elements.date.value
				.split('-')
				.reverse()
				.join('/'),
		};

		handleError(data);

		if (Object.keys(errors).length === 0) {
			setExerciseList([...exerciseList, data]);
		} else {
			console.log(errors);
		}
	};

	const removeExercise = index => {
		const newArr = exerciseList.filter((val, el) => index !== el);
		setExerciseList(newArr);
	};

	return (
		<Container>
			<h1>Log de Exercícios</h1>

			<Paper>
				<form onSubmit={handleSubmit}>
					<Fieldset legend="Adicionar Exercício">
						<div>
							<input type="time" placeholder="Tempo" name="time" />
							{isSubmited && errors.time && <span>{errors.time}</span>}
						</div>

						<div>
							<select name="type">
								<option value="">Modalidade</option>
								<option value="Corrida">Corrida</option>
								<option value="Bicicleta">Bicicleta</option>
								<option value="Natação">Natação</option>
							</select>
							{isSubmited && errors.type && <span>{errors.type}</span>}
						</div>

						<div>
							<MaskedInput
								mask={[
									/\d/,
									/\d/,
									'/',
									/\d/,
									/\d/,
									'/',
									/\d/,
									/\d/,
									/\d/,
									/\d/,
								]}
								placeholder="Data"
								guide={false}
								name="date"
							/>

							{isSubmited && errors.date && <span>{errors.date}</span>}
						</div>

						<div>
							<button type="submit">Add</button>
						</div>
					</Fieldset>
				</form>
			</Paper>

			<Paper>
				<h3>Tempo total: {totalTime}</h3>
				<table width="100%">
					<thead>
						<tr>
							<th>Tempo</th>
							<th>Tipo</th>
							<th>Data</th>
							<th>Action</th>
						</tr>
					</thead>

					<tbody>
						{exerciseList.map((exercise, index) => (
							<tr key={exercise.id}>
								<td>{exercise.time}</td>
								<td>{exercise.type}</td>
								<td>{exercise.date}</td>
								<td>
									<MdRemoveCircle onClick={() => removeExercise(index)} />
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</Paper>
		</Container>
	);
}
