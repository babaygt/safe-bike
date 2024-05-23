'use client'

import React, { useEffect, useState, useCallback } from 'react'
import { useMap, useMapsLibrary } from '@vis.gl/react-google-maps'
import { Input } from '@/components/ui/input'

const Autocomplete = ({ placeholder, setPlace }) => {
	const map = useMap()
	const places = useMapsLibrary('places')
	const [sessionToken, setSessionToken] = useState(null)
	const [autocompleteService, setAutocompleteService] = useState(null)
	const [placesService, setPlacesService] = useState(null)
	const [predictionResults, setPredictionResults] = useState([])
	const [inputValue, setInputValue] = useState('')

	useEffect(() => {
		if (!places || !map) return

		setAutocompleteService(new places.AutocompleteService())
		setPlacesService(new places.PlacesService(map))
		setSessionToken(new places.AutocompleteSessionToken())

		return () => setAutocompleteService(null)
	}, [map, places])

	const fetchPredictions = useCallback(
		async (inputValue) => {
			if (!autocompleteService || !inputValue) {
				setPredictionResults([])
				return
			}

			const request = { input: inputValue, sessionToken }
			autocompleteService.getPlacePredictions(
				request,
				(predictions, status) => {
					if (status === google.maps.places.PlacesServiceStatus.OK) {
						setPredictionResults(predictions)
					} else {
						setPredictionResults([])
					}
				}
			)
		},
		[autocompleteService, sessionToken]
	)

	const onInputChange = useCallback(
		(event) => {
			const value = event.target.value
			setInputValue(value)
			fetchPredictions(value)
		},
		[fetchPredictions]
	)

	const handleSuggestionClick = useCallback(
		(placeId) => {
			if (!placesService) return

			const detailRequestOptions = {
				placeId,
				fields: ['geometry', 'name', 'formatted_address'],
				sessionToken,
			}

			placesService.getDetails(detailRequestOptions, (placeDetails, status) => {
				if (status === google.maps.places.PlacesServiceStatus.OK) {
					setPlace(placeDetails)
					setPredictionResults([])
					setInputValue(placeDetails.formatted_address)
					setSessionToken(new places.AutocompleteSessionToken())
				}
			})
		},
		[placesService, sessionToken, setPlace, places.AutocompleteSessionToken]
	)

	return (
		<div className=' mb-4'>
			<Input
				value={inputValue}
				onInput={onInputChange}
				placeholder={placeholder}
			/>
			{predictionResults.length > 0 && (
				<ul className='custom-list bg-[#232329] border border-accent rounded-md mt-2'>
					{predictionResults.map(({ place_id, description }) => (
						<li
							key={place_id}
							className=' p-2 cursor-pointer  hover:bg-accent hover:text-primary border-y-accent'
							onClick={() => handleSuggestionClick(place_id)}
						>
							{description}
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default Autocomplete
