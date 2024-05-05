import React, { useRef, useCallback, useState } from 'react';
import Webcam from 'react-webcam';
import MobilePage from './MobileVerification'; // Import the MobilePage component

const CameraComponent = ({ onClose }) => {
  const webcamRef = useRef(null);
  const [redirectToMobile, setRedirectToMobile] = useState(false);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    // Do something with the captured image source, like saving it or displaying it.
    setRedirectToMobile(true);
  }, [webcamRef]);

  if (redirectToMobile) {
    return <MobilePage onClose={onClose} />;
  }

  return (
    <div className="camera-container">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        className="webcam"
      />
      <button onClick={capture} className="capture-button">Capture</button>
      {/* <button onClick={onClose} className="close-button">Close</button> */}
    </div>
  );
};

export default CameraComponent;
