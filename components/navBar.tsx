import React from "react";
//Styles
import styles from "./navBar.module.css";
interface NavBarProps {
	setReset: (value: boolean) => void;
	newChat: (value: boolean) => void;
	setDeleteAll: (value: boolean) => void;
}
const NavBar = ({ setReset, newChat, setDeleteAll }: NavBarProps) => {
	return (
		<nav
			className={`navBar fixed w-full p-3 bg-[var(--background)] border-b border-b-1 text-lg h-14 top-0`}
		>
			<div className="flex justify-between flex-row">
				<ul className="logo">
					<li className={`${styles["nav-item"]} relative list-none`}>
						Markdown Previewer
					</li>
				</ul>
				<ul className="fonctionality flex flex-row gap-4">
					<li
						className={`${styles["nav-item"]} relative list-none`}
						onClick={() => {
							setReset(true);
						}}
					>
						Reset
					</li>
					<li
						className={`${styles["nav-item"]} relative list-none`}
						onClick={() => {
							newChat(true);
						}}
					>
						Save chat
					</li>
					<li
						className={`${styles["nav-item"]} relative list-none`}
						onClick={() => {
							setDeleteAll(true);
						}}
					>
						Delete All
					</li>
				</ul>
				<ul className="assets">
					<li className={`${styles["nav-item"]} relative list-none`}>
						<a href="https://github.com/NotUndefind">GitHub</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
