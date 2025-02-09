"use client";

import React from "react";
import ImcInfo from "@/components/ImcInfo";
import WeightHeightInfo from "@/components/WeightHeightInfo";

export default function index() {
	return (
		<React.StrictMode>
			<div className="full-container bg-pink-300">
				<div className="top-0 left-0 absolute m-36">
					<h1 className="font-poppins font-extrabold text-3xl text-purple-800">
						Cálculo de IMC
					</h1>
				</div>
				<div className="container-display">
					<WeightHeightInfo />
					<ImcInfo />
				</div>
			</div>
		</React.StrictMode>
	);
}
