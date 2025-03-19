import React from "react";
import ReactMarkdown from "react-markdown";

interface MarkdownPreviewProps {
	text: string;
}

const MarkdownPreview = ({ text }: MarkdownPreviewProps) => {
	return (
		<div className="text-lg flex flex-col gap-4">
			<ReactMarkdown>{text}</ReactMarkdown>
		</div>
	);
};

export default MarkdownPreview;
