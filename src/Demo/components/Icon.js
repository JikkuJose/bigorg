import React from 'react'

export function Icon({ size, color }) {
  const _size = size || 24
  const _color = color || "#FFFFFF"

   return <svg height={`${_size}px`} width={`${_size}px`} version="1.1" viewBox="0 0 24 21">
	<defs/>
	<g id="Page-2" fill="none" stroke="none" strokeWidth="1">
		<g id="Artboard" fill={_color}>
			<path id="bike" d="M16,3.8 C17,3.8 17.8,3 17.8,2 C17.8,1 17,0.2 16,0.2 C15,0.2 14.2,1 14.2,2 C14.2,3 15,3.8 16,3.8 L16,3.8 Z M19,11 C16.2,11 14,13.2 14,16 C14,18.8 16.2,21 19,21 C21.8,21 24,18.8 24,16 C24,13.2 21.8,11 19,11 L19,11 Z M19,19.5 C17.1,19.5 15.5,17.9 15.5,16 C15.5,14.1 17.1,12.5 19,12.5 C20.9,12.5 22.5,14.1 22.5,16 C22.5,17.9 20.9,19.5 19,19.5 L19,19.5 Z M14.8,9 L19,9 L19,7.2 L15.8,7.2 L13.9,3.9 C13.6,3.4 13.1,3.1 12.4,3.1 C11.9,3.1 11.5,3.3 11.2,3.6 L7.5,7.3 C7.2,7.6 7,8 7,8.5 C7,9.1 7.3,9.7 7.8,10 L11.2,12 L11.2,17 L13,17 L13,10.5 L10.8,8.8 L13.1,6.5 L14.8,9 L14.8,9 Z M5,11 C2.2,11 0,13.2 0,16 C0,18.8 2.2,21 5,21 C7.8,21 10,18.8 10,16 C10,13.2 7.8,11 5,11 L5,11 Z M5,19.5 C3.1,19.5 1.5,17.9 1.5,16 C1.5,14.1 3.1,12.5 5,12.5 C6.9,12.5 8.5,14.1 8.5,16 C8.5,17.9 6.9,19.5 5,19.5 L5,19.5 Z"/>
		</g>
	</g>
</svg>
}