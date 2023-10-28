import Navbar from "@/sences/Navbar";
import { useState } from "react";

enum SelectedPage {
	Home = "home",
	Benefits = "benefits",
	OurClasses = "ourclasses",
	ContactUs = "contactus",
}

const App = () => {
	const [selectedPage, setSelectedPage] = useState<SelectedPage>(
		SelectedPage.Home
	);

	return (
		<div className="app">
			<Navbar
				selectedPage={selectedPage}
				setSelectedPage={setSelectedPage}
			/>
		</div>
	);
};

export default App;
