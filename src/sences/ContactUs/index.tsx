import { SelectedPage } from "@/shared/types";

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
	const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
  px-5 py-3 placeholder-white`;

	return <div>ContactUs</div>;
};

export default ContactUs;
