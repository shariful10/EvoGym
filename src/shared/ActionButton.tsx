import React from "react";
import { SelectedPage } from "./types";
import ActionLink from "react-anchor-link-smooth-scroll";

type Props = {
	children: React.ReactNode;
	setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
	return (
		<ActionLink
			href={`#${SelectedPage.ContactUs}`}
			onClick={() => setSelectedPage(SelectedPage.ContactUs)}
			className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white cursor-pointer transition duration-500"
		>
			{children}
		</ActionLink>
	);
};

export default ActionButton;
