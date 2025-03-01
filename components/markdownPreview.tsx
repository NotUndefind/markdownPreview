import React, { use, useEffect, useState, JSX } from "react";

interface MarkdownPreviewProps {
	text: string;
}
const MarkdownPreview = ({ text }: MarkdownPreviewProps) => {
	const line = text.split("\n");

	//Dictionnaire des header
	const headerLevels: { [key: string]: string } = {
		"######": "h6",
		"#####": "h5",
		"####": "h4",
		"###": "h3",
		"##": "h2",
		"#": "h1",
	};

	//Regex de recherche de format de texte italique et bold
	const ItalicRegex = /\_(\S.*?)\_|\*(\S.*?)\*/g;
	const BoldRegex = /\_\_(\S.*?)\_\_|\*\*(\S.*?)\*\*/g;

	const OrderedListRegex: RegExp = /^(\d+)\. (.*)$/gm;
	const UnorderedListRegex: RegExp = /^(\*|-) (.*)$/gm;
	const [orderedList, setOrderedList] = useState<string[]>([]);

	//Fonction de formatage du texte en Italic et en Bold
	const formatText = (text: string, index: number) => {
		if (text.match(OrderedListRegex)) {
			setOrderedList((prevList) => [...prevList, html]);
		}
		console.log(orderedList);

		const html = text
			.replace(BoldRegex, (match, p1, p2) => {
				return p1 ? `<strong>${p1}</strong>` : `<strong>${p2}</strong>`;
			})
			.replace(ItalicRegex, (match, p1, p2) => {
				return p1 ? `<em>${p1}</em>` : `<em>${p2}</em>`;
			});

		if (orderedList.length > 0) {
			return (
				<ol key={index}>
					{orderedList.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ol>
			);
		}

		return <div key={index} dangerouslySetInnerHTML={{ __html: html }} />;
	};

	//Regex de recherche de list unordered et ordered

	return (
		<div className="text-base">
			{
				//Pour chaque ligne
				line.map((item, index) => {
					if (item.includes("#")) {
						//Trouver le niveau de titre
						const level = Object.keys(headerLevels).find((key) =>
							item.startsWith(key)
						);

						if (level) {
							const text = item.replace(level, "").trim();

							return React.createElement(
								headerLevels[level],
								{ key: index },
								text
							);
						}
					}
					return formatText(item, index);
				})
			}
		</div>
	);
};

export default MarkdownPreview;
