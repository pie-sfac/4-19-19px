import { useEffect, useState } from "react";
import Modal from "react-modal";

interface MediaListBox {
  type: string;
  uuid: string;
  url: string;
  thumbnailUrl: string;
}

interface MediaListBoxProp {
  mediaItems: MediaListBox[];
}

interface MediaViewerProp {
  isOpen: boolean;
  onClose: () => void;
  mediaItems: MediaListBox[];
  currentIndex: number;
}

const MediaViewer = ({
  isOpen,
  onClose,
  mediaItems,
  currentIndex: initialIndex,
}: MediaViewerProp) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setEndX(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const clientX = e.touches[0].clientX;
    setStartX(clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const clientX = e.touches[0].clientX;
    if (!isDragging) return;
    setEndX(clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const clientX = e.changedTouches[0].clientX;
    const deltaX = clientX - startX;
    setIsDragging(false);
    if (deltaX > 100) {
      handlePrevSlide();
    } else if (deltaX < -100) {
      handleNextSlide();
    }
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    const deltaX = e.clientX - startX;
    setIsDragging(false);
    if (deltaX > 100) {
      handlePrevSlide();
    } else if (deltaX < -100) {
      handleNextSlide();
    }
  };

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [isOpen, initialIndex]);

  useEffect(() => {
    const videoElement = document.querySelector("video");
    if (videoElement) {
      videoElement.currentTime = 0;
    }
  }, [mediaItems[currentIndex].url]);
  const handleNextSlide = () => {
    const nextIndex = (currentIndex + 1) % mediaItems.length;
    setCurrentIndex(nextIndex);
  };

  const handlePrevSlide = () => {
    const prevIndex =
      (currentIndex - 1 + mediaItems.length) % mediaItems.length;
    setCurrentIndex(prevIndex);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      className="flex items-center justify-center h-screen"
      overlayClassName="fixed inset-0 bg-black bg-opacity-90"
      closeTimeoutMS={900}
    >
      <div
        className="flex flex-col w-[320px]"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseUp={handleMouseUp}
        onTouchEnd={handleTouchEnd}
        onMouseLeave={handleMouseLeave}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          className="mb-3 ml-auto"
          onClick={onClose}
        >
          <path
            d="M5.70711 4.29289C5.31658 3.90237 4.68342 3.90237 4.29289 4.29289C3.90237 4.68342 3.90237 5.31658 4.29289 5.70711L10.5858 12L4.29289 18.2929C3.90237 18.6834 3.90237 19.3166 4.29289 19.7071C4.68342 20.0976 5.31658 20.0976 5.70711 19.7071L12 13.4142L18.2929 19.7071C18.6834 20.0976 19.3166 20.0976 19.7071 19.7071C20.0976 19.3166 20.0976 18.6834 19.7071 18.2929L13.4142 12L19.7071 5.70711C20.0976 5.31658 20.0976 4.68342 19.7071 4.29289C19.3166 3.90237 18.6834 3.90237 18.2929 4.29289L12 10.5858L5.70711 4.29289Z"
            fill="white"
          />
        </svg>
        {mediaItems[currentIndex].type === "IMAGE" && (
          <>
            <img
              src={mediaItems[currentIndex].thumbnailUrl}
              alt="Thumbnail"
              style={{
                width: "auto",
                height: "auto",
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "cover",
              }}
            />
            <span className="text-white">{currentIndex}</span>
          </>
        )}
        {mediaItems[currentIndex].type === "VIDEO" && (
          <>
            <video controls>
              <source src={mediaItems[currentIndex].url} />
            </video>
            <span className="text-white">{currentIndex}</span>
          </>
        )}
      </div>
    </Modal>
  );
};

const MediaListBox = ({ mediaItems }: MediaListBoxProp) => {
  const [imageIsOpen, setImageIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImage = (index: number) => {
    setImageIsOpen(true);
    setCurrentIndex(index);
  };

  return (
    <>
      {mediaItems.map((item, index) => (
        <li key={item.uuid}>
          {item.type === "IMAGE" && (
            <div
              className="w-24 bg-cover rounded-md aspect-square"
              style={{ backgroundImage: `url(${item.thumbnailUrl})` }}
              onClick={() => handleImage(index)}
            />
          )}
          {item.type === "VIDEO" && (
            <div
              className="flex items-center justify-center w-24 bg-cover rounded-md aspect-square"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${item.thumbnailUrl})`,
              }}
              onClick={() => handleImage(index)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M16 2.66669C8.63996 2.66669 2.66663 8.64002 2.66663 16C2.66663 23.36 8.63996 29.3334 16 29.3334C23.36 29.3334 29.3333 23.36 29.3333 16C29.3333 8.64002 23.36 2.66669 16 2.66669ZM16 26.6667C10.12 26.6667 5.33329 21.88 5.33329 16C5.33329 10.12 10.12 5.33335 16 5.33335C21.88 5.33335 26.6666 10.12 26.6666 16C26.6666 21.88 21.88 26.6667 16 26.6667ZM12.6666 22L22 16L12.6666 10V22Z"
                  fill="#EBF1FF"
                />
              </svg>
            </div>
          )}
        </li>
      ))}
      <MediaViewer
        isOpen={imageIsOpen}
        onClose={() => setImageIsOpen(false)}
        mediaItems={mediaItems}
        currentIndex={currentIndex}
      />
    </>
  );
};

export default MediaListBox;
