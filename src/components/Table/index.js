import React from 'react';

import { MdRemoveCircle } from 'react-icons/md';
import { Container } from './styles';

export default function Table({ exerciseList }) {
	return (
		<Container>
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
							<MdRemoveCircle />
						</td>
					</tr>
				))}
			</tbody>
		</Container>
	);
}
