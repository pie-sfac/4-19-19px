import React, { useState } from "react";
import profileDefault from "../../../assets/images/default.jpeg";

const ProfileImage = () => {
  const [profileImage, setProfileImage] = useState<string>(profileDefault);
  const [showModal, setShowModal] = useState(false);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = () => {
    setProfileImage(profileDefault);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleUpload(e);
    handleCloseModal();
  };

  return (
    <div>
      <button onClick={handleOpenModal}>
        <img
          src={profileImage}
          alt="Profile"
          style={{ borderRadius: "2rem", width: "36px", height: "36px" }}
        />
      </button>
      <br />
      <div className="flex items-start gap-1">
        {/* <button onClick={handleDelete}>Refresh</button> */}
      </div>
      {showModal && (
        <div className="fixed top-1 left-0 w-full h-full z-[1] bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded shadow-lg">
            <input type="file" accept="image/*" onChange={handleFileSelected} />
            <button onClick={handleCloseModal}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileImage;
