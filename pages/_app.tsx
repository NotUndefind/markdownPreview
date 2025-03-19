import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React, { useRef, useEffect } from "react";
import { useState } from "react";

//Components
import NavBar from "@/components/navBar";
import SideBar from "@/components/sideBar";
import MarkdownEditor from "@/components/markdownEditor";

export default function App({ Component, pageProps }: AppProps) {
	const [reset, setReset] = React.useState(false);
	const [newChat, setNewChat] = React.useState(false);
	const [title, setTitle] = React.useState("");
	const idRef = useRef(0);
	const defautText = `# Markdown syntax guide

## Headers

# This is a Heading h1
## This is a Heading h2
###### This is a Heading h6

## Emphasis

*This text will be italic*  
_This will also be italic_

**This text will be bold**  
__This will also be bold__

_You **can** combine them_

## Lists

### Unordered

* Item 1
* Item 2

### Ordered

1. Item 1
2. Item 2

## Images

![This is an alt text.](/image.webp "This is a sample image.")

## Links

You may be using [Markdown Live Preview from Jules Bourin](https://julesbourin.com/).

## Blockquotes

> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

## Blocks of code

\`\`\`
let message = 'Hello world';
alert(message);
\`\`\`

## Inline code

This web site is using \`markedjs/marked\`.
`;
	const [text, setText] = useState<string>(defautText);

	useEffect(() => {
		if (reset) {
			setText(defautText);
			setReset(false);
		}

		if (newChat) {
			setTitle(text.split("\n")[0]);
			localStorage.setItem(
				idRef.current.toString(),
				JSON.stringify({ text: text, title: title })
			);

			setNewChat(false);
			idRef.current++;
		}
	}, [newChat, reset, defautText, text]);
	return (
		<>
			<NavBar setReset={setReset} newChat={setNewChat} />
			<SideBar
				newChat={newChat}
				setNewChat={setNewChat}
				title={title}
				currentId={idRef.current}
			/>
			<MarkdownEditor text={text} setText={setText} newChat={newChat} />
			<Component {...pageProps} />
		</>
	);
}
