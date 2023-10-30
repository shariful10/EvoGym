import Home from "@/sences/Home";
import Navbar from "@/sences/Navbar";
import Footer from "@/sences/Footer";
import Benefits from "@/sences/Benefits";
import ContactUs from "@/sences/ContactUs";
import { useEffect, useState } from "react";
import OurClasses from "@/sences/OurClasses";
import { SelectedPage } from "@/shared/types";

const App = () => {
	const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
	const [selectedPage, setSelectedPage] = useState<SelectedPage>(
		SelectedPage.Home
	);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY === 0) {
				setIsTopOfPage(true);
				setSelectedPage(SelectedPage.Home);
			}

			if (window.scrollY !== 0) setIsTopOfPage(false);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="app">
			<Navbar
				isTopOfPage={isTopOfPage}
				selectedPage={selectedPage}
				setSelectedPage={setSelectedPage}
			/>
			<Home setSelectedPage={setSelectedPage} />
			<Benefits setSelectedPage={setSelectedPage} />
			<OurClasses setSelectedPage={setSelectedPage} />
			<ContactUs setSelectedPage={setSelectedPage} />
			<Footer
				selectedPage={selectedPage}
				setSelectedPage={setSelectedPage}
			/>
		</div>
	);
};

export default App;
