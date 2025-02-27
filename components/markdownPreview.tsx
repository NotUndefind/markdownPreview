import React, { JSX } from "react";

interface MarkdownPreviewProps {
	value: string[];
}
const MarkdownPreview = ({ value }: MarkdownPreviewProps) => {
	return (
		<div className="p-4">
			<div className="text-base">
				{value.map((item, index) => {
					if (item.includes("#")) {
						const line = item.split(" ");
						switch (line[0]) {
							case "#":
								line.shift();
								return <h1 key={index}>{line.join(" ")}</h1>;
							case "##":
								line.shift();
								return <h2 key={index}>{line.join(" ")}</h2>;
							case "###":
								line.shift();
								return <h3 key={index}>{line.join(" ")}</h3>;
							case "####":
								line.shift();
								return <h4 key={index}>{line.join(" ")}</h4>;
							case "#####":
								line.shift();
								return <h5 key={index}>{line.join(" ")}</h5>;
							case "######":
								line.shift();
								return <h6 key={index}>{line.join(" ")}</h6>;
						}
						return <p key={index}>{item}</p>;
					}

					if (item.includes("*") || item.includes("_")) {
						//Diviser la chaine de caractere
						const chars: string[] = item.split("");

						let saveIndexItalicToRemove: number = 0;

						//Variable pour gerer les bold ou non
						let isBold: boolean = false;

						//Variable pour gerer les italiques ou non italique
						let isItalic: boolean = false;
						let tempText: string = "";
						const result: (string | JSX.Element)[] = [];

						for (let i = 0; i < chars.length; i++) {
							if (chars[i] === "*") {
								if (isItalic) {
									result.splice(saveIndexItalicToRemove, 1);
									result.push(<i key={i}>{tempText}</i>);
									tempText = "";
								} else {
									result.push(tempText);
									result.push(chars[i]);
									saveIndexItalicToRemove = result.length - 1;
									tempText = "";
								}

								if (chars[i - 1] === " " && isItalic) {
									isItalic = false;
								}

								isItalic = !isItalic;

								if (chars[i - 1] === " " && isItalic) {
									isItalic = false;
								}
							}

							if (chars[i] === "_") {
								if (isItalic) {
									result.splice(saveIndexItalicToRemove, 1);
									result.push(<i key={i}>{tempText}</i>);
									tempText = "";
								} else {
									result.push(tempText);
									result.push(chars[i]);
									saveIndexItalicToRemove = result.length - 1;
									tempText = "";
								}

								if (chars[i - 1] === " " && isItalic) {
									isItalic = false;
								}

								isItalic = !isItalic;

								if (chars[i + 1] === " " && isItalic) {
									isItalic = false;
								}
							}

							if (chars[i] !== "*" && chars[i] !== "_") {
								tempText += chars[i];
							}
						}

						if (tempText) {
							result.push(tempText);
						}
						return <p key={index}>{result}</p>;
					}
					return <p key={index}>{item}</p>;
				})}
			</div>
		</div>
	);
};

export default MarkdownPreview;
