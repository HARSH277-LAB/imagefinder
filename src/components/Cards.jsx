import React from 'react'
import { saveAs } from 'file-saver'
// functional component named Cards that takes props: data and fileName
const Cards = ({ data, fileName }) => {
  //  Extracting the regular image URL from the data prop
  const image_url = data.urls.regular   
  // Function to capitalize the first letter of a word and lowercase the rest
  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1, word.length + 1).toLowerCase()
  }
// function to download image 
  const downloadImage = () => {
    saveAs(image_url, `${fileName}.jpg`) // Put your image URL here.Using saveAs to download the image, naming it with the provided fileName and .jpg extension

  }
  return (
    // Card container with specified dimensions and shadow effect
    <div className="card" id='cards' style={{ width: "18rem", height: "30rem", overflow: "hidden" }}>
      {/* Image element displaying the regular image; height is set to 70% of the card */}
      <img src={image_url} className="card-img-top" alt="" style={{ height: "70%", objectFit: "cover" }} />
      {/* Card body using flexbox to allow proper alignment and spacing */}
      <div className="card-body d-flex flex-column">
        {/* Title of the card, displaying the alt description with the first letter capitalized */}
        <h5 className="card-title flex-grow-1">{capitalizeFirstLetter(data.alt_description)}</h5>
        {/* <p className="card-text">{data.description}</p> */}
        {/* Button to trigger the download */}
        <button className="btn btn-primary" onClick={downloadImage}> Download </button>
      </div>
    </div>
  )
}

export default Cards