import React from "react";
import Camera, { FACING_MODES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import { useHistory } from "react-router-dom";

export default function MyCamera({ setPhoto }) {
  const history = useHistory();

  function handleTakePhoto(dataUri) {
    setPhoto(dataUri);
    history.push("/snappedPic");
  }

  return (
    <div>
      <Camera
        idealFacingMode={FACING_MODES.ENVIRONMENT}
        onTakePhoto={(dataUri) => {
          handleTakePhoto(dataUri);
        }}
        isImageMirror={false}
      />
    </div>
  );
}
