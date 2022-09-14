import React from 'react'
import defaultVinyl from '../assets/vinyl_PNG111.png'

function Track({track, deleteTrack}) {
  //console.log(track)
  const {image, BPM, title, artist, id} = track

  function clickHandler(id) {
    fetch('http://localhost:8001/tracks/${id}' ,{
      method: "DELETE"
    })
    deleteTrack(track.id)
  };
// do i need to add a button to the row line 17
// button onClick={() => clickHandler(workout.id)} className="delete">Delete 🗑</button>
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
