import logo from '../assets/images/logo-brand.svg'
import heroImage from '../assets/images/beach-work.jpg'
import popularDestinations from '../data/popularDestinations.js'
import DestinationCard from './DestinationCard'

function App() {
	return (
		<div>
			<div className='bg-gray-100 grid lg:grid-cols-2 2xl:grid-cols-5'>
				<div className='px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 xl:flex xl:flex-col xl:items-end 2xl:col-span-2'>
					<img
						className='h-10'
						src={logo}
						alt='Workcation'
					/>
					<img
						className='mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden'
						src={heroImage}
						alt='Woman workcationing on the beach'
					/>
					<h1 className='mt-6 text-2xl font-headline tracking-tight font-semibold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl xl:text-end'>
						You can work from anywhere.
						<br />
						<span className='text-brand'>Take advantage of it</span>
					</h1>
					<p className='mt-2 text-gray-600 sm:mt-4 sm:text-lg xl:text-end'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Asperiores minus voluptates illum explicabo. Assumenda
						fugiat ipsam voluptas reprehenderit, voluptatem repellat
						pariatur sunt ut blanditiis omnis quaerat ducimus
						possimus eveniet beatae?
					</p>
					<div className='mt-4 sm:mt-6 space-x-2'>
						<button className='btn btn-primary shadow-lg hover:-translate-y-0.5 transform transition'>
							Book your escape
						</button>
						<button className='btn btn-secondary'>
							Learn more
						</button>
					</div>
				</div>
				<div className='hidden relative lg:block 2xl:col-span-3'>
					<img
						className='absolute inset-0 w-full h-full object-cover object-center'
						src={heroImage}
						alt='Woman workcationing on the beach'
					/>
				</div>
			</div>

			<div className='max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8'>
				<h2 className='text-xl text-gray-900'>Popular detinations</h2>
				<p className='mt-2 text-gray-600'>
					A selection of great work-friendly cities with lots to see
					and explore.
				</p>
				<div className='mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3'>
					{popularDestinations.map((destination) => (
						<DestinationCard
							key={destination.city}
							destination={destination}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default App
