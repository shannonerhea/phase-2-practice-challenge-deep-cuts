import React, {useState, useEffect} from 'react'
import Search from './Search'
import AddTrackForm from './AddTrackForm'
import TracksList from './TracksList'


function TracksPage() {
  const [tracks, setTracks] = useState([])
  //console.log(tracks)
  const trackData = 'http://localhost:8001/tracks'

  useEffect(() => {
    fetch(trackData)
    .then(response => response.json())
    .then(tracks => setTracks(tracks))
  },[])

    function handleAddTrack(newTrack) {
      //console.log(newTrack)
      const {image, title, artist, bpm} = newTrack
      const newTrackBody = {
        image: image,
        title: title,
        artist: artist,
        BPM: parseInt(bpm)
      } 
      fetch(trackData,{
        method: 'POST',
        headers: {
          "Content-Type": "application/json" // what does this line rly mean
        },
        body: JSON.stringify(newTrackBody)
      })
      .then(response => response.json())
      .then(addedTrack => {
        setTracks([...tracks, addedTrack])
      })
    };
// does DELETE request go here? or in form?
  return (
    <div>
      <Search />
      <AddTrackForm onAddTrack={handleAddTrack}/>
      <TracksList tracks={tracks}/>
    </div>
  )
}

export default TracksPage
