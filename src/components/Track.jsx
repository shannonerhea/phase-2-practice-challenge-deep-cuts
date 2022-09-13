import React from 'react'
import defaultVinyl from '../assets/vinyl_PNG111.png'

function Track({track}) {
  //console.log(track)
  const {image, BPM, title, artist} = track
  return (
    <tr className="table-row">
        <td className="row-image">
            {}
            <img src={image ? image : defaultVinyl} alt={title} />
        </td>
        <td className="row-title">{title}</td>
        <td>{artist}</td>
        <td>{BPM}</td>
    </tr>
  )
};;

export default Track
