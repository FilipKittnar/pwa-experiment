import React, { useState } from "react";

function crop(url, x, y, width, height) {
  // we return a Promise that gets resolved with our canvas element
  return new Promise((resolve) => {
    // this image will hold our source image data
    const image = new Image();

    // we want to wait for our image to load
    image.onload = () => {
      const canvas = document.createElement("canvas");
      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");

      ctx.drawImage(
        image,
        x * scaleX,
        y * scaleY,
        width * scaleX,
        height * scaleY,
        0,
        0,
        width,
        height
      );
      resolve(canvas);
    };

    // start loading our image
    image.src = url;
  });
}

export default function SnappedPic({ imageUrl }) {
  const [croppedImage, setCroppedImage] = useState(() => imageUrl);

  const cropImage = () =>
    crop(imageUrl, 100, 200, 300, 400).then((canvas) =>
      setCroppedImage(canvas.toDataURL())
    );

  return (
    <div>
      <span>{`croppedImage=${croppedImage}`}</span>
      <br />
      <button onClick={cropImage}> Crop </button>
      <br />
      <img src={croppedImage} />
    </div>
  );
}
