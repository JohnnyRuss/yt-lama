/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import { uploadFile } from "../../store/firebase";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { uploadVideo } from "../../store/reducers/thunks/videoSlice.thunks";
import { resetUploadProgress } from "../../store/reducers/videosSlice";

import { UploadContainer } from "./Nav.styles";
import { AiOutlineCloseCircle } from "react-icons/ai";

interface UploadModalType {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const UploadModal: React.FC<UploadModalType> = ({ setOpenModal }) => {
  const dispatch = useAppDispatch();

  const progress = useAppSelector(
    ({ videos }) => videos.uploadProgress.proccess
  );

  const [video, setVideo] = useState<File | null>();
  const [videoProcessPercentage, setVideoProcessPercentage] =
    useState<number>(NaN);
  const [videoUrl, setVideoUrl] = useState<string>("");
  const videoRef = useRef<HTMLInputElement | null>(null);

  const [image, setImage] = useState<File | null>();
  const [imageProcessPercentage, setImageProcessPercentage] =
    useState<number>(NaN);
  const [imageUrl, setImageUrl] = useState("");
  const imageRef = useRef<HTMLInputElement | null>(null);

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [tags, setTags] = useState<string>("");

  function fileUploader(file: File, type: "image" | "video") {
    function progresSetter(percentage: number) {
      if (type === "video") setVideoProcessPercentage(percentage);
      else if (type === "image") setImageProcessPercentage(percentage);
    }

    function urlSetter(url: string) {
      if (type === "video") setVideoUrl(url);
      else if (type === "image") setImageUrl(url);
    }

    uploadFile({ file, progresSetter, urlSetter });
  }

  useEffect(() => {
    video && fileUploader(video, "video");
  }, [video]);

  useEffect(() => {
    image && fileUploader(image, "image");
  }, [image]);

  function handleUpload(e: React.FormEvent) {
    e.preventDefault();

    if (!title || !description || !imageUrl || !videoUrl) return;

    dispatch(
      uploadVideo({
        thumbnail: imageUrl,
        videoUrl,
        title,
        description,
        tags: tags.split(",").map((t) => t.trim()),
      })
    );

    setVideo(null);
    setVideoProcessPercentage(NaN);
    setVideoUrl("");
    if (videoRef.current) videoRef.current.value = "";

    setImage(null);
    setImageProcessPercentage(NaN);
    setImageUrl("");
    if (imageRef.current) imageRef.current.value = "";

    setTitle("");

    setDescription("");

    setTags("");
  }

  useEffect(() => {
    if (progress === "success") {
      setOpenModal(false);
      dispatch(resetUploadProgress());
    }
  }, [progress]);

  return (
    <UploadContainer onClick={() => setOpenModal(false)}>
      <div
        className="modal-window__wrapper"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="close-modal--btn"
          onClick={() => setOpenModal(false)}
        >
          <AiOutlineCloseCircle />
        </button>

        <span className="modal-heading">upload new video</span>

        <form className="upload-form" onSubmit={handleUpload}>
          <div className="file-field">
            <label htmlFor="video">Video</label>
            {videoProcessPercentage > 0 && videoProcessPercentage < 100 ? (
              <span>uploaded {Math.round(videoProcessPercentage)}%</span>
            ) : videoProcessPercentage === 100 ? (
              <video
                className="uploaded-video"
                src={videoUrl}
                controls={true}
              ></video>
            ) : (
              <input
                type="file"
                name="video"
                id="video"
                accept="video/*"
                ref={videoRef}
                onChange={(
                  e: React.ChangeEvent<HTMLInputElement> & {
                    target: { files: File[] };
                  }
                ) => setVideo(e.target.files[0])}
              />
            )}
          </div>

          <input
            type="text"
            name="title"
            className="inp-field"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            name="description"
            rows={4}
            className="text-field"
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <input
            type="text"
            name="title"
            className="inp-field"
            placeholder="separate tags with commas..."
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />

          <div className="file-field">
            <label htmlFor="thumbnail">Thumbnail</label>
            {imageProcessPercentage > 0 && imageProcessPercentage < 100 ? (
              <span>uploaded {Math.round(imageProcessPercentage)}%</span>
            ) : imageProcessPercentage === 100 ? (
              <figure className="uploaded-img">
                <img src={imageUrl} alt={imageUrl} />
              </figure>
            ) : (
              <input
                type="file"
                name="thumbnail"
                id="thumbnail"
                accept="image/*"
                ref={imageRef}
                onChange={(
                  e: React.ChangeEvent<HTMLInputElement> & {
                    target: { files: File[] };
                  }
                ) => setImage(e.target.files[0])}
              />
            )}
          </div>

          <button
            className="upload-btn"
            type="submit"
            disabled={!title || !description || !imageUrl || !videoUrl}
          >
            Upload
          </button>
        </form>
      </div>
    </UploadContainer>
  );
};

export default UploadModal;
