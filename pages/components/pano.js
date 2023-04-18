import React from 'react';
// import ReactPhotoSphereViewer from 'react-photo-sphere-viewer';
function Pano() {
  const photoSphereRef = React.useRef();

  const handleClick = () => {
    photoSphereRef.current.animate({
      latitude: 0,
      longitude: 0,
      zoom: 55,
      speed: '10rpm',
    });
  }

  return (
    <>
     {/* <ReactPhotoSphereViewer ref={photoSphereRef} src="Test_Pano.jpg" height={'100vh'} width={"100%"} onClick={handleClick}></ReactPhotoSphereViewer> */}
    </>
  );
}

export default Pano;