import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React, { useEffect } from "react";
import { useState } from "react";

//Components
import NavBar from "@/components/navBar";
import SideBar from "@/components/sideBar";
import MarkdownEditor from "@/components/markdownEditor";

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
const chatMock = [
	{
		id: 1,
		title: "Default",
		text: defautText,
	},
];

export default function App({ Component, pageProps }: AppProps) {
	const [reset, setReset] = React.useState(false);
	const [text, setText] = useState<string>(defautText);
	const [newChat, setNewChat] = useState(false);
	const [deleteAll, setDeleteAll] = useState(false);

	const [activeChatId, setActiveChatId] = useState(chatMock[0].id);
	const activeChat = chatMock.find((c) => c.id === activeChatId);
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		const storedChats = localStorage.getItem("chats");
		if (storedChats) {
			chatMock.push(...JSON.parse(storedChats));
			console.log(chatMock);
		}

		setIsReady(true);
	}, []);

	useEffect(() => {
		if (reset) {
			setText(defautText);
			setReset(false);
		}

		if (newChat) {
			const title = text.split("\n")[0];
			chatMock.push({
				id: chatMock.length + 1,
				title: title,
				text: text,
			});
			setActiveChatId(chatMock.length);
			setNewChat(false);
		}

		if (deleteAll) {
			localStorage.removeItem("chats");
			chatMock.splice(1);
			setActiveChatId(1);
			setDeleteAll(false);
		}
	}, [reset, newChat, deleteAll]);

	useEffect(() => {
		setText(activeChat?.text || defautText);
	}, [activeChatId]);

	useEffect(() => {
		const handleBeforeUnload = () => {
			const chatToSave = chatMock.slice(1);
			localStorage.setItem("chats", JSON.stringify(chatToSave));
		};

		window.addEventListener("beforeunload", handleBeforeUnload);
		return () =>
			window.removeEventListener("beforeunload", handleBeforeUnload);
	}, [chatMock]);

	return (
		<>
			<NavBar
				setReset={setReset}
				newChat={setNewChat}
				setDeleteAll={setDeleteAll}
			/>
			<SideBar
				chatList={chatMock}
				activeChatId={activeChatId}
				setActiveChatId={setActiveChatId}
				isReady={isReady}
			/>
			<MarkdownEditor text={text} setText={setText} newChat={newChat} />
			<Component {...pageProps} />
		</>
	);
}
