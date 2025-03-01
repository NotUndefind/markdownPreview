import React from "react";

interface MarkdownInputProps {
	value: string;
	onChange: (value: string) => void;
}

const MarkdownInput = ({ value, onChange }: MarkdownInputProps) => {
	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		onChange(e.target.value);
	};

	const lines = value.split("\n"); // Découpe la chaîne en lignes

	return (
		<div className="flex p-4">
			<div className="flex flex-row w-full h-full">
				{/* Liste des numéros de ligne */}
				<ul className="list-none border-r-2 text-right pr-4 text-white text-opacity-40 border-white border-opacity-40">
					{lines.map((_, index) => (
						<li key={index}>{index + 1}</li>
					))}
				</ul>

				{/* Zone de texte */}
				<div className="h-full w-full flex">
					<textarea
						name="text"
						id="text"
						className="bg-transparent text-white h-full w-full align-center focus:outline-none border-r border-t border-b border-l-0 border-white border-opacity-40 rounded-r-lg pl-2 font text-base"
						onChange={handleChange}
						rows={lines.length || 1} // Évite d’avoir 0 ligne
						placeholder="You can write here"
						value={value} // On garde `value` en string
					></textarea>
				</div>
			</div>
		</div>
	);
};

export default MarkdownInput;
