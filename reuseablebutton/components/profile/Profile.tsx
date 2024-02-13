"use client";
import { useState } from "react";
import style from "@/assets/css/buttons.module.css";
import clsx from "clsx";
import Button from "../buttons/Button";
import ProfileImg from "./ProfileImg";

function Profile() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(selectedFile);
  };
  return (
    <div className={clsx(style.buttons, "container flex flex-col gap-10")}>
      <h1 className="heading mb-5">Profile image</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center gap-10">
          <ProfileImg setSelectedFile={setSelectedFile} />
          <Button
            variant="success"
            size="md"
            className="px-[80px]"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Profile;
