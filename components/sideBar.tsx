import React, { useEffect } from "react";
import Markdown from "react-markdown";
//Styles
import styles from "./sideBar.module.css";

interface SideBarProps {
	newChat: boolean;
	setNewChat: (value: boolean) => void;
	actualSessionChats: {
		text: string;
		title: string;
	}[];
}

interface Chat {
	text: string;
	title: string;
}

const SideBar = ({ newChat, setNewChat, actualSessionChats }: SideBarProps) => {
	const [chats, setChats] = React.useState<Chat[]>([]);
	const chat: {
		text: string;
		title: string;
	}[] = [];

	// Charger les chats au premier rendus
	useEffect(() => {
		chat.push(JSON.parse(localStorage.getItem("savedChats") || "[]"));
	}, []);

	//Mise a jours des chats
	useEffect(() => {
		if (newChat) {
			chat.push(...actualSessionChats);
			setChats([...chats, ...actualSessionChats]);

			console.log(chat);
		}
	}, [actualSessionChats, newChat, chats, chat]);
	return (
		<div className="border-r border-r-1 flex flex-col fixed top-14 left-0 h-full w-64 p-3 text-lg gap-4">
			<ul className="list-none flex gap-2 flex-col">
				{
					//Affichage des chats
					chats.map((chat, index) => (
						<li
							key={index}
							className={`${styles["side-item"]} relative list-none`}
							onClick={() => {
								setNewChat(true);
							}}
						>
							<Markdown>{chat.title}</Markdown>
						</li>
					))
				}
			</ul>
		</div>
	);
};

export default SideBar;
