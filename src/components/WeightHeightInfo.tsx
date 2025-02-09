import React, { useState } from "react";

const WeightHeightInfo = () => {
	const [weight, setWeight] = useState("");
	const [height, setHeight] = useState("");
	const [calc, setCalc] = useState("");

	const calculoIMC = () => {
		const alturaMetro = parseFloat(height) / 100;

		const peso = parseFloat(weight);

		if (!isNaN(peso) && !isNaN(alturaMetro) && alturaMetro > 0) {
			const imc = peso / (alturaMetro * alturaMetro);
			setCalc(imc.toFixed(2));
		} else {
			alert("Insira dados válidos para altura e peso!");
		}
	};

	const limpar = () => {
		setWeight("");
		setCalc("");
		setHeight("");
	};

	return (
		<>
			<div className="container-info mr-44">
				<div className="table-container">
					<h2 className="text-xl font-semibold text-purple-800">Peso:</h2>
					<input
						type="text"
						placeholder="kg"
						className="input w-full mt-2"
						value={weight}
						onChange={(e) => setWeight(e.target.value)}
					/>
					<h2 className="text-xl font-semibold text-purple-800 mt-4">
						Altura:
					</h2>
					<input
						type="text"
						placeholder="cm"
						className="input w-full mt-2"
						value={height}
						onChange={(e) => setHeight(e.target.value)}
					/>
					<button
						className="button mt-6"
						onClick={calculoIMC}>
						Calcular
					</button>

					{calc && <div className="imc">IMC: {calc}</div>}

					<button
						onClick={limpar}
						className="button mt-6">
						Limpar
					</button>
				</div>
			</div>
		</>
	);
};

export default WeightHeightInfo;
