import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MaskedInput from 'react-text-mask';

import Fieldset from './Fieldset';

export default function Form({ exerciseList, setExerciseList }) {
	const [isSubmited, setIsSubmited] = useState(false);
	const [errors, setErrors] = useState({
		time: 'Tempo inválido',
		type: 'Selecione um',
		date: 'Data inválida',
	});

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
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<Fieldset legend="Adicionar Exercício">
				<div>
					<input type="time" placeholder="Tempo" name="time" required />
					{isSubmited && errors.time && <span>{errors.time}</span>}
				</div>

				<div>
					<select name="type" required>
						<option value="">Modalidade</option>
						<option value="Corrida">Corrida</option>
						<option value="Bicicleta">Bicicleta</option>
						<option value="Natação">Natação</option>
					</select>
					{isSubmited && errors.type && <span>{errors.type}</span>}
				</div>

				<div>
					<MaskedInput
						mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
						placeholder="Data"
						guide={false}
						name="date"
						required
					/>

					{isSubmited && errors.date && <span>{errors.date}</span>}
				</div>

				<div>
					<button type="submit">Add</button>
				</div>
			</Fieldset>
		</form>
	);
}

Form.propTypes = {
	exerciseList: PropTypes.arrayOf(
		PropTypes.objectOf(
			PropTypes.oneOfType([PropTypes.string, PropTypes.number])
		)
	).isRequired,
	setExerciseList: PropTypes.func.isRequired,
};
