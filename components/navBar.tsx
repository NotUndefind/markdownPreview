import React from "react";
//Styles
import styles from "./navBar.module.css";
interface NavBarProps {
	setReset: (value: boolean) => void;
	newChat: (value: boolean) => void;
}
const NavBar = ({ setReset, newChat }: NavBarProps) => {
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
						New
					</li>
					<li className={`${styles["nav-item"]} relative list-none`}>
						Download
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
