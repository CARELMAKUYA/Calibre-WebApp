import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./Navbar";
import Footer from "./Footer";
import "../designs/Interior.css";

const Interior = () => {
  const [images, setImages] = useState([]);
  const [file, setFile] = useState(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get("https://localhost:7245/Image");
      console.log(response.data);
      setImages(response.data);
    } catch (error) {
      console.error("Error Fetching Images:", error);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      await axios.post("https://localhost:7245/Image", formData);
      fetchImages();
      alert("Image Successfully Added");
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to Add");
    }
  };

  return (
    <div>
  <NavBar />
    <div className="image-uploader">
      


      <div className="image-gallery">
        {images.map((image) => (
          <div key={image.id} className="image-container">
            <img
              src={`data:image/jpeg;base64,${image.imageData}`}
              alt={image.imageName}
              className="catalog-image"
            />
          </div>
        ))}
      </div>
      <h1>"Would you like to add to our CATALOG!!"</h1>
            <input type="file" accept="image/*" onChange={handleFileChange} multiple />
      <button onClick={handleUpload}>Upload</button>
    </div><Footer/></div>
  );
};

export default Interior;


