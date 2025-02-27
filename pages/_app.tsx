import "@/styles/globals.css";
import type { AppProps } from "next/app";

//Components
import NavBar from "@/components/navBar";
import SideBar from "@/components/sideBar";
import MarkdownEditor from "@/components/markdownEditor";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<NavBar />
			<SideBar />
			<MarkdownEditor />
			<Component {...pageProps} />
		</>
	);
}
