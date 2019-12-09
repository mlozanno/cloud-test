import React from 'react';
import PropTypes from 'prop-types';

import { MdRemoveCircle } from 'react-icons/md';
import { Container } from './styles';

export default function Table({ exerciseList, setExerciseList }) {
	const removeExercise = index => {
		const newArr = exerciseList.filter((_, el) => index !== el);
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

Table.propTypes = {
	exerciseList: PropTypes.arrayOf(
		PropTypes.objectOf(
			PropTypes.oneOfType([PropTypes.string, PropTypes.number])
		)
	).isRequired,
	setExerciseList: PropTypes.func.isRequired,
};
