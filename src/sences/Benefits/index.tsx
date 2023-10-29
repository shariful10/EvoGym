import {
	HomeModernIcon,
	UserGroupIcon,
	AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { SelectedPage } from "@/shared/types";
import HText from "@/shared/HText";

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
	return (
		<section id="benefits" className="mx-auto min-h-full w-5/6 py-20 scroll-smooth">
			<motion.div
				onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
				className=""
			>
            {/* <==<<=== Header ===>>==> */}
            <div className="md:w-3/5 md:my-5">
               <HText>more than just a gym</HText>
               <p className="my-5 text-[18px]">We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.</p>
            </div>
         </motion.div>
		</section>
	);
};

export default Benefits;
