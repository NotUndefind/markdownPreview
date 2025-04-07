import React from "react";
import Markdown from "react-markdown";
//Styles
import styles from "./sideBar.module.css";

interface SideBarProps {
	chatList: {
		id: number;
		title: string;
		text: string;
	}[];
	activeChatId: number;
	setActiveChatId: (value: number) => void;
	isReady: boolean;
}

const SideBar = ({
	chatList,
	activeChatId,
	setActiveChatId,
	isReady,
}: SideBarProps) => {
	if (!isReady) {
		return <div>Chargement...</div>; // ou spinner
	}

	return (
		<div className="border-r border-r-1 flex flex-col fixed top-14 left-0 h-full w-64 p-3 text-lg gap-4">
			<ul className="list-none flex gap-2 flex-col">
				{chatList.map((chat) => {
					return (
						<li
							className={`${
								styles["side-item"]
							} relative border-b-2 ${
								chat.id === activeChatId
									? "border-white"
									: "border-none"
							}`}
							key={chat.id}
							id={chat.id.toString()}
							onClick={() => setActiveChatId(chat.id)}
						>
							<Markdown>{chat.title}</Markdown>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default SideBar;
