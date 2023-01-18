import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<div className='w-full h-[100px] bg-[#e27940] mb-5'>
			<div className='container mx-auto flex items-center justify-between h-full'>
				<h2 className='text-[#fff] text-4xl'>
					<Link to='/'>Books Shop</Link>
				</h2>
				<div>
					<ul className='flex gap-5'>
						<li>
							<Link to='/add' className='text-[#fff] text-lg'>
								Add New Book
							</Link>
						</li>
						<li>
							<Link to='/update' className='text-[#fff] text-lg'>
								Update Book
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
