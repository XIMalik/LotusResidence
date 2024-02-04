import React, { useState, useEffect } from "react";

const Images = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const imageUrls = [
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvbWV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9tZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D",
  ];

  const videourls = [
    "https://player.vimeo.com/external/328958120.sd.mp4?s=d3e2162f908f62de987c19e35672d7b053b756d7&profile_id=164&oauth2_token_id=57447761",
  ];

  useEffect(() => {
    setImageModalOpen(!!selectedImage);
  }, [selectedImage]);
  useEffect(() => {
    setVideoModalOpen(!!selectedVideo);
  }, [selectedVideo]);

  return (
    <div className="px-10 py-[60px]">
      <h1 className="text-[#d5934d] text-lg text-left mb-5">
        Lotus Residence Gallery
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-2">
        {imageUrls.map((url, index) => (
          <div
            key={index}
            className="rounded-md overflow-hidden cursor-pointer"
            onClick={() => setSelectedImage(url)}
          >
            <img
              src={url}
              alt={`Image ${index + 1}`}
              className="object-cover h-[100%] w-[100%]"
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {videourls.map((url, index) => (
          <div
            key={index}
            className="rounded-md overflow-hidden cursor-pointer"
            onClick={() => setSelectedVideo(url)}
          >
            <video
              src={url}
              alt={`Video ${index + 1}`}
              className="object-cover h-[100%] w-[100%]"
              autoplay
              loop
              muted
              autoPlay

            />
          </div>
        ))}
      </div>

      {imageModalOpen && (
        <div className="fixed z-50 top-0 left-0 w-full h-full flex p-4 items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm transition-opacity duration-300">
          <div className="max-w-2xl w-full rounded-md flex flex-col justify-center relative transition-opacity duration-300">
            <img
              src={selectedImage}
              alt="Selected Image"
              className="w-full h-auto rounded-2xl"
            />
            <button
              className="top-0 right-0 absolute flex p-2 rounded-md"
              onClick={() => setSelectedImage(null)}
            >
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/external-compact-zufarizal-robiyanto/32/1A1A1A/external-close-compact-ui-essential-vol2-compact-zufarizal-robiyanto.png"
                alt="external-close-compact-ui-essential-vol2-compact-zufarizal-robiyanto"
              />
            </button>
          </div>
        </div>
      )}
      {videoModalOpen && (
        <div className="fixed z-50 top-0 left-0 w-full h-full flex p-4 items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm transition-opacity duration-300">
          <div className="max-w-2xl w-full rounded-lg overflow-hidden flex flex-col justify-center relative transition-opacity duration-300">
          <video

                src={selectedVideo}
                alt="external-close-compact-ui-essential-vol2-compact-zufarizal-robiyanto"
                className="object-cover h-[100%] w-[100%]"
                muted
                loop
                autoPlay

              />
            <button
              className="top-0 right-0 absolute flex p-2 rounded-md"
              onClick={() => setSelectedVideo(null)}
            >
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/external-compact-zufarizal-robiyanto/32/1A1A1A/external-close-compact-ui-essential-vol2-compact-zufarizal-robiyanto.png"
                alt="external-close-compact-ui-essential-vol2-compact-zufarizal-robiyanto"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Images;
