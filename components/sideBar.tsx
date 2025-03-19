import React, { useEffect } from "react";

//Styles
import styles from "./sideBar.module.css";

interface SideBarProps {
	newChat: boolean;
	title: string;
	setNewChat: (value: boolean) => void;
	currentId: number;
}

const SideBar = ({ newChat, currentId }: SideBarProps) => {
	useEffect(() => {
		if (typeof window !== "undefined") {
			console.log(localStorage);
		}
	}, [newChat, currentId]);

	return (
		<div className="border-r border-r-1 flex flex-col fixed top-14 left-0 h-full w-64 p-3 text-lg gap-4">
			<ul className="list-none flex gap-2 flex-col"></ul>
		</div>
	);
};

export default SideBar;
