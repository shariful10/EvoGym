import Navbar from "@/sences/Navbar";
import { useState } from "react";
import { SelectedPage } from "@/shared/types";

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
