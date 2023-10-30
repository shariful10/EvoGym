type Props = {
	name: string;
	description?: string;
	image: string;
};

const Class = ({ name, description, image }: Props) => {
	const overlayStyles = `p-5 absolute z-30 flex
   h-[100%] w-fit flex-col items-center justify-center 
   transition duration-500 whitespace-normal bg-primary-500 
   text-center text-white opacity-0 transition duration-500 
   hover:opacity-90 rounded-md cursor-pointer`;

	return (
		<li className="relative inline-block">
			<div className={overlayStyles}>
				<p className="text-2xl">{name}</p>
				<p className="mt-5">{description}</p>
			</div>
			<img alt={`${image}`} src={image} className="rounded-md" />
		</li>
	);
};

export default Class;
