import React, { useState, useEffect } from 'react';

import { Container } from './styles';

import Paper from '../../components/Paper';
import Table from '../../components/Table';
import Fieldset from '../../components/Form/Fieldset';

export default function Main() {
	const [exerciseList, setExerciseList] = useState([
		{ time: 1, type: 'Corrida', date: '24/11/2019' },
		{ time: 1, type: 'Corrida', date: '24/11/2019' },
		{ time: 1, type: 'Corrida', date: '24/11/2019' },
		{ time: 1, type: 'Corrida', date: '24/11/2019' },
		{ time: 1, type: 'Corrida', date: '24/11/2019' },
		{ time: 1, type: 'Corrida', date: '24/11/2019' },
		{ time: 1, type: 'Corrida', date: '24/11/2019' },
	]);

	return (
		<Container>
			<h1>Log de Exercícios</h1>

			<Paper>
				<form action="">
					<Fieldset legend="Adicionar Exercício">
						<div>
							<input type="tel" placeholder="Tempo" />
						</div>

						<div>
							<select name="type">
								<option value="">Modalidade</option>
								<option value="run">Corrida</option>
								<option value="bike">Bicicleta</option>
								<option value="swimming">Natação</option>
							</select>
						</div>

						<div>
							<input type="text" placeholder="dd/mm/yyyy" />
						</div>

						<div>
							<button type="submit">Add</button>
						</div>
					</Fieldset>
				</form>
			</Paper>

			<Paper>
				<h3>Tempo total: 10h</h3>
				<Table exerciseList={exerciseList} />
			</Paper>
		</Container>
	);
}
