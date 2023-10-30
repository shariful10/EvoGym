import Logo from "@/assets/Logo.png";
import Link from "@/sences/Navbar/Link";
import { SelectedPage } from "@/shared/types";

interface Type {
	selectedPage: SelectedPage;
	setSelectedPage: (value: SelectedPage) => void;
}

const Footer = ({ selectedPage, setSelectedPage }: Type) => {
	const year = new Date().getFullYear();

	return (
		<footer className="bg-primary-100 py-16">
			<div className="justify-content mx-auto w-5/6 gap-16 md:flex">
				<div className="mt-16 basis-1/2 md:mt-0">
					<img alt="logo" src={Logo} />
					<p className="my-5">
						Lorem vitae ut augue auctor faucibus eget eget ut libero.
						Elementum purus et arcu massa dictum condimentum. Augue
						scelerisque iaculis orci ut habitant laoreet. Iaculis
						tristique.
					</p>
					<p>© {year} Evogym All Rights Reserved.</p>
				</div>
				<div className="mt-16 basis-1/4 md:mt-0">
					<h4 className="font-bold">Quick Links</h4>
					<div className="mt-5">
						<Link
							page="Home"
							selectedPage={SelectedPage}
							setSelectedPage={setSelectedPage}
						/>
					</div>
					<div className="my-2">
						<Link
							page="Benefits"
							selectedPage={SelectedPage}
							setSelectedPage={setSelectedPage}
						/>
					</div>
					<div className="my-2">
						<Link
							page="OurClasses"
							selectedPage={SelectedPage}
							setSelectedPage={setSelectedPage}
						/>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
