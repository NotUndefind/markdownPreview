import React from "react";
//Styles
import styles from "./navBar.module.css";

const NavBar = () => {
	return (
		<nav
			className={`navBar fixed w-full p-3 bg-[var(--background)] border-b border-b-1 text-lg h-14 top-0`}
		>
			<div className="flex justify-between flex-row">
				<ul className="logo">
					<li className={`${styles["nav-item"]} relative`}>
						Markdown Previewer
					</li>
				</ul>
				<ul className="fonctionality flex flex-row gap-4">
					<li className={`${styles["nav-item"]} relative`}>Reset</li>
					<li className={`${styles["nav-item"]} relative`}>New</li>
					<li className={`${styles["nav-item"]} relative`}>
						Download
					</li>
				</ul>
				<ul className="assets">
					<li className={`${styles["nav-item"]} relative`}>GitHub</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
