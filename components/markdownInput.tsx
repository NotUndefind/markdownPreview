import React from "react";

interface MarkdownInputProps {
	value: string[];
	onChange: (value: string[]) => void;
}

const MarkdownInput = ({ value, onChange }: MarkdownInputProps) => {
	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		onChange(e.target.value.split("\n"));
	};

	return (
		<div className="flex p-4">
			<div className="flex flex-row w-full h-full">
				<ul className="list-none border-r-2 text-right pr-4 text-white text-opacity-40 border-white border-opacity-40">
					{value.map((item, index) => (
						<li key={index}>{index + 1}</li>
					))}
				</ul>

				<div className="h-full w-full flex">
					<textarea
						name="text"
						id="text"
						className="bg-transparent text-white h-full w-full align-center focus:outline-none border-r border-t border-b border-l-0 border-white border-opacity-40 rounded-r-lg pl-2 font text-base"
						onChange={handleChange}
						rows={value.length}
						placeholder="You can write here"
						value={value.join("\n")}
					></textarea>
				</div>
			</div>
		</div>
	);
};

export default MarkdownInput;
