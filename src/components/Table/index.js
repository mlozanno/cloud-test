import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { MdRemoveCircle, MdDirectionsBike } from 'react-icons/md';
import { Container } from './styles';

export default function Table({ exerciseList, setExerciseList, totalTime }) {
	const removeExercise = index => {
		const newArr = exerciseList.filter((_, el) => index !== el);
		setExerciseList(newArr);
	};

	const dynamicSort = (prop, cb) => {
		const c = exerciseList.sort((a, b) => {
			if (a[prop] < b[prop]) return -1;

			if (a[prop] > b[prop]) return 1;

			return 0;
		});

		setExerciseList([...c].reverse());
	};

	return (
		<>
			{exerciseList.length > 0 && <h3>Tempo total: {totalTime}</h3>}
			<Container>
				{exerciseList.length > 0 ? (
					<table>
						<thead>
							<tr>
								<th onClick={() => dynamicSort('time')}>Tempo</th>
								<th onClick={() => dynamicSort('type')}>Tipo</th>
								<th onClick={() => dynamicSort('date')}>Data</th>
								<th>Action</th>
							</tr>
						</thead>

						<tbody>
							{exerciseList
								.map((exercise, index) => (
									<tr key={exercise.id}>
										<td>{exercise.time}</td>
										<td>{exercise.type}</td>
										<td>{exercise.date}</td>
										<td>
											<MdRemoveCircle onClick={() => removeExercise(index)} />
										</td>
									</tr>
								))
								.reverse()}
						</tbody>
					</table>
				) : (
					<div className="empty-state">
						<MdDirectionsBike />
						<p>Sem resultados para exibir</p>
					</div>
				)}
			</Container>
		</>
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
