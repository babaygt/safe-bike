'use client'

import { InfoWindow } from '@vis.gl/react-google-maps'

const InfoWindowArea = ({ points, openMarkerKey, setOpenMarkerKey }) => {
	return (
		<>
			{points
				.filter((point) => point.key === openMarkerKey)
				.map((point) => (
					<InfoWindow
						position={point}
						key={point.key}
						onCloseClick={() => setOpenMarkerKey(null)}
					>
						<p className='text-black text-semibold mb-2'>{point?.name} </p>
						<p className='text-black text-semibold '>{point.info}</p>
					</InfoWindow>
				))}
		</>
	)
}
export default InfoWindowArea
