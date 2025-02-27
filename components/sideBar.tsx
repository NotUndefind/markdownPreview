import React from "react";

//Styles
import styles from "./sideBar.module.css";

const SideBar = () => {
	return (
		<div className="border-r border-r-1 flex flex-col fixed top-14 left-0 h-full w-64 p-3 text-lg gap-4">
			All chat
			<ul className="list-none flex gap-2 flex-col">
				<li className={`relative ${styles["side-item"]}`}>
					Premier chat
				</li>
			</ul>
		</div>
	);
};

export default SideBar;
