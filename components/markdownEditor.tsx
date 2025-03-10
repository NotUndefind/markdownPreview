import React from "react";
import { useState } from "react";

//Components
import MarkdownInput from "./markdownInput";
import MarkdownPreview from "./markdownPreview";

const MarkdownEditor = () => {
	const [text, setText] = useState<string>("You can write here");
	return (
		<div className="grid grid-cols-2 ml-64 mt-14 text-left">
			<MarkdownInput value={text} onChange={setText} />

			<div className="flex p-4">
				<MarkdownPreview text={text} />
			</div>
		</div>
	);
};

export default MarkdownEditor;
