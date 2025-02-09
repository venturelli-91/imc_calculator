import React from "react";

const ImcInfo = () => {
	return (
		<div className="container-table">
			<div className="table-display">
				<table className="font-poppins">
					<thead className="thead">
						<tr>
							<th className="pl-6 pb-1 font-semibold">IMC</th>
							<th className="pb-1 font-semibold">Classificação</th>
						</tr>
					</thead>
					<tbody>
						<tr className="bg-white">
							<td className="info">Menos de 17</td>
							<td>Muito abaixo do peso</td>
						</tr>
						<tr className="bg-slate-100">
							<td className="info">Entre 17 e 18,49</td>
							<td>Abaixo do peso</td>
						</tr>
						<tr className="bg-white">
							<td className="info">Entre 18,5 e 24,99</td>
							<td>Peso normal</td>
						</tr>
						<tr className="bg-slate-100">
							<td className="info">Entre 25 e 29,99</td>
							<td>Acima do peso</td>
						</tr>
						<tr className="bg-white">
							<td className="info">Entre 30 e 34,99</td>
							<td>Obesidade I</td>
						</tr>
						<tr className="bg-slate-100">
							<td className="info">Entre 35 e 39,99</td>
							<td>Obesidade II (Severa)</td>
						</tr>
						<tr className="bg-white">
							<td className="info">Acima de 40</td>
							<td>Obesidade III (Mórbida)</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ImcInfo;
