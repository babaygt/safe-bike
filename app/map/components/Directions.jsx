'use client'

import React, { useEffect, useState } from 'react'
import { useMapsLibrary, useMap } from '@vis.gl/react-google-maps'

const Directions = ({
	setRoutes,
	routeIndex,
	setRouteIndex,
	origin,
	destination,
	waypoints,
}) => {
	const map = useMap()
	const routesLibrary = useMapsLibrary('routes')
	const [directionsService, setDirectionsService] = useState(null)
	const [directionsRenderer, setDirectionsRenderer] = useState(null)

	useEffect(() => {
		if (!map || !routesLibrary) return
		setDirectionsService(new routesLibrary.DirectionsService())
		setDirectionsRenderer(
			new routesLibrary.DirectionsRenderer({
				map,
				polylineOptions: {
					strokeColor: '#66BCFD',
					strokeOpacity: 0.9,
					strokeWeight: 6,
				},
			})
		)
	}, [map, routesLibrary])

	useEffect(() => {
		if (!directionsService || !directionsRenderer || !origin || !destination)
			return

		const waypointsLocations = waypoints
			.filter((waypoint) => waypoint.location)
			.map((waypoint) => ({
				location: waypoint.location.geometry.location,
				stopover: true,
			}))

		directionsService.route(
			{
				origin: origin.geometry.location,
				destination: destination.geometry.location,
				waypoints: waypointsLocations,
				travelMode: google.maps.TravelMode.BICYCLING,
				provideRouteAlternatives: true,
			},
			(result, status) => {
				if (status === google.maps.DirectionsStatus.OK) {
					directionsRenderer.setDirections(result)
					setRoutes(result.routes)
					setRouteIndex(0) // Reset to the first route
				}
			}
		)
	}, [
		directionsService,
		directionsRenderer,
		origin,
		destination,
		waypoints,
		setRoutes,
		setRouteIndex,
	])

	useEffect(() => {
		if (!directionsRenderer) return
		directionsRenderer.setRouteIndex(routeIndex)
	}, [routeIndex, directionsRenderer])

	return null
}

export default Directions
