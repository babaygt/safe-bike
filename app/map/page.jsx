'use client'

import React, { useState, useEffect } from 'react'
import {
	APIProvider,
	Map,
	useMap,
	useMapsLibrary,
} from '@vis.gl/react-google-maps'

import Directions from './components/Directions'
import BikeLayer from './components/BikeLayer'
import Autocomplete from './components/Autocomplete'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'

import { MoveRight, CircleX, ArrowRight } from 'lucide-react'

const MapPage = () => {
	const position = { lat: 52.49426795115615, lng: 13.446644826971113 }
	const [routes, setRoutes] = useState([])
	const [routeIndex, setRouteIndex] = useState(0)
	const [origin, setOrigin] = useState(null)
	const [destination, setDestination] = useState(null)
	const [waypoints, setWaypoints] = useState([])

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

	return (
		<section className='h-full'>
			<div className='container mx-auto h-full'>
				<APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
					<div className='flex flex-row'>
						<ScrollArea className='h-[600px] w-[350px] p-4'>
							<div className='basis-1/4 text-accent mx-4'>
								<div className='mb-4 flex flex-col justify-center item-center '>
									<AutocompleteWrapper
										setPlace={setOrigin}
										placeholder='Enter origin'
									/>
									<AutocompleteWrapper
										setPlace={setDestination}
										placeholder='Enter destination'
									/>
									{waypoints.map((_, index) => (
										<div
											key={index}
											className='flex items-center justify-center gap-2'
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
										className='mt-2'
									>
										Add Waypoint
									</Button>
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
											<span className='text-accent '>
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
												<li className='' key={route.summary}>
													<button
														className='hover:text-white '
														onClick={() => setRouteIndex(index)}
													>
														<div className='flex flex-column justify-center items-center gap-2'>
															Option {index + 1} <MoveRight />
														</div>
													</button>
												</li>
											))}
										</ul>
										<Separator />
										{selected.legs.map((leg, legIndex) => (
											<div key={legIndex}>
												<p className='text-md  text-white font-semibold'>
													Here is the instructions for the route from{' '}
													<span className='text-accent font-semibold'>
														{leg.start_address} {'  '}
													</span>
													to
													<span className='text-accent font-semibold'>
														{'  '} {leg.end_address}
													</span>
												</p>
												{leg.steps.map((step, stepIndex) => (
													<div
														key={stepIndex}
														className='flex gap-4 items-start my-2'
													>
														<ArrowRight classaName='mt-1' />
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
									</div>
								)}
							</div>
						</ScrollArea>
						<div className='basis-3/4 h-[80vh]'>
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

export default MapPage
