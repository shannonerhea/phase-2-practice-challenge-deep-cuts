import React, { useState } from 'react'

function AddTrackForm({onAddTrack}) {
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    artist: "",
    bpm: "",
  })
  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value})

  };
  function handleSubmit(e) {
    e.preventDefault();
    onAddTrack(formData)
    setFormData({
      image: "",
      title: "",
      artist: "",
      bpm: "",
    })
  };
  //console.log(formData)
  // i think the DELETE function goes in here somewhere
  // https://codesandbox.io/s/cranky-surf-iykn7?file=/src/App.js
  return (
      <form onSubmit={handleSubmit}>
        <div>
          <input onChange={handleChange} value={formData.image} type="text" name="image" placeholder="Image URL"/>
          <input onChange={handleChange} value={formData.title} type="text" name="title" placeholder="title" />
          <input onChange={handleChange} value={formData.artist} type="text" name="artist" placeholder="Artist" />
          <input onChange={handleChange} value={formData.bpm} type="number" name="bpm" placeholder="BPM" step="1.00" />
        </div>
        <input className="" type="submit" value="Add Track" />
      </form>
  )
}

export default AddTrackForm
