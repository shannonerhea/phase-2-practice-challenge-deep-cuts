import React, {useState, useEffect} from 'react'
import Search from './Search'
import AddTrackForm from './AddTrackForm'
import TracksList from './TracksList'


function TracksPage() {
  const [tracks, setTracks] = useState([])
  console.log(tracks)

  useEffect(() => {
    fetch('http://localhost:8001/tracks')
    .then(response => response.json())
    .then(tracks => setTracks(tracks))
  },[])

    
  return (
    <div>
      <Search />
      <AddTrackForm />
      <TracksList tracks={tracks}/>
    </div>
  )
}

export default TracksPage
