import Logo from "@/assets/Logo.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

type Props = {};

const Navbar = (props: Props) => {
	const flexBetween = "flex items-center justify-between";

	return (
		<nav>
			<div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
				<div className={`${flexBetween} mx-auto w-5/6`}></div>
			</div>
		</nav>
	);
};

export default Navbar;
