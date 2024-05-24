'use client'

import { AdvancedMarker } from '@vis.gl/react-google-maps'

import { Store } from 'lucide-react'
import { FaCarCrash } from 'react-icons/fa'
import { LuConstruction } from 'react-icons/lu'

const Markers = ({ points, setOpenMarkerKey }) => {
	return (
		<>
			{points.map((point) => (
				<AdvancedMarker
					position={point}
					key={point.key}
					onClick={() => setOpenMarkerKey(point.key)}
				>
					{point.type === 'Bicyclestore' && (
						<Store className='text-blue-700 size-8' />
					)}

					{point.type === 'Crash' && (
						<FaCarCrash className='text-red-700 size-8' />
					)}

					{point.type === 'Construction' && (
						<LuConstruction className='text-yellow-500 size-8' />
					)}
				</AdvancedMarker>
			))}
		</>
	)
}
export default Markers
