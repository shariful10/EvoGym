export enum SelectedPage {
	Home = "home",
	Benefits = "benefits",
	OurClasses = "ourclasses",
	ContactUs = "contactus",
}

export interface BenefitType {
	title: string;
	icon: JSX.Element;
	description: string;
   setSelectedClass?: (value: SelectedPage) => void;
}
