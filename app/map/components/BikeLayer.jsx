'use client'

import { useEffect } from 'react'
import { useMap } from '@vis.gl/react-google-maps'

export default function BikeLayer() {
	const map = useMap()

	useEffect(() => {
		if (map) {
			// Ensure the map instance is loaded
			const bikeLayer = new google.maps.BicyclingLayer()
			bikeLayer.setMap(map)
		}
	}, [map]) // Re-run the effect if the map instance changes

	return null
}
