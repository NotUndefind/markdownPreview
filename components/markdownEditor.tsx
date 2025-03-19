import React from "react";

//Components
import MarkdownInput from "./markdownInput";
import MarkdownPreview from "./markdownPreview";

interface MarkdownEditorProps {
	text: string;
	setText: (value: string) => void;
	newChat: boolean;
}
const MarkdownEditor = ({ text, setText, newChat }: MarkdownEditorProps) => {
	return (
		<div className="grid grid-cols-2 ml-64 mt-14 text-left">
			<MarkdownInput value={text} onChange={setText} newChat={newChat} />

			<div className="flex p-4">
				<MarkdownPreview text={text} />
			</div>
		</div>
	);
};

export default MarkdownEditor;
