import React, { SetStateAction, useRef, useState } from "react";
import user from "@/assets/images/userImage.png";
import Image from "next/image";
import { EditProfileIcon } from "../icons/Icon";
import Button from "../buttons/Button";
import { toast } from "react-toastify";

type ProfileImgProps = {
  setSelectedFile: React.Dispatch<SetStateAction<File | null>>;
};

function ProfileImg({ setSelectedFile }: ProfileImgProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [profileImage, setProfileImage] = useState<string>("");

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setSelectedFile(file);
    if (file) {
      const imageDataUrl = URL.createObjectURL(file);
      setProfileImage(imageDataUrl);
    }
  };

  const handleEditProfileClick = () => {
    fileInputRef.current?.click();
  };

  //download image
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = profileImage === "" ? user.src : profileImage;
    link.download = "profile_image.jpg";
    link.click();
    toast.success("Image Downloaded");
  };

  return (
    <>
      <div className="relative">
        <Image
          src={profileImage === "" ? user : profileImage}
          alt="profile"
          width={120}
          height={120}
          className="rounded-full w-[7.5rem] h-[7.5rem] object-contain"
        />
        <input
          type="file"
          accept=".png, .jpg, .jpeg"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileInputChange}
        />
        <button
          className="absolute right-0 bottom-0"
          type="button"
          onClick={handleEditProfileClick}
        >
          <EditProfileIcon />
        </button>
      </div>
      <Button
        variant="success"
        size="md"
        className="px-[80px]"
        type="button"
        onClick={handleDownload}
      >
        Download
      </Button>
    </>
  );
}

export default ProfileImg;
