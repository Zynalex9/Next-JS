"use client";
import { CldUploadWidget } from "next-cloudinary";
import React, { useState } from "react";

const UploadPage = () => {
  const [imageUrls, setImageUrls] = useState([]);

  return (
    <div>
      <CldUploadWidget
        uploadPreset="adcnxs05"
        onUpload={(result) => {
          const newImageUrls = [...imageUrls, result.info.secure_url];
          setImageUrls(newImageUrls);

          console.log("Upload Result:", result); // Log the upload result
        }}
        onError={(error) => {
          console.error("Upload Error:", error); // Log any errors
        }}
      >
        {({ open }) => (
          <button
            onClick={() => {
              console.log("Opening widget");
              open();
            }}
          >
            Upload an Image
          </button>
        )}
      </CldUploadWidget>

      <div>
        <h2>Uploaded Images</h2>
        {imageUrls.length > 0 ? (
          <div>
            {imageUrls.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Uploaded image ${index + 1}`}
                width={200} // Adjust width as needed
                height={200} // Adjust height as needed
                style={{ margin: '10px' }} // Optional styling
              />
            ))}
          </div>
        ) : (
          <p>No images uploaded yet.</p>
        )}
      </div>
    </div>
  );
};

export default UploadPage;
