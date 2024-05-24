'use client'

import { useState } from 'react'
import {
	APIProvider,
	Map,
	useMap,
	useMapsLibrary,
} from '@vis.gl/react-google-maps'

import Directions from './components/Directions'
import BikeLayer from './components/BikeLayer'
import Autocomplete from './components/AutoComplete'
import Markers from './components/Markers'
import InfoWindowArea from './components/InfoWindowArea'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { Checkbox } from '@/components/ui/checkbox'

import { MoveRight, CircleX, ArrowRight, MousePointer } from 'lucide-react'

import points from '../../data/points.json'

const MapPage = () => {
	const position = { lat: 52.540930926276566, lng: 13.424356814808915 }
	const [routes, setRoutes] = useState([])
	const [routeIndex, setRouteIndex] = useState(0)
	const [origin, setOrigin] = useState(null)
	const [destination, setDestination] = useState(null)
	const [waypoints, setWaypoints] = useState([])
	const [openMarkerKey, setOpenMarkerKey] = useState(null)
	const [showBicycleStores, setShowBicycleStores] = useState(false)
	const [showCrashes, setShowCrashes] = useState(false)
	const [showConstructions, setShowConstructions] = useState(false)

	const addWaypoint = () => {
		setWaypoints([...waypoints, { location: null }])
	}

	const updateWaypoint = (index, place) => {
		const newWaypoints = waypoints.slice()
		newWaypoints[index].location = place
		setWaypoints(newWaypoints)
	}

	const removeWaypoint = (index) => {
		const newWaypoints = waypoints.slice()
		newWaypoints.splice(index, 1)
		setWaypoints(newWaypoints)
	}

	const selected = routes[routeIndex]
	const leg = selected?.legs[0]

	const filteredPoints = points.filter((point) => {
		if (point.type === 'Bicyclestore' && !showBicycleStores) return false
		if (point.type === 'Crash' && !showCrashes) return false
		if (point.type === 'Construction' && !showConstructions) return false
		return true
	})

	return (
		<section className='h-full'>
			<div className='container mx-auto h-full'>
				<APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
					<div className='flex flex-col lg:flex-row'>
						<ScrollArea className=' lg:h-[600px] w-full lg:w-[350px] p-4'>
							<div className='text-accent mx-4'>
								<div className='mb-4 flex flex-col justify-center items-center'>
									<AutocompleteWrapper
										setPlace={setOrigin}
										placeholder='Enter origin'
									/>
									{waypoints.map((_, index) => (
										<div
											key={index}
											className='flex w-[240px] items-center justify-center gap-2 my-2'
										>
											<AutocompleteWrapper
												setPlace={(place) => updateWaypoint(index, place)}
												placeholder={`Waypoint ${index + 1}`}
											/>

											<CircleX
												onClick={() => removeWaypoint(index)}
												className='cursor-pointer text-red-500 hover:text-red-700'
											/>
										</div>
									))}
									<Button
										variant='outline'
										onClick={addWaypoint}
										className='mb-2 rounded-none w-[240px]'
									>
										Add Waypoint
									</Button>

									<AutocompleteWrapper
										setPlace={setDestination}
										placeholder='Enter destination'
									/>

									<Collapsible>
										<CollapsibleTrigger className='text-left text-[#FFEA00] hover:text-[#b3a400]'>
											<div className='flex justify-center items-center gap-2'>
												<span className='text-base'>
													Click here to see the points that may interest you
												</span>
												<MousePointer className='size-8' />
											</div>
										</CollapsibleTrigger>
										<CollapsibleContent className='my-2'>
											<div className='grid gap-2'>
												<CheckboxWithLabel
													label='Bicycle Stores'
													checked={showBicycleStores}
													onCheckedChange={setShowBicycleStores}
												/>
												<CheckboxWithLabel
													label='Crashes'
													checked={showCrashes}
													onCheckedChange={setShowCrashes}
												/>
												<CheckboxWithLabel
													label='Constructions'
													checked={showConstructions}
													onCheckedChange={setShowConstructions}
												/>
											</div>
										</CollapsibleContent>
									</Collapsible>
								</div>

								{leg && (
									<div>
										<Separator />
										<p className='text-white mx-auto xl:mx-0'>
											Hey welcome! Now you will travel safely from{' '}
											<span className='text-accent'>
												{selected.legs[0].start_address.split(',')[0]}
											</span>{' '}
											to{' '}
											<span className='text-accent'>
												{
													selected.legs[
														selected.legs.length - 1
													].end_address.split(',')[0]
												}
											</span>
										</p>
										<Separator />
										<p className='text-white'>
											Total{' '}
											<span className='text-accent font-bold'>distance</span>{' '}
											you will travel is{' '}
											<span className='text-accent font-bold'>
												{' '}
												{(
													selected.legs.reduce(
														(total, leg) => total + leg.distance.value,
														0
													) / 1000
												).toFixed(2)}{' '}
												km
											</span>{' '}
											and it will take{' '}
											<span className='text-accent font-bold'>
												{(
													selected.legs.reduce(
														(total, leg) => total + leg.duration.value,
														0
													) / 60
												).toFixed(2)}{' '}
												mins
											</span>{' '}
										</p>

										<Separator />

										<p className='text-white'>
											If you want to take{' '}
											<span className='text-accent font-semibold'>
												different routes
											</span>
											, you can choose from the{' '}
											<span className='text-accent font-semibold'>
												options below
											</span>{' '}
											.
										</p>
										<Separator />
										<ul>
											{routes.map((route, index) => (
												<li key={route.summary}>
													<button
														className='hover:text-white'
														onClick={() => setRouteIndex(index)}
													>
														<div className='flex text-[#FFEA00] hover:text-[#b3a400] flex-column justify-center items-center gap-2'>
															Option {index + 1} <MoveRight />
														</div>
													</button>
												</li>
											))}
										</ul>
										<Separator />
										<Collapsible>
											<CollapsibleTrigger className='text-left text-[#FFEA00] hover:text-[#b3a400]'>
												<div className='flex justify-center items-center gap-2'>
													<span className='text-base'>
														Click here to see the route instructions
													</span>
													<MousePointer className='size-6' />
												</div>
											</CollapsibleTrigger>
											<CollapsibleContent>
												{selected.legs.map((leg, legIndex) => (
													<div key={legIndex}>
														<p className='text-md text-white font-semibold'>
															Here are the instructions for the route from{' '}
															<span className='text-accent font-semibold'>
																{leg.start_address}{' '}
															</span>
															to
															<span className='text-accent font-semibold'>
																{' '}
																{leg.end_address}
															</span>
														</p>

														{leg.steps.map((step, stepIndex) => (
															<div
																key={stepIndex}
																className='flex gap-4 items-start my-2'
															>
																<ArrowRight />
																<div>
																	<div
																		className='text-sm text-white'
																		dangerouslySetInnerHTML={{
																			__html: step.instructions,
																		}}
																	/>
																	<p className='text-sm text-white/65'>
																		{step.distance.text}
																	</p>
																</div>
															</div>
														))}
													</div>
												))}
											</CollapsibleContent>
										</Collapsible>
									</div>
								)}
							</div>
						</ScrollArea>
						<div className='h-[50vh] lg:h-[80vh] w-full lg:w-3/4'>
							<Map
								defaultZoom={15}
								defaultCenter={position}
								mapId={process.env.NEXT_PUBLIC_MAPS_ID}
								fullscreenControl={false}
								options={{ draggable: true }}
							>
								<Directions
									selected={selected}
									leg={leg}
									routes={routes}
									setRoutes={setRoutes}
									routeIndex={routeIndex}
									setRouteIndex={setRouteIndex}
									origin={origin}
									destination={destination}
									waypoints={waypoints}
								/>

								<BikeLayer />

								<Markers
									points={filteredPoints}
									setOpenMarkerKey={setOpenMarkerKey}
								/>

								{openMarkerKey && (
									<InfoWindowArea
										points={points}
										openMarkerKey={openMarkerKey}
										setOpenMarkerKey={setOpenMarkerKey}
									/>
								)}
							</Map>
						</div>
					</div>
				</APIProvider>
			</div>
		</section>
	)
}

const AutocompleteWrapper = ({ setPlace, placeholder }) => {
	const map = useMap()
	const mapsLibrary = useMapsLibrary('places')

	if (!map || !mapsLibrary) return null

	return (
		<Autocomplete
			map={map}
			mapsLibrary={mapsLibrary}
			setPlace={setPlace}
			placeholder={placeholder}
		/>
	)
}

const CheckboxWithLabel = ({ label, checked, onCheckedChange }) => (
	<div className='items-top flex space-x-2 items-center'>
		<Checkbox id={label} checked={checked} onCheckedChange={onCheckedChange} />
		<div className='grid gap-1.5 leading-none'>
			<label
				htmlFor={label}
				className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
			>
				{label}
			</label>
		</div>
	</div>
)

export default MapPage
