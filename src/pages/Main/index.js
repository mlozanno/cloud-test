import React, { useState, useEffect } from 'react';

import { MdRemoveCircle } from 'react-icons/md';

import { Container } from './styles';

import Paper from '../../components/Paper';
// import Table from '../../components/Table';
import Fieldset from '../../components/Form/Fieldset';

export default function Main() {
	const [exerciseList, setExerciseList] = useState([]);

	useEffect(() => {
		const storage = localStorage.getItem('@cloud-test/exerciseList');

		setExerciseList(storage ? JSON.parse(storage) : []);
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'@cloud-test/exerciseList',
			JSON.stringify(exerciseList)
		);
	}, [exerciseList]);

	const handleSubmit = e => {
		e.preventDefault();

		const data = {
			time: e.target.elements.time.value,
			type: e.target.elements.type.value,
			date: e.target.elements.date.value,
		};

		setExerciseList([...exerciseList, data]);
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
							<input type="tel" placeholder="Tempo" name="time" />
						</div>

						<div>
							<select name="type">
								<option value="">Modalidade</option>
								<option value="Corrida">Corrida</option>
								<option value="Bicicleta">Bicicleta</option>
								<option value="Natação">Natação</option>
							</select>
						</div>

						<div>
							<input type="text" placeholder="dd/mm/yyyy" name="date" />
						</div>

						<div>
							<button type="submit">Add</button>
						</div>
					</Fieldset>
				</form>
			</Paper>

			<Paper>
				<h3>Tempo total: 10h</h3>
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
							<tr key={index}>
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
