import React from 'react';

import { MdRemoveCircle } from 'react-icons/md';
import { Container } from './styles';

export default function Table({ exerciseList, setExerciseList }) {
	const removeExercise = index => {
		const newArr = exerciseList.filter((val, el) => index !== el);
		setExerciseList(newArr);
	};
	return (
		<Container>
			<table>
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
		</Container>
	);
}
