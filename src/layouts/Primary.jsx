import Navbar from '@/components/Navbar/Navbar';
import Section from '@/sections';

const Primary = ({ children }) => {
	return (
		<div>
			<Navbar/>
			{children}
			<Section.Footer />
		</div>
	);
};

export default Primary;
