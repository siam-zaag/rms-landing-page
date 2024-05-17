
function Outline({ children, className='', ...rest }) {
	return (
		
        <button
			{...rest}
			className={`border-[1px] border-brand-primary px-5 py-3 rounded-md bg-white text-brand-primary text-base font-montserrat font-semibold hover:bg-brand-primary hover:text-white hover:duration-500 ${className}`}>
			{children}
		</button>
	);
}

export default Outline