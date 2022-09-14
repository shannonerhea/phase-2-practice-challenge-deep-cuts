import React from 'react'
import defaultVinyl from '../assets/vinyl_PNG111.png'

function Track({track, deleteTrack}) {
  //console.log(track)
  const {image, BPM, title, artist, id} = track

  function clickHandler(id) {
    fetch('http://localhost:8001/tracks/${id}' ,{ // does this even go here
      method: "DELETE"
    })
    deleteTrack(track.id)
  };
// do i need to add a button to the row line 17
// <button onClick={() => clickHandler(track.id)} className="delete">Delete 🗑</button>
//DELETE /tracks/:id
//Example Response:
//{}
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
