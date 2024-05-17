'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Icons from '../../../public/assets/icons';
import Buttons from '../Buttons';
import BoxContainer from '../common/BoxContainer';

function Navbar() {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!isMobileMenuOpen);
	};
	const closeMobileMenu = () => {
		setMobileMenuOpen(false);
	};

	return (
		<nav className='bg-white w-full h-20 flex items-center'>
			<BoxContainer>
				<div className='flex justify-between items-center'>
					{/* nav icon */}
					<div>
						<h2 className='text-gradient font-bold text-2xl font-montserrat'>
							ZenResto
						</h2>
					</div>

					{/* menu item for desktop */}
					<div className='hidden lg:flex lg:gap-6'>
						{MenuItems?.map((item, index) => (
							<Link
								key={index}
								href={item.href}
								className='text-neutral-700 text-sm font-medium'>
								{item.title}
							</Link>
						))}
					</div>

					{/* action button */}
					<div className='hidden lg:flex gap-4'>
						<Buttons.Primary>Free Demo</Buttons.Primary>
						<Buttons.Outline>Order Now</Buttons.Outline>
					</div>

					{/* hamburger for mobile nav */}
					<div className='flex gap-4 lg:hidden'>
						<button
							type='button'
							className='text-brand-primary font-semibold'>
							Get Free Demo
						</button>
						<Image
							alt='navbar'
							src={Icons.hamburger}
							onClick={toggleMobileMenu}
						/>
					</div>
				</div>
			</BoxContainer>

			<div
				className={`lg:hidden fixed inset-0 bg-white bg-opacity-100 z-50 transition-transform transform ${
					isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
				}`}>
				<div className='flex h-screen overflow-y-auto scrollbar-hide'>
					<div className='w-full bg-primary-bg-color flex flex-col gap-4'>
						<div className='flex justify-between items-center p-4'>
							<h2 className='text-gradient font-bold text-2xl font-montserrat'>
								ZenResto
							</h2>
							<button
								className='self-end text-white'
								onClick={closeMobileMenu}>
								<Image
									alt='cancel button'
									src={Icons.cancel}
								/>
							</button>
						</div>

						{/* div for menu item */}
						<div className='flex flex-col'>
							{MenuItems.map((item, index) => (
								<Link
									key={index}
									href={item.href}
									className='font-medium text-neutral-700 border-b p-4'
									onClick={closeMobileMenu}>
									{item.title}
								</Link>
							))}
						</div>

						{/* div for action button */}
						<div className='w-full flex flex-col py-6 px-4 gap-4'>
							<Buttons.Primary>Free Demo</Buttons.Primary>
							<Buttons.Outline>Order Now</Buttons.Outline>
						</div>
					</div>

					{/* Overlay (80% width) */}
					<div className='flex-grow bg-primary-bg-color bg-opacity-50'></div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;

const MenuItems = [
	{
		title: 'Products',
		href: '#products',
	},
	{
		title: 'Apps',
		href: '#apps',
	},
	{
		title: 'Services',
		href: '#services',
	},
	{
		title: 'Features',
		href: '#features',
	},
	{
		title: 'Pricing',
		href: '#pricing',
	},
	{
		title: 'Contact Us',
		href: '#contact-us',
	},
];
